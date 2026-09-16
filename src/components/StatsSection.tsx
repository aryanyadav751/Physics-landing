import React from 'react';
import { BookOpen, Sparkles, HelpCircle, FlaskConical } from 'lucide-react';
import { STATS_DATA } from '../data/physicsData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Sparkles,
  HelpCircle,
  FlaskConical,
};

export const StatsSection: React.FC = () => {
  return (
    <section id="trust-stats-strip" className="relative py-8 sm:py-10 border-y border-slate-800/80 dark:border-slate-800 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/50 light:bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            Everything you need for Class 10 Physics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="relative rounded-2xl glass-panel p-4 sm:p-5 text-center group hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-50 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 mb-2 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900 bg-gradient-to-br from-white to-slate-300 dark:from-white dark:to-slate-300 light:from-slate-900 light:to-slate-700 bg-clip-text">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
