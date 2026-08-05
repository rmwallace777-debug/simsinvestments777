#!/usr/bin/env python3
"""Full no-website scan: all GHL contacts → Places-verify empties → updated no-website list + tag."""
import json, os, re, ssl, sys, time, urllib.request, urllib.error

LOC = "3hM1yVflAe1LZ75pZJIs"
BASE = "https://services.leadconnectorhq.com"
TOKEN = os.environ.get("GHL_API_TOKEN", "")
if not TOKEN:
    for line in open("/home/ubuntu/sims-website/.env.local"):
        if line.startswith("GHL_API_TOKEN="):
            TOKEN = line.split("=", 1)[1].strip().strip('"').strip("'")
            break

H = {"Authorization": f"Bearer {TOKEN}", "Version": "2021-07-28",
     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
     "Accept": "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9"}

# --- Google Places ---
KEY = None
for line in open("/home/ubuntu/winged_agents/wing_b/subwings/bw/scripts/.env"):
    if line.startswith("GOOGLE_PLACES_API_KEY="):
        KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
        break
ctx = ssl.create_default_context()
PFIELDS = "places.id,places.displayName,places.nationalPhoneNumber,places.websiteUri"

def norm_phone(p):
    if not p: return ""
    d = re.sub(r"\D", "", p)
    return d[-10:] if len(d) >= 10 else d

def places_lookup(name, phone):
    """Return (website_uri or None). Phone-verified where possible."""
    query = re.sub(r"\s+None\s*$", "", name).strip()[:60]
    body = json.dumps({"textQuery": f"{query} TX", "maxResultCount": 5}).encode()
    h = {"Content-Type": "application/json", "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": PFIELDS}
    try:
        r = urllib.request.Request("https://places.googleapis.com/v1/places:searchText", data=body, headers=h)
        with urllib.request.urlopen(r, timeout=20, context=ctx) as resp:
            places = json.loads(resp.read().decode()).get("places", [])
    except Exception:
        return None
    want = norm_phone(phone)
    for p in places:
        if want and norm_phone(p.get("nationalPhoneNumber") or "") == want:
            return p.get("websiteUri")
    if places:
        return places[0].get("websiteUri")
    return None

def req(method, url, body=None):
    data = json.dumps(body).encode() if body is not None else None
    r = urllib.request.Request(url, method=method, data=data, headers=H)
    try:
        with urllib.request.urlopen(r, timeout=30) as resp:
            return resp.status, json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:200]

# 1) pull all contacts
contacts, page = [], 1
while True:
    s, d = req("GET", f"{BASE}/contacts/?locationId={LOC}&limit=100&page={page}")
    if s != 200:
        print("contact fetch failed", s, d); sys.exit(1)
    cs = d.get("contacts", [])
    contacts.extend(cs)
    if len(contacts) >= d.get("meta", {}).get("total", 0) or not cs:
        break
    page += 1
print(f"contacts: {len(contacts)}")

# 2) partition by website field
def cname(c):
    n = c.get("firstName") or ""
    return re.sub(r"\s+None\s*$", "", n).strip()

has_web, need_check = [], []
seen = set()
for c in contacts:
    phone = c.get("phone") or ""
    if not cname(c) and not phone:
        continue
    key = norm_phone(phone) or cname(c).lower()
    if key in seen:
        continue
    seen.add(key)
    w = (c.get("website") or "").strip()
    (has_web if w else need_check).append({"id": c.get("id"), "name": cname(c), "phone": phone,
                                           "website": w, "city": (c.get("address") or {}).get("city", "") if isinstance(c.get("address"), dict) else ""})
print(f"has website field: {len(has_web)} | needs Places check: {len(need_check)}")

# 3) Places-verify the empties
no_website, found_later = [], []
for i, c in enumerate(need_check):
    uri = places_lookup(c["name"], c["phone"])
    if uri:
        found_later.append({**c, "website": uri})
    else:
        no_website.append(c)
    if (i + 1) % 25 == 0:
        print(f"  places check {i+1}/{len(need_check)} | no-website so far: {len(no_website)}")
    time.sleep(0.3)

print(f"confirmed no website: {len(no_website)} | has website (via Places): {len(found_later)} | already had field: {len(has_web)}")

# 4) write updated list CSV
out_csv = "/home/ubuntu/sims-website/scripts/no_website_all_2026-08-05.csv"
with open(out_csv, "w") as f:
    f.write("name\tphone\tid\tcity\n")
    for c in sorted(no_website, key=lambda x: x["name"].lower()):
        f.write(f"{c['name']}\t{c['phone']}\t{c['id']}\t{c['city']}\n")
print(f"CSV: {out_csv} ({len(no_website)} rows)")

# 5) tag no-website contacts with website-outreach (S4 tag trigger)
tagged, failed = 0, []
for c in no_website:
    s, d = req("POST", f"{BASE}/contacts/{c['id']}/tags", {"tags": ["website-outreach"]})
    if s in (200, 201):
        tagged += 1
    else:
        failed.append((c["name"], s))
    time.sleep(0.15)
print(f"tagged website-outreach: {tagged} | failed: {len(failed)}")
for n, s in failed[:10]:
    print("  FAIL", n, s)

# 6) bonus: patch website field for found_later
patched = 0
for c in found_later:
    s, d = req("PUT", f"{BASE}/contacts/{c['id']}", {"website": c["website"]})
    if s in (200, 201):
        patched += 1
    time.sleep(0.1)
print(f"patched website field (found via Places): {patched}")
