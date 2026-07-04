<div align="center">

# DevOpSpace

**Cloud & DevOps, handled end to end.**

A complete rebuild of [devopspace.com](https://www.devopspace.com) — a modern, dark, animated marketing site for a cloud & DevOps consultancy.

</div>

---

## ✨ Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **React 19** + **TypeScript** (strict)
- **[Tailwind CSS](https://tailwindcss.com)** v3 — custom dark design system
- **[Framer Motion](https://www.framer.com/motion/)** — scroll & entrance animations
- **[lucide-react](https://lucide.dev)** — icons
- Self-hosted Google Fonts via `next/font` (Sora + Inter + JetBrains Mono)

## 🎨 Design

A premium, dark aesthetic built around a cyan → blue → violet brand gradient, glassmorphism, aurora glows and a subtle grid. Fully responsive and accessible. Sections:

Hero · Trusted-by marquee · Services · Solutions · Why us + stats · Process · Case studies · Pricing · Testimonials · CTA · Contact.

## 🗂️ Structure

```
app/
  layout.tsx        # fonts, metadata, root shell
  page.tsx          # composes all sections
  globals.css       # design-system utilities
components/
  Navbar.tsx  Footer.tsx
  sections/         # one file per page section
  ui/               # Section, SectionHeading, Reveal, Button, Badge, Icon, Logo, Background
lib/
  content.ts        # single source of truth for all copy & data
  utils.ts
tailwind.config.ts  # design tokens (colors, gradients, animations)
```

All copy lives in **`lib/content.ts`** — edit it in one place to update the whole site.

## 🚀 Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## ☁️ Deployment (Railway)

Deployed on [Railway](https://railway.app). Railway auto-detects Next.js, runs `npm run build`, and starts the app with `npm start` (which binds to `$PORT`). No extra config required.

```bash
railway up       # build & deploy
```

---

<div align="center">
<sub>Ease your cloud journey. · Built with care.</sub>
</div>
