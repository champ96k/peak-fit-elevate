# PeakFit Global

[![Netlify Status](https://api.netlify.com/api/v1/badges/e093fa61-d0e1-45bd-a0cd-098a763f304c/deploy-status)](https://app.netlify.com/projects/peakfit-global/deploys)

PeakFit is an AI-powered fitness and wellness web app built with TanStack Start, React, and Vite.

## Live Demo

- Netlify: [https://peakfit-global.netlify.app/](https://peakfit-global.netlify.app/)
- Custom Domain: [http://peakfit.champ96k.com/](http://peakfit.champ96k.com/)

## Features

- Landing page with app highlights and pricing
- Detailed legal pages for in-app webview use:
  - `/terms`
  - `/privacy`
- Social share metadata configured for PeakFit branding
- Netlify-ready SSR deployment setup

## Tech Stack

- TanStack Start + TanStack Router
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Netlify TanStack Start Vite plugin

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://127.0.0.1:5173/
```

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run preview` - Preview production client build
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier

## Netlify Deployment

This project is already configured for Netlify:

- `netlify.toml` build command: `npm run build`
- Publish directory: `dist/client`
- Node runtime: `22`
- SSR function output generated automatically via `@netlify/vite-plugin-tanstack-start`

### Required environment variable

Set this in Netlify Site Settings -> Environment variables:

- `VITE_SITE_URL=https://your-domain.com`

This ensures social preview tags (`og:image`, `twitter:image`, `og:url`) use your correct production domain.

## Branding and Social Links

- GitHub: [champ96k](https://github.com/champ96k)
- X: [@champ_96k](https://x.com/champ_96k)
- LinkedIn: [tushar-nikam-dev](https://www.linkedin.com/in/tushar-nikam-dev/)
- Instagram: [peakfit.global](https://www.instagram.com/peakfit.global/)
- Email: [champ96klabs@gmail.com](mailto:champ96klabs@gmail.com)

