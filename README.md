# Flowboard

Bilingual Kanban task app for managing tasks with filters and local persistence.

**Demo project by Mohamed — for portfolio demonstration, not a client commission.** Arabic / English switch with RTL support and saved preference.

## Run locally

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Deploy on Cloudflare Pages

Connect this repository to Cloudflare Pages. Use `npm run build` as the build command and `dist` as the output directory. The `public/_redirects` file ensures SPA routes work on refresh. Node.js 22 is recommended.

Set `VITE_PORTFOLIO_URL` to the actual URL of the portfolio (optional) to make the "Case study" link open the right portfolio page.

## Important

- This is an independent React/Vite demo; no paid server or API is required.
- All sample stats, products, transactions, and tasks are illustrative.
- Store checkout is a simulation and does not process payments.
- Tasks and cart data are saved only in the user's browser.
