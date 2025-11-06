import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Hero section with two interactive 3D models, parallax background images, and tasteful overlays
export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax1 = `translateY(${scrollY * 0.15}px)`;
  const parallax2 = `translateY(${scrollY * 0.25}px)`;

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background imagery with subtle blur/opacity and parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1510823790080-8dbe301f2a9f?q=80&w=1600&auto=format&fit=crop"
          alt="UAV background"
          className="absolute left-1/2 top-0 h-[140%] w-[120%] -translate-x-1/2 object-cover opacity-25 blur-sm"
          style={{ transform: parallax1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1499134023007-33d5d7b63f77?q=80&w=1600&auto=format&fit=crop"
          alt="Quadcopter background"
          className="absolute left-1/2 bottom-[-10%] h-[140%] w-[120%] -translate-x-1/2 object-cover opacity-20 blur-[1.5px]"
          style={{ transform: parallax2 }}
        />
        {/* Soft gradient to focus attention on 3D models */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 md:pt-28">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl md:text-5xl">
            Aerospace Systems & UAV Portfolio
          </h1>
          <p className="mt-3 max-w-2xl text-balance text-sm text-slate-300 sm:text-base">
            Exploration of fixed‑wing and multirotor platforms, autonomy, and mission‑ready design.
          </p>
        </div>

        {/* 3D Models */}
        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Fixed‑wing UAV */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur">
            <Spline
              scene="https://prod.spline.design/Fk2k4mImHfKOWezK/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              Fixed‑Wing UAV
            </div>
          </div>

          {/* Quadcopter */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur">
            <Spline
              scene="https://prod.spline.design/gzQ9zq8oHrm2c2vY/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              Quadcopter
            </div>
          </div>
        </div>

        {/* Key stats / captions */}
        <div className="mt-8 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          {[
            { k: 'Flight Hours', v: '250+' },
            { k: 'Airframes', v: '12' },
            { k: 'Missions', v: '40+' },
            { k: 'Tech Stack', v: 'PX4 • ROS • CV' },
          ].map((item) => (
            <div key={item.k} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
              <div className="text-slate-200">{item.v}</div>
              <div className="mt-0.5 text-[11px] text-slate-400">{item.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
