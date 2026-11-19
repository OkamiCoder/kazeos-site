# KazeOS — Official Website

Official landing page for **KazeOS**, a minimalist Linux distribution
built on top of Arch Linux. The site is a standalone Vue 3 single-page
application — it is not part of the operating system source code.

- **Distribution repository:** https://github.com/OkamiCoder/KazeOS
- **Author:** [OkamiCoder](https://github.com/OkamiCoder)

## Live Site

After the first deploy, the site is available at:

```
https://okamicoder.github.io/kazeos-site/
```

If the repository name or the deployment target changes, update `base`
in `vite.config.js` and `og:url` in `index.html` accordingly.

## Tech Stack

| Layer            | Tool                                              |
| ---------------- | ------------------------------------------------- |
| Framework        | [Vue 3](https://vuejs.org/) (Composition API)     |
| Build tool       | [Vite](https://vitejs.dev/)                       |
| Styling          | [Tailwind CSS](https://tailwindcss.com/)          |
| Fonts            | Inter (UI), Fira Code (monospace accents)         |
| Deployment       | GitHub Pages via GitHub Actions                   |

No additional animation libraries — reveal effects use the native
`IntersectionObserver` through a small custom directive (`v-reveal`).

## Design Notes

- **Minimalism, air, strict grid.** Content lives in a single
  `max-w-6xl` container with generous vertical rhythm.
- **Pixel aesthetic as accent, not as the whole style.** Sharp borders,
  no border radius, hard offset shadows (`4px 4px 0 0`), dashed
  dividers, monospace labels in `UPPERCASE` with wide tracking.
- **Palette:** black, white, and a blue accent for links, buttons,
  hover and active states. All tokens are declared once in `src/style.css`
  under `:root` and exposed to Tailwind via `tailwind.config.js`.
- **Motion:** `fade-in` + `slide-up` on section reveal, 400 ms,
  cubic-bezier easing. Hover transitions are 150–250 ms.
  `prefers-reduced-motion` is fully respected.
- **Accessibility:** skip-link, visible `:focus-visible` outlines,
  semantic landmarks, `aria-label` on icon-only buttons, `aria-live`
  for the screenshot slider, keyboard navigation (← / →), Escape closes
  the mobile menu and returns focus to the toggle.

## Project Structure

```
kazeos-site/
├── .github/
│   └── workflows/
│       └── deploy.yaml              # GitHub Pages deployment
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── avatar.jpg           # author avatar
│   ├── components/
│   │   ├── Navbar.vue               # sticky header, mobile menu
│   │   ├── HeroSection.vue          # title, avatar banner, CTAs
│   │   ├── DescriptionSection.vue   # distribution overview + principles
│   │   ├── ScreenshotSlider.vue     # screenshot carousel
│   │   ├── TechStackSection.vue     # six technology cards
│   │   ├── DownloadSection.vue      # ISO / checksum / GPG placeholders
│   │   ├── GuideSection.vue         # four installation steps
│   │   ├── NewsSection.vue          # news placeholder
│   │   ├── Footer.vue               # license, links
│   │   ├── PixelButton.vue          # primary / secondary button
│   │   ├── PixelCard.vue            # surface card with hard shadow
│   │   └── PixelDivider.vue         # dashed horizontal divider
│   ├── directives/
│   │   └── reveal.js                # v-reveal IntersectionObserver
│   ├── App.vue                      # layout and section order
│   ├── main.js                      # app entry, directive registration
│   └── style.css                    # design tokens, base styles, utilities
├── .gitignore
├── index.html                       # meta, Open Graph, fonts
├── LICENSE                          # GPL-3.0
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js                   # base path for GitHub Pages
```

## Getting Started

### Requirements

- Node.js **20** or newer (matches the CI environment)
- npm 10 or newer

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

Vite serves the app at `http://localhost:5173/` with hot module replacement.
Note that `vite.config.js` sets `base: '/kazeos-site/'`, so in dev the
app may be served from `http://localhost:5173/kazeos-site/` — both
URLs resolve to the same page.

### Production build

```bash
npm run build
```

The output goes to `dist/`. Everything is static — no server required.

### Preview the production build

```bash
npm run preview
```

## Deployment

Deployment is fully automated via `.github/workflows/deploy.yaml`:

1. Push to `main` (or trigger the workflow manually from the Actions tab).
2. GitHub Actions installs dependencies with `npm ci`, builds the site,
   and publishes `dist/` to GitHub Pages.
3. The live URL is shown in the workflow summary.

**One-time repository setup** — before the first deploy:

- Go to **Settings → Pages**.
- Set **Source** to **GitHub Actions** (not "Deploy from a branch").

The workflow requires Node 20 (already configured) and uses OpenID
Connect (`id-token: write`) for authenticated deployment to Pages.
Concurrent runs are cancelled (`cancel-in-progress: true`).

### If the repository name changes

Update both files to match the new name:

- `vite.config.js` → `base: '/<new-repo-name>/'`
- `index.html`  → `<meta property="og:url" content="...">`

### Custom domain

- Set the domain in **Settings → Pages → Custom domain**.
- Change `base` in `vite.config.js` to `'/'` (or remove the line).
- Update `og:url` in `index.html`.

## Design Tokens

All color values live in `src/style.css` under `:root`, and are mapped
to Tailwind utilities in `tailwind.config.js`. To re-theme the site,
change values in one place.

| Token                  | Purpose                          |
| ---------------------- | -------------------------------- |
| `--color-background`   | Page background                  |
| `--color-surface`      | Cards, panels, elevated blocks   |
| `--color-border`       | Borders, dividers, hard shadows  |
| `--color-text`         | Primary text                     |
| `--color-text-muted`   | Secondary text, labels           |
| `--color-accent`       | Links, primary buttons, hover    |
| `--color-accent-hover` | Accent on hover / focus          |
| `--color-accent-glow`  | Hard accent shadow, focus ring   |

Tailwind equivalents: `bg-background`, `bg-surface`, `border-line`,
`text-text`, `text-muted`, `text-accent`, `bg-accent`,
`shadow-hard`, `shadow-hard-accent`.

### Fonts

Loaded from Google Fonts with `display=swap`:

- **Inter** — 400 / 500 / 600 — UI text
- **Fira Code** — 400 / 500 / 600 — monospace accents

Self-hosting is recommended for production if privacy or performance
becomes a concern; swap the `<link>` tags in `index.html` for local
`@font-face` declarations and move the font files into
`src/assets/fonts/`.

## Accessibility

The site targets WCAG 2.1 AA:

- Skip-link ("Skip to content") for keyboard and screen-reader users.
- Visible `:focus-visible` ring on every interactive element.
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`.
- Alt text on all non-decorative images; `aria-hidden` on decorative SVGs.
- Mobile menu closes on `Escape`, returns focus to the toggle.
- Screenshot carousel is keyboard navigable (← / →) and announces slide
  changes via `aria-live="polite"`.
- `prefers-reduced-motion: reduce` disables all reveal and hover
  animations and reveals sections immediately.

If you add new sections or controls, keep the following in mind:
contrast ratio ≥ 4.5:1 for body text, `aria-label` on icon-only
buttons, `type="button"` on all non-submit buttons.

## Content Placeholders

Several blocks are intentionally marked as upcoming, since the
distribution has not published a public release yet:

- **Screenshots** — the carousel shows a styled placeholder until real
  images are added. Drop them into `src/assets/images/screenshots/` and
  import them in `ScreenshotSlider.vue`.
- **Downloads** — ISO, checksums, and GPG signature are marked as
  "coming soon" with `aria-disabled="true"`. The release page on GitHub
  is linked as the only active target.
- **News** — an empty-state card with a link to the repository.

Replace these as soon as real artifacts become available.

## Roadmap

- [ ] Real screenshots and a screenshot gallery
- [ ] First public ISO with SHA256 and GPG signature
- [ ] News feed populated with release notes
- [ ] Extended installation guide
- [ ] Custom pixel logo (currently a placeholder square)
- [ ] OG image (1200 × 630) for social sharing
- [ ] Favicon (`public/favicon.ico`)

## License

This website source code is licensed under the **GNU General Public
License v3.0** — see the [`LICENSE`](./LICENSE) file for the full text.

The KazeOS distribution itself is distributed under the same license.
