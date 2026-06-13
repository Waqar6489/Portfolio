import { useRevealAll } from '../../hooks/useScrollReveal';
import { personalInfo, experience, education } from '../../data/portfolio.jsx';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { FaGithub, FaGraduationCap } from "react-icons/fa";



export default function About() {
  useRevealAll();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Accent */}
      <div className="glow-orb" style={{ width: 400, height: 400, background: '#22d3ee', top: '20%', right: '-10%' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <div className="reveal">
              <div className="glass rounded-2xl p-6 mb-6">
                <p className="text-slate-300 leading-relaxed text-base mb-4">
                  {personalInfo.bio}
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  I specialize in <span className="text-neon-blue font-medium">React + Django full-stack development</span> and WordPress customization, 
                  having delivered projects for clients in the <span className="text-purple-400 font-medium">UK and USA</span>.
                  My Final Year Project, an AI Personal Finance Planner, reflects my interest in combining 
                  AI technology with practical user applications.
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="reveal reveal-delay-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: 'Location', value: personalInfo.location },
                  { icon: FaGithub, label: 'GitHub', value: 'Waqar6489', href: personalInfo.github },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="glass rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}>
                      <Icon size={14} className="text-neon-blue" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">{label}</div>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-slate-300 hover:text-neon-blue truncate block transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-xs text-slate-300 truncate">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="reveal reveal-delay-2">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Education</h3>
              {education.map((ed) => (
                <div key={ed.degree} className="glass rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                     <FaGraduationCap  className='text-neon-blue'/>

                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{ed.degree}</div>
                      <div className="text-neon-blue text-xs">{ed.institution}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{ed.period}</div>
                      <ul className="mt-2 space-y-1">
                        {ed.highlights.map((h) => (
                          <li key={h} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-neon-blue mt-0.5 flex-shrink-0">›</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline — Experience */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider reveal">Experience Timeline</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #38bdf8, #a78bfa, transparent)' }} />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={exp.id} className={`reveal reveal-delay-${i + 1} relative pl-14`}>
                    {/* Dot */}
                    <div className="timeline-dot absolute left-[14px] top-1" />

                    <div className="glass rounded-2xl p-5 hover:border-neon-blue/30 transition-all duration-300"
                      style={{ borderColor: `${exp.color}20` }}>
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <div className="text-white font-semibold text-sm">{exp.role}</div>
                          <div className="text-xs font-medium mt-0.5" style={{ color: exp.color }}>
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-xs font-semibold text-white">{exp.duration}</div>
                          <div className="text-xs text-slate-500">{exp.period}</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                        <MapPin size={10} />
                        {exp.location}
                      </div>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((a) => (
                          <li key={a} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="mt-0.5 flex-shrink-0" style={{ color: exp.color }}>→</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                      <a href={exp.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs mt-3 transition-colors hover:text-neon-blue"
                        style={{ color: exp.color }}>
                        View Company <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
