<div align="center">
  <h1>Vertex — Next-Generation Resort Interface</h1>
  <p><strong>A high-performance frontend experience where design, motion, and usability work together.</strong></p>
  <p align="center">
  <img src="https://img.shields.io/badge/React-18-%2361DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Build-%23646CFF?style=flat&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-%233178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-Utility-%2306B6D4?style=flat&logo=tailwindcss&logoColor=white" />
</p>
</div>

---

## Overview

Modern luxury interfaces often look visually impressive but fail where it matters most—**performance and usability**. Heavy assets, complex layouts, and poorly managed state can break the user experience, especially in critical flows like bookings.

**Vertex** is built to solve that problem.

It’s a frontend-first system designed to balance:
- **Visual depth** (animations, layouts, storytelling)
- **Performance** (fast rendering, smooth transitions)
- **User clarity** (no confusion, no friction)

Instead of treating UI as decoration, Vertex treats it as a **functional system**.

---

## Table of Contents

- [Why Vertex Exists](#why-vertex-exists)
- [Core Experience](#core-experience)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [What’s Coming Next](#whats-coming-next)
- [Getting Started](#getting-started)
- [License](#license)
- [Project Lead](#project-lead)

---

## Why Vertex Exists

Most UI-heavy applications today face the same problems:

- Interfaces look great but feel slow  
- Animations exist, but don’t add meaning  
- User flows (like booking) feel disconnected  
- Codebases become hard to scale due to poor structure  

**Vertex approaches this differently:**

- **Motion with Purpose:** Every animation guides attention instead of distracting  
- **Structured Components:** Clean separation between UI and logic  
- **User-First Thinking:** Every interaction is designed to feel natural  
- **Performance Awareness:** Smooth experience without unnecessary overhead  

The goal is simple:  
👉 Build something that *feels premium*, not just looks premium.

---

## Core Experience

### 1. Smart Booking Engine  
> One system. Two flows. Zero confusion.

The booking system is designed as a **single reusable interface** that adapts based on user intent.

- Handles both **Room Reservations** and **Dining Bookings**
- Real-time validation for:
  - Dates  
  - Guest count  
  - Logical constraints (capacity, availability)
- Simulates API behavior using loading states and success flows  
- Provides **instant visual feedback** without page reloads  

👉 Result: A booking flow that feels responsive, clear, and reliable.

---

### 2. Immersive Storytelling  
> Not just scrolling — a guided experience.

Instead of static sections, Vertex creates a **narrative-driven interface**.

- Parallax-based layout to create depth  
- Scroll-triggered animations using `IntersectionObserver`  
- Smooth opacity + transform transitions  
- Anti-flicker techniques to avoid layout shifts (CLS)

👉 Result: Users don’t just scroll—they experience the interface.

---

### 3. Interactive UI System  
> Built to feel alive, not static.

Every component is designed to respond to user interaction in a meaningful way.

- Glassmorphism navigation that adapts on scroll  
- Drag-enabled carousels for natural exploration  
- Bento grid layouts showing rich information on hover  
- Micro-interactions that improve usability without adding noise  

👉 Result: A UI that feels responsive, dynamic, and intentional.

---

## Architecture

Vertex follows a **feature-first architecture**, designed to keep the system scalable and maintainable.

```text
src/
├── components/
│   ├── ui/           # Reusable building blocks (buttons, inputs, dialogs)
│   ├── features/     # Business logic (booking modal, navbar)
│   └── sections/     # Page-level layouts (hero, story, footer)
├── pages/            # Route-based views
├── hooks/            # Custom reusable logic
├── lib/              # Utility functions
└── assets/           # Media & fonts
```

### Why this structure works:

- **Separation of concerns** → UI and logic don’t mix  
- **Reusability** → Components scale across features  
- **Maintainability** → Easy to extend without breaking existing code  

👉 Result: A system that grows cleanly as features increase.

---

## Tech Stack

- **Frontend:** React 18 + Vite  
- **Language:** TypeScript (Strict Mode)  
- **Styling:** Tailwind CSS + Shadcn UI  
- **Animations:** Custom CSS + Tailwind Animate  
- **Forms & Validation:** React Hook Form + Zod (simulated)  
- **Routing:** React Router DOM  
- **UI Enhancements:** Embla Carousel, Lucide Icons  

---

## What’s Coming Next

Vertex is currently a **frontend-focused system**, but the roadmap is to evolve it into a full product.

Planned improvements:

- Backend integration (Node.js APIs)  
- Database-driven booking system  
- Authentication and user sessions  
- Real-time availability and pricing  
- Production deployment with full-stack architecture  

👉 The goal is to move from **simulation → real-world system**.

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ABDUL-RAHMAN-9/vertex-luxury-resort.git
   cd vertex-luxury-resort

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
> “Good design is not just how it looks — it’s how it feels when you use it.”
