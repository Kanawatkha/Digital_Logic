# DEPLOY

How the site is built, hosted and updated. Everything runs on GitHub: no external service, no secrets.

## 1. Target

- Host: GitHub Pages for repository `Kanawatkha/Digital_Logic` (public).
- URL: `https://kanawatkha.github.io/Digital_Logic/`
- Deployment: GitHub Actions workflow publishing the Vite `dist/` folder as the Pages artifact. The `dist/` folder is never committed.

## 2. One-time repository setup (user action)

1. GitHub, repository **Settings, Pages**.
2. **Build and deployment, Source: GitHub Actions.**
3. Confirm the default branch is `main`.

## 3. Vite and router settings

| Setting | Value | Why |
|---|---|---|
| `base` | `'/Digital_Logic/'` for production, `'/'` for dev | Pages serves under the repository name |
| Router | `HashRouter` | Deep links work without server rewrites |
| Asset URLs | always through Vite imports or `import.meta.env.BASE_URL` | No hard-coded absolute paths |
| `public/` files | referenced with `BASE_URL` | Same reason |

Keep the repository name in one place: `src/config/site.ts` and `vite.config.ts` read the same constant.

## 4. Workflows

### `ci.yml` (push and pull request)

Steps: checkout, `actions/setup-node` (Node version from `.nvmrc`, currently 24, npm cache), `npm ci`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, Playwright install and smoke run against `npm run preview`.

### `deploy.yml` (push to `main`, and manual dispatch)

Skeleton to implement in Phase 1:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Pin action versions to current stable majors at implementation time and update them periodically.

## 5. Build pipeline

`npm run build` = content generation, type check, Vite build. A failure in any step stops the deploy: bad KaTeX, bad SVG, failed round-trip, type error or lint error means nothing is published. This is the main safety net for the "edit Markdown and push" workflow.

## 6. Offline and PWA

- `vite-plugin-pwa`, `generateSW`, `registerType: 'prompt'`: the new worker waits until the student presses the update action, so a page is never reloaded in the middle of studying.
- Precache the whole build output: HTML, JS, CSS, generated content chunks, KaTeX CSS and fonts, Mitr, Inter and Cormorant Garamond font files, icons.
- Manifest: `name` "Digital Logic Notes", `short_name` "Logic Notes", `display: standalone`, `start_url` and `scope` set to the base path, `theme_color` and `background_color` = `canvas`, icons 192, 512 and maskable.
- `HashRouter` means the service worker only needs to serve `index.html` for the base path; no navigation fallback rules are needed.
- Update flow: a new deployment installs a new service worker in the background. The app shows the update toast ("มีเวอร์ชันใหม่ พร้อมใช้งาน" / "โหลดใหม่"). Pressing it activates the new worker and reloads. The offline-ready toast ("ใช้งานออฟไลน์ได้แล้ว") shows once, the first time everything is cached.
- Pages is HTTPS, which service workers require.
- Cache hygiene: Workbox cleans outdated caches automatically. Bump nothing manually.

## 7. Editing workflow after launch

1. Edit Markdown in `content/`.
2. Run `npm run dev` locally if you want to see it (optional).
3. Commit and push to `main`.
4. CI builds, tests and deploys. The site updates within a few minutes. Returning visitors get the update toast.

## 8. Fonts and licensing at deploy time

- All fonts are open licensed (SIL Open Font License): Mitr (Thai and Latin, Google Fonts), Inter and Cormorant Garamond (Latin). They are self-hosted through npm packages (`@fontsource/mitr`, `@fontsource-variable/inter`, `@fontsource/cormorant-garamond`), so no request leaves GitHub Pages and the files may live in the public repository build output.
- Only the weights and subsets actually used are imported (Thai and Latin subsets of Mitr 300/400/500; the other fonts Latin only) to keep the precache small.
- `font-display: swap` everywhere.

## 9. Rollback and troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| Blank page, 404 for JS/CSS | Wrong `base` | Check `vite.config.ts` and `site.ts` |
| Works locally, fails on Pages | Absolute asset paths | Use `BASE_URL` helpers |
| Old content after deploy | Service worker still serving the old version | Accept the update toast, or reload twice; press the update action in the toast |
| Deploy not triggered | Pages source not set to GitHub Actions | Fix in repository settings |
| Build fails in CI only | Node version or lockfile drift | Use `.nvmrc`, `npm ci`, commit the lockfile |

Rollback: revert the commit on `main` (or re-run an earlier successful workflow run). The next deployment replaces the live site.
