# 🚀 Quick Start Guide

Welcome to your premium motion-driven portfolio! Follow this guide to get started.

## ⚡ 5-Minute Setup

### 1. Install Dependencies (Done!)
Dependencies are already installed. You're good to go.

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Make Your First Customization
Edit `src/constants/index.ts` and update:
```typescript
export const SITE_CONFIG = {
  name: 'Your Name',           // ← Change this
  title: 'Your Title',         // ← And this
  description: 'Your bio...',  // ← And this
  url: 'https://your-site.com',
};
```

### 4. See Changes Live
Save the file. Your browser updates automatically! ✨

---

## 📝 Common Customizations

### Update Portfolio Data
**File**: `src/constants/index.ts`

All your portfolio content lives here:
- `NICHE_AREAS` - Your 5 expertise areas
- `PROJECTS` - Your featured projects
- `EXPERIENCE` - Your career timeline
- `SOCIAL_LINKS` - Your contact info

### Change Colors
**File**: `src/app/globals.css`

Currently using black/slate palette. Update Tailwind classes in component files to customize.

### Add a New Section
1. Create: `src/components/sections/MySectionName.tsx`
2. Import it in: `src/app/page.tsx`
3. Add the component to your main page

### Modify Animations
**File**: `src/components/ui/motion/index.tsx`

Edit motion variants:
```typescript
initial={{ opacity: 0, y: 20 }}      // Starting state
animate={{ opacity: 1, y: 0 }}       // Ending state
transition={{ duration: 0.6 }}       // Duration in seconds
```

---

## 🎨 Component Overview

### Pages & Layout
- `src/app/page.tsx` - Main page (import sections here)
- `src/app/layout.tsx` - Root layout with metadata

### Sections (Each is a full section)
- **Hero** - Title, subtitle, CTA buttons
- **Niche Areas** - 5 expandable skill cards
- **Projects** - Project gallery
- **Experience** - Career timeline
- **Footer** - Contact & social links

### Reusable Components
- **Navigation** - Sticky header with mobile menu
- **Motion Components** - Animation primitives

---

## 📂 File Guide

```
Important files to customize:

src/
├── constants/index.ts      ← UPDATE THIS (Your portfolio data)
├── app/
│   ├── page.tsx           ← ADD/REMOVE SECTIONS HERE
│   └── globals.css        ← CHANGE COLORS HERE
└── components/
    ├── Navigation.tsx      (Menu config)
    └── sections/
        ├── HeroSection.tsx
        ├── NicheAreasSection.tsx
        ├── ProjectsSection.tsx
        ├── ExperienceSection.tsx
        └── FooterSection.tsx
```

---

## 🎬 Animation Control

### Stagger Timing (between children)
```typescript
<StaggerContainer staggerChildren={0.1}>
  {/* Children animate with 0.1s delay between each */}
</StaggerContainer>
```
- Lower = faster stagger
- Higher = more dramatic spacing

### Individual Animation Duration
```typescript
whileInView={{ opacity: 1 }}
transition={{ duration: 0.8 }}  // ← Change this (in seconds)
```

### Scroll Trigger Sensitivity
```typescript
viewport={{ once: true, margin: '-100px' }}
//                              ↑
//         Trigger before entering (negative = earlier)
```

---

## 🔗 Important Links

### Documentation
- [README.md](./README.md) - Full documentation
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Detailed guide
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

## 🐛 Troubleshooting

### Dev server won't start?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Try again
npm run dev
```

### TypeScript errors?
```bash
# Check TypeScript without building
npx tsc --noEmit
```

### Build fails?
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

### Changes not showing?
```bash
# Hard refresh
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)
```

---

## ✨ Pro Tips

1. **Use `whileInView`** for animations that trigger on scroll
2. **Keep animations short** (0.3-0.8 seconds) for snappiness
3. **Test on mobile** - Use DevTools device toolbar
4. **Use `transform`** and `opacity` for performance
5. **Update data** in `constants/` - not in components

---

## 🚀 Deploy When Ready

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
git push origin main
# Configure in repository settings
```

---

## 📋 Your Customization Checklist

- [ ] Update `SITE_CONFIG` with your info
- [ ] Update `NICHE_AREAS` with your skills
- [ ] Add your `PROJECTS`
- [ ] Add your `EXPERIENCE`
- [ ] Update `SOCIAL_LINKS`
- [ ] Test on mobile
- [ ] Run `npm run build` (verify no errors)
- [ ] Deploy to Vercel or your hosting

---

## 💡 Next Steps

**Today**:
1. Update portfolio data in `src/constants/index.ts`
2. See changes at http://localhost:3000
3. Test navigation and animations

**Tomorrow**:
1. Customize colors if desired
2. Add your project images
3. Deploy to Vercel

**Ongoing**:
1. Update with new projects
2. Keep content fresh
3. Monitor performance

---

## 🎉 You're All Set!

Your portfolio is running. Now:

1. **Customize your content** in `src/constants/index.ts`
2. **View it live** at http://localhost:3000
3. **Deploy it** when ready

For detailed help, see:
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Step-by-step guide
- [README.md](./README.md) - Full documentation

Happy coding! 🚀
