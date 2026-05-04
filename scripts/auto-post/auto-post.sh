#!/bin/bash
# scripts/auto-post/auto-post.sh
# launchd 가 호출. 인자 1 = 처리할 포스트 수 (기본 3), 인자 2 = slot 레이블.
#
# ★ Plan B: 순수 로컬 큐 게시 — Claude CLI / AI 호출 0회.
#   queued-posts/*.js 에서 파일을 선택 → posts/ + data/ 에 배포 → git push.

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
  echo "[$DATE_STR] ❌ EPERM: cd $PROJECT_DIR 실패" | tee -a "$LOG_FILE"
  exit 2
fi

echo "" | tee -a "$LOG_FILE"
echo "================ [$DATE_STR] auto-post QUEUE (slot=$SLOT count=$COUNT) ================" | tee -a "$LOG_FILE"

# ── 큐 파일 수집 ────────────────────────────────────────────
# 파일명 정렬: 1-{priority}-{entity}-{slug}.js 형식이면 우선순위 반영됨
# 그 외엔 알파벳 순
mapfile -t ALL_FILES < <(find "$QUEUE_DIR" -maxdepth 1 -name '*.js' | sort)

if [ "${#ALL_FILES[@]}" -eq 0 ]; then
  echo "[QUEUE EMPTY] 처리할 파일 없음. 새 포스트를 큐에 추가하세요." | tee -a "$LOG_FILE"
  exit 0
fi

echo "큐 파일 ${#ALL_FILES[@]}개 감지, ${COUNT}개 처리 시도" | tee -a "$LOG_FILE"

# ── 포스트 처리 루프 ───────────────────────────────────────
PROCESSED=0
SKIPPED=0

for QFILE in "${ALL_FILES[@]}"; do
  [ "$PROCESSED" -ge "$COUNT" ] && break

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
done

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
TODAY=$(date '+%Y-%m-%d')
COMMIT_MSG="content: auto batch — ${PROCESSED}개 (${SLOT:-queue})"

git add posts/ data/ public/sitemap*.xml public/rss.xml public/atom.xml 2>&1 | tee -a "$LOG_FILE"
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
