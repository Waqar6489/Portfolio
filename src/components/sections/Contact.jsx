import { useState } from 'react';
import { useRevealAll } from '../../hooks/useScrollReveal';
import { personalInfo } from '../../data/portfolio.jsx';
import { Send, Github, Linkedin, MessageCircle, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  useRevealAll();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message too short (min 10 chars)';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1500);
  };

  const onChange = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: '' }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="glow-orb" style={{ width: 450, height: 450, background: '#a78bfa', top: '10%', right: '-8%' }} />
      <div className="glow-orb" style={{ width: 350, height: 350, background: '#38bdf8', bottom: '10%', left: '-5%' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }} />
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="reveal">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-5 text-sm">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { icon: MapPin, label: 'Location', value: personalInfo.location },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}>
                        <Icon size={15} className="text-neon-blue" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">{label}</div>
                        {href ? (
                          <a href={href} className="text-sm text-slate-300 hover:text-neon-blue transition-colors">{value}</a>
                        ) : (
                          <div className="text-sm text-slate-300">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="reveal reveal-delay-1">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm">Find Me Online</h3>
                <div className="space-y-3">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                    style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(56,189,248,0.1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.1)'; }}
                  >
                    <Github size={18} className="text-slate-400 group-hover:text-neon-blue transition-colors" />
                    <div>
                      <div className="text-white text-xs font-medium">GitHub</div>
                      <div className="text-slate-500 text-xs">Waqar6489</div>
                    </div>
                  </a>

                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                    style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(56,189,248,0.1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.1)'; }}
                  >
                    <Linkedin size={18} className="text-slate-400 group-hover:text-neon-blue transition-colors" />
                    <div>
                      <div className="text-white text-xs font-medium">LinkedIn</div>
                      <div className="text-slate-500 text-xs">waqar-ali-software-engineer</div>
                    </div>
                  </a>

                  <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                    style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(56,189,248,0.1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.1)'; }}
                  >
                    <MessageCircle size={18} className="text-slate-400 group-hover:text-green-400 transition-colors" />
                    <div>
                      <div className="text-white text-xs font-medium">WhatsApp</div>
                      <div className="text-slate-500 text-xs">Quick response guaranteed</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="reveal reveal-delay-2">
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 15px rgba(37,211,102,0.2)' }}>
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-xs px-5 py-2">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white font-semibold mb-1">Send a Message</h3>
                  <p className="text-slate-400 text-xs mb-5">I reply within 24 hours. Let's discuss your project!</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={onChange('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={onChange('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Subject</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Project inquiry, collaboration..."
                      value={form.subject}
                      onChange={onChange('subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={onChange('message')}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
