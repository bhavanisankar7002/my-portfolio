import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Award,
  Presentation,
  ShieldCheck,
  Camera
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hackathons() {
  const hackathon = portfolioData.hackathons[0];

  return (
    <section id="hackathons" className="py-24 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Hackathons & Competitive Engineering</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Hackathon Experience
          </motion.h2>

          <p className="mt-3 text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Rapid prototyping, technical leadership, and collaborative problem solving under strict deadlines.
          </p>
        </div>

        {/* Featured Hackathon Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white rounded-3xl p-6 sm:p-10 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl overflow-hidden relative"
        >
          {/* Top Badge Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {hackathon.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {hackathon.achievement}
                </span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                {hackathon.name}
              </h3>
            </div>

            {/* Team Info Pill */}
            <div className="flex items-center gap-4 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 p-3.5 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 block uppercase font-mono">Team</span>
                <span className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">{hackathon.teamName}</span>
                <span className="text-xs text-cyan-400 font-medium ml-2">({hackathon.role})</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              "{hackathon.description}"
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="mb-10">
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Key Experience & Achievements</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hackathon.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-start gap-3"
                >
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills Demonstrated */}
          <div className="mb-10">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold mb-3">
              Demonstrated Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {hackathon.keySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
