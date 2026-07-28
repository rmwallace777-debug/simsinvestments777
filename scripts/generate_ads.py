#!/usr/bin/env python3
"""Generate clean Google Ads images for Sims Investment Management."""
from PIL import Image, ImageDraw, ImageFont
import os, math

DIR = '/home/ubuntu/sims-website/public/ads'
os.makedirs(DIR, exist_ok=True)

FONT_BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
FONT_REG  = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
TEAL = (20, 184, 166)
TEAL_LT = (45, 212, 191)
TEAL_DK = (13, 148, 136)
SLATE = (148, 163, 184)
WHITE = (255, 255, 255)
NAVY  = (10, 14, 26)

# ===========================
# LOGO
# ===========================
img = Image.new('RGBA', (500, 500), NAVY + (255,))
d = ImageDraw.Draw(img)
# Outer ring
for i in range(360):
    r = math.radians(i)
    x, y = 250 + 235*math.cos(r), 250 + 235*math.sin(r)
    d.ellipse([x-3, y-3, x+3, y+3], fill=TEAL)
# Inner ring
for i in range(360):
    r = math.radians(i)
    x, y = 250 + 200*math.cos(r), 250 + 200*math.sin(r)
    d.ellipse([x-1, y-1, x+1, y+1], fill=TEAL_LT)
# S letter
f = ImageFont.truetype(FONT_BOLD, 220)
d.text((145, 190), 'S', fill=TEAL, font=f)
# Bottom text
f2 = ImageFont.truetype(FONT_BOLD, 22)
d.text((135, 350), 'INVESTMENT', fill=TEAL_LT, font=f2)
d.text((175, 380), 'MGMT', fill=SLATE, font=f2)
img.save(f'{DIR}/logo.png')
print('Logo done')

# ===========================
# SQUARE AD
# ===========================
sq = Image.new('RGB', (1200, 1200), NAVY)
d = ImageDraw.Draw(sq)
# Gradient
for i in range(400):
    r = int(10 + i/400*10); g = int(14 + i/400*40); b = int(26 + i/400*60)
    d.rectangle([0, i, 1200, i+1], (r, g, b))

# Big headline
f_h1 = ImageFont.truetype(FONT_BOLD, 64)
d.text((80, 50),  'SIMS INVESTMENT',  fill=WHITE, font=f_h1)
d.text((80, 120), 'MANAGEMENT',      fill=WHITE, font=f_h1)
# Tagline
f_h2 = ImageFont.truetype(FONT_REG, 32)
d.text((80, 200), 'Free Digital Audit for Texas Businesses', fill=TEAL, font=f_h2)

# Chart - 5 bars with lots of space
chart_x, chart_y = 80, 300
bar_w, gap, max_h = 120, 40, 350
bars = [0.4, 0.68, 0.5, 0.82, 0.3]
labels = ['GBP',  'Reviews', 'Directories', 'Competitors', 'Social']
pcts  = ['40%',   '68%',     '50%',        '82%',         '30%']
colors = [TEAL_LT, TEAL, TEAL_DK, TEAL_LT, TEAL]
for i in range(5):
    x = chart_x + i*(bar_w + gap)
    h = int(bars[i] * max_h)
    c = colors[i]
    # Bar
    d.rectangle([x, chart_y + max_h - h, x+bar_w, chart_y + max_h], fill=c)
    # Rounded top
    d.rectangle([x, chart_y + max_h - h, x+bar_w, chart_y + max_h - h + 12], fill=(min(c[0]+40,255), min(c[1]+40,255), min(c[2]+40,255)))
    # Percentage label above bar
    f_lbl = ImageFont.truetype(FONT_BOLD, 28)
    d.text((x+20, chart_y + max_h - h - 40), pcts[i], fill=c, font=f_lbl)
    # Label below bar
    f_sm = ImageFont.truetype(FONT_REG, 24)
    d.text((x+10, chart_y + max_h + 10), labels[i], fill=SLATE, font=f_sm)

# Average line
avg_y = chart_y + max_h - int(0.35 * max_h)
d.line([chart_x-20, avg_y, chart_x+5*(bar_w+gap)-gap+20, avg_y], fill=SLATE+(60,), width=2)
f_avg = ImageFont.truetype(FONT_REG, 22)
d.text((chart_x-20, avg_y-35), 'Texas Avg: 35%', fill=SLATE, font=f_avg)

