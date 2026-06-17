# Aflaha Fathinah Fatahillah - Portfolio

Personal portfolio website. React + Vite + Tailwind CSS + React Router.
Editorial style (black / warm off-white / red accent), data-driven content, and
dedicated case-study pages for each project.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data/         Content (single source of truth)
    site.js       Identity, links, nav, PDF path
    skills.js     Skills & tools
    journey.js    "Journey Into Tech" timeline
    projects.js   All 5 projects (cards + detail pages + prev/next)
    experience.js Work, organizations, certifications
  sections/     Homepage sections (Hero, About, Skills, Journey, Projects,
                Experience, Certifications, Contact)
  components/   Reusable UI (Nav, Reveal, Eyebrow, ProjectCard, ...)
  pages/        Home, ProjectDetail
  hooks/        useReveal (scroll-reveal)
  lib/          scrollToSection helper
public/
  assets/       Images (headshot, project covers, gallery, certs)
  Aflaha-Fathinah-Fatahillah-Portfolio.pdf
```

## Editing content

All copy and project data live in `src/data/*`. Add or edit a project in
`src/data/projects.js`; both its homepage card and its `/projects/:slug`
case-study page update automatically.

## Before publishing

- Contact links (GitHub, email, WhatsApp) live in `src/data/site.js` (`LINKS`).
  LinkedIn is intentionally omitted for now.
- Swap any image by dropping a file in `public/assets` and updating the path in
  the relevant data file.

## Routing

Uses `HashRouter`, so project routes (e.g. `/#/projects/veritrace`) work on any
static host with no server config. `vite.config.js` sets `base: './'` so the
build can be served from a subpath.
