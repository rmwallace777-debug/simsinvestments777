#!/usr/bin/env python3
"""auto-demo-kb-places.py v3 — demo KB generation via Google Places API (no Firecrawl credits).
Usage: python3 auto-demo-kb-places.py <input.csv> [output_dir]
Input rows: name | phone | id  (tab, pipe, or comma separated — auto-detected).
Output: one KB .md per business in the demos dir (same structure as v2, real Google data).
"""
import json, os, re, ssl, sys, time, urllib.request, urllib.error

KEY = None
for p in ["/home/ubuntu/winged_agents/wing_b/subwings/bw/scripts/.env",
          "/home/ubuntu/sims-website/.env.local"]:
    try:
        for line in open(p):
            if line.startswith("GOOGLE_PLACES_API_KEY="):
                KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
                break
    except FileNotFoundError:
        pass
if not KEY:
    print("FATAL: GOOGLE_PLACES_API_KEY not found"); sys.exit(1)

IN = sys.argv[1] if len(sys.argv) > 1 else "/tmp/day2.csv"
OUT = sys.argv[2] if len(sys.argv) > 2 else "/home/ubuntu/winged_agents/wiki/business/demos"
os.makedirs(OUT, exist_ok=True)

ctx = ssl.create_default_context()
URL = "https://places.googleapis.com/v1/places:searchText"
FIELDS = ("places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,"
          "places.websiteUri,places.types,places.rating,places.userRatingCount,"
          "places.editorialSummary,places.regularOpeningHours,places.businessStatus")

TYPE_LABELS = {
    "hvac_contractor": "Heating, ventilation & air conditioning (HVAC)",
    "air_conditioning_contractor": "Air conditioning",
    "heating_contractor": "Heating",
    "plumber": "Plumbing",
    "electrician": "Electrical",
    "roofing_contractor": "Roofing",
    "general_contractor": "General contracting & home services",
    "locksmith": "Locksmith",
    "water_heater_installation_service": "Water heater installation & repair",
    "appliance_repair_service": "Appliance repair",
    "window_installation_service": "Window installation",
    "flooring_contractor": "Flooring",
    "solar_energy_contractor": "Solar energy systems",
    "fire_protection_service": "Fire protection systems",
    "handyman": "Handyman services",
    "store": "Retail location",
}

def fmt_type(t):
    return TYPE_LABELS.get(t, t.replace("_", " ").title())

def norm_phone(p):
    if not p:
        return ""
    d = re.sub(r"\D", "", p)
    return d[-10:] if len(d) >= 10 else d

def run_search(query):
    body = json.dumps({"textQuery": query, "maxResultCount": 5}).encode()
    h = {"Content-Type": "application/json", "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": FIELDS}
    r = urllib.request.Request(URL, data=body, headers=h)
    with urllib.request.urlopen(r, timeout=20, context=ctx) as resp:
        return json.loads(resp.read().decode()).get("places", [])

def clean_name(name):
    return re.sub(r"\s+None\s*$", "", name).strip()  # strip join-artifact " None" suffix

_STOP = {"llc", "inc", "co", "the", "and", "of", "air", "ac", "hvac", "heating", "cooling",
         "services", "service", "systems", "system", "specialist", "refrigeration",
         "repair", "company", "conditioning", "none"}

def name_similar(csv_name, place_name):
    """True if the Google result shares at least one meaningful name token with the CSV name."""
    if not place_name:
        return False
    a = {t for t in re.findall(r"[a-z]+", clean_name(csv_name).lower()) if len(t) > 1} - _STOP
    b = {t for t in re.findall(r"[a-z]+", place_name.lower()) if len(t) > 1} - _STOP
    return bool(a & b)

def search(name, csv_phone):
    """Return (place, status). Never return a wrong business: if the CSV has a phone,
    only accept a place whose phone matches it (or a phone-query hit)."""
    want = norm_phone(csv_phone)
    query = re.sub(r"\$\d+", "", clean_name(name)).strip()[:60]
    places = run_search(f"{query} TX")
    if want:
        for p in places:
            if norm_phone(p.get("nationalPhoneNumber") or "") == want:
                return p, "PHONE-MATCH"
        # retry by phone number alone (searchText resolves phone queries)
        try:
            places2 = run_search(want)
            if places2:
                for p in places2:
                    if norm_phone(p.get("nationalPhoneNumber") or "") == want:
                        return p, "PHONE-QUERY-MATCH"
                # accept the top phone-query hit only if its name plausibly matches
                if name_similar(name, places2[0].get("displayName", {}).get("text")):
                    return places2[0], "PHONE-QUERY-FIRST"
        except Exception:
            pass
        return None, "NOT-FOUND"  # phone exists but unverifiable — never guess
    if places and name_similar(name, places[0].get("displayName", {}).get("text")):
        return places[0], "FIRST-RESULT"
    return None, "NOT-FOUND"

