# Mohammed Thouffic — Developer Portfolio

A minimal, performant developer portfolio built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for fast builds
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **@fontsource** for self-hosted Inter & JetBrains Mono

## Getting Started

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Typecheck + production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

## Project Structure

```
src/
├── components/     # UI sections (Hero, About, Projects, Skills, Contact, Footer, Navbar)
├── hooks/          # useTheme — dark mode with localStorage persistence
├── App.tsx         # Root layout
├── main.tsx        # Entry point
└── index.css       # Tailwind + custom styles
```

## Deployment

Deployed to GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy.yml`).

**Required**: Set GitHub Pages source to **GitHub Actions** in repo Settings → Pages.

## Live Site

[umarshareef-design.github.io/thouffic-portfolio](https://umarshareef-design.github.io/thouffic-portfolio/)

## License

MIT
