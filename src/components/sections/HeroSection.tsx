'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerRef = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      },
    }),
  };

  const words = ['LEO', 'GARDNER'];
  const subtitle = ['Sriram', 'Naidu', 'Thota'];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-32 md:pt-0"
    >
      {/* Luxury background with texture */}
      <div className="absolute inset-0 grain opacity-40" />
      
      {/* Geometric accent elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 border border-amber-400/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div
        className="absolute -bottom-32 left-10 w-80 h-80 border border-amber-700/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main content - Editorial aesthetic */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Prestige line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-16 max-w-md mx-auto origin-center"
        />

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-8 font-mono letter-spacing-wide"
        >
          Creative Technologist
        </motion.p>

        {/* Main headline - Large, editorial style */}
        <div className="mb-6">
          <div className="flex flex-col items-center gap-0">
            {words.map((word, i) => (
              <motion.div
                key={word}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-display leading-[0.9] tracking-tighter">
                  {word}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtitle - Elegant serif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-xl sm:text-2xl text-amber-100 font-serif italic tracking-wide">
            {subtitle.join(' ')}
          </p>
        </motion.div>

        {/* Dividing line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mb-12 origin-center"
        />

        {/* Tagline - Refined description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed mb-16"
        >
          Crafting{' '}
          <span className="text-amber-300 font-semibold">
            intelligent interfaces
          </span>{' '}
          at the intersection of AI innovation and refined design. Building tomorrow's digital experiences today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="#niche-areas"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="group relative px-10 py-4 text-white font-mono text-sm uppercase tracking-widest border-2 border-amber-400 overflow-hidden"
          >
            <div className="absolute inset-0 bg-amber-400 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 block group-hover:text-black transition-colors duration-300">
              View Work
            </span>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="group px-10 py-4 text-amber-300 font-mono text-sm uppercase tracking-widest border border-amber-600/50 hover:border-amber-400 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{
            delay: 1.2,
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          className="flex flex-col items-center gap-3 text-amber-400"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
