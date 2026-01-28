'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NICHE_AREAS } from '@/constants';

export function NicheAreasSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="niche-areas"
      className="relative w-full py-28 md:py-40 bg-black overflow-hidden grain"
    >
      {/* Luxury accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-20"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-4 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Core Competencies
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
            Areas of Expertise
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Deep specialization in AI/ML engineering, full-stack development, and strategic product innovation. Five interconnected domains of excellence.
          </p>
        </motion.div>

        {/* Grid of cards with asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {NICHE_AREAS.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`${idx === 4 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
            >
              <motion.div
                layoutId={area.id}
                onClick={() =>
                  setExpandedId(expandedId === area.id ? null : area.id)
                }
                className="group relative h-80 cursor-pointer overflow-hidden"
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 card-luxury">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Icon and title */}
                  <div>
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {area.icon}
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3 leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Skills preview */}
                  <div className="flex flex-wrap gap-2">
                    {area.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 bg-amber-900/20 text-amber-200 border border-amber-700/30 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                    {area.skills.length > 2 && (
                      <span className="text-xs px-3 py-1.5 bg-amber-900/20 text-amber-200 border border-amber-700/30 font-mono">
                        +{area.skills.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 border border-amber-400/0 pointer-events-none"
                  whileHover={{ borderColor: 'rgba(217, 119, 6, 0.5)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Expanded details */}
              <AnimatePresence>
                {expandedId === area.id && (
                  <motion.div
                    layoutId={`expanded-${area.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-6 border border-amber-700/30 bg-black/50 backdrop-blur-sm"
                  >
                    <h4 className="text-xs uppercase tracking-widest text-amber-300 font-mono mb-4">
                      Complete Skillset
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-sm px-4 py-2 bg-gradient-to-r from-amber-900/30 to-amber-800/20 text-amber-100 border border-amber-600/40 font-mono"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />
    </section>
  );
}
