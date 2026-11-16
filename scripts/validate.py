"""Checks designs/<slug>/ folders against SPEC.md. Usage: python3 scripts/validate.py [slug ...]
Exits non-zero if any folder fails."""
import os, re, subprocess, sys
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REQUIRED = ["name", "slug", "url", "category", "tagline", "logoBackground", "theme", "colors", "fonts", "typeScale", "preview"]
BANNED = re.compile(r"\b(delve|seamless|elevate|robust|vibrant|tapestry|leverage|cutting-edge)\b", re.I)
BAD_SVG = re.compile(r"<image|<script|foreignObject|<text|xlink:href=\"http|href=\"http", re.I)

def check(slug):
    d = os.path.join(ROOT, "designs", slug)
    errs = []
    md = os.path.join(d, "DESIGN.md")
    if not os.path.exists(md):
        return ["no DESIGN.md"]
    text = open(md).read()
    try:
        fm = yaml.safe_load(text.split("---")[1])
    except Exception as e:
        return [f"yaml: {e}"]
    errs += [f"missing {k}" for k in REQUIRED if k not in fm]
    if fm.get("slug") != slug:
        errs.append(f"slug mismatch {fm.get('slug')}")
    if len(str(fm.get("tagline", ""))) > 90:
        errs.append("tagline > 90")
    sections = re.findall(r"^## (\d+)\.", text, re.M)
    if [int(s) for s in sections][:11] != list(range(1, 12)):
        errs.append(f"sections {sections}")
    if "—" in text:
        errs.append("em dash")
    if BANNED.search(text):
        errs.append(f"banned word: {BANNED.search(text).group(0)}")
    for f in ["logo.svg", "icon.svg"]:
        p = os.path.join(d, f)
        if not os.path.exists(p):
            errs.append(f"no {f}")
            continue
        svg = open(p).read()
        if "viewBox" not in svg:
            errs.append(f"{f} no viewBox")
        if BAD_SVG.search(svg):
            errs.append(f"{f} forbidden element")
        if os.path.getsize(p) > 200_000:
            errs.append(f"{f} > 200KB")
        if subprocess.run(["xmllint", "--noout", p], capture_output=True).returncode:
            errs.append(f"{f} invalid XML")
    return errs

slugs = sys.argv[1:] or sorted(s for s in os.listdir(os.path.join(ROOT, "designs")) if not s.startswith("."))
failed = 0
for s in slugs:
    e = check(s)
    lines = len(open(os.path.join(ROOT, "designs", s, "DESIGN.md")).read().splitlines()) if os.path.exists(os.path.join(ROOT, "designs", s, "DESIGN.md")) else 0
    print(f"{'FAIL' if e else 'ok  '} {s:24} {lines:4} lines  {'; '.join(e)}")
    failed += bool(e)
sys.exit(1 if failed else 0)
