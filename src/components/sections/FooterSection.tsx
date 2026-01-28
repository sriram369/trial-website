'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function FooterSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="relative w-full bg-black overflow-hidden grain">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28">
        {/* Main content grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              {SITE_CONFIG.name}
            </h2>
            <p className="text-amber-400 text-sm font-mono uppercase tracking-widest mb-6">
              {SITE_CONFIG.title}
            </p>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
              Strategic AI/ML engineering, full-stack development, and thoughtful product innovation.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {['Expertise', 'Work', 'Journey'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-300 inline-block relative group"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono mb-8">
              Connect
            </h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      borderColor: 'rgba(217, 119, 6, 0.8)',
                      boxShadow: '0 0 20px rgba(217, 119, 6, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-amber-700/30 rounded flex items-center justify-center text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {IconComponent ? (
                      <IconComponent className="w-4 h-4" />
                    ) : (
                      <div className="w-4 h-4" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Prestige divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent mb-12 origin-center"
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono tracking-wide"
        >
          <p>© 2024 {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="text-amber-400/60">Crafted with Next.js 15, Motion React & TypeScript</p>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent" />
    </footer>
  );
}
