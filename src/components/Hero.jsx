import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Sparkles, 
  Code, 
  Compass, 
  Layers 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Orbs & Grid Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 tracking-wide">
            {portfolioData.profile.availability}
          </span>
        </motion.div>

        {/* Greeting & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg sm:text-xl font-medium mb-3 tracking-wide flex items-center justify-center gap-2">
            <span>Hi, I'm</span>
            <span className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold">{portfolioData.profile.shortName}</span>
            <Sparkles className="w-4 h-4 text-cyan-400 inline" />
          </h2>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.1] mb-6">
            <span className="block">{portfolioData.profile.headline.split('&')[0]}</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              & {portfolioData.profile.headline.split('&')[1] || 'Full-Stack Developer'}
            </span>
          </h1>
        </motion.div>

        {/* Bio / Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-10"
        >
          {portfolioData.profile.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={portfolioData.profile.resumeUrl}
            download="Bhavani-Sankar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:bg-slate-850 dark:hover:bg-slate-800 hover:border-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Quick Social Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 pt-6 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 max-w-md mx-auto"
        >
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
              <Github className="w-4 h-4" />
            </div>
            <span>GitHub</span>
          </a>

          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
              <Linkedin className="w-4 h-4" />
            </div>
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
