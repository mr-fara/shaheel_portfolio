# SHAHEEL — Photographer & Visual Storyteller

A cinematic portfolio website for a photographer that showcases editorial portraits, weddings, fashion, travel, commercial work, and visual storytelling. The project is built with React + Vite and designed to feel premium, immersive, and modern.

## Overview

This portfolio is designed to help Shaheel present a refined brand experience online through:

- a dramatic hero section with strong editorial styling
- a filterable portfolio gallery
- featured story storytelling sections
- service and booking highlights
- contact and inquiry flow
- social gallery and footer branding

The site emphasizes atmosphere, natural light, emotion, and timeless composition — matching the visual language of the photography itself.

## Live Preview

Run the app locally and open:

- http://localhost:3000

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Lucide React
- Motion

## Project Structure

```text
shaheel/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── layout/
│   │   ├── portfolio/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── portfolio.ts
│   │   ├── services.ts
│   │   ├── siteConfig.ts
│   │   └── socialGallery.ts
│   └── hooks/
│       └── useReducedMotion.ts
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
```

## Features

### Premium branding experience
The landing page includes cinematic textures, warm neutrals, and refined typography to create a luxury editorial tone.

### Portfolio showcase
Collections are organized into categories such as portraits, weddings, fashion, events, travel, commercial, and lifestyle work.

### Story-based presentation
The site includes narrative sections that frame the work around emotion, atmosphere, and creative intent instead of only gallery thumbnails.

### Inquiry-focused contact experience
Users can browse services and select a category before reaching the contact section to make bookings or commissions more personalized.

### Responsive design
The layout is optimized for desktop, tablet, and mobile viewing while preserving the editorial aesthetic.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

This will launch the site on port 3000.

### Build the project

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

```json
{
  "dev": "node ./node_modules/vite/bin/vite.js --port=3000 --host=0.0.0.0",
  "build": "node ./node_modules/vite/bin/vite.js build",
  "preview": "node ./node_modules/vite/bin/vite.js preview",
  "clean": "rm -rf dist server.js",
  "lint": "node ./node_modules/typescript/bin/tsc --noEmit"
}
```

## Customization

The site is structured so the content can be updated in a few key locations:

- `src/data/siteConfig.ts` — brand copy, biography, contact details, and social links
- `src/data/portfolio.ts` — portfolio items, categories, descriptions, and image references
- `src/data/services.ts` — photography packages and service offerings
- `src/data/socialGallery.ts` — social media image gallery data

You can easily adapt the site for another photographer, studio, or creative portfolio by changing the content and imagery files.

## Deployment

This project builds as a static frontend and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- any static hosting provider

For a production deployment, run:

```bash
npm run build
```

Then upload the generated `dist` output to your host.

## Notes

This project uses local image assets stored under `src/assets/images` and references them directly in the portfolio data. If you replace the photography assets, keep the same naming conventions or update the paths in the data files.

## License

This project is for portfolio and presentation purposes. If you are using it for a personal or commercial brand, ensure you have the rights to all images, branding, and copy included in the site.

## Author

SHAHEEL

Photographer & Visual Storyteller