def parse_rows(path):
    rows = []
    for line in open(path):
        line = line.rstrip("\n")
        if not line.strip():
            continue
        if "\t" in line:
            parts = line.split("\t")
        elif "|" in line:
            parts = line.split("|")
        else:
            parts = line.split(",")
        parts = [p.strip() for p in parts]
        if len(parts) >= 2 and parts[0]:
            rows.append({"name": parts[0], "phone": parts[1] if len(parts) > 1 else "", "id": parts[2] if len(parts) > 2 else ""})
    return rows

def slugify(name):
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "contact"

def build_kb(name, phone, place):
    display = (place.get("displayName", {}).get("text") or clean_name(name)) if place else clean_name(name)
    kb_phone = (place.get("nationalPhoneNumber") or phone) if place else phone
    types = (place.get("types") or []) if place else []
    services = [fmt_type(t) for t in types if t not in ("business", "establishment", "point_of_interest", "store")]
    if not services:
        services = ["(no categories from Google — confirm with owner during demo)"]
    summary = (place.get("editorialSummary", {}).get("overview") or "") if place else ""
    rating = place.get("rating") if place else None
    reviews = place.get("userRatingCount") if place else None
    hours = (place.get("regularOpeningHours", {}).get("weekdayDescriptions") or []) if place else []
    hours_txt = ", ".join(hours) if hours else ""

    lines = [f"# {display} — AI Receptionist Demo Knowledge Base", ""]
    lines += [f"**Status:** GENERATED AUTOMATICALLY 8/5 via Google Places — refine on demo call",
              f"**Phone:** {kb_phone}",
              "**Source:** Google Places API (auto-pipeline v3)", ""]
    lines += ["## Demo Angle", "After-hours call capture for a Texas home-service business.", ""]
    lines += ["## Agent Identity", f"- **Business:** {display}", f"- **Phone:** {kb_phone}"]
    if rating:
        lines.append(f"- **Google Rating:** {rating}★ ({reviews} reviews)")
    if place and place.get("formattedAddress"):
        lines.append(f"- **Address:** {place['formattedAddress']}")
    if hours_txt:
        lines.append(f"- **Hours:** {hours_txt}")
    lines += ["", "## About (Google)", summary.strip() if summary else "(no summary available — keep answers to services and hours)", ""]
    lines += ["## Services (from Google categories — verify on call)"] + [f"- {s}" for s in services] + [""]
    lines += ["## Key Selling Points (agent reinforces)",
              "- Answers in ~2 seconds, 24/7",
              "- Books appointments + sends SMS confirmations",
              "- Transfers to owner / pages on-call for emergencies", ""]
    lines += ["## Agent Scripts", "", "### Greeting (voice)",
              f'"Thank you for calling {display}! This is the virtual receptionist. Are you calling about a repair, an installation, or maintenance today?"', "",
              "### After-hours",
              '"I\'m sorry — the team is with other customers right now, but I can take your information and book you in. May I get your name, phone number, and a quick description of the issue? If it\'s an emergency, I can page the on-call person right away."', "",
              "### Booking",
              '"Great — I can get you on the schedule. What day works best?" → create appointment → confirm via SMS → "You\'re booked for [day/time]. You\'ll get a text confirmation, and we\'ll text you when the tech is on the way!"', "",
              "### Transfer",
              '"If you\'d like to speak with the team directly, I can transfer you now."', "",
              "---", "## Deployment Notes",
              "1. GHL → AI Voice: paste KB, after-hours ON",
              "2. Test call as customer",
              "3. Send demo via SMS + close ($497 receptionist / $997 full system)", ""]
    return "\n".join(lines)

rows = parse_rows(IN)
print(f"Rows: {len(rows)}")
ok, fail = 0, []
for i, r in enumerate(rows):
    try:
        place, matched = search(r["name"], r["phone"])
        kb = build_kb(r["name"], r["phone"], place)
        disp = (place.get("displayName", {}).get("text") or clean_name(r["name"])) if place else clean_name(r["name"])
        fname = os.path.join(OUT, f"{slugify(disp)}-ai-receptionist-demo.md")
        with open(fname, "w") as f:
            f.write(kb)
        print(f"  [{i+1}/{len(rows)}] {r['name']} -> {matched}: {os.path.basename(fname)}")
        ok += 1
    except Exception as e:
        fail.append((r["name"], str(e)))
        print(f"  [{i+1}/{len(rows)}] {r['name']} -> ERROR: {e}")
    time.sleep(0.4)

print(f"DONE — {ok} KBs written to {OUT} | failed: {len(fail)}")
for n, e in fail:
    print(f"  FAIL {n}: {e}")
