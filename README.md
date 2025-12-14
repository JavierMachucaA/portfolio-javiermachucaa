# Professional Portfolio - Javier Machuca

A modern, high-performance personal portfolio website built with **React**, **TypeScript**, and **GSAP**. This project features a unique layout with asymmetric design elements and interactive particle animations.

## 🚀 Key Features

### 1. Advanced Animations Engine (GSAP)
The application leverages the **GreenSock Animation Platform (GSAP)** for smooth, physics-based interactions:
*   **Particle Burst System**: A custom-built rendering engine that generates a burst of 30+ golden particles when hovering over navigation items.
    *   *Mechanism*: Dynamically creates DOM nodes, calculates random trajectories (velocity & angle), and animates them with opacity decay before cleaning up the DOM.
*   **Interactive Zoom**: Navigation items utilize a transform-based scale animation (1.3x) on hover for immediate visual feedback.

### 2. Custom Asymmetric Design
The UI moves away from standard "box" layouts by strictly- **🧩 Modular Architecture**: Clean separation of concerns with dedicated components for each section, utilizing a `data`-driven approach for content management.
- **🌍 Internationalization (i18n)**: Single-page switching between English and Spanish powered by a custom React Context engine, with zero page reloads.
- **🎮 Interactive 3D Elements**: Arcade-style interactive toggle buttons and GSAP-powered particle systems that create a playful, premium feel.
- **🎨 Advanced styling**: Custom CSS system implementing glassmorphism, 3D concave effects, and responsive mobile adaptations.
- **⚡ Performance focused**: Lightweight, dependency-free translations and optimized rendering. is visually "merged" into the top-right of the main container, featuring a distinctive **rounded bottom-left corner** that flows into the content area.

### 3. Modern Tech Stack
*   **Framework**: React 18 with TypeScript for type-safe component logic.
*   **Build Tool**: Vite for lightning-fast HMR (Hot Module Replacement) and bundling.
*   **Styling**: Pure CSS3 variables and Flexbox/Grid layouts (no heavy CSS frameworks) for maximum control over the specific border shapes.
*   **State Management**: React `useState` and `useRef` for tracking active tabs and managing animation references.

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/JavierMachucaA/portfolio-javiermachucaa.git
    cd portfolio-javiermachucaa
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── layout/        # Wrapper components (Layout, container styles)
│   ├── main/          # Core content components (Main, NavBar)
│   ├── sections/      # Content sections (About, Services, Testimonials)
│   └── sidebar/       # Profile sidebar components
├── context/           # React Context (Language Provider)
├── data/              # Static content & translations
├── hooks/             # Custom hooks (useParticles, useLanguage)
└── App.tsx            # Application root
```

## 🎨 Design specifics

The "Software Engineer" badge and navigation pills follow a strict color palette:
*   **Accent Color**: `#ffb300` (Used for particles and underscores)
*   **Dark Backgrounds**: `#2b2b2c` (Main content), `#3a3a3a` (Navigation container)
*   **Typography**: Clean, sans-serif fonts with specific weights (500 for nav items) for readability.

---
© 2025 Javier Machuca. Built with ❤️ and code.
