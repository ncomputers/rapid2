# Rapid Corp Website

Static single-page marketing site for Rapid Corp (`rapidcorp.in`), deployed via GitHub Pages.

## Stack

- One self-contained `index.html` (HTML + CSS + vanilla JS, all inline)
- Inter via Google Fonts, icons via Font Awesome CDN — no build step, no local assets
- Contact form posts to Formspree (`https://formspree.io/f/xrbqrroa`)

## Files

- `index.html` — the homepage (everything in one file, enriched with Schema.org & SEO metadata)
- `404.html` — branded not-found page (`noindex, nofollow`)
- `sitemap.xml` — standard XML sitemap for search engines
- `robots.txt` — crawler directives & sitemap location
- `og-image.png` — Open Graph preview image (1200x630) for social cards
- `CNAME` — `rapidcorp.in`
- `.htaccess`, `nginx.conf.example`, `vercel.json`, `netlify.toml` — server configuration templates for caching & security headers
- `scripts/generate-sitemap.py` — helper script to update sitemap `<lastmod>`
- `LICENCE`, `.gitignore`, `.github/`

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Editing

All content, styles and scripts live inside `index.html`. To change copy, edit the section directly. To change colors, edit the CSS variables in the `:root { ... }` block at the top of the `<style>`.

## Deploy

Push to `main`. GitHub Pages serves the repo root through Cloudflare to `rapidcorp.in`.
