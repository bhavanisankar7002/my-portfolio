import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Coffee, 
  Layout, 
  Palette, 
  Zap, 
  Atom, 
  Server, 
  Cpu, 
  Workflow, 
  Database, 
  Table, 
  Layers, 
  GitBranch, 
  Globe, 
  FileCode,
  Wrench
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolio';

// Map icon string names to actual Lucide icons safely
const iconMap = {
  Coffee,
  Code2,
  Terminal,
  Layout,
  Palette,
  Zap,
  Atom,
  Server,
  Cpu,
  Workflow,
  Database,
  Table,
  Layers,
  GitBranch,
  Github,
  Globe,
  FileCode
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...portfolioData.skills.map(s => s.category)];

  const filteredSkillCategories = selectedCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Skills & Development Stack
          </motion.h2>

          <p className="mt-3 text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Verified technologies and developer tools used in project development and coursework.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredSkillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white p-6 sm:p-8 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-md"
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400/90 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                  {group.items.length} Technologies
                </span>
              </div>

              {/* Grid of clean Technology Badges (NO fake percentage bars!) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((skill, skillIdx) => {
                  const IconComp = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-3.5 group hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 transition-colors shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 text-sm truncate">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 block truncate">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
