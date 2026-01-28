'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/constants';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 md:py-40 bg-black overflow-hidden grain"
    >
      {/* Luxury accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-24"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-4 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Professional Journey
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
            Experience & Growth
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            A curated timeline of strategic roles, meaningful contributions, and continuous evolution in AI/ML, full-stack development, and product innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-3.5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-amber-700 via-amber-600/30 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot with gold accent */}
                <motion.div
                  className="absolute -left-[11px] md:-left-[19px] w-6 h-6 rounded-full bg-black border-2 border-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.3)]"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                />

                {/* Content card */}
                <motion.div
                  className="group card-luxury p-8 hover:border-amber-500/40 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header with period */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-amber-400 font-mono text-sm tracking-wide uppercase">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Prestige line divider */}
                  <div className="h-px bg-gradient-to-r from-amber-700/50 via-amber-600/20 to-transparent mb-6" />

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights with premium styling */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1 h-1 rounded-full bg-amber-500 mt-2.5" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />
    </section>
  );
}
