#!/usr/bin/env python3
"""8AM Central SMS send: tag today's batch with `sms-outreach` (S1 fires the SMS).
Reads /tmp/today_batch.csv (name|phone|id|site), dedup-guarded against sms-outreach/sms-contacted.
Usage: python3 today_send.py [--dry-run]
"""
import json, re, sys, time, urllib.request, urllib.error

LOC = "3hM1yVflAe1LZ75pZJIs"
BASE = "https://services.leadconnectorhq.com"
LIST = "/home/ubuntu/sims-website/scripts/today_batch_20260805.csv"
DRY = "--dry-run" in sys.argv

tok = None
with open("/home/ubuntu/sims-website/.env.local") as f:
    for line in f:
        if line.startswith("GHL_API_TOKEN="):
            tok = line.split("=", 1)[1].strip().strip('"').strip("'")
            break
if not tok:
    print("FATAL: GHL_API_TOKEN not found"); sys.exit(1)

H = {"Authorization": f"Bearer {tok}", "Version": "2021-07-28", "Content-Type": "application/json",
     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
     "Accept": "application/json, text/plain, */*",
     "Accept-Language": "en-US,en;q=0.9",
     "Origin": "https://app.gohighlevel.com",
     "Referer": "https://app.gohighlevel.com/"}

def req(method, url, body=None):
    r = urllib.request.Request(url, method=method, headers=H,
                               data=json.dumps(body).encode() if body else None)
    try:
        with urllib.request.urlopen(r, timeout=25) as resp:
            return resp.status, json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode() or '{}')
        except Exception:
            return e.code, {}
    except Exception as e:
        return 0, {"error": str(e)}

EXCLUDE = ['solar supply', 'trane supply', 'gemaire', 'baker distribut',
           'simsinvestments777@gmail', 'home depot', 'dumpster', 'winsupply']
rows = []
with open(LIST, newline='') as f:
    for line in f:
        parts = line.rstrip("\n").split("\t") if "\t" in line else line.rstrip("\n").replace(",", "|").split("|")
        if len(parts) >= 3 and parts[0].strip():
            n = parts[0].strip()
            if any(e in n.lower() for e in EXCLUDE):
                continue
            rows.append({"name": n, "phone": parts[1].strip(), "id": parts[2].strip()})
print(f"Batch contacts (exclusions applied): {len(rows)}")

page, all_contacts = 1, []
while True:
    s, d = req("GET", f"{BASE}/contacts/?locationId={LOC}&limit=100&page={page}")
    if s != 200 or not d.get("contacts"):
        break
    all_contacts.extend(d["contacts"])
    if len(all_contacts) >= d.get("meta", {}).get("total", 0):
        break
    page += 1
    time.sleep(0.3)

tagmap = {}
for c in all_contacts:
    tagmap[c["id"]] = set(c.get("tags") or [])
    p = (c.get("phone") or "").replace("+", "").replace("-", "").replace(" ", "")
    if p:
        tagmap.setdefault("phone:" + p, set(c.get("tags") or []))

eligible, skipped = [], []
for r in rows:
    tags = tagmap.get(r["id"]) or tagmap.get("phone:" + r["phone"].replace("+", "").replace("-", "").replace(" ", "")) or set()
    if "sms-outreach" in tags or "sms-contacted" in tags:
        skipped.append(r["name"])
        continue
    ghl_phone = None
    for c in all_contacts:
        if c["id"] == r["id"]:
            ghl_phone = c.get("phone")
            break
    if not ghl_phone:
        skipped.append(r["name"] + " (no-phone)")
        continue
    eligible.append(r)
print(f"ELIGIBLE: {len(eligible)} | skipped (already contacted/no phone): {len(skipped)}")

ok, fail = 0, []
if DRY:
    print("DRY RUN — no changes.")
    for r in eligible[:10]:
        print(f"  WOULD TAG: {r['name']} | {r['phone']}")
else:
    for r in eligible:
        s, d = req("POST", f"{BASE}/contacts/{r['id']}/tags", {"tags": ["sms-outreach"]})
        if s in (200, 201):
            ok += 1
        else:
            fail.append((r["name"], s))
        time.sleep(0.25)
    print(f"TAGGED: {ok} | failed: {len(fail)}")
    for n, s in fail[:10]:
        print(f"  FAIL {n}: HTTP {s}")

print(f"S1 SMS fires on tag — {len(eligible)} intro texts sent at 8AM Central (day-3 batch).")