# Bottom section
f_cta = ImageFont.truetype(FONT_BOLD, 38)
d.text((80, 780), 'Reputation Management',     fill=WHITE, font=f_cta)
d.text((80, 830), '& Lead Generation',          fill=WHITE, font=f_cta)

f_bot = ImageFont.truetype(FONT_REG, 30)
d.text((80, 900),  'Plans from $297/mo',        fill=TEAL, font=f_bot)
d.text((80, 945),  'No Long-Term Contracts',    fill=TEAL_LT, font=f_bot)

# Footer bar
d.rectangle([0, 1140, 1200, 1200], fill=(15, 22, 40))
f_foot = ImageFont.truetype(FONT_REG, 24)
d.text((80, 1160), 'Start your free audit at simsinvestments777.com/free-audit', fill=TEAL, font=f_foot)

sq.save(f'{DIR}/image1-square.png')
print('Square done')

# ===========================
# LANDSCAPE AD
# ===========================
ln = Image.new('RGB', (1200, 628), NAVY)
d = ImageDraw.Draw(ln)
for i in range(300):
    r = int(10 + i/300*10); g = int(14 + i/300*40); b = int(26 + i/300*60)
    d.rectangle([0, i, 1200, i+1], (r, g, b))

# Title row
f_big = ImageFont.truetype(FONT_BOLD, 52)
d.text((50, 35),  'GET YOUR FREE',           fill=WHITE, font=f_big)
d.text((50, 95),  'DIGITAL AUDIT',           fill=TEAL, font=f_big)

f_sub = ImageFont.truetype(FONT_REG, 28)
d.text((50, 165), 'See Your Online Reputation Score', fill=SLATE, font=f_sub)

# Mini chart (right side)
cx, cy = 500, 80
bw, bg = 90, 25
bars2 = [0.45, 0.75, 0.55, 0.85, 0.35]
lbls2 = ['GBP', 'Rev', 'Dir', 'Comp', 'Soc']
for i in range(5):
    x = cx + i*(bw+bg)
    h = int(bars2[i] * 250)
    c = colors[i]
    d.rectangle([x, cy+250-h, x+bw, cy+250], fill=c)
    d.rectangle([x, cy+250-h, x+bw, cy+250-h+8], fill=(min(c[0]+40,255), min(c[1]+40,255), min(c[2]+40,255)))
    f_vl = ImageFont.truetype(FONT_BOLD, 22)
    d.text((x+10, cy+250-h-30), pcts[i], fill=c, font=f_vl)
    f_lb = ImageFont.truetype(FONT_REG, 20)
    d.text((x+15, cy+250+8), lbls2[i], fill=SLATE, font=f_lb)

avg_y2 = cy + 250 - int(0.35*250)
d.line([cx-20, avg_y2, cx+5*(bw+bg)-bg+20, avg_y2], fill=SLATE+(60,), width=2)
f_av = ImageFont.truetype(FONT_REG, 20)
d.text((cx-20, avg_y2-28), '35% avg', fill=SLATE, font=f_av)

# Bottom row
f_bn = ImageFont.truetype(FONT_BOLD, 34)
d.text((50, 400), 'SIMS INVESTMENT MANAGEMENT',      fill=WHITE, font=f_bn)
f_bs = ImageFont.truetype(FONT_REG, 24)
d.text((50, 445),  'Reputation Management & Lead Generation', fill=SLATE, font=f_bs)
f_bt = ImageFont.truetype(FONT_REG, 26)
d.text((50, 490),  'Plans from $297/mo  ·  No Contracts',   fill=TEAL, font=f_bt)
d.text((50, 530),  'Start: simsinvestments777.com/free-audit', fill=TEAL_LT, font=f_bt)

# Footer
d.rectangle([0, 590, 1200, 628], fill=(15, 22, 40))
f_fn = ImageFont.truetype(FONT_REG, 20)
d.text((50, 598), 'SIMS INVESTMENT MANAGEMENT SERVICES, LLC  |  Texas Service Businesses', fill=SLATE, font=f_fn)

ln.save(f'{DIR}/image2-landscape.png')
print('Landscape done')
print('All done!')
