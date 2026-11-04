#!/usr/bin/env python3
"""
Generate or update sitemap.xml with the current ISO date.
Run manually or integrate into CI/CD.
"""
from datetime import datetime, timezone
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
SITEMAP_PATH = BASE_DIR / "sitemap.xml"
DOMAIN = "https://rapidcorp.in"
TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

SITEMAP_TEMPLATE = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>{DOMAIN}/</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
"""

def main():
    SITEMAP_PATH.write_text(SITEMAP_TEMPLATE, encoding="utf-8")
    print(f"Updated sitemap.xml with date {TODAY} for {DOMAIN}")

if __name__ == "__main__":
    main()
