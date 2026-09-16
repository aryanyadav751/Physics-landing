import React from 'react';
import { BookOpen, Eye, FlaskConical, PenTool, Award, ArrowRight, Zap } from 'lucide-react';
import { LEARNING_FLOW_STEPS } from '../data/physicsData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Eye,
  FlaskConical,
  PenTool,
  Award,
};

export const LearningFlow: React.FC = () => {
  return (
    <section id="learning-flow-section" className="relative py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>The 5-Step Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900">
            How You Master Physics
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600">
            A structured visual methodology designed specifically for Class 10 CBSE learners.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting Animated Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-12 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-30">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {LEARNING_FLOW_STEPS.map((item, index) => {
              const IconComponent = iconMap[item.icon] || BookOpen;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-3xl glass-panel p-6 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number Badge and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-900/90 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Flow Arrow indicator for mobile/tablet */}
                  {index < LEARNING_FLOW_STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center pt-4 text-cyan-400">
                      <span className="text-lg">↓</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
