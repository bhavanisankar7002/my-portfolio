import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  BookOpen, 
  Code, 
  Lightbulb, 
  Trophy, 
  Target, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { aboutDetails } = portfolioData.profile;

  const focusPoints = [
    {
      icon: Code,
      title: "Full-Stack Web Engineering",
      description: "Building responsive frontend interfaces using React & Tailwind CSS coupled with Node.js, Express, and Python API backends."
    },
    {
      icon: Lightbulb,
      title: "Practical Problem Solving",
      description: "Focusing on building practical software solutions for real-world user problems rather than basic theoretical assignments."
    },
    {
      icon: Trophy,
      title: "Hackathons & Teamwork",
      description: "Active participant and team leader in competitive hackathons (such as HackYatra), building rapid prototypes under pressure."
    },
    {
      icon: Target,
      title: "Continuous Technology Learning",
      description: "Constantly sharpening core computer science fundamentals, data structures, OOP principles, and modern web tools."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight"
          >
            Driven CSE Student & Purposeful Developer
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Profile Card (Left 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white rounded-2xl p-6 sm:p-8 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl relative"
          >
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <div className="p-3 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">Candidate Profile</span>
              <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-1">
                {aboutDetails.fullName}
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                {portfolioData.profile.headline}
              </p>
            </div>

            {/* Profile Grid Information */}
            <div className="space-y-4 text-sm border-t border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-5 my-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Field of Study</span>
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold">{aboutDetails.field}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Core Focus</span>
                <span className="text-cyan-400 font-semibold">{aboutDetails.focus}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Department / Program</span>
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium text-xs sm:text-sm">{aboutDetails.institution}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Expected Graduation</span>
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-mono font-medium">{aboutDetails.expectedGraduation}</span>
              </div>
            </div>

            {/* Interests badges */}
            <div>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-2.5">Key Technical Interests</span>
              <div className="flex flex-wrap gap-2">
                {aboutDetails.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Narrative & Focus Cards (Right 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white p-6 sm:p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Developer Overview</span>
              </h3>
              
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                I am a Computer Science Engineering student dedicated to building practical, reliable, and user-friendly software applications. My goal is to work on software engineering and full-stack web development projects that address real operational and civic challenges.
              </p>

              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                Through hands-on project building and national hackathons, I have developed a strong foundation in modern web technology stacks (React, JavaScript, Node.js, Express, Python) and collaborative software development practices.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 text-sm mb-1.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
