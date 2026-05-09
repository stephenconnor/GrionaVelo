# VeloIreland – Cycling Route Guide

An Angular 19 + PrimeNG app for showcasing cycling routes, deployable on GitHub Pages.

## Features

- **Dynamic JSON content** — all route data loaded from `public/routes.json`
- **PrimeNG Tabs** — Long Routes / Short Routes tabs (easily extendable)
- **PrimeNG Cards** — hero image, 3-stat icon row (distance, ascent, max altitude), description, expandable detail panel
- Responsive grid layout, Playfair Display + Lato typography, forest-green palette

## Project Structure

```
src/
├── app/
│   ├── components/route-card/   # Route card component
│   ├── models/route.model.ts    # TypeScript interfaces
│   ├── services/routes.service.ts
│   ├── app.component.ts
│   └── app.config.ts
├── styles.scss
└── index.html
public/
└── routes.json   ← Edit this to add/change routes
```

## Adding Routes

Edit `public/routes.json`. Add objects to a category's `routes` array:

```json
{
  "id": "unique-id",
  "title": "Route Name",
  "image": "https://image-url.jpg",
  "distance": 150,
  "ascent": 2500,
  "maxAltitude": 600,
  "description": "Short description shown on the card.",
  "detailedDescription": "Longer text in the expanded panel.",
  "extraImage": "https://second-image-url.jpg"
}
```

To **add a new tab**, add another object to the `categories` array — no code changes needed.

## Local Development

```bash
npm install
npm start
# http://localhost:4200
```

## Deploy to GitHub Pages

### Deploy command

```bash
npm run deploy
```

This builds the app and pushes to the `gh-pages` branch automatically.

### GitHub settings

After first deploy go to: **Settings → Pages → Branch: gh-pages → Save**

Your site: `https://<username>.github.io/<repo-name>/`

### GitHub Actions (auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npm run build:gh-pages
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/cycling-routes/browser
```
