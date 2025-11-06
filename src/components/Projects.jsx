import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'VTOL Concept Study',
    desc: 'Hybrid lift/thrust prototype with autonomous transition flight.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Search & Rescue Quad',
    desc: 'Thermal imaging payload and waypoint missions in rough terrain.',
    img: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fixed‑Wing Mapper',
    desc: 'Long‑endurance platform for aerial mapping and surveying.',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Swarm Experiments',
    desc: 'Multi‑agent coordination with offboard control and CV tracking.',
    img: 'https://images.unsplash.com/photo-1549946275-8ebb70ee9ca7?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 pb-24">
      <h2 className="text-center text-2xl font-semibold text-slate-100 sm:text-3xl">Selected Projects</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-300">
        A snapshot of recent work. Hover for details, click for a closer look.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href="#"
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="text-sm font-medium text-slate-100">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-slate-300 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                {p.desc}
              </p>
            </div>
            <div className="absolute inset-0 hidden items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 group-hover:flex">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">View details</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
