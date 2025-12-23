# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Features

✅ Next.js 14 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS with custom brand colors
✅ Framer Motion animations
✅ Shadcn UI components
✅ Fully responsive design
✅ Smooth scroll navigation
✅ Animated background effects
✅ Glassmorphism UI elements

## Customization

- **Colors**: Edit `tailwind.config.ts` to change brand colors
- **Content**: Update component files in `/components`
- **Team Members**: Modify `components/team.tsx`
- **Services**: Update `components/services.tsx`

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles & utilities
├── components/
│   ├── ui/                  # Reusable UI components (Shadcn)
│   ├── hero.tsx             # Hero section
│   ├── services.tsx         # Services showcase
│   ├── team.tsx             # Team members
│   ├── about.tsx            # About section
│   ├── contact.tsx          # Contact form
│   ├── proof-bar.tsx        # Tech stack marquee
│   ├── navigation.tsx       # Navigation bar
│   └── footer.tsx           # Footer
└── lib/
    └── utils.ts             # Utility functions
```

## Notes

- All animations use Framer Motion for smooth performance
- The design follows a dark industrial-tech aesthetic
- Mint green (#2DE29C) is used for CTAs and accents
- All components are fully responsive

