import React from 'react';
import { ArrowRight, FlaskConical, Sparkles, Atom } from 'lucide-react';

interface CTASectionProps {
  onStartLearning: () => void;
  onExploreLab: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartLearning, onExploreLab }) => {
  return (
    <section id="final-cta-section" className="relative py-20 sm:py-28 overflow-hidden border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200">
      {/* Animated Subtle Physics Particles & Orbiting Rings */}
      <div className="absolute inset-0 sci-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Orbit ring visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-cyan-500/10 pointer-events-none animate-orbit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-indigo-500/15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Atom className="w-4 h-4 animate-spin-slow" />
          <span>CBSE Class 10 Physics Mastery</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-100 dark:text-white light:text-slate-900 leading-tight">
          Ready to See Physics{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Differently?
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-5 text-base sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Start learning Class 10 Physics through concepts, experiments, questions and AI.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="bottom-cta-start-learning"
            onClick={onStartLearning}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base sm:text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="bottom-cta-explore-lab"
            onClick={onExploreLab}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-cyan-500/50 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-base sm:text-lg hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group"
          >
            <FlaskConical className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Explore Discover Lab 🔬</span>
          </button>
        </div>

        <div className="mt-8 text-xs font-mono text-slate-400">
          No credit card required • Instant access to 4 chapters & virtual labs
        </div>
      </div>
    </section>
  );
};
