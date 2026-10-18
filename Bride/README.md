# Sankalp & Shalini — wedding invitation

React + Vite + Tailwind v4 invitation site.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
```

- All wording is in `src/data/content.js` (venues, Jaimala time, page 6 and RSVP contacts are SAMPLE values: search for SAMPLE).
- Logo: replace `public/images/logo.png` and `public/images/logo.webp` (600x600, transparent).
- Envelope colours: top of `src/components/Intro.jsx` (OLIVE*/LINER constants).
- Dev-only URL switches: `?skipIntro`, `?introAt=2500`.
