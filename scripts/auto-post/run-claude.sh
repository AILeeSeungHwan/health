#!/bin/bash
# scripts/auto-post/run-claude.sh
# launchd 가 슬롯별 시각(07/12/18)에 호출. Claude Code CLI 를 비대화형으로 돌려
# docs/AUTO_POST_RULES.md 규칙대로 포스트를 생성·feeds 재생성·커밋·푸시까지 자동 진행.
#
# 사용: bash scripts/auto-post/run-claude.sh <slot>
#   slot = morning | noon | evening
#
# 의존: claude CLI (/opt/homebrew/bin/claude), node, npm, git

set -u
PROJECT_DIR="/Users/lee/Desktop/Project/health/health"
SLOT="${1:-}"
CLAUDE_BIN="/opt/homebrew/bin/claude"
LOG_DIR="$PROJECT_DIR/scripts/auto-post"
LOG_FILE="$LOG_DIR/log.txt"
DATE_STR=$(date '+%Y-%m-%d %H:%M:%S')

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
export HOME="${HOME:-/Users/lee}"

if [ -z "$SLOT" ]; then
  echo "[$DATE_STR] ERROR: slot 인자 누락 (morning|noon|evening)" | tee -a "$LOG_FILE"
  exit 1
fi
case "$SLOT" in morning|noon|evening) ;; *)
  echo "[$DATE_STR] ERROR: 잘못된 slot=$SLOT" | tee -a "$LOG_FILE"
  exit 1 ;;
esac

if [ ! -x "$CLAUDE_BIN" ]; then
  echo "[$DATE_STR] ERROR: claude CLI 미발견 ($CLAUDE_BIN)" | tee -a "$LOG_FILE"
  exit 1
fi

cd "$PROJECT_DIR" || { echo "[$DATE_STR] ERROR: cd 실패" | tee -a "$LOG_FILE"; exit 2; }

echo "" | tee -a "$LOG_FILE"
echo "================ [$DATE_STR] CLAUDE auto-post (slot=$SLOT) ================" | tee -a "$LOG_FILE"

# 슬롯별 작업 요약 (Claude 가 docs/AUTO_POST_RULES.md 의 §1·§2 를 그대로 따름)
case "$SLOT" in
  morning) PLAN="건강뉴스 3개 (① 일반 고트래픽 ② 현재 트렌드 키워드 ③ 건강영역 고단가)" ;;
  noon)    PLAN="증상 2개 + 영양제 1개" ;;
  evening) PLAN="일반의약품 1개 + 건강제품 1개 + 상황별 1개" ;;
esac

PROMPT=$(cat <<EOF
당신은 건강모아(healthmoa) 사이트의 자동화 포스팅 세션입니다.

작업 디렉토리: $PROJECT_DIR
슬롯(slot): $SLOT
오늘 작업 계획: $PLAN

진실 원천(반드시 읽기, 순서대로):
1. docs/AUTO_POST_RULES.md   ← 자동화 사양 (이 파일이 최우선)
2. data/post-titles.json     ← 중복 판단 인덱스 (본문 금지, 이 파일만 봅니다)
3. docs/MEDICAL_ETHICS.md    ← 의료 윤리
4. docs/WRITE_*.md           ← 카테고리별 작성 템플릿 (해당 슬롯 필요분만)
5. CLAUDE.md                 ← 프로젝트 공통 규칙

엄수:
- 본문 파일(posts/**/*.js) 은 절대 읽지 않습니다. 중복 판단은 data/post-titles.json 만 봅니다.
- 트렌드 키워드 포스트는 키워드를 제목 맨 앞에 그대로 두고 뒤에 후킹 문구.
- "— 건강모아" suffix 는 메타 title 에 적지 않습니다 (Layout.bareTitle 이 처리).
- AI 느낌 차단 규칙(AUTO_POST_RULES.md §4) 을 모든 포스트에 적용.

산출:
- 카테고리별 data/{entity}.js 메타 append
- posts/{entity}/{slug}.js 본문 모듈 생성
- npm run feeds 실행
- git add -A && git commit (메시지 규칙: AUTO_POST_RULES.md §7)
- git push

진행 중 의문이 생기면 묻지 말고 docs/AUTO_POST_RULES.md 의 가장 보수적 해석을 따르세요.
완료 후 한 줄 요약(슬롯명·작성 개수·커밋 SHA)을 출력하고 종료합니다.
EOF
)

# Claude CLI 비대화형 실행. 권한 프롬프트는 신뢰된 자동화 환경이므로 스킵.
"$CLAUDE_BIN" \
  --print \
  --dangerously-skip-permissions \
  --add-dir "$PROJECT_DIR" \
  "$PROMPT" \
  2>&1 | tee -a "$LOG_FILE"
RC=${PIPESTATUS[0]}

echo "" | tee -a "$LOG_FILE"
echo "[$DATE_STR] slot=$SLOT 종료 RC=$RC" | tee -a "$LOG_FILE"
exit "$RC"
