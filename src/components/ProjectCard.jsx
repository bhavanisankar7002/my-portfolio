import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, Code2 } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group bg-slate-900/60 dark:bg-slate-900/60 light:bg-white rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Thumbnail Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-300 border border-slate-700/80 backdrop-blur-md">
            {project.badge}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onSelect(project)}
            className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-1 mb-2.5"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {project.github && project.github !== '#' ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              ) : (
                <span 
                  className="p-2 rounded-lg bg-slate-950/40 text-slate-600 cursor-not-allowed"
                  title="GitHub Link (Configurable in portfolio.js)"
                >
                  <Github className="w-4 h-4" />
                </span>
              )}

              {project.liveDemo && project.liveDemo !== '#' ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span 
                  className="p-2 rounded-lg bg-slate-950/40 text-slate-600 cursor-not-allowed"
                  title="Live Demo Link (Configurable in portfolio.js)"
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
              )}
            </div>

            <button
              onClick={() => onSelect(project)}
              className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn cursor-pointer"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
