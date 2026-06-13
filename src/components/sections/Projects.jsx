import { useState } from 'react';
import { projects } from '../../data/portfolio.jsx';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Django', 'Flask', 'WordPress', 'Oracle Apex'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="glow-orb" style={{ width: 400, height: 400, background: '#38bdf8', bottom: '5%', right: '-5%' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={
                active === cat
                  ? {
                      background: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
                      color: '#0f172a',
                      boxShadow: '0 4px 15px rgba(56,189,248,0.35)',
                    }
                  : {
                      background: 'rgba(30,41,59,0.6)',
                      border: '1px solid rgba(56,189,248,0.15)',
                      color: '#94a3b8',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              // Card standard CSS fade-in animation ke sath chalega jab bhi filter hoga
              className="project-card group overflow-hidden rounded-2xl animate-fade-in transition-all duration-300"
            >
              {/* Card header (Image section fully covered) */}
              <div className="relative h-48 bg-gradient-to-br flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 shimmer-effect z-10 pointer-events-none" />
                
                <img 
                  src={project.icon} 
                  className="w-full h-full object-cover select-none relative group-hover:scale-110 transition-transform duration-300" 
                  alt={project.title}
                />
                  
                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold z-20"
                    style={{ background: 'rgba(56,189,248,0.85)', color: '#0f172a', backdropFilter: 'blur(4px)' }}>
                    Featured
                  </span>
                )}
                <span className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-semibold z-20"
                  style={{ background: 'rgba(0,0,0,0.7)', color: '#fff', backdropFilter: 'blur(4px)' }}>
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">{project.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md font-medium"
                      style={{ background: 'rgba(56,189,248,0.08)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.15)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-neon-blue hover:text-white transition-colors"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <a
                    href={`https://github.com/Waqar6489`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <Github size={13} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <a
            href={`https://github.com/Waqar6489`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}