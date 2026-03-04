<div align="center">
  <h1>Vertex — Next-Generation Resort Interface</h1>
</div>

**The Problem**  
High-end digital experiences often sacrifice performance for aesthetics. Heavy assets and complex layouts frequently lead to sluggish interactions and disjointed user journeys, causing high bounce rates in critical booking flows.

**The Solution**  
Vertex serves as a high-performance architectural blueprint for luxury interfaces. It combines strict TypeScript reliability with cinematic animation orchestration, ensuring that visual immersion never comes at the cost of user experience, speed, or conversion.

---

## Technical Core & Philosophy

### Cinematic Frontend Architecture
The core philosophy of Vertex is "Motion as Meaning." We utilize advanced CSS animations, parallax scrolling effects, and the Ken Burns effect to create a living, breathing interface. The application leverages `IntersectionObservers` to orchestrate scroll-triggered reveals, ensuring the UI feels responsive and alive.

### Component-Driven Design System
Built on a modular architecture, Vertex employs a custom Bento Grid layout for accommodations and a drag-enabled carousel for dining discovery. Every component—from the glassmorphism navigation to the interactive booking modals—is encapsulated, typed, and reusable.

### UX-First State Management
While visually heavy, the application maintains peak performance through efficient state logic. The booking engine handles complex conditional logic (Room vs. Dining), form validation, and simulated asynchronous API calls to provide immediate, tactile feedback to the user without page reloads.

---

## Core Functionality

### 1. The Booking Engine
- **Dual-Mode Logic:** A unified modal system that intelligently switches context between "Suite Reservation" and "Table Booking."
- **Smart Validation:** Prevents invalid date selections and ensures guest counts match room capacity.
- **Asynchronous Simulation:** Mimics real-world API latency with loading states and success tickets.

### 2. Immersive Storytelling
- **Parallax Scroll Engine:** The "Our Story" page features fixed-background parallax effects that create depth and immersion.
- **Timeline Architecture:** A visual journey through the brand's history using scroll-triggered opacity and transform animations.
- **Anti-Flicker Optimization:** Custom CSS strategies (`animation-fill-mode`) ensure assets load smoothly without layout shifts (CLS).

### 3. Visual Discovery & Navigation
- **Glassmorphism UI:** A dynamic navigation bar that adapts its transparency and blur based on scroll position.
- **Interactive Galleries:** Touch-responsive image sliders (Embla Carousel) for the dining experience.
- **Data-Rich Bento Grids:** Accommodation cards that reveal pricing, square footage, and amenities on hover.

---

## Project Architecture

Vertex follows a **feature-first** modular architecture designed for scalability. This structure isolates business logic from UI primitives, ensuring maintainability as the application grows.

```text
src/
├── components/
│   ├── ui/           # Atomic primitives (Buttons, Dialogs, Inputs)
│   ├── features/     # Complex business logic (BookingModal, Navbar)
│   └── sections/     # Page-specific layouts (Hero, Features, Footer)
├── pages/            # Route-based views (Home, Story, Dining)
├── hooks/            # Custom React hooks (useMobile, useToast)
├── lib/              # Utility functions (cn, date formatting)
└── assets/           # Optimized static media & fonts
```

---

## Technology Stack

| Layer | Technology |
| :--- | :--- |
| Framework | **React 18** + **Vite** |
| Language | **TypeScript** (Strict Mode) |
| Styling | **Tailwind CSS** + **Shadcn UI** |
| Animation | **Tailwind Animate** + Custom Keyframes |
| Routing | **React Router DOM** |
| Validation | **React Hook Form** + **Zod** (Simulated) |
| Icons | **Lucide React** |
| Carousel | **Embla Carousel** |

---

## Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ABDUL-RAHMAN-9/vertex-luxury-resort.git

2. **Install dependencies**

   ```bash
    npm install

3. **Execute Development Server:**

   ```bash
    npm run dev

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Project Lead
**[Abdul Rahman](https://github.com/ABDUL-RAHMAN-9)**  

> "Luxury is the absence of necessary things. In software, luxury is the absence of friction."

**© 2026 Vertex Resorts — The Architecture of Leisure.**
