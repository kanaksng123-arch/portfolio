# Kanak Singh — Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. Clean, fast, and fully static — no frameworks, no build tools, no dependencies.

🔗 **Live:** [kanaksingh.vercel.app](https://kanaksingh.vercel.app)

---

## What's inside

```
portfolio/
├── index.html              # Single-page layout
├── css/
│   ├── base.css            # CSS variables, resets, typography
│   ├── layout.css          # Section layouts, grid, spacing
│   ├── components.css      # Cards, buttons, nav, tags
│   └── animations.css      # Reveal transitions, cursor, hover effects
├── js/
│   ├── main.js             # Entry point — boots all modules
│   ├── cursor.js           # Custom cursor dot + animated follower ring
│   ├── nav.js              # Frosted-glass nav, hamburger drawer, scroll spy
│   ├── reveal.js           # Scroll-triggered fade-in (IntersectionObserver)
│   └── typewriter.js       # Cycling typewriter effect in hero
└── assets/
    └── Kanak_Singh__Resume.pdf
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| — | Hero | Name, typewriter role, bio, CTA buttons |
| 01 | About | Who I am, what I'm doing right now, quick stats |
| 02 | Projects | Journal App & Text Analyzer with live demo + GitHub links |
| 03 | Skills | Backend, Frontend, Tools, and working style |
| 04 | Contact | Email and GitHub links |

---

## Projects featured

### Journal App
Production-grade REST API backend with JWT authentication, Google OAuth2, real-time weather integration, weekly sentiment analysis, Redis caching, and Kafka messaging. Deployed on Railway.

**Stack:** Spring Boot · MongoDB · Redis · Kafka · JWT · OAuth2 · Swagger

- [Live Demo](https://journalapp-production-caa3.up.railway.app/journal/swagger-ui/index.html)
- [GitHub](https://github.com/kanaksng123-arch/journalApp)

### Text Analyzer
Full-stack sentiment analysis app that processes any text and returns positive/negative/neutral sentiment with word count, character count, and sentence statistics.

**Stack:** Spring Boot · MongoDB · REST API · Actuator · HTML/CSS/JS

- [Live Demo](https://textanalyzer-production.up.railway.app/api/)
- [GitHub](https://github.com/kanaksng123-arch/TextAnalyzer)

---

## Features

- **Custom cursor** — dot + animated follower ring; grows on hover over interactive elements; hidden on touch devices
- **Scroll reveal** — elements fade in as they enter the viewport via `IntersectionObserver`; respects `prefers-reduced-motion`
- **Typewriter effect** — hero cycles through phrases with configurable typing/deleting speeds
- **Scroll spy** — nav links highlight based on the active section
- **Mobile drawer** — hamburger menu with Escape key support and body scroll lock
- **Frosted-glass nav** — becomes opaque on scroll
- **Accessible markup** — semantic HTML5, ARIA labels, `aria-hidden` on decorative elements
- **Resume download** — PDF linked directly from nav

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 |
| Styles | CSS3 (custom properties, Flexbox, Grid) |
| Scripts | Vanilla JavaScript ES6+ modules |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | Vercel |

No framework. No bundler. No npm. Open `index.html` and it works.

---

## Running locally

```bash
git clone https://github.com/kanaksng123-arch/portfolio.git
cd portfolio
# Open index.html in a browser, or use a local server:
npx serve .
# or
python3 -m http.server 8000
```

> A local server is recommended to avoid CORS issues with ES modules.

---

## Deploying

**Vercel (current)**
1. Push to `main`
2. Go to [vercel.com](https://vercel.com) → Import your GitHub repo
3. Framework: **Other** · Build command: empty · Output dir: empty
4. Click **Deploy** — live in ~2 seconds

**Any static host** (Netlify, Cloudflare Pages) — just point to the repo root, no build command needed.

---

## Contact

- **Email:** kanaksi2210@gmail.com
- **GitHub:** [kanaksng123-arch](https://github.com/kanaksng123-arch)

---


