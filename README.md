# Lucca Gabriel — Portfolio

> Personal portfolio website for Lucca Gabriel, Full-Stack Developer & Computer Engineer. Built with a space-themed aesthetic featuring animated backgrounds, smooth scroll sections, and bilingual (EN/PT) support.

---

## 🚀 Features

- **Single-page layout** — Home, About, Skills, Projects, and Contact sections on one scrollable page
- **Bilingual** — full English / Portuguese support via a global language context
- **Animated UI** — Framer Motion scroll-reveal animations throughout
- **Space theme** — animated star background, floating astronaut, and logo intro screen
- **Responsive design** — built with Tailwind CSS utility classes
- **Static skill map** — categorized tech badges (Frontend, Backend, Mobile, Tools)
- **Project showcase** — cards with tech stack, GitHub links, and live site links

---

## 📸 Preview

The portfolio opens with a 2.8-second animated logo screen, then transitions to the main layout: a fixed navigation bar, an animated starfield background, and a floating astronaut. Sections scroll vertically inside a single container.

> Screenshots/GIFs not included in this repo.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | React Icons 5, Material UI Icons 4 |
| Font | Nunito (Google Fonts via `next/font`) |
| Runtime | React 18 |
| Package Manager | pnpm |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — logo splash, navbar, stars, language provider
│   ├── page.tsx                # Landing page — composes all section pages
│   └── (landing)/
│       ├── _home/page.tsx      # Hero section
│       ├── _about/page.tsx     # Bio, experience, education timeline
│       ├── _skills/page.tsx    # Categorized skill badges
│       ├── _projects/page.tsx  # Project cards with links
│       └── _contact/page.tsx   # Contact links (email, GitHub, LinkedIn)
├── components/
│   ├── index.tsx               # Barrel export for shared components
│   ├── nav_bar/                # Sticky navigation with language toggle
│   ├── logo/                   # Animated intro logo
│   ├── card/                   # Reusable card component
│   ├── floating_astronaut/     # Decorative animated astronaut
│   └── stars_background/       # Animated star field
├── context/
│   └── language.tsx            # LanguageProvider + useLang hook (EN/PT)
└── translations/
    └── index.ts                # All UI strings keyed by lang ("en" | "pt")
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/WorstOne0/portifolio_frontend.git
cd portifolio_frontend

# Install dependencies
pnpm install
```

---

## ▶️ Usage

```bash
# Development server (port 5001)
pnpm dev

# Production build
pnpm build

# Start production server (port 5001)
pnpm start

# Lint
pnpm lint
```

Open [http://localhost:5001](http://localhost:5001) in your browser.

---

## 🔌 Integrations

| Integration | Purpose |
|---|---|
| Google Fonts (Nunito) | Typography via `next/font/google` |
| GitHub links | Project source code links (in `translations/index.ts`) |
| External site links | Live project URLs (e.g., wikidados.com.br) |

No backend or API routes — fully static frontend.

---

## 🧪 Testing

No test suite is currently configured.

---

## 📌 Roadmap

- [ ] Add dark/light theme toggle
- [ ] Add contact form with email delivery
- [ ] Improve mobile responsiveness
- [ ] Add more projects

---

## 🤝 Contributing

This is a personal portfolio. Feel free to fork it and adapt it for your own use.

---

## 📄 License

Not specified. All rights reserved by Lucca Gabriel.

---

**Short description (≤160 chars):**
> Space-themed personal portfolio for a Full-Stack Developer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Bilingual EN/PT.

**Suggested GitHub tags:**
`portfolio` `nextjs` `react` `typescript` `tailwindcss` `framer-motion` `personal-website` `full-stack` `bilingual`
