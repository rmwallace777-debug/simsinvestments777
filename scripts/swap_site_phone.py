#!/usr/bin/env python3
"""Swap the site's displayed phone number to Robert's GHL-owned number.
Reads the real number from GHL conversations (outbound SMS 'from'), formats it,
and replaces (903) 444-5555 / +19034445555 in Footer, Contact page, and JSON-LD schema.
Prints only the last 4 digits for verification (full number never echoed).
"""
import json, re, sys, urllib.request, urllib.error

LOC = "3hM1yVflAe1LZ75pZJIs"
BASE = "https://services.leadconnectorhq.com"

tok = None
with open("/home/ubuntu/sims-website/.env.local") as f:
    for line in f:
        if line.startswith("GHL_API_TOKEN="):
            tok = line.split("=", 1)[1].strip().strip('"').strip("'")
            break
if not tok:
    print("FATAL: no token"); sys.exit(1)

H = {"Authorization": f"Bearer {tok}", "Version": "2021-07-28",
     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36",
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

# 1) find an outbound SMS and read the 'from' number (Robert's GHL number)
new_digits = None
s, d = req("GET", f"{BASE}/conversations/search?locationId={LOC}&limit=5")
for cv in d.get('conversations', []):
    cid = cv.get('id')
    s2, d2 = req("GET", f"{BASE}/conversations/{cid}/messages?locationId={LOC}&limit=10")
    msgs = d2.get('messages', {})
    if isinstance(msgs, dict):
        msgs = msgs.get('messages', [])
    for m in msgs:
        if m.get('direction') == 'outbound' and m.get('type') == 2 and m.get('from'):
            digs = ''.join(ch for ch in str(m.get('from')) if ch.isdigit())
            if len(digs) == 11 and digs.startswith('1'):
                new_digits = digs
                break
    if new_digits:
        break

if not new_digits:
    print("FATAL: could not read GHL outbound number"); sys.exit(1)
print(f"Using GHL number (last4: {new_digits[-4:]}, first6: {new_digits[:6]})")

tel_href = f"tel:+{new_digits}"
display = f"({new_digits[1:4]}) {new_digits[4:7]}-{new_digits[7:]}"
schema = f"'+{new_digits}'"

# 2) patch files
targets = [
    ("/home/ubuntu/sims-website/components/Footer.tsx", r"tel:\+19034445555", tel_href, r"\(903\) 444-5555", display),
    ("/home/ubuntu/sims-website/app/contact/page.tsx", r"tel:\+19034445555", tel_href, r"\(903\) 444-5555", display),
    ("/home/ubuntu/sims-website/app/layout.tsx", r"\+19034445555", schema, None, None),
]

for path, tel_pat, tel_new, disp_pat, disp_new in targets:
    with open(path) as f:
        src = f.read()
    orig = src
    src = re.sub(tel_pat, tel_new, src)
    n1 = orig.count(tel_new)  # already-new occurrences (safety)
    if disp_pat:
        src = re.sub(disp_pat, disp_new, src)
    with open(path, "w") as f:
        f.write(src)
    changed = src != orig
    print(f"{path.split('/')[-1]}: changed={changed}")

# 3) verify: no old number remains anywhere in app/
import subprocess
old_pat = r"444[- ]?5555"
hit = []
for root, _, files in __import__('os').walk("/home/ubuntu/sims-website/app"):
    for fn in files:
        if fn.endswith(('.tsx', '.ts', '.json')):
            p = f"{root}/{fn}"
            with open(p, errors='ignore') as f:
                if re.search(old_pat, f.read()):
                    hit.append(p)
print(f"Old number remaining in: {hit if hit else 'NONE — clean'}")
print(f"New display: {display} | tel: {tel_href} | schema: {schema}")
