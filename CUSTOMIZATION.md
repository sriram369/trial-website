# Customization Guide for Leo Gardner Portfolio

## 📝 Updating Your Information

### Step 1: Edit `src/constants/index.ts`

This file contains all the portfolio data. Update the following:

#### Personal Information
```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Professional Title',
  description: 'Your portfolio description',
  url: 'https://yourportfolio.com',
};
```

#### Niche Areas
Add or modify your expertise areas:
```typescript
export const NICHE_AREAS: NicheArea[] = [
  {
    id: 'unique-id',
    title: 'Area Title',
    description: 'Brief description',
    icon: '🎯', // Use any emoji or Unicode character
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
];
```

#### Projects
Showcase your work:
```typescript
export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'What did you build?',
    category: 'Category Type',
    tags: ['tech1', 'tech2'],
    href: 'https://project-link.com', // Optional
  },
];
```

#### Experience
Add your professional journey:
```typescript
export const EXPERIENCE: Experience[] = [
  {
    id: 'role-1',
    role: 'Your Role',
    company: 'Company Name',
    period: '2024 - Present',
    description: 'What did you do?',
    highlights: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
];
```

#### Social Links
Update your contact information:
```typescript
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/yourname', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:your@email.com', icon: 'mail' },
];
```

## 🎨 Styling Customization

### Change Color Scheme
Edit `src/app/globals.css` and update the CSS variables:

```css
:root {
  --color-primary: #your-primary-color;
  --color-secondary: #your-secondary-color;
}
```

### Modify Typography
Update font family in `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  variable: '--font-custom',
  subsets: ['latin'],
});
```

### Adjust Component Spacing
Modify Tailwind classes in component files. For example, in `HeroSection.tsx`:

```tsx
<h1 className="text-6xl lg:text-7xl"> {/* Change text sizes */}
```

## 🎬 Animation Customization

### Spring Physics
Adjust animation feel in motion components:

```typescript
transition={{ 
  type: 'spring', 
  stiffness: 300,      // Higher = snappier
  damping: 25,         // Higher = less bouncy
}}
```

### Stagger Timing
Control list animation delays in sections:

```typescript
<StaggerContainer staggerChildren={0.2}> {/* Increase for longer delays */}
```

### Scroll Animations
Modify scroll-triggered animations:

```typescript
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }} {/* Duration in seconds */}
viewport={{ once: true, margin: '-100px' }}
```

## 🖼️ Adding Images/Media

### Project Images
1. Add images to `public/images/projects/`
2. Update project data:

```typescript
{
  ...project,
  image: '/images/projects/project-name.png',
}
```

3. Display in ProjectsSection:
```tsx
<Image
  src={project.image}
  alt={project.title}
  width={400}
  height={300}
  className="w-full h-full object-cover"
/>
```

### Hero Background
Create a custom background in `HeroSection.tsx`:

```tsx
<motion.div
  className="absolute inset-0 bg-gradient-to-br from-[#color1] to-[#color2]"
/>
```

## 🚀 Adding New Sections

### Example: Adding a Blog Section

1. Create `src/components/sections/BlogSection.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/ui/motion';

export function BlogSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-5xl font-bold text-white mb-16">Latest Articles</h2>
        </FadeInUp>
        {/* Your content here */}
      </div>
    </section>
  );
}
```

2. Import in `src/app/page.tsx`:

```tsx
import { BlogSection } from '@/components/sections/BlogSection';

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <NicheAreasSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection /> {/* Add here */}
      <FooterSection />
    </main>
  );
}
```

3. Update Navigation in `src/components/Navigation.tsx`:

```typescript
const NAV_ITEMS = [
  { label: 'Niche Areas', href: '#niche-areas' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' }, // Add this
];
```

## 🔗 Metadata & SEO

Update `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Professional Portfolio',
  description: 'Your portfolio description for SEO',
  keywords: ['AI', 'ML', 'Developer'], // Add relevant keywords
  metadataBase: new URL('https://yourportfolio.com'),
};
```

## 🌐 Deployment

### Environment Variables
Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
```

### Vercel Deployment
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Custom Domain
Configure in Vercel dashboard or your registrar's DNS settings

## 📱 Mobile Optimization

Test responsive design:
```bash
npm run dev
# Open DevTools (F12)
# Toggle device toolbar
```

Modify breakpoints for specific elements:
```tsx
<div className="block md:hidden"> {/* Mobile only */}
<div className="hidden md:block"> {/* Desktop only */}
```

## 🐛 Debugging

### Enable React DevTools
Install [React DevTools browser extension](https://react-devtools-tutorial.vercel.app/)

### Check TypeScript Errors
```bash
npm run type-check
```

### View Build Output
```bash
npm run build
```

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips & Best Practices

1. **Keep Data Organized**: Store all content in `constants/`
2. **Reuse Components**: Use motion components from `ui/motion/`
3. **Test on Mobile**: Always check responsive behavior
4. **Optimize Images**: Use Next.js Image component
5. **Monitor Performance**: Use Lighthouse in DevTools
6. **Version Control**: Commit changes regularly to Git

---

Need help? Check the main [README.md](./README.md) or the [project structure documentation](./ARCHITECTURE.md).
