import { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.background = '#0f172a';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = '#f8fafc';
    }
  }, [darkMode]);

  // Scroll-to-top button
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center z-40 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
            opacity: showTop ? 1 : 0,
            pointerEvents: showTop ? 'auto' : 'none',
            transform: showTop ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
            boxShadow: '0 4px 15px rgba(56,189,248,0.4)',
          }}
          aria-label="Back to top"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11V3M3 7l4-4 4 4" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
