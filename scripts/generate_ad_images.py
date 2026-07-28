from PIL import Image, ImageDraw, ImageFont
import os, math

os.makedirs('/home/ubuntu/sims-website/public/ads', exist_ok=True)

FONT_BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
FONT_REG = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

TEAL = (20, 184, 166)
TEAL_LIGHT = (45, 212, 191)
DARK = (10, 14, 26)
SLATE = (148, 163, 184)
WHITE = (255, 255, 255)

# ====== LOGO ======
img = Image.new('RGBA', (500, 500), DARK + (255,))
d = ImageDraw.Draw(img)
for i in range(360):
    rad = math.radians(i)
    x = 250 + 230 * math.cos(rad)
    y = 250 + 230 * math.sin(rad)
    d.ellipse([x-3, y-3, x+3, y+3], fill=TEAL)
f = ImageFont.truetype(FONT_BOLD, 200)
d.text((140, 195), 'S', fill=TEAL, font=f)
# bars
f2 = ImageFont.truetype(FONT_REG, 22)
img.save('/home/ubuntu/sims-website/public/ads/logo.png')
print('Logo done')

# ====== SQUARE ======
sq = Image.new('RGB', (1200, 1200), DARK)
d = ImageDraw.Draw(sq)
# gradient
for i in range(400):
    r = int(10 + i/400 * 12)
    g = int(14 + i/400 * 40)
    b = int(26 + i/400 * 60)
    d.rectangle([0, i, 1200, i+1], (r, g, b))
for i in range(400, 800):
    r = int(22 - (i-400)/400 * 12)
    g = int(54 - (i-400)/400 * 30)
    b = int(86 - (i-400)/400 * 56)
    d.rectangle([0, i, 1200, i+1], (r, g, b))

# Title - big and centered
f_title = ImageFont.truetype(FONT_BOLD, 56)
title = 'SIMS INVESTMENT MANAGEMENT'
tw = d.textlength(title, font=f_title)
d.text(((1200-tw)/2, 60), title, fill=WHITE, font=f_title)

# Subtitle
f_sub = ImageFont.truetype(FONT_BOLD, 36)
sub = 'SERVICES, LLC'
sw = d.textlength(sub, font=f_sub)
d.text(((1200-sw)/2, 130), sub, fill=TEAL, font=f_sub)

# Tagline
f_tag = ImageFont.truetype(FONT_REG, 28)
tag = 'Free Digital Audit for Texas Businesses'
tw2 = d.textlength(tag, font=f_tag)
d.text(((1200-tw2)/2, 190), tag, fill=SLATE, font=f_tag)

# Chart area
chart_top = 280
chart_h = 450
bar_w = 100
gap = 30
bars = [200, 380, 280, 450, 150]
labels = ['GBP', 'Reviews', 'Directories', 'Competitors', 'Social']
colors = [TEAL_LIGHT, TEAL, (13, 148, 136), TEAL_LIGHT, TEAL]
start_x = (1200 - (len(bars) * (bar_w + gap) - gap)) / 2

