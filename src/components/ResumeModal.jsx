import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Copy,
  FolderPlus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const resumeUrl = portfolioData.profile.resumeUrl;

  if (!isOpen) return null;

  const handleDownloadAttempt = () => {
    // Trigger festive confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // Ignore if canvas-confetti unavailable
    }

    // Attempt direct download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bhavani-Sankar-Challa-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyPath = () => {
    navigator.clipboard.writeText(`public/resume/Bhavani-Sankar-Resume.pdf`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-slate-900 dark:bg-slate-900 light:bg-white rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Official Document</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Download Resume
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
            You are downloading the official resume of <strong className="text-slate-100">{portfolioData.profile.name}</strong> ({portfolioData.profile.headline}).
          </p>

          {/* Action Box */}
          <div className="p-5 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4 mb-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Configured Resume Path:</span>
              <span className="text-cyan-400">{resumeUrl}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadAttempt}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Start PDF Download</span>
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>

          {/* Clear Setup Guide for User */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-400 space-y-2">
            <div className="flex items-center justify-between font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <FolderPlus className="w-3.5 h-3.5 text-cyan-400" />
                <span>How to place your PDF file:</span>
              </span>
              <button
                onClick={copyPath}
                className="flex items-center gap-1 text-[11px] text-cyan-400 hover:underline"
              >
                {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied Path!' : 'Copy Path'}</span>
              </button>
            </div>
            <p className="leading-relaxed">
              Place your PDF resume inside your project directory at: <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">public/resume/Bhavani-Sankar-Resume.pdf</code>.
            </p>
          </div>

          {/* Close CTA */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
