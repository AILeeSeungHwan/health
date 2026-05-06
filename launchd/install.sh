#!/bin/bash
# launchd/install.sh — healthmoa 자동 포스팅 launchd 설치/언인스톨
# 사용:
#   bash launchd/install.sh install       # 3개 plist 등록 + 즉시 활성화
#   bash launchd/install.sh uninstall     # 등록 해제
#   bash launchd/install.sh status        # 현재 등록 상태
#   bash launchd/install.sh test [slot]   # 즉시 1회 테스트 (slot=morning/noon/evening, count=1)
#   bash launchd/install.sh tail          # 로그 실시간 확인

set -u

PROJECT_DIR="/Users/lee/Desktop/Project/health/health"
LAUNCH_DIR="$HOME/Library/LaunchAgents"
SCRIPTS_DIR="$PROJECT_DIR/launchd"
AUTO_POST="$PROJECT_DIR/scripts/auto-post/auto-post.sh"

LABELS=(
  "com.healthmoa.autopost.morning"
  "com.healthmoa.autopost.noon"
  "com.healthmoa.autopost.evening"
)

cmd="${1:-status}"

ensure_perms() {
  chmod +x "$AUTO_POST" 2>/dev/null || true
  chmod +x "$PROJECT_DIR/scripts/auto-post/pick-topic.js" 2>/dev/null || true
  mkdir -p "$LAUNCH_DIR"
}

case "$cmd" in
  install)
    ensure_perms
    for label in "${LABELS[@]}"; do
      src="$SCRIPTS_DIR/$label.plist"
      dst="$LAUNCH_DIR/$label.plist"
      if [ ! -f "$src" ]; then
        echo "✗ missing: $src"; continue
      fi
      cp "$src" "$dst"
      launchctl unload "$dst" 2>/dev/null || true
      launchctl load -w "$dst"
      echo "✓ loaded: $label"
    done
    echo ""
    echo "다음 실행 시각:"
    for label in "${LABELS[@]}"; do
      launchctl list | grep "$label" || true
    done
    ;;

  uninstall)
    for label in "${LABELS[@]}"; do
      dst="$LAUNCH_DIR/$label.plist"
      launchctl unload "$dst" 2>/dev/null && echo "✓ unloaded: $label" || echo "  (not loaded): $label"
      rm -f "$dst"
    done
    ;;

  status)
    echo "── 등록 상태 ──"
    for label in "${LABELS[@]}"; do
      if launchctl list | grep -q "$label"; then
        echo "✅ $label"
      else
        echo "❌ $label (미등록)"
      fi
    done
    echo ""
    echo "── 큐 진행 상태 ──"
    if [ -f "$PROJECT_DIR/scripts/auto-post/.queue-state.json" ]; then
      done_count=$(grep -o '"' "$PROJECT_DIR/scripts/auto-post/.queue-state.json" | wc -l | xargs)
      echo "state file present"
      cat "$PROJECT_DIR/scripts/auto-post/.queue-state.json" | head -5
    else
      echo "(아직 실행 기록 없음)"
    fi
    ;;

  test)
    ensure_perms
    slot="${2:-morning}"
    echo "▶ 즉시 1회 테스트 (slot=$slot, count=1)"
    bash "$AUTO_POST" 1 "$slot"
    ;;

  tail)
    LOG="$PROJECT_DIR/scripts/auto-post/log.txt"
    [ -f "$LOG" ] || { echo "log not yet created: $LOG"; exit 0; }
    tail -f "$LOG"
    ;;

  *)
    echo "사용법: $0 {install|uninstall|status|test [slot]|tail}"
    exit 1
    ;;
esac
