#!/usr/bin/env python3
"""Day-3 prep: upsert the 34 fresh prospects into GHL (by phone), output /tmp/day3.csv (name|phone|id).
Contacts created without tags — tagging happens at send time (day3_send.py) so S1 fires the SMS then.
Usage: python3 day3_prep.py [--dry-run]
"""
import csv, json, sys, time, urllib.request, urllib.error

LOC = "3hM1yVflAe1LZ75pZJIs"
BASE = "https://services.leadconnectorhq.com"
POOL = "/home/ubuntu/winged_agents/wiki/business/prospect_scrapes/scrapling_pool_2026-08-04-clean.csv"
OUT = "/tmp/day3.csv"
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
     "Origin": "https://app.gohighlevel.com", "Referer": "https://app.gohighlevel.com/"}

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

# load pool
rows = []
with open(POOL, newline='') as f:
    for r in csv.DictReader(f):
        name = (r.get("Company Name") or "").strip()
        phone = (r.get("Phone") or "").strip()
        if name and phone:
            rows.append({"name": name, "phone": phone})
print(f"Pool to upsert: {len(rows)}")

out_rows, created, existing, failed = [], 0, 0, []
for i, r in enumerate(rows):
    body = {
        "firstName": (r["name"].split()[0] if r["name"].split() else r["name"]),
        "lastName": " ".join(r["name"].split()[1:]) if len(r["name"].split()) > 1 else "",
        "companyName": r["name"],
        "phone": r["phone"],
        "locationId": LOC,
        "source": "day3-scrapling-pool",
        "tags": [],  # deliberately no tags — S1 fires on sms-outreach at send time
    }
    if DRY:
        print(f"  [{i+1}/{len(rows)}] WOULD-UPSERT {r['name'][:40]} ({r['phone']})")
        out_rows.append({"name": r["name"], "phone": r["phone"], "id": "dry-run-id"})
        continue
    s, d = req("POST", f"{BASE}/contacts/upsert", body)
    contact = d.get("contact") if isinstance(d, dict) else None
    contact = contact if isinstance(contact, dict) else {}
    cid = contact.get("id") or contact.get("contactId")
    if s in (200, 201) and cid:
        out_rows.append({"name": r["name"], "phone": r["phone"], "id": cid})
        if contact.get("exists"):
            existing += 1
        else:
            created += 1
        print(f"  [{i+1}/{len(rows)}] {'EXISTS' if contact.get('exists') else 'CREATED'} {r['name'][:40]} -> {cid}")
    else:
        failed.append((r["name"], s, d))
        print(f"  [{i+1}/{len(rows)}] FAIL {r['name'][:40]}: {s} {str(d)[:100]}")
    time.sleep(0.25)

if not DRY and out_rows:
    with open(OUT, "w", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        for r in out_rows:
            w.writerow([r["name"], r["phone"], r["id"]])
    print(f"\nWrote {len(out_rows)} rows -> {OUT}")

print(f"\nCREATED: {created} | EXISTED: {existing} | FAILED: {len(failed)} | total in file: {len(out_rows)}")
for n, s, d in failed[:10]:
    print(f"  FAIL {n}: {s} {d}")
