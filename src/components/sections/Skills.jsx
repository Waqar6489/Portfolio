import { useEffect, useRef } from 'react';
import { useRevealAll } from '../../hooks/useScrollReveal';
import { skills, techIcons } from '../../data/portfolio.jsx';

function ProgressBar({ level, color }) {
  const ref = useRef(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        bar.style.transform = `scaleX(${level / 100})`;
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(bar);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="progress-bar mt-1.5">
      <div
        ref={ref}
        className="progress-fill"
        style={{
          transform: 'scaleX(0)',
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  useRevealAll();
 

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="glow-orb" style={{ width: 450, height: 450, background: '#a78bfa', top: '10%', left: '-8%' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">What I Work With</p>
          <h2 className="section-title">Tech Stack & Skills</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
        </div>

        {/* Tech icon cloud */}
        <div className="reveal mb-14">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-xs text-slate-500 uppercase tracking-widest text-center mb-6">Technologies</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {techIcons.map((t, i) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 transition-all duration-200 cursor-default"
                  style={{
                    background: 'rgba(30,41,59,0.8)',
                    border: '1px solid rgba(56,189,248,0.1)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.borderColor = `${t.color}50`;
                    e.currentTarget.style.boxShadow = `0 8px 20px ${t.color}25`;
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.1)';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <span className='text-xl ' style={{ color: t.color }}>
              {t.icon}
            </span>
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill categories with progress bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((cat, ci) => (
            <div key={cat.category} className={`reveal reveal-delay-${ci + 1}`}>
              <div className="glass rounded-2xl p-5 h-full hover:border-opacity-40 transition-all duration-300"
                style={{ borderColor: `${cat.color}20` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cat.color}40`;
                  e.currentTarget.style.boxShadow = `0 12px 35px ${cat.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${cat.color}20`;
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-white font-semibold text-sm">{cat.category}</h3>
                </div>
                <div className="space-y-3">
                  {cat.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-300">{skill.name}</span>
                        <span className="text-xs font-semibold" style={{ color: cat.color }}>{skill.level}%</span>
                      </div>
                      <ProgressBar level={skill.level} color={cat.color} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="mt-10 reveal">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-white font-semibold text-sm mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Communication', 'Team Collaboration', 'Problem Solving', 'Quick Learning', 'Time Management', 'Remote Work', 'Cross-cultural Collaboration'].map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
