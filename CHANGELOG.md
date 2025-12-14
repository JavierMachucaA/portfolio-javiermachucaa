# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Internationalization (i18n)**: Full English/Spanish support using a custom `LanguageContext`.
- **Language Toggle**: A custom 3D "Concave Arcade" style button for switching languages, positioned independently of the navigation to prevent animation overlaps.
- **Data Layer**: Centralized `portfolioData.ts` file containing all static content in multiple languages.
- **Testimonials UI**: Redesigned testimonial cards to separate the user header from the content, allowing full-width justified text for better readability.
- **Social Media Integration**: Added interactive social media icons (GitHub, LinkedIn, Instagram, X, Facebook) to the sidebar.
- **Sticky Sidebar**: Implemented sticky positioning for the sidebar on desktop to improve navigation UX during scrolling.

### Changed
- **Architecture**: Refactored the monolithic `Main.tsx` into small, focused components (`NavBar`, `About`, `Services`, `Testimonials`) located in `src/components/sections/`.
- **Folder Structure**: Reorganized source files into modular directories (`components/layout`, `components/main`, `components/sidebar`, `components/sections`) for better scalability.
- **Navigation Layout**: Updated navbar to `space-between` alignment, separating the language control from the navigation links.
- **Main.css**: Added complex 3D CSS styling (inset shadows, gradients) for the new arcade button.
- **Deployment**: Configured `vite.config.ts` and `package.json` for proper asset handling on GitHub Pages.

## [0.1.0] - 2024-03-20-11

### Added
- **Project Initialization**: Setup React project using Vite with TypeScript template.
- **GSAP Integration**: Installed and configured GSAP (GreenSock Animation Platform) for high-performance animations.
- **Particle Engine**: Implemented a custom particle burst system:
  - Generates dynamic DOM elements on the fly.
  - Physics-based animation using GSAP (velocity, angle, decay).
  - Cleaning mechanisms to remove particles after animation to prevent memory leaks.
- **Interactive Navigation**:
  - Dynamic tab rendering with React state.
  - "Zoom-on-hover" effect scaling items to 1.3x.
  - Golden particle burst triggered on `mouseenter`.
- **Layout Architecture**:
  - `Sidebar`: Fixed left panel for profile information.
  - `Main`: Scrollable content area with specific "About", "Resume", "Portfolio", and "Contact" sections.

### Changed
- **UI/UX Design Overhaul**:
  - **Navigation Styling**: Moved from standard tabs to a "pill-shaped" container in the top-right.
  - **Asymmetric Borders**: 
    - Main container: Rounded corners except for a sharp bottom-right.
    - Navigation bar: Rounded bottom-left corner matching the container's aesthetic.
  - **Profile Badge**: Customized "Software Engineer" tag with specific padding, border-radius, and typography.
  - **Typography**: Updated font weights and sizes for better hierarchy (e.g., navigation text weight set to 500).
- **Event Handling Refactor**: Moved from manual `addEventListener` in `useEffect` to React native `onMouseEnter`/`onClick` props for improved reliability and scroll-aware positioning.
