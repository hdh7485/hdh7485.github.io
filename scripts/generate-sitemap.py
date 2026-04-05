#!/usr/bin/env python3

from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path
from xml.etree import ElementTree as ET


BASE_URL = "https://hdh7485.github.io"
ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "sitemap.xml"
EXCLUDED_PREFIXES = (".git", "docs", "shared")
EXCLUDED_PARTS = {"_next"}
EXCLUDED_NAMES = {"404.html", "_not-found.html"}
EXCLUDED_PATHS = {
    "film-camera/404/index.html",
    "film-camera/_not-found/index.html",
    "hope-hands/404/index.html",
    "hope-hands/_not-found/index.html",
}


def should_skip(path: Path) -> bool:
    rel = path.relative_to(ROOT)
    rel_str = rel.as_posix()

    if rel.parts[0] in EXCLUDED_PREFIXES:
        return True

    if any(part in EXCLUDED_PARTS for part in rel.parts):
        return True

    if rel.name in EXCLUDED_NAMES:
        return True

    if rel_str in EXCLUDED_PATHS:
        return True

    if "/404/" in rel_str or "/_not-found/" in rel_str:
        return True

    return False


def to_public_url(path: Path) -> str:
    rel = path.relative_to(ROOT).as_posix()

    if rel == "index.html":
        return f"{BASE_URL}/"

    if rel.endswith("/index.html"):
        return f"{BASE_URL}/{rel[:-11]}/"

    return f"{BASE_URL}/{rel}"


def to_lastmod(path: Path) -> str:
    return datetime.fromtimestamp(path.stat().st_mtime, tz=timezone.utc).date().isoformat()


def build_sitemap() -> ET.ElementTree:
    urlset = ET.Element(
        "urlset",
        {"xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"},
    )

    for path in sorted(ROOT.rglob("*.html")):
        if should_skip(path):
            continue

        url = ET.SubElement(urlset, "url")
        ET.SubElement(url, "loc").text = to_public_url(path)
        ET.SubElement(url, "lastmod").text = to_lastmod(path)

    return ET.ElementTree(urlset)


def indent(element: ET.Element, level: int = 0) -> None:
    whitespace = "\n" + level * "  "

    if len(element):
        if not element.text or not element.text.strip():
            element.text = whitespace + "  "

        for child in element:
            indent(child, level + 1)
            if not child.tail or not child.tail.strip():
                child.tail = whitespace + "  "

        if not element[-1].tail or not element[-1].tail.strip():
            element[-1].tail = whitespace
    elif level and (not element.tail or not element.tail.strip()):
        element.tail = whitespace


def main() -> None:
    tree = build_sitemap()
    indent(tree.getroot())
    tree.write(OUTPUT, encoding="utf-8", xml_declaration=True)


if __name__ == "__main__":
    main()
