import { useRevealAll } from '../../hooks/useScrollReveal';
import { experience } from '../../data/portfolio.jsx';
import { ExternalLink, MapPin, Award } from 'lucide-react';

export default function Experience() {
  useRevealAll();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="glow-orb" style={{ width: 400, height: 400, background: '#a78bfa', top: '30%', left: '-8%' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">Career Journey</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp, i) => (
            <div key={exp.id} className={`reveal reveal-delay-${i + 1}`}>
              <div className="glass rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${exp.color}25` }}>
                {/* Header bar */}
                <div className="px-6 py-4 flex flex-wrap items-start justify-between gap-4"
                  style={{ background: `linear-gradient(135deg, ${exp.color}10, transparent)`, borderBottom: `1px solid ${exp.color}15` }}>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <a href={exp.url} target="_blank" rel="noopener noreferrer"
                        className="font-semibold text-sm flex items-center gap-1 hover:opacity-80 transition-opacity"
                        style={{ color: exp.color }}>
                        {exp.company}
                        <ExternalLink size={12} />
                      </a>
                      <span className="text-slate-500 text-xs">·</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <MapPin size={10} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-bold text-white px-3 py-1 rounded-full"
                      style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}30` }}>
                      {exp.duration}
                    </span>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="px-6 py-5">
                  <ul className="space-y-3">
                    {exp.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}25` }}>
                          <span className="text-xs" style={{ color: exp.color }}>→</span>
                        </div>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Special achievement highlight */}
                  {exp.company === 'GAO Tek Inc' && (
                    <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
                      <Award className="text-yellow-400 flex-shrink-0" size={18} />
                      <div>
                        <div className="text-yellow-400 font-semibold text-xs">🏆 Best Intern of the Month</div>
                        <div className="text-slate-400 text-xs">Awarded in November for outstanding performance and on-time delivery.</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open to work */}
        <div className="mt-12 reveal text-center">
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white font-semibold text-sm">Open to New Opportunities</span>
            <span className="text-slate-400 text-xs">· Remote or On-site</span>
          </div>
        </div>
      </div>
    </section>
  );
}
