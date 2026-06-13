import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown, MessageCircle, Mail  } from 'lucide-react';
import { useTyping } from '../../hooks/useTyping';
import { personalInfo } from '../../data/portfolio.jsx';
import { FaReact,FaWordpress } from "react-icons/fa";
import { SiDjango, SiReact } from "react-icons/si";


const roles = [
  'Full Stack Developer',
  'React + Django Engineer',
  'WordPress Expert',
  'Problem Solver',
];

export default function Hero() {
  const typed = useTyping(roles, 75, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(167,139,250,0.1) 0%, transparent 60%), #0f172a',
          }}
        />
        {/* Animated orbs */}
        <div
          className="glow-orb animate-float"
          style={{ width: 500, height: 500, background: '#38bdf8', top: '-10%', left: '-5%', animationDuration: '6s' }}
        />
        <div
          className="glow-orb animate-float"
          style={{ width: 400, height: 400, background: '#a78bfa', bottom: '0%', right: '-5%', animationDuration: '8s', animationDelay: '-3s' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', color: '#38bdf8' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Remote / Onsite Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold leading-tight mb-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Waqar Ali</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-6 h-9 flex items-center justify-center lg:justify-start"
          >
            <span className="text-slate-400">I'm </span>
            <span className="text-neon-blue ml-2 typing-cursor">{typed}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 text-base"
          >
            Full Stack Developer crafting scalable, high-performance web applications.
            Experienced with international remote clients across the UK and USA.
            Passionate about clean code, great UX, and modern AI tech.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10"
          >
            <a href='/images/resume.pdf' download="Resume.pdf" className="btn-primary flex items-center gap-2">
              <Download size={15} />
              Download Resume
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <MessageCircle size={15} />
              WhatsApp Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="social-link">
              <Mail size={18} />
            </a>
            <div className="h-4 w-px bg-slate-700 mx-1" />
            <span className="text-xs text-slate-500">{personalInfo.location}</span>
          </motion.div>
        </div>

        {/* Avatar / Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(167,139,250,0.2))', borderRadius: '50%' }} />

            {/* Rotating border */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-neon-blue/20 animate-spin-slow" />

            {/* Main avatar */}
            <div className="absolute inset-4 rounded-full glass flex items-center justify-center overflow-hidden"
              style={{ border: '2px solid rgba(56,189,248,0.3)' }}>
              <div className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.05), rgba(167,139,250,0.05))' }}>
                <img src='/images/Waqar_Ali.png' className="font-display font-bold text-8xl gradient-text select-none" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-1 -right-0 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-neon-blue animate-float"
              style={{ animationDelay: '-1s', border: '1px solid rgba(56,189,248,0.3)' }}>
              <SiReact size={20} />  
            </div>
            <div className="absolute -bottom-2 -left-2 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-purple-400 animate-float"
              style={{ animationDelay: '-3s', border: '1px solid rgba(167,139,250,0.3)' }}>
              <SiDjango size={20} /> 
            </div>
            <div className="absolute top-1/2 -right-12 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-cyan-400 animate-float"
              style={{ animationDelay: '-2s', border: '1px solid rgba(34,211,238,0.3)' }}>
              <FaWordpress size={20} />
            </div>
          </div>

          {/* Stats under avatar */}
          <div className="mt-6 flex items-center gap-4 justify-center">
            {[
              { label: 'Projects', value: '15+' },
              { label: 'Experience', value: '10mo' },
              { label: 'Clients', value: 'Intl.' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-xl gradient-text">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-500">Scroll</span>
        <ArrowDown size={16} className="text-slate-500" />
      </div>
    </section>
  );
}
