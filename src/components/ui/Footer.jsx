import { Github, Linkedin, Heart, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio.jsx';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          
          <span className="text-slate-400 text-sm"><code className='text-md '>{"< Waqar Ali />"}</code></span>
        </div>

        <p className="text-slate-600 text-xs flex items-center gap-1">
          Built with using React + Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={15} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={15} />
          </a>
          <a href={personalInfo.email} target="_blank" rel="noopener noreferrer" className="social-link">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
