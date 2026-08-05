#!/bin/bash
# auto-demo-kb.sh v3 — demo KB generation via Google Places API (no Firecrawl credits needed).
# v3: delegates to auto-demo-kb-places.py — phone-verified matching, real Google data
#     (services, rating, hours, address, editorial summary), clean fallback if unverifiable.
# Usage: auto-demo-kb.sh [input.csv] [output_dir]
#   input.csv rows: name | phone | id  (tab, pipe, or comma separated — auto-detected)
#   output_dir default: /home/ubuntu/winged_agents/wiki/business/demos
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec python3 "$SCRIPT_DIR/auto-demo-kb-places.py" "$@"
