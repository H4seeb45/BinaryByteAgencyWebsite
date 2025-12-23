# Binary Byte - Premium Landing Page

A high-conversion, premium landing page for Binary Byte, a UK-based elite software engineering agency.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** Shadcn UI (Radix UI)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Design System

- **Background:** Deep Dark Slate (#1A2B34)
- **Primary Accent:** Mint Green/Cyan (#2DE29C)
- **Text:** White (#FFFFFF) and Light Gray (#94A3B8)
- **Font:** Inter (Google Fonts)

## Features

- ✅ Fully responsive design (Mobile/Desktop)
- ✅ Smooth Framer Motion animations
- ✅ Glassmorphism effects
- ✅ Animated background grid pattern
- ✅ Proof bar marquee with tech stack
- ✅ Professional team section
- ✅ Contact form with Shadcn UI components
- ✅ Modern navigation with mobile menu

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── hero.tsx         # Hero section
│   ├── services.tsx     # Services section
│   ├── team.tsx         # Team section
│   ├── about.tsx        # About section
│   ├── contact.tsx      # Contact form
│   ├── proof-bar.tsx    # Tech stack marquee
│   ├── navigation.tsx   # Navigation bar
│   └── footer.tsx       # Footer
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

- Update brand colors in `tailwind.config.ts`
- Modify content in component files
- Adjust animations in Framer Motion components
- Update team members in `components/team.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
