#!/bin/bash
# auto-demo-kb.sh — generate AI receptionist demo KBs for day-2 SMS batch (DemoDrop-style)
# Input: /tmp/day2.csv (name|phone|id) — output: KB md per business in wiki/business/demos/
# Rate-limit safe: sequential with 20s sleeps (firecrawl 429s after ~4 quick calls)

OUT=/home/ubuntu/winged_agents/wiki/business/demos
mkdir -p "$OUT"

while IFS='|' read -r name phone id; do
  [ -z "$name" ] && continue
  slug=$(echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//;s/-$//')
  [ -z "$slug" ] && slug="contact-${id}"
  file="$OUT/${slug}-ai-receptionist-demo.md"

  if [ -f "$file" ]; then
    echo "SKIP (exists): $name"
    continue
  fi

  echo "=== $name ($phone) ==="
  firecrawl search "$name HVAC services" --scrape --limit 1 -o "/tmp/kb-${slug}.json" --json >/dev/null 2>&1

  services=$(jq -r '.data.web[0].content // empty' "/tmp/kb-${slug}.json" 2>/dev/null | head -c 4000 | grep -oiE 'heating|air conditioning|hvac|plumbing|electrical|roofing|furnace|ac repair|installation|maintenance|duct|refrigeration|boiler|heat pump|repair|service' | tr '[:upper:]' '[:lower:]' | sort -u | sed 's/^/- /' | head -12)

  {
    echo "# ${name^} — AI Receptionist Demo Knowledge Base"
    echo
    echo "**Status:** GENERATED AUTOMATICALLY 8/3 — refine on demo call"
    echo "**Phone:** $phone"
    echo "**Source:** firecrawl search+scrape (auto-pipeline, batch 2)"
    echo
    echo "## Demo Angle"
    echo "After-hours call capture for a Texas home-service business."
    echo
    echo "## Agent Identity"
    echo "- **Business:** ${name^}"
    echo "- **Phone:** $phone"
    echo
    echo "## Services (auto-extracted — verify on call)"
    if [ -n "$services" ]; then
      echo "$services"
    else
      echo "- (no services extracted — confirm with owner during demo)"
    fi
    echo
    echo "## Key Selling Points (agent reinforces)"
    echo "- Answers in ~2 seconds, 24/7"
    echo "- Books appointments + sends SMS confirmations"
    echo "- Transfers to owner / pages on-call for emergencies"
    echo
    echo "## Agent Scripts"
    echo
    echo "### Greeting (voice)"
    echo "\"Thank you for calling ${name^}! This is the virtual receptionist. Are you calling about a repair, an installation, or maintenance today?\""
    echo
    echo "### After-hours"
    echo "\"I'm sorry — the team is with other customers right now, but I can take your information and book you in. May I get your name, phone number, and a quick description of the issue? If it's an emergency, I can page the on-call person right away.\""
    echo
    echo "### Booking"
    echo "\"Great — I can get you on the schedule. What day works best?\" → create appointment → confirm via SMS → \"You're booked for [day/time]. You'll get a text confirmation, and we'll text you when the tech is on the way!\""
    echo
    echo "### Transfer"
    echo "\"If you'd like to speak with the team directly, I can transfer you now.\""
    echo
    echo "---"
    echo "## Deployment Notes"
    echo "1. GHL → AI Voice: paste KB, after-hours ON"
    echo "2. Test call as customer"
    echo "3. Send demo via SMS + close (\$497 receptionist / \$997 full system)"
  } > "$file"

  echo "WROTE: $file ($(wc -c < "$file") bytes)"
  rm -f "/tmp/kb-${slug}.json"
  sleep 20
done < /tmp/day2.csv

echo "DONE — KBs generated in $OUT"
