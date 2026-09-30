import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertCircle,
  Code,
  Sparkles,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 dark:bg-slate-900 light:bg-white rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Header Image / Overlay */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden shrink-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-950 border border-slate-700/80 transition-all cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
                {project.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold mb-2">Overview</h4>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200 dark:text-slate-200 light:text-slate-800">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem & Solution Dual Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <h5 className="font-semibold text-sm text-amber-400 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Problem Addressed</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <h5 className="font-semibold text-sm text-cyan-400 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Implemented Solution</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Key Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/70 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold mb-1.5 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>My Specific Contribution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {project.myContribution}
              </p>
            </div>

            {/* Disclaimer if applicable */}
            {project.disclaimer && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-300">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{project.disclaimer}</span>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold mb-2.5">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-slate-700 dark:border-slate-700 light:border-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              {project.github && project.github !== '#' ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-900/60 text-slate-500 border border-slate-800/80 cursor-not-allowed">
                  <Github className="w-4 h-4" />
                  <span>GitHub (Repo Configurable)</span>
                </span>
              )}

              {project.liveDemo && project.liveDemo !== '#' ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-900/60 text-slate-500 border border-slate-800/80 cursor-not-allowed">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo (URL Configurable)</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
