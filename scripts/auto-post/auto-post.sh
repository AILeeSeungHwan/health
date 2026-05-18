#!/bin/bash
# scripts/auto-post/auto-post.sh
# launchd 가 호출. 인자 1 = 처리할 포스트 수 (기본 3), 인자 2 = slot 레이블.
#
# ★ Plan B: 순수 로컬 큐 게시 — Claude CLI / AI 호출 0회.
#   queued-posts/*.js 에서 파일을 선택 → posts/ + data/ 에 배포 → git push.
#
# ※ bash 3.2 호환 (macOS 시스템 /bin/bash) — mapfile 사용 안 함.

set -u
PROJECT_DIR="/Users/lee/Desktop/Project/health/health"
COUNT="${1:-3}"
SLOT="${2:-}"

LOG_DIR="$PROJECT_DIR/scripts/auto-post"
QUEUE_DIR="$LOG_DIR/queued-posts"
PROCESSOR="$LOG_DIR/process-queued.js"
LOG_FILE="$LOG_DIR/log.txt"
DATE_STR=$(date '+%Y-%m-%d %H:%M:%S')

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# ── 사전 점검 ──────────────────────────────────────────────
if ! cd "$PROJECT_DIR" 2>/dev/null; then
  mkdir -p "$LOG_DIR" 2>/dev/null
  echo "[$DATE_STR] EPERM: cd $PROJECT_DIR 실패" | tee -a "$LOG_FILE"
  exit 2
fi

echo "" | tee -a "$LOG_FILE"
echo "================ [$DATE_STR] auto-post QUEUE (slot=$SLOT count=$COUNT) ================" | tee -a "$LOG_FILE"

# ── 오늘의 인사이트 추천 로그 기록 (Plan B는 AI 호출 0회 구조이므로 큐에 자동 주입은 하지 않음) ──
# 운영자가 로그에서 추천을 확인 후 수동으로 큐(post-queue.json + queued-posts/*.js)에 추가하도록 안내.
if [ -x /Users/lee/bin/insight-hint.sh ]; then
  echo "" | tee -a "$LOG_FILE"
  echo "── 오늘의 인사이트 추천 (운영자 수동 큐 추가 참고용) ──" | tee -a "$LOG_FILE"
  /Users/lee/bin/insight-hint.sh health 2>/dev/null | tee -a "$LOG_FILE" || echo "[insight-hint 로드 실패]" | tee -a "$LOG_FILE"
  echo "────────────────────────────────────────────────" | tee -a "$LOG_FILE"
  echo "" | tee -a "$LOG_FILE"
fi

# ── 큐 파일 수집 (bash 3.2 호환: find + while read) ────────
QUEUE_LIST=$(find "$QUEUE_DIR" -maxdepth 1 -name '*.js' | sort 2>/dev/null)

if [ -z "$QUEUE_LIST" ]; then
  echo "[QUEUE EMPTY] 처리할 파일 없음. 새 포스트를 큐에 추가하세요." | tee -a "$LOG_FILE"
  exit 0
fi

TOTAL=$(echo "$QUEUE_LIST" | wc -l | tr -d ' ')
echo "큐 파일 ${TOTAL}개 감지, ${COUNT}개 처리 시도" | tee -a "$LOG_FILE"

# ── 포스트 처리 루프 ───────────────────────────────────────
PROCESSED=0
SKIPPED=0

while IFS= read -r QFILE; do
  [ "$PROCESSED" -ge "$COUNT" ] && break
  [ -z "$QFILE" ] && continue

  echo "" | tee -a "$LOG_FILE"
  echo "▶ 처리: $(basename "$QFILE")" | tee -a "$LOG_FILE"

  node "$PROCESSOR" "$QFILE" 2>&1 | tee -a "$LOG_FILE"
  RC=${PIPESTATUS[0]}

  if [ "$RC" -eq 0 ]; then
    PROCESSED=$((PROCESSED + 1))
    echo "  ✅ 완료" | tee -a "$LOG_FILE"
  elif [ "$RC" -eq 2 ]; then
    SKIPPED=$((SKIPPED + 1))
    echo "  ⏭ 스킵 (이미 존재)" | tee -a "$LOG_FILE"
  else
    echo "  ❌ 에러 (RC=$RC)" | tee -a "$LOG_FILE"
  fi
done <<EOF
$QUEUE_LIST
EOF

echo "" | tee -a "$LOG_FILE"
echo "처리 결과: 완료=$PROCESSED 스킵=$SKIPPED" | tee -a "$LOG_FILE"

# ── 변경 없으면 종료 ──────────────────────────────────────
if [ "$PROCESSED" -eq 0 ]; then
  echo "[SKIP] 새로 처리된 포스트 없음 — commit/push 안 함" | tee -a "$LOG_FILE"
  exit 0
fi

# ── sitemap·feeds 재생성 ───────────────────────────────────
echo "" | tee -a "$LOG_FILE"
echo "▶ npm run feeds" | tee -a "$LOG_FILE"
npm run feeds 2>&1 | tee -a "$LOG_FILE"

# ── git add + commit + push ───────────────────────────────
COMMIT_MSG="content: auto batch — ${PROCESSED}개 (${SLOT:-queue})"

git add posts/ data/ public/sitemap*.xml public/rss.xml scripts/auto-post/queued-posts/ 2>&1 | tee -a "$LOG_FILE"
git commit -m "$COMMIT_MSG" 2>&1 | tee -a "$LOG_FILE"
GIT_RC=${PIPESTATUS[0]}

if [ "$GIT_RC" -ne 0 ]; then
  echo "[WARN] git commit 실패 (코드 $GIT_RC) — 변경 없을 수 있음" | tee -a "$LOG_FILE"
else
  git push origin main 2>&1 | tee -a "$LOG_FILE"
  echo "✅ git push 완료" | tee -a "$LOG_FILE"
fi

echo "" | tee -a "$LOG_FILE"
echo "================ done @ $(date '+%H:%M:%S') ================" | tee -a "$LOG_FILE"
exit 0
