'use client';

import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { NicheAreasSection } from '@/components/sections/NicheAreasSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <NicheAreasSection />
      <ProjectsSection />
      <ExperienceSection />
      <FooterSection />
    </main>
  );
}
