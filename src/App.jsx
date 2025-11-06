import React from 'react';
import Hero from './components/Hero';
import AnimatedCharacter from './components/AnimatedCharacter';
import Timeline from './components/Timeline';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold tracking-wide text-slate-100">UAV • Quadcopter • Portfolio</div>
          <nav className="hidden gap-6 text-xs text-slate-300 sm:flex">
            <a href="#hero" className="hover:text-white">Home</a>
            <a href="#journey" className="hover:text-white">Journey</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <div id="hero"><Hero /></div>
        <AnimatedCharacter />
        <div id="journey"><Timeline /></div>
        <div id="projects"><Projects /></div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Aerospace Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
