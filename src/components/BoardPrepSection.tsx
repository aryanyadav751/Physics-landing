import React from 'react';
import { BookOpenCheck, Sigma, CheckCircle2, FileSpreadsheet, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BOARD_PREP_CARDS } from '../data/physicsData';

const iconMap: Record<string, React.ElementType> = {
  BookOpenCheck,
  Sigma,
  CheckCircle2,
  FileSpreadsheet,
};

interface BoardPrepSectionProps {
  onStartPrep: () => void;
}

export const BoardPrepSection: React.FC<BoardPrepSectionProps> = ({ onStartPrep }) => {
  return (
    <section id="board-prep-section" className="relative py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 overflow-hidden bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Target 95%+ in Science Board</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900">
            Your Board Exam Command Centre.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Revise important concepts, formulas, diagrams and CBSE-style questions from one place.
          </p>
        </div>

        {/* 4 Command Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BOARD_PREP_CARDS.map((card) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            return (
              <div
                key={card.id}
                onClick={onStartPrep}
                className="group relative rounded-3xl glass-panel p-6 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-50 text-blue-400 dark:text-blue-400 light:text-blue-600 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Open Module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="text-center">
          <button
            id="start-board-prep-cta"
            onClick={onStartPrep}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-base sm:text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:brightness-110 active:scale-98 transition-all cursor-pointer group"
          >
            <span>Start Board Preparation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
