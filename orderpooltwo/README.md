# Order Pool — Netlify deployment package

61 HTML pages, ready to drag-and-drop into Netlify.

## How to deploy

**Option A — drag-and-drop (fastest):**
1. Go to https://app.netlify.com/drop
2. Drag this entire folder onto the page
3. Done — Netlify gives you a `*.netlify.app` URL

**Option B — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --dir . --prod
```

**Option C — connect a Git repo:**
1. Push this folder to a GitHub repo
2. In Netlify, "Add new site" → "Import an existing project"
3. Build command: *(leave empty)*
4. Publish directory: `.`

## What's in this package

| Item | Purpose |
|---|---|
| `index.html` | Landing page (Netlify's default entry) |
| 60 other `.html` files | Public site, publisher portal, manufacturer portal, admin MVP |
| `Orderpool_logo.png` | Brand logo (referenced by 47 pages) |
| `3D.jpg`, `Packaging.jpg`, `Production.jpg` | Marketing photo placeholders |
| `favicon.png` | Browser tab icon |
| `styles.css` | Baseline stylesheet for the few pages without inline CSS |
| `404.html`, `500.html` | Error pages — Netlify auto-uses `404.html` |
| `netlify.toml` | Pretty URLs, caching, security headers |
| `_redirects` | Lowercase redirect for legacy capital-O admin links + `/admin` shortcut |
| `robots.txt` | Blocks admin pages from search indexing |

## Site map (where to start clicking)

| Section | Entry point |
|---|---|
| Public landing | `/` |
| Marketing pages | `/how-it-works`, `/for-publishers`, `/for-manufacturers`, `/pricing`, `/mission`, `/team` |
| Browse pooled orders | `/public-orders` |
| Auth | `/auth-signin`, `/auth-join`, `/auth-forgot`, `/auth-reset` |
| Publisher portal | `/publisher-dashboard-full` → briefs, orders, AI wizard, settings |
| Manufacturer portal | `/manufacturer-dashboard-full` → quote pool, orders |
| Admin MVP | `/admin` (redirects to `orderpool-admin-index`) |
| Prototype state index | `/index2` (Fun Index — every prototype state listed) |

## What was fixed before packaging

1. **Missing assets generated.** `Orderpool_logo.png` (referenced 47×) plus the 3 marketing photos and `styles.css` did not exist in the source folder. Logo and photos are placeholder-quality; `styles.css` covers the inline-CSS-less pages.
2. **Case-sensitivity bug fixed.** Source files were named `Orderpool-admin-*.html` (capital O) but every link uses lowercase. Linux-based Netlify would have 404'd every admin page. All admin files renamed to lowercase.
3. **Naming inconsistency fixed.** `publisher_dashboard_empty.html` (underscores) renamed to `publisher-dashboard-empty.html` to match the hyphenated href used everywhere.
4. **Pretty URLs configured.** Some pages link as `/contact`, others as `/contact.html` — both now work via `pretty_urls = true` in `netlify.toml`.
5. **Security headers + asset caching** added in `netlify.toml`.
6. **Audit:** 837 internal references checked, zero broken.

## Things to do before going live on the real domain

- Replace `Orderpool_logo.png` and the 3 placeholder photos with real brand assets
- Wire up actual auth (sign-in / join / forgot / reset are static screens only)
- Wire up Stripe for the pay & submit flow
- Add a real backend for briefs, quotes, orders
- Update `robots.txt` if you want admin pages discoverable for any reason (currently blocked)
- Add a custom domain in Netlify → Site settings → Domain management

## Notes

- `index2.html` ("Fun Index") is the prototype navigation page — useful internally, probably not for production
- `maintenance.html` exists if you ever need to flip the site to maintenance mode
- Admin pages are linked from `orderpool-admin-index.html` and from `/admin`
