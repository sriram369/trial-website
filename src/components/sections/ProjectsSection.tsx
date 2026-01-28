'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/constants';

export function ProjectsSection() {
  // Group projects by category
  const groupedProjects: Record<string, typeof PROJECTS> = {};
  PROJECTS.forEach((project) => {
    if (!groupedProjects[project.category]) {
      groupedProjects[project.category] = [];
    }
    groupedProjects[project.category].push(project);
  });

  return (
    <section
      id="projects"
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
          className="mb-24"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-4 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Selected Work
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
            Projects & Innovation
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Transformative projects across AI/ML engineering, product design, and full-stack development that demonstrate strategic thinking and technical excellence.
          </p>
        </motion.div>

        {/* Projects by category */}
        {Object.entries(groupedProjects).map(([category, projects], categoryIdx) => (
          <div key={category} className="mb-20">
            {/* Category header with prestige line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: categoryIdx * 0.1 }}
              className="relative mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-700/30" />
                <h3 className="text-lg font-display font-bold text-amber-400 whitespace-nowrap">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-700/30" />
              </div>
            </motion.div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <Link href={project.href || '#'} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="group relative h-96 overflow-hidden card-luxury cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Background with gradient */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/5 via-transparent to-black/50 group-hover:from-amber-950/10 transition-all duration-300" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-radial from-amber-400/10 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        {/* Project info */}
                        <div>
                          {/* Tech stack badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1.5 bg-amber-900/20 text-amber-200 border border-amber-700/30 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="text-xs px-3 py-1.5 bg-amber-900/20 text-amber-200 border border-amber-700/30 font-mono">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>

                          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight group-hover:text-amber-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Footer with link indicator */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                            {project.year}
                          </span>
                          <motion.div
                            className="flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ gap: '12px' }}
                          >
                            <span className="text-sm font-mono uppercase tracking-wider">
                              View
                            </span>
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Border glow on hover */}
                      <motion.div
                        className="absolute inset-0 border border-amber-400/0 pointer-events-none"
                        whileHover={{ borderColor: 'rgba(217, 119, 6, 0.3)' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />
    </section>
  );
}
