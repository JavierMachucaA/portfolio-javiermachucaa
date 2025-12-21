# Project Documentation

## Overview
This repository contains a personal portfolio website for **Javier Machuca** built with **React**, **TypeScript**, and **Vite**. The site follows a premium "Midnight" theme with dark backgrounds, gold accents, and smooth micro‑animations powered by **GSAP**.

## Architecture
- **src/components/** – All UI components are grouped by purpose:
  - `layout/` – Wrapper components and global layout.
  - `main/` – Navigation (`NavBar`), main container (`Main`).
  - `sections/` – Content sections (`About`, `Services`, `Testimonials`, `Resume`, `Contact`).
  - `sidebar/` – Profile sidebar with avatar and social links.
- **src/context/** – `LanguageContext` provides i18n support (English/Spanish) and a language toggle.
- **src/data/** – `portfolioData.ts` stores all static content for both languages, including the newly added `contact` object.
- **public/** – Static assets such as PDF versions of the CV.

## Key Features
- **Internationalisation** – Content switches instantly between English and Spanish.
- **Resume Section** – Dynamically renders education, experience, and skills from `portfolioData.ts`.
- **Contact Section** – Embedded Google Map and a styled contact form with download links for the PDF CVs.
- **Paper Resume Download** – Bottom of the Resume tab provides a download button for the appropriate PDF based on language.
- **Premium UI** – Dark theme, gold highlights, glass‑morphism cards, and responsive layout.

## Adding New Sections
1. Add a new entry to `portfolioData.ts` under both `en` and `es`.
2. Create a component in `src/components/sections/` and corresponding CSS.
3. Update `src/components/main/Main.tsx` to include the new component in the tab navigation.
4. Add the tab label to `navTabs` in `portfolioData.ts`.

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment
The project is configured for static hosting (e.g., GitHub Pages) via `vite.config.ts`.
