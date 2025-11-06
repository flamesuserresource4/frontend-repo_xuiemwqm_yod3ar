import React from 'react';
import { motion } from 'framer-motion';

// Looping 2D illustration-style animation of a person working on a laptop
export default function AnimatedCharacter() {
  return (
    <div className="relative mx-auto mt-14 flex w-full max-w-5xl items-center justify-center px-4">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr,0.8fr]">
          {/* Character */}
          <div className="relative">
            <motion.div
              className="mx-auto h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72"
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Simple vector-like character using pure divs/SVG for zero asset cost */}
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <linearGradient id="skin" x1="0" x2="1">
                    <stop offset="0%" stopColor="#F9D8C1" />
                    <stop offset="100%" stopColor="#F1C4A5" />
                  </linearGradient>
                  <linearGradient id="shirt" x1="0" x2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                {/* Head */}
                <circle cx="100" cy="62" r="22" fill="url(#skin)" />
                {/* Hair */}
                <path d="M78 60c4-14 20-24 36-16 8 4 10 12 10 18-12-6-24-6-46-2z" fill="#0f172a" />
                {/* Body */}
                <rect x="70" y="86" width="60" height="50" rx="10" fill="url(#shirt)" />
                {/* Arms typing */}
                <motion.rect x="60" y="96" width="16" height="10" rx="5" fill="url(#skin)" animate={{ x: [58, 60, 62, 60] }} transition={{ duration: 1.2, repeat: Infinity }} />
                <motion.rect x="124" y="96" width="16" height="10" rx="5" fill="url(#skin)" animate={{ x: [126, 124, 122, 124] }} transition={{ duration: 1.2, repeat: Infinity }} />
                {/* Laptop */}
                <rect x="50" y="120" width="100" height="14" rx="6" fill="#1f2937" />
                <rect x="60" y="108" width="80" height="8" rx="3" fill="#334155" />
                <circle cx="100" cy="114" r="2" fill="#93c5fd" />
              </svg>
            </motion.div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl">Design • Autonomy • Flight Testing</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              I build reliable aerial systems from concept to sky—balancing aerodynamics, avionics, and software. This space shares
              milestones, prototypes, and learnings from UAV planes to agile quadcopters.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
              {['PX4', 'ROS 2', 'Computer Vision', 'Controls', 'Onboard Linux', 'Simulation'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
