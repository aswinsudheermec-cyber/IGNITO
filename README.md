# IGNITO 2026 — Interstellar Tech Odyssey

IGNITO 2026 is a premium, highly interactive frontend web portal developed for a premier college techfest centered around a **Deep Space** theme. The project utilizes a modern multi-page architecture powered by Next.js, featuring production-grade 3D WebGL components, custom physics-based cursor interactions, and cinematic transitions engineered to deliver an immersive digital experience entirely free of typical template aesthetics.

## 🚀 Live Demo & Repository
*   **Live Deployment:** [Link to your Vercel/Netlify URL]
*   **GitHub Repository:** [Link to your GitHub Repository]

---

## 🛠️ Tech Stack & Architecture

*   **Framework:** Next.js 14+ (App Router, TypeScript Mode)
*   **Styling & UI:** Tailwind CSS (Glassmorphism design system)
*   **3D Graphics Engine:** React Three Fiber (R3F) & `@react-three/drei` (Three.js abstraction layer)
*   **Animation Layer:** Framer Motion (Declarative hardware-accelerated animations)
*   **Icons:** Lucide React

---

## 💎 Premium Features & Engineering Polish

### 🌌 1. Cinematic Interactive Preloader
*   **Warp-Speed Visuals:** Features an immersive canvas-based particle acceleration stream acting as a background backdrop.
*   **Cursor Tracking:** A central wireframe 3D singularity tilts and scales fluidly in real time according to the user's mouse coordinates.
*   **Data Injection Simulation:** Incorporates a live monospace loading counter paired with changing system calibration telemetry logs (e.g., `CALIBRATING QUANTUM MAINFRAME...`) configured on a optimal 2.5-second landing curve.
*   **Exit Transition:** Uses a custom cubic-bezier ease (`[0.76, 0, 0.24, 1]`) to slide the overlay vertically out of view, revealing the main layout seamlessly.

### ⚛️ 2. Quantum Mainframe & Mouse-Reactive 3D Vortex
*   **WebGL Particle System:** Replaced standard geometric vectors with a complex `<points>` particle vortex built programmatically via React Three Fiber.
*   **Inertial Physics:** The particle system dynamically deforms, morphs coordinates, and accelerates its spin based on mouse proximity, utilizing calculated boundary variables to guarantee zero layout shifting or horizontal scroll breaking (`overflow-x-hidden`).
*   **Authentic Tech Polish:** The telemetry sub-panels showcase realistic Python scripts leveraging `pymongo` connecting to a backend NoSQL cluster to display active "galactic sector logs."

### 🛰️ 3. Matrix Text Scrambler (`<GlitchText />`)
*   **Anti-AI Aesthetic:** Key headers and navigation links feature an algorithmic text-scrambling hover routine. 
*   **Decryption Effect:** Elements rapidly loop through custom alphanumeric space symbols before securely locking back into the readable layout, providing an authentic terminal vibe.

### 📅 4. Asymmetric Timeline & Localized Pricing Engine
*   **Multi-Page Setup:** Migrated away from standard single-page anchors to full Next.js App Router sub-directories (`/events`, `/competitions`, `/contact`) linked with optimized pre-fetching routines.
*   **Nebula Timeline:** Features an interactive 3-Day vertical event schedule with glowing viewport-activated nodes tracking chronological steps.
*   **Localized Pricing:** All event nodes and flagship data matrix cards utilize localized Indian Rupee formatting (`₹399/-`, `₹2,50,000/- grand prizes`) tailored explicitly for institutional integration.

---

## 🛠️ Getting Started & Installation

Follow these steps to spin up the production server locally in VS Code or your terminal:

1. **Clone the Repository:**
   ```bash
   git clone <your-repository-url>
   cd ignito-techfest
