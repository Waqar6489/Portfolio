import { useState, useEffect } from 'react';
import { useRevealAll } from '../../hooks/useScrollReveal';
import { testimonials } from '../../data/portfolio.jsx';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  useRevealAll();
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (dir) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setFading(false);
    }, 250);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, []);

  const item = testimonials[current];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="glow-orb" style={{ width: 350, height: 350, background: '#38bdf8', bottom: '0%', left: '-5%' }} />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">Kind Words</p>
          <h2 className="section-title">Testimonials</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
        </div>

        <div className="reveal">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative quote icon */}
            <Quote size={60} className="absolute top-6 right-8 opacity-5 text-neon-blue" />

            {/* Testimonial content */}
            <div
              className="transition-all duration-300"
              style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(10px)' : 'translateY(0)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <blockquote className="text-slate-200 text-lg leading-relaxed mb-8 italic">
                "{item.text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-navy-900 text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}88)` }}>
                  {item.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{item.name}</div>
                  <div className="text-slate-400 text-sm">{item.role}</div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 250); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? 'linear-gradient(90deg, #38bdf8, #a78bfa)' : 'rgba(100,116,139,0.4)',
                    }}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', color: '#38bdf8' }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', color: '#38bdf8' }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
