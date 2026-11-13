# NOVRIELLE — Fashion & Lifestyle

NOVRIELLE is an original fashion and lifestyle storefront prototype inspired by the merchandising structure of modern fashion retailers.

## Current status

**Live on GitHub Pages:** https://faysaltalukder.github.io/NOVRIELLE/  
Publishing source: `main` branch, repository root. The Pages build/deploy workflow has completed successfully.

The repository contains the first public storefront preview:

- Responsive editorial homepage and category navigation.
- Curated local fashion photography in `assets/images/products/`.
- Product preview cards and category filters for Women, Men and Kids.
- Search, quick-view modal, browser-local wishlist and preview bag.
- Newsletter-interest preview saved only in the visitor's browser.
- Responsive mobile navigation and accessibility basics.

## Important launch limitations

This is currently a **front-end collection preview**, not an operational online shop.

- Product prices, SKU, variants, size availability and inventory have not yet been provided or approved.
- The bag and wishlist are saved in local browser storage only.
- Checkout is deliberately disabled as a real order process. No order is sent to a server.
- Customer accounts, real newsletter delivery, payments, courier booking and admin order management are not connected yet.
- Contact, shipping and return policy information is intentionally marked as coming soon rather than invented.

Before accepting public orders, connect an independent NOVRIELLE API and database, confirm catalogue and commercial image rights, and publish the approved business policies.

## Deployment

The static storefront is published directly from this GitHub repository using GitHub Pages. Commits to the configured `main` branch publish updates through GitHub Pages. No third-party frontend hosting is required.

## Run locally

This is a static site. Open `index.html` in a local web server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project files

- `index.html` — storefront structure and copy
- `styles.css` — NOVRIELLE design system and responsive styles
- `app.js` — demo catalogue, filtering, wishlist, bag and preview interactions
- `assets/images/products/` — selected local image assets
- `docs/IMPLEMENTATION_PLAN.md` — detailed project plan

## Brand and source assets

The supplied resource library was used to select local product photography. Watermarked/logo-bearing source images were excluded from this initial selection. Please confirm commercial publication rights for each image before public retail launch.
