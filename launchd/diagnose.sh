#!/bin/bash
# launchd/diagnose.sh — EPERM 등 macOS TCC 권한 문제 진단
# 사용: bash launchd/diagnose.sh

PROJECT_DIR="/Users/lee/Desktop/Project/health/health"

echo "════════════════════════════════════════════════"
echo "  healthmoa 자동 포스팅 진단"
echo "════════════════════════════════════════════════"
echo ""

# 1. 디렉토리 접근
echo "[1] 프로젝트 디렉토리 접근 테스트:"
if cd "$PROJECT_DIR" 2>/dev/null; then
  echo "  ✅ cd 성공: $PROJECT_DIR"
  echo "  ✅ pwd: $(pwd)"
else
  echo "  ❌ cd 실패 — macOS TCC EPERM 가능성"
  echo ""
  echo "  해결 방안 (택일):"
  echo "  ┌─ A. Terminal/iTerm 에 Desktop 접근 권한 부여:"
  echo "  │   System Settings → Privacy & Security → Files and Folders"
  echo "  │   → Terminal (or iTerm) → ✅ Desktop Folder"
  echo "  │   또는"
  echo "  │   System Settings → Privacy & Security → Full Disk Access"
  echo "  │   → '+' Terminal 추가"
  echo "  │"
  echo "  └─ B. 프로젝트를 Desktop 외부로 이동:"
  echo "      mv $PROJECT_DIR ~/Project/health/health"
  echo "      그리고 launchd plist·auto-post.sh 의 PROJECT_DIR 경로 갱신"
  exit 2
fi
echo ""

# 2. .gitignore 쓰기 가능?
echo "[2] .gitignore 쓰기 권한:"
if [ -w .gitignore ]; then
  echo "  ✅ writable"
else
  echo "  ⚠️  not writable — 잠금 해제 시도"
  chmod u+w .gitignore 2>/dev/null
  chflags nouchg .gitignore 2>/dev/null
  xattr -c .gitignore 2>/dev/null
  if [ -w .gitignore ]; then
    echo "  ✅ 해제 성공"
  else
    echo "  ❌ 여전히 잠김 — IDE(VS Code 등) 가 잠그고 있을 가능성. IDE 종료 후 재시도."
  fi
fi
echo ""

# 3. claude CLI
echo "[3] Claude Code CLI:"
CLAUDE_BIN=$(command -v claude || true)
if [ -z "$CLAUDE_BIN" ]; then
  echo "  ❌ claude CLI not found"
  echo "     설치: https://docs.claude.com/claude-code/"
  exit 1
fi
echo "  ✅ $CLAUDE_BIN"
echo "  버전: $("$CLAUDE_BIN" --version 2>&1 | head -1)"
echo ""

# 4. claude 동작 테스트 (간단한 ping)
echo "[4] claude --print 응답 테스트 (10초 이내):"
TEST_OUT=$(echo "" | timeout 30 "$CLAUDE_BIN" --model sonnet --print "Reply with one word: pong" 2>&1)
TEST_RC=$?
if [ $TEST_RC -eq 0 ] && echo "$TEST_OUT" | grep -qi "pong"; then
  echo "  ✅ 정상 응답: $(echo "$TEST_OUT" | head -1)"
else
  echo "  ❌ 응답 실패 (exit=$TEST_RC):"
  echo "$TEST_OUT" | head -10 | sed 's/^/     /'
  echo ""
  echo "  가능 원인:"
  echo "  - claude 로그인 안 됨 → claude 1번 직접 실행해 인증 완료"
  echo "  - 모델명 미지원 → claude --model claude-sonnet-4-5 시도"
  echo "  - 네트워크 차단"
fi
echo ""

# 5. node + npm
echo "[5] node / npm:"
node --version 2>&1 | sed 's/^/  node /'
npm --version 2>&1 | sed 's/^/  npm  /'
echo ""

# 6. git 동작
echo "[6] git 상태:"
if git status --short 2>&1 | head -5; then
  echo "  ✅ git 정상"
else
  echo "  ❌ git 실패"
fi
echo ""

# 7. launchd 등록 상태
echo "[7] launchd 등록:"
for label in com.healthmoa.autopost.morning com.healthmoa.autopost.noon com.healthmoa.autopost.evening; do
  if launchctl list | grep -q "$label"; then
    echo "  ✅ $label"
  else
    echo "  ⚪ $label (미등록)"
  fi
done
echo ""

# 8. 최근 로그
LOG="$PROJECT_DIR/scripts/auto-post/log.txt"
if [ -f "$LOG" ]; then
  echo "[8] 최근 로그 (마지막 20줄):"
  tail -20 "$LOG" | sed 's/^/  /'
fi
echo ""

echo "════════════════════════════════════════════════"
echo "  진단 완료"
echo "════════════════════════════════════════════════"
