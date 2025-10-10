# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# AppHeroIO

AppHeroIO is a small React + Vite application that showcases mobile apps in a browsable directory UI. It demonstrates client-side routing, static data fetching from the `public/Apps.json` file, and a Tailwind CSS + DaisyUI powered design with responsive components.

Key features
- React Router for nested routes and app detail pages
- Fetches demo app data from `public/Apps.json`
- Responsive UI built with Tailwind CSS and DaisyUI

Technologies
- React (v19)
- Vite (dev server + build)
- React Router (react-router-dom)
- Tailwind CSS
- DaisyUI
- PostCSS & Autoprefixer (for Tailwind)
- Node.js / npm

Getting started

1. Install dependencies

	npm install

2. Start the dev server

	npm run dev

3. Build for production

	npm run build

4. Preview the production build

	npm run preview

Project structure (important files)
- `src/` — React source files (components, pages, routes)
- `src/main.jsx` — Application entry and router mounting
- `src/Routes/router.jsx` — Router definitions and nested routes
- `src/components/AllApps.jsx` — Loads `public/Apps.json` and renders app cards
- `src/components/Card.jsx` — App card component (shows downloads, ratings)
- `public/Apps.json` — Demo data for apps

Notes
- Tailwind requires `postcss` and `autoprefixer` to be installed and configured (`postcss.config.cjs`) for the `@tailwind` directives to work. If you see "unknown at-rule @tailwind" warnings, ensure those dependencies are present and the CSS entry (`src/index.css`) is imported from `src/main.jsx`.
- The app fetches the demo data via `fetch('/Apps.json')`, which works when served by Vite or any static web server that serves the `public` directory at the web root.

Contributing
- Feel free to open issues or make PRs. Small improvements that help the demo: better mobile layout, improved accessibility, or formatting numbers (downloads) into human-friendly units (K/M/B).

License
- MIT
