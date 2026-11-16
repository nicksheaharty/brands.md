"""Builds designs/<slug>/icon.svg: a square app-style icon (brand colour + mark).

Marks come from the brand's logo.svg or from scripts/marks/<slug>.svg
(Simple Icons 13.21.0 for airbnb/linear/netflix/stripe, Wikimedia Commons for the Penn shield,
the Storiara repo for its mark). Run: python3 scripts/make-icons.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# slug: (background, mark source, mark size as share of the icon, recolour map)
ICONS = {
    "airbnb": ("#FF385C", "marks/airbnb.svg", 0.58, {None: "#FFFFFF"}),
    "facebook": ("#0866FF", "logo", 1.0, {}),
    "instagram": (None, "logo", 1.1, {}),
    "letterboxd": ("#14181C", "letterboxd-dots", 0.74, {}),
    "linear": ("#5E6AD2", "marks/linear.svg", 0.52, {None: "#FFFFFF"}),
    "netflix": ("#000000", "marks/netflix.svg", 0.56, {None: "#E50914"}),
    "notion": ("#FFFFFF", "logo", 0.66, {}),
    "spotify": ("#000000", "logo", 0.66, {}),
    "storiara": ("#000000", "marks/storiara.svg", 0.72, {}),
    "stripe": ("#635BFF", "marks/stripe.svg", 0.5, {None: "#FFFFFF"}),
    "upenn": ("#FFFFFF", "marks/upenn.svg", 0.66, {"#004684": "#011F5B", "#A90533": "#990000"}),
    "x": ("#000000", "logo", 0.5, {}),
}


def parts(svg: str):
    vb = re.search(r'viewBox="([^"]+)"', svg).group(1)
    inner = re.sub(r"^.*?<svg[^>]*>", "", svg, flags=re.S)
    inner = re.sub(r"</svg>\s*$", "", inner.strip(), flags=re.S)
    inner = re.sub(r"<title>.*?</title>", "", inner, flags=re.S)
    return vb, inner


def letterboxd_dots():
    svg = (ROOT / "designs/letterboxd/logo.svg").read_text()
    g = re.search(r'(<g\s+id="Dots".*?</g>)', svg, flags=re.S).group(1)
    g = re.sub(r'transform="[^"]*"', "", g, count=1)
    return "0 0 97.24 36", g


S = 100
for slug, (bg, src, scale, recolour) in ICONS.items():
    if src == "logo":
        vb, inner = parts((ROOT / f"designs/{slug}/logo.svg").read_text())
    elif src == "letterboxd-dots":
        vb, inner = letterboxd_dots()
    else:
        vb, inner = parts((ROOT / "scripts" / src).read_text())
    for old, new in recolour.items():
        if old is None:
            inner = f'<g fill="{new}">{inner}</g>'
        else:
            inner = inner.replace(old, new).replace(old.lower(), new)
    size = S * scale
    off = (S - size) / 2
    rect = f'<rect width="{S}" height="{S}" fill="{bg}"/>' if bg else ""
    out = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {S} {S}">{rect}'
        f'<svg x="{off:.2f}" y="{off:.2f}" width="{size:.2f}" height="{size:.2f}" viewBox="{vb}" preserveAspectRatio="xMidYMid meet">'
        f"{inner}</svg></svg>\n"
    )
    (ROOT / f"designs/{slug}/icon.svg").write_text(out)
    print("wrote", slug)
