# Perfection — Front (React + Vite)

React implementation of the **Perfection** marketing-agency website.
Design source of truth: the static multi-page mockup in [`../ui/`](../ui/)
(`index / about / services / process / contact` + `styles.css`) — the React
app reproduces that markup and stylesheet 1:1.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production → dist/
npm run preview  # serve dist/
```

## Routes (HashRouter)

| Path | Page |
|---|---|
| `/` | Home — hero, Who We Are, 8 services, process, clients, CTA |
| `/about` | Who We Are — agency profile, Vision & Mission, Brand Voice |
| `/services` | What We Do — service index, marquee, editorial rows |
| `/process` | How We Work — the four steps as editorial rows |
| `/contact` | Contact form + follow/explore cards |

## Design system

Defined once in `src/styles.css` (copied from `ui/styles.css`):

- 45° gradients — violet→navy heroes, cyan process band (blue→cyan)
- Glass cards, hairline frames with crop marks (`.glass`, `.frame`, `.cm`)
- Clash Display headings + Satoshi body via Fontshare
- CSS-only logo marquee + scroll-driven reveals (no JS animation libs)
- Colors: Navy `#070B16`, Violet `#7C3AED`, Cyan `#22D3EE`

## Structure

```
src/
  components/   Header, Footer, Hero, PageHero, IndexCard, Rail, SvcRow, …
  pages/        Home, About, Services, Process, Contact
  data/         content.js — all copy, verbatim from "Website Content.pdf"
  lib/          navigation.js — HashRouter links, anchors, titles
  styles.css    the whole design system (from ui/styles.css)
```

Content edits go in `src/data/content.js`; visual edits in `src/styles.css`
(and mirror them in `ui/styles.css` to keep the mockup in sync).
