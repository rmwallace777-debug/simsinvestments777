#!/usr/bin/env python3
"""Re-fetch GHL contacts to build /tmp/day3.csv (name|phone|id) for all 34 pool prospects."""
import csv, json, re, urllib.request, time

LOC = "3hM1yVflAe1LZ75pZJIs"
BASE = "https://services.leadconnectorhq.com"
POOL = "/home/ubuntu/winged_agents/wiki/business/prospect_scrapes/scrapling_pool_2026-08-04-clean.csv"
OUT = "/tmp/day3.csv"

tok = None
for line in open("/home/ubuntu/sims-website/.env.local"):
    if line.startswith("GHL_API_TOKEN="):
        tok = line.split("=", 1)[1].strip().strip('"').strip("'")
H = {"Authorization": f"Bearer {tok}", "Version": "2021-07-28",
     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36",
     "Accept": "application/json"}

def req(url):
    r = urllib.request.Request(url, headers=H)
    with urllib.request.urlopen(r, timeout=25) as resp:
        return json.loads(resp.read().decode())

# pool phones
pool = []
with open(POOL) as f:
    for r in csv.DictReader(f):
        d = re.sub(r"\D", "", r["Phone"])
        pool.append((r["Company Name"], "+1" + d if len(d) == 10 else "+" + d))

# GHL contacts: phone -> id
ghl = {}
for page in (1, 2, 3):
    d = req(f"{BASE}/contacts/?locationId={LOC}&limit=100&page={page}")
    for c in d.get("contacts", []):
        p = re.sub(r"\D", "", c.get("phone") or "")
        if len(p) >= 10:
            ghl[p[-10:]] = c["id"]

matched, missing = [], []
for name, e164 in pool:
    key = re.sub(r"\D", "", e164)[-10:]
    if key in ghl:
        matched.append((name, e164, ghl[key]))
    else:
        missing.append(name)

with open(OUT, "w", newline="") as f:
    w = csv.writer(f, delimiter="\t")
    for name, phone, cid in matched:
        w.writerow([name, phone, cid])

print(f"Matched: {len(matched)} | Missing: {len(missing)}")
for m in missing:
    print("  MISSING:", m)
print(f"Wrote {OUT}")
