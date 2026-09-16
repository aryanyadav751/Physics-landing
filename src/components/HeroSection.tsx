import React from 'react';
import { ArrowRight, Sparkles, FlaskConical, Play, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/physicsData';
import { HeroVisual } from './HeroVisual';

interface HeroSectionProps {
  onStartLearning: () => void;
  onExploreLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearning, onExploreLab }) => {
  return (
    <section id="hero-section" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 glow-spot-cyan pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 glow-spot-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left">
            {/* Small Badge above Heading */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-100/70 border border-cyan-500/30 text-cyan-400 dark:text-cyan-300 light:text-cyan-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{SITE_CONFIG.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-100 dark:text-white light:text-slate-900">
              Master Physics by{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent underline decoration-cyan-500/40 decoration-wavy decoration-2">
                Understanding
              </span>
              , Not Memorising.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {SITE_CONFIG.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-start-learning-cta"
                onClick={onStartLearning}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-lab-cta"
                onClick={onExploreLab}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/80 light:bg-white border border-slate-700/80 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/50 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-base hover:bg-slate-800/80 dark:hover:bg-slate-800 light:hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
              >
                <FlaskConical className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Explore Discover Lab 🔬</span>
              </button>
            </div>

            {/* Micro proof points */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NCERT & CBSE 2026 Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Interactive Ray Tracing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Step-Wise AI Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual (On mobile, placed below hero text) */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