f_label = ImageFont.truetype(FONT_REG, 24)
for i, (h, c, l) in enumerate(zip(bars, colors, labels)):
    x = int(start_x + i * (bar_w + gap))
    d.rectangle([x, chart_top + chart_h - h, x + bar_w, chart_top + chart_h], fill=c)
    # Rounded top
    d.rectangle([x, chart_top + chart_h - h, x + bar_w, chart_top + chart_h - h + 15], fill=(min(c[0]+30, 255), min(c[1]+30, 255), min(c[2]+30, 255)))
    # Label
    lw = d.textlength(l, font=f_label)
    d.text((x + (bar_w - lw)/2, chart_top + chart_h - h - 40), str(h//10*10)+'%', fill=TEAL_LIGHT, font=f_label)
    d.text((x + (bar_w - lw)/2, chart_top + chart_h + 10), l, fill=SLATE, font=f_label)

# Avg line
avg_y = chart_top + chart_h - 350
d.line([start_x - 20, avg_y, start_x + len(bars)*(bar_w+gap) - gap + 20, avg_y], fill=(255, 255, 255, 60), width=2, joint='curve')
d.text((start_x - 20, avg_y - 35), 'Texas Avg: 35%', fill='#94a3b8', font=f_label)

# Bottom CTA
f_cta = ImageFont.truetype(FONT_BOLD, 32)
cta = 'Reputation Management & Lead Generation'
cw = d.textlength(cta, font=f_cta)
d.text(((1200-cw)/2, 840), cta, fill=TEAL, font=f_cta)

f_btm = ImageFont.truetype(FONT_REG, 26)
line2 = 'Plans from $297/mo - No Long-Term Contracts'
lw2 = d.textlength(line2, font=f_btm)
d.text(((1200-lw2)/2, 890), line2, fill=SLATE, font=f_btm)

# Bottom bar
d.rectangle([0, 1150, 1200, 1200], fill=(15, 20, 35))
d.text((80, 1160), 'simsinvestments777.com', fill=TEAL, font=f_label)
d.text((900, 1160), 'Start Your Free Audit', fill=TEAL_LIGHT, font=f_label)

sq.save('/home/ubuntu/sims-website/public/ads/image1-square.png')
print('Square done')

# ====== LANDSCAPE ======
ln = Image.new('RGB', (1200, 628), DARK)
d = ImageDraw.Draw(ln)
for i in range(250):
    r = int(10 + i/250 * 12)
    g = int(14 + i/250 * 40)
    b = int(26 + i/250 * 60)
    d.rectangle([0, i, 1200, i+1], (r, g, b))

# Title
f_title2 = ImageFont.truetype(FONT_BOLD, 48)
t = 'SIMS INVESTMENT MANAGEMENT'
tw = d.textlength(t, font=f_title2)
d.text(((1200-tw)/2, 30), t, fill=WHITE, font=f_title2)

f_sub2 = ImageFont.truetype(FONT_BOLD, 28)
s = 'SERVICES, LLC - Free Digital Audit for Texas Businesses'
sw = d.textlength(s, font=f_sub2)
d.text(((1200-sw)/2, 85), s, fill=TEAL, font=f_sub2)

# Mini chart
ch = 220
bars2 = [120, 240, 170, 280, 90]
labels2 = ['GBP', 'Reviews', 'Dir', 'Comp', 'Soc']
start_x = 80
for i, (h, c, l) in enumerate(zip(bars2, colors, labels2)):
    x = start_x + i * 120
    d.rectangle([x, 40 + ch - h, x + 80, 40 + ch], fill=c)
    lw = d.textlength(l, font=f_label)
    d.text((x + (80-lw)/2, 40 + ch + 5), l, fill=SLATE, font=f_label)

avg_y2 = 40 + ch - 170
d.line([60, avg_y2, 60 + len(bars2)*120, avg_y2], fill=(255, 255, 255, 60), width=2)
d.text((60, avg_y2-30), '35% avg', fill='#94a3b8', font=f_label)

# Right side content
f_r = ImageFont.truetype(FONT_REG, 28)
lines = [
    ('We analyze your:', TEAL),
    ('Google Business Profile', WHITE),
    ('Online Reviews & Ratings', WHITE),
    ('Directory Listings', WHITE),
    ('Competitor Comparison', WHITE),
]
for j, (txt, clr) in enumerate(lines):
    d.text((700, 30 + j*38), txt, fill=clr, font=f_r)

# Bottom CTA
f_bt = ImageFont.truetype(FONT_REG, 24)
cta_t = 'Get Your Free Audit Today  |  simsinvestments777.com/free-audit'
cw = d.textlength(cta_t, font=f_bt)
d.text(((1200-cw)/2, 500), cta_t, fill=TEAL, font=f_bt)

f_bt2 = ImageFont.truetype(FONT_BOLD, 30)
cta2 = 'Plans from $297/mo  |  No Contracts'
cw2 = d.textlength(cta2, font=f_bt2)
d.text(((1200-cw2)/2, 545), cta2, fill=TEAL_LIGHT, font=f_bt2)

# Bottom bar
d.rectangle([0, 590, 1200, 628], fill=(15, 20, 35))
d.text((80, 598), 'Reputation Management & Lead Generation', fill=SLATE, font=f_label)

ln.save('/home/ubuntu/sims-website/public/ads/image2-landscape.png')
print('Landscape done')
print('All complete!')
