import { useRevealAll } from '../../hooks/useScrollReveal';
import { achievements } from '../../data/portfolio.jsx';
import { X, ZoomIn } from "lucide-react"; 
import { useState } from 'react';

const certPlaceholders = [
  { title: 'Python for Everybody', platform: 'Coursera / University of Michigan', status: 'Completed', icon: '🐍', color: '#3776AB' },
  { title: 'React – The Complete Guide', platform: 'Udemy', status: 'Completed', icon: '⚛️', color: '#61DAFB' },
  { title: 'Django REST Framework', platform: 'Udemy', status: 'Completed', icon: '🦄', color: '#092E20' },
  { title: 'WordPress Development', platform: 'LinkedIn Learning', status: 'Completed', icon: '📝', color: '#21759B' },
];

export default function Achievements() {
  useRevealAll();
  const [activeCert, setActiveCert] = useState(null);

  const certData = [
    { src: "/certificate/BestIntern.png", alt: "Best Intern of the Month", color: "#3b82f6" },
    { src: "/certificate/Webdevelopment.png", alt: "Web Development Certification", color: "#22c55e" },
    { src: "/certificate/DigitalMarketing.png", alt: "Digital Marketing Certification", color: "#eab308" },
    { src: "/certificate/CompleteIntern.png", alt: "Complete Intern at GAO", color: "#a855f7" },
    { src: "/certificate/WordPress.png", alt: "WordPress Certificate", color: "#a855f7" },
    { src: "/certificate/SoftSkill.png", alt: "SoftSkill Certificate", color: "#a855f7" },
    { src: "/certificate/Oracle.png", alt: "Oracle Apex certificate", color: "#a855f7" },
    { src: "/certificate/C++.png", alt: "Cisco C++ Certificate", color: "#a855f7" },
    { src: "/certificate/IT.png", alt: "Cisco IT Essentail", color: "#a855f7" },
    { src: "/certificate/Linux.png", alt: "Cisco NDG Linux", color: "#a855f7" },
    { src: "/certificate/C++2.png", alt: "Cisco C++", color: "#a855f7" },
    { src: "/certificate/Linux.png", alt: "Cisco IT Essentail", color: "#a855f7" },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="glow-orb" style={{ width: 400, height: 400, background: '#fbbf24', top: '10%', right: '-8%', opacity: 0.08 }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">Recognition & Learning</p>
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {achievements.map((item, i) => (
            <div key={item.id} className={`reveal reveal-delay-${i + 1}`}>
              <div className="glass rounded-2xl p-6 h-full text-center group hover:border-opacity-40 transition-all duration-300"
                style={{ border: `1px solid ${item.color}25` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}50`;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${item.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}25`;
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                <div className="text-xs font-semibold mb-3" style={{ color: item.color }}>{item.issuer}</div>
                <div className="text-xs text-slate-500 mb-3">{item.date}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal relative">
      {/* Header Section */}
      <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
        <span className="text-neon-blue">📜</span> Certifications
      </h3>

      {/* Responsive Grid for Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certData.map((cert, i) => (
          <div key={i} className={`reveal reveal-delay-${i + 1}`}>
            <div 
              onClick={() => setActiveCert(cert)} // Open modal on click
              className="glass rounded-xl p-3 flex flex-col gap-3 group hover:border-opacity-30 transition-all duration-300 h-full cursor-zoom-in bg-slate-900/40 backdrop-blur-sm border border-white/10"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${cert.color}60`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; }}
            >
              {/* Image Container with Zoom Effect */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/5 relative bg-black/20">
                <img 
                  src={cert.src} 
                  alt={cert.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay icon indication */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>

              {/* Badge & Info Footer inside the Card */}
              <div className="flex items-center justify-between mt-1 px-1">
                <span className="text-white font-medium text-xs truncate max-w-[70%]">
                  {cert.alt}
                </span>
                <span 
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  Completed
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🌟 Clear View Full-Screen Modal Popup */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActiveCert(null)} // Close when clicking background shadow
        >
          {/* Close Button Top Right */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
            onClick={() => setActiveCert(null)}
          >
            <X size={24} />
          </button>

          {/* Modal Container */}
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking image itself
          >
            <img 
              src={activeCert.src} 
              alt={activeCert.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/20"
            />
            {/* Caption Text Below Image */}
            <p className="text-white text-sm font-semibold mt-4 tracking-wide text-center bg-slate-900/60 px-4 py-2 rounded-full border border-white/5">
              {activeCert.alt}
            </p>
          </div>
        </div>
      )}
    </div>

      </div>
    </section>
  );
}
