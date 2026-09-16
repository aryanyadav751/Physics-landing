import React from 'react';
import { Activity, CheckCircle2, Flame, Award, AlertTriangle, ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';

interface DashboardPreviewProps {
  onTrackProgress: () => void;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ onTrackProgress }) => {
  return (
    <section id="student-dashboard-preview" className="relative py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context / Teaser */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Real-Time Performance Analytics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900 leading-tight">
              Know Exactly Where You Stand Before Boards.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Our intelligent learning engine diagnoses your strengths and highlights high-weightage weak areas like series-parallel resistors or sign conventions, so you never lose marks on test day.
            </p>

            <div className="pt-2">
              <button
                id="track-progress-cta-btn"
                onClick={onTrackProgress}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Track My Progress</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Mock Student Dashboard */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-cyan-500/30 shadow-2xl overflow-hidden relative">
              {/* Dashboard Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    cbse-portal.physicslab10.in/student/dashboard
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>14 Day Streak</span>
                </div>
              </div>

              {/* Title & User Greeting */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-white light:text-slate-900">
                    Your Physics Progress
                  </h3>
                  <p className="text-xs text-slate-400">Class 10 CBSE • Target 2026</p>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                  Prep Status: On Track
                </span>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-slate-900/80 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Questions Solved</div>
                  <div className="text-2xl font-black text-slate-100 dark:text-white light:text-slate-900 mt-1 font-mono">
                    247
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">+18 this week</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Accuracy</div>
                  <div className="text-2xl font-black text-cyan-400 mt-1 font-mono">
                    86%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Top 10th percentile</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Experiments</div>
                  <div className="text-2xl font-black text-indigo-400 mt-1 font-mono">
                    12 <span className="text-sm font-normal text-slate-400">/ 20</span>
                  </div>
                  <div className="text-[10px] text-indigo-300 mt-0.5">60% completed</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Predicted Score</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
                    23 <span className="text-sm font-normal text-slate-400">/ 25</span>
                  </div>
                  <div className="text-[10px] text-emerald-300 mt-0.5">Physics Theory</div>
                </div>
              </div>

              {/* Chapter Progress: ████████░░ 80% */}
              <div className="p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 mb-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Overall Chapter Progress
                  </span>
                  <div className="font-mono text-cyan-400 font-bold flex items-center gap-2">
                    <span className="tracking-widest hidden sm:inline">████████░░</span>
                    <span>80%</span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-slate-800 light:bg-slate-300 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full" />
                </div>
              </div>

              {/* Weak Topic Alert Card */}
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-rose-300">
                    Target Improvement Identified:
                  </div>
                  <div className="text-sm font-bold text-slate-100 dark:text-white light:text-slate-900">
                    Weak Topic: Electricity — Resistance
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
                    Recommended: 5 practice numericals on equivalent resistance of parallel resistors.
                  </p>
                </div>
                <button
                  onClick={onTrackProgress}
                  className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-semibold border border-rose-500/40 cursor-pointer"
                >
                  Revise Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
