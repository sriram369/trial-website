#!/bin/bash
# Quick Commands Reference for Portfolio Development

# ============================================================================
# 🚀 DEVELOPMENT COMMANDS
# ============================================================================

# Start development server
npm run dev
# Accessible at: http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Type check the project
npm run type-check

# Lint code for errors
npm run lint

# Format code with Prettier (if configured)
npm run format


# ============================================================================
# 🔍 DEVELOPMENT TIPS
# ============================================================================

# Monitor file changes and rebuild
# Already included in 'npm run dev'

# Test TypeScript compilation
npx tsc --noEmit

# Check bundle size
npm run build
du -sh .next

# Clean build cache
rm -rf .next
npm run build


# ============================================================================
# 📦 DEPENDENCY MANAGEMENT
# ============================================================================

# Install new package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated

# List installed packages
npm list

# View package details
npm info package-name


# ============================================================================
# 🎨 CUSTOMIZATION QUICK TASKS
# ============================================================================

# Task: Update portfolio data
# File: src/constants/index.ts
# - Edit NICHE_AREAS, PROJECTS, EXPERIENCE, SITE_CONFIG, SOCIAL_LINKS

# Task: Change color scheme
# File: src/app/globals.css
# - Update Tailwind color variables

# Task: Add new section
# 1. Create file: src/components/sections/YourSection.tsx
# 2. Import in: src/app/page.tsx
# 3. Add to navigation: src/components/Navigation.tsx

# Task: Modify animations
# File: src/components/ui/motion/index.tsx
# - Adjust motion variants and transitions

# Task: Update social links
# File: src/constants/index.ts
# - Modify SOCIAL_LINKS array


# ============================================================================
# 📁 FILE LOCATIONS CHEAT SHEET
# ============================================================================

# Main entry point:        src/app/page.tsx
# Styling:                 src/app/globals.css
# Navigation:              src/components/Navigation.tsx
# Sections:                src/components/sections/*
# Motion components:       src/components/ui/motion/
# Portfolio data:          src/constants/index.ts
# Type definitions:        src/types/index.ts
# Configuration:           next.config.ts, tsconfig.json

# Static assets:           public/
# Node modules:            node_modules/
# Build output:            .next/


# ============================================================================
# 🐛 DEBUGGING
# ============================================================================

# Enable verbose output
npm run dev -- --debug

# Check TypeScript errors without building
npx tsc --noEmit

# View console errors
# 1. Open DevTools (F12)
# 2. Go to Console tab
# 3. Check for red error messages

# Debug Next.js
NODE_OPTIONS='--inspect-brk' npm run dev
# Then open chrome://inspect

# Check for broken links
npm install --save-dev broken-link-checker
broken-link-checker http://localhost:3000


# ============================================================================
# 🚀 DEPLOYMENT
# ============================================================================

# Deploy to Vercel
npm install -g vercel
vercel

# Build and test locally before deploying
npm run build
npm start
# Visit http://localhost:3000

# Deploy to other platforms
# 1. Build: npm run build
# 2. Upload .next folder and package.json
# 3. Run: npm install && npm start


# ============================================================================
# 📊 PERFORMANCE MONITORING
# ============================================================================

# Generate performance report
npm run build -- --analyze

# Check CSS size
grep -o 'class="[^"]*"' src/components/**/*.tsx | wc -l

# Measure bundle size
npm run build
ls -lh .next/static/**/*.js


# ============================================================================
# 🔐 SECURITY CHECKS
# ============================================================================

# Scan for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Check outdated dependencies
npm outdated


# ============================================================================
# 📚 USEFUL LINKS
# ============================================================================

# Documentation:
# - Next.js:        https://nextjs.org/docs
# - Framer Motion:  https://www.framer.com/motion/
# - Tailwind CSS:   https://tailwindcss.com/docs
# - TypeScript:     https://www.typescriptlang.org/docs/
# - shadcn/ui:      https://ui.shadcn.com/
# - Lucide Icons:   https://lucide.dev/

# Tools:
# - VS Code:        https://code.visualstudio.com/
# - React DevTools: https://react-devtools-tutorial.vercel.app/
# - Lighthouse:     Built into Chrome DevTools

# Communities:
# - Next.js Discord: https://discord.gg/bUG7V3nhd5
# - React Community: https://react.dev/community/


# ============================================================================
# 💡 COMMON TASKS
# ============================================================================

# Task: Check if port 3000 is in use
lsof -i :3000

# Kill process on port 3000
kill -9 $(lsof -t -i :3000)

# View git status
git status

# Commit changes
git add .
git commit -m "Your message"

# View git log
git log --oneline

# Create new branch
git checkout -b feature/new-feature

# Merge branch
git merge feature/new-feature


# ============================================================================
# 🔄 WORKFLOW SHORTCUTS
# ============================================================================

# Full development cycle
git pull                 # Get latest
npm install             # Install deps
npm run dev             # Start developing

# Before deploying
npm run lint            # Check for errors
npm run type-check      # TypeScript check
npm run build           # Build for production
npm start               # Test production build
git push origin main    # Push to GitHub
# Then deploy via Vercel/platform


# ============================================================================
# 📝 NOTES
# ============================================================================

# - Always run 'npm install' after pulling code
# - Test locally before pushing/deploying
# - Keep commits small and descriptive
# - Use semantic commit messages (feat:, fix:, docs:, etc.)
# - Check TypeScript errors before building
# - Monitor bundle size in production builds
# - Update README.md after major changes
