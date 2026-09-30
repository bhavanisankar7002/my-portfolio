import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  MessageSquare,
  Globe,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { profile } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    copiedEmail: false,
    error: null
  });

  // Configurable form endpoint (e.g., https://formspree.io/f/your-form-id)
  const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '';

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true, error: null });

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState)
        });

        if (response.ok) {
          triggerSuccess();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        // Fallback to mailto if API call fails
        triggerMailtoFallback();
      }
    } else {
      // Graceful fallback when no backend service endpoint is configured
      triggerMailtoFallback();
    }
  };

  const triggerSuccess = () => {
    setStatus({ submitting: false, submitted: true, copiedEmail: false, error: null });
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    } catch (e) { }
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    triggerSuccess();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setStatus({ ...status, copiedEmail: true });
    setTimeout(() => setStatus({ ...status, copiedEmail: false }), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Let's build something useful together.
          </motion.h2>

          <p className="mt-3 text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Open to internship opportunities, full-stack development roles, hackathons, and technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Direct Contact Cards (Left 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                >
                  {status.copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">Direct Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:text-cyan-400 transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">Professional Network</span>
                  <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">LinkedIn Profile</h4>
                </div>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Visit LinkedIn Profile"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">Code Repositories</span>
                  <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">GitHub Profile</h4>
                </div>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Visit GitHub Profile"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in <strong>{profile.location}</strong> — Open to Remote & On-Site Internships</span>
            </div>
          </motion.div>

          {/* Interactive Contact Form (Right 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white rounded-3xl p-6 sm:p-8 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the form below to reach out directly regarding opportunity evaluations or project inquiries.
            </p>

            {status.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-lg font-bold text-slate-100">Message Prepared / Sent!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message client has been triggered or sent to Bhavani Sankar.
                </p>
                <button
                  onClick={() => setStatus({ ...status, submitted: false })}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name to connect"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
