# Rapid Corp Website

Static multi-page marketing website for Rapid Corp (`rapidcorp.in`) built with HTML, CSS, and vanilla JavaScript.

## Tech Stack

- HTML5 pages in repository root
- Bootstrap + animate.css + LineIcons
- Custom styles in `assets/css/ud-styles.css`
- Behavior scripts in `assets/js/main.js`

## Project Structure

- `index.html`: primary landing page with sections (home/about/features/pricing/faq/testimonials/team/contact)
- `about.html`, `company-profile.html`, `contact.html`, `pricing.html`, `blog.html`, `blog-details.html`, `login.html`, `404.html`: inner pages
- `assets/images/`: static image assets
- `assets/css/`: compiled styles
- `assets/scss/`: SCSS source files
- `assets/js/`: frontend scripts

## Local Preview

Serve the directory with any static server from repo root, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Contact Form

Forms are configured to submit via Formspree:

- `https://formspree.io/f/xrbqrroa`

Used on home/contact and consultation flow pages.

## Maintenance Notes

- Keep image references under `assets/images/` valid.
- Prefer linking inner-page navigation to `index.html#section-id` for landing-page sections.
- `login.html` is currently a consultation lead form, not backend authentication.

## QA Checklist

1. Check missing local references:

```bash
bash -lc 'missing=0; while IFS=: read -r file path; do p=${path%\"*}; p=${p#\"}; [ -z "$p" ] && continue; case "$p" in http://*|https://*|mailto:*|tel:*|javascript:*|\#*) continue;; esac; p=${p%%#*}; [ -z "$p" ] && continue; if [ ! -e "$p" ]; then echo "$file -> $p"; missing=$((missing+1)); fi; done < <(rg -n --no-heading -o "(?:src|href)=\"([^\"]+)\"" *.html | sed -E "s#^([^:]+):[0-9]+:(src|href)=\"(.*)\"#\1:\3#"); echo "MISSING_COUNT=$missing"'
```

2. Smoke test pages:

- `/`
- `/about.html`
- `/company-profile.html`
- `/contact.html`
- `/pricing.html`
- `/blog.html`
- `/blog-details.html`
- `/login.html`
- `/404.html`

3. Verify interactions:

- Sticky header and mobile menu toggle
- Back-to-top button
- Contact/consultation form submission
