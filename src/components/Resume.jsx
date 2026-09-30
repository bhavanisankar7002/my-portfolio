import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Resume({ onOpenResume }) {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/20 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Glow backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Curriculum Vitae</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Want to know more about my experience?
            </h2>

            <p className="mt-3 text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Download my complete resume for a detailed breakdown of coursework, full-stack projects, hackathon leadership, and technical proficiencies.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0">
            <a
              href={portfolioData.profile.resumeUrl}
              download="Bhavani-Sankar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer group"
            >
              <FileText className="w-5 h-5" />
              <span>Download Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
