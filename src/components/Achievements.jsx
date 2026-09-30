import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Code, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Key Achievements
          </motion.h2>

          <p className="mt-3 text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Highlights of technical accomplishments, hackathon milestones, and engineering growth.
          </p>
        </div>

        {/* Timeline / Achievement Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {portfolioData.achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white rounded-2xl p-6 sm:p-8 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-md flex flex-col sm:flex-row items-start gap-5 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                {index === 0 ? (
                  <Trophy className="w-6 h-6" />
                ) : index === 1 ? (
                  <Code className="w-6 h-6" />
                ) : (
                  <GraduationCap className="w-6 h-6" />
                )}
              </div>

              {/* Achievement Text */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>

                <h4 className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                  {item.organization}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
