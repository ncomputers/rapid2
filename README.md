# Rapid Corp Website

Static single-page marketing site for Rapid Corp (`rapidcorp.in`), deployed via GitHub Pages.

## Stack

- One self-contained `index.html` (HTML + CSS + vanilla JS, all inline)
- Inter via Google Fonts, icons via Font Awesome CDN — no build step, no local assets
- Contact form posts to Formspree (`https://formspree.io/f/xrbqrroa`)

## Files

- `index.html` — the homepage (everything in one file)
- `404.html` — branded not-found page
- `CNAME` — `rapidcorp.in`
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
