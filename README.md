# Leo Gardner - Premium Motion-Driven Portfolio

A high-end, motion-driven portfolio built with modern web technologies showcasing AI/ML expertise, full-stack development, and product innovation.

## 🎯 Features

- **Motion-First Design**: Hardware-accelerated animations using Framer Motion with spring physics
- **Bento Grid Layout**: Modern, layered interface with depth and micro-interactions
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Scroll-Linked Animations**: Dynamic transformations triggered by scroll position
- **Expandable Cards**: Interactive niche areas with expandable skill details
- **Timeline Animations**: Scrollable experience timeline with staggered reveals
- **Performance Optimized**: Tailwind CSS 4.0 with next/image optimization

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Motion React (Framer Motion)
- **Components**: shadcn/ui
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── sections/
│   │   ├── HeroSection.tsx          # Hero with split text animation
│   │   ├── NicheAreasSection.tsx    # 5 focus areas with expandable cards
│   │   ├── ProjectsSection.tsx      # Featured projects gallery
│   │   ├── ExperienceSection.tsx    # Timeline with scroll animations
│   │   └── FooterSection.tsx        # Footer with social links
│   └── ui/
│       └── motion/
│           └── index.tsx   # Reusable motion components
├── constants/
│   └── index.ts           # Portfolio data and configuration
├── types/
│   └── index.ts           # TypeScript type definitions
└── lib/
    └── utils.ts           # shadcn/ui utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Portfolio Data
Edit `src/constants/index.ts` to customize:
- Personal information (name, title, bio)
- Niche areas and skills
- Projects and descriptions
- Experience and timeline
- Social media links

### Modify Colors & Styling
- Update Tailwind classes in component files
- Custom CSS utilities are in `src/app/globals.css`
- Color scheme uses slate/black palette (easily customizable)

### Add New Sections
1. Create a new component in `src/components/sections/`
2. Export it from the component
3. Import and add to `src/app/page.tsx`

## 🎨 Design System

### Motion Principles
- **Spring Physics**: Non-linear, organic movement
- **Stagger Timing**: List items animate with slight delays
- **Scroll-Linked**: Transformations tied to scroll position
- **Hardware Acceleration**: Use `transform` and `opacity` for performance

### Layout Patterns
- **Bento Grid**: Cards with varying sizes and depths
- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Depth**: Subtle z-axis stacking and shadows

## 🔧 Configuration

### Next.js Config
- App Router with TypeScript
- Turbopack for faster dev builds
- Image optimization enabled

### Tailwind CSS
- Version 4.0 with new engine
- Custom radius scales (sm, md, lg, xl, 2xl, 3xl, 4xl)
- Dark mode support via CSS variables

## 📱 Responsive Breakpoints

- `sm`: 640px (small devices)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large screens)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliant
- Reduced motion support via `prefers-reduced-motion`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `.next` folder or use platform-specific deploy commands

## 📊 Performance Optimization

- ✅ Static site generation for fast loads
- ✅ Image optimization with Next.js Image component
- ✅ CSS-in-JS with Tailwind for minimal bundle size
- ✅ Hardware-accelerated animations
- ✅ Lazy loading for sections with `whileInView`

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

This portfolio is open source and available for personal use.

## 👨‍💻 Author

**Leo Gardner (Sriram Naidu Thota)**
- AI/ML Engineer & Creative Developer
- Specializing in Motion UI & Product Innovation

---

Built with ❤️ using Next.js, Motion React, and Tailwind CSS
