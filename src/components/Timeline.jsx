import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Wrench, Trophy } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Aerospace Engineering',
    time: '2017 – 2021',
    desc: 'Studied flight dynamics, propulsion, and UAV structures. Built first fixed‑wing prototype.',
  },
  {
    icon: Wrench,
    title: 'R&D Engineer',
    time: '2021 – 2023',
    desc: 'Designed and integrated avionics, tuned controllers, and validated missions in the field.',
  },
  {
    icon: Rocket,
    title: 'Autonomy & Perception',
    time: '2023 – 2024',
    desc: 'ROS 2 pipelines, PX4 offboard control, computer vision for navigation and tracking.',
  },
  {
    icon: Trophy,
    title: 'Current Role',
    time: '2024 – Present',
    desc: 'Leading multi-vehicle projects and pushing reliability, safety, and performance at scale.',
  },
];

export default function Timeline() {
  return (
    <section className="relative mx-auto mt-20 max-w-5xl px-4">
      <h2 className="text-center text-2xl font-semibold text-slate-100 sm:text-3xl">Journey & Milestones</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-300">
        A visual path across key experiences, education, and the skills that shaped my work.
      </p>

      <div className="relative mt-10">
        {/* Central line */}
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-sky-500/40 via-slate-600/40 to-sky-500/40 md:block" />

        <ul className="space-y-6">
          {items.map((it, idx) => (
            <motion.li key={it.title} className="relative grid gap-3 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur md:grid-cols-[56px,1fr]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <div className="flex items-center md:justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 ring-1 ring-sky-500/30">
                  <it.icon className="h-6 w-6 text-sky-300" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-medium text-slate-100">{it.title}</h3>
                  <span className="text-xs text-slate-400">{it.time}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{it.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
