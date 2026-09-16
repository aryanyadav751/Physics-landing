import React from 'react';
import { Brain, FlaskConical, Bot, ArrowRight, Sparkles, SlidersHorizontal, Lightbulb, Compass } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  actionText: string;
  onClick: () => void;
  interactivePreview: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  badge,
  badgeColor,
  title,
  description,
  actionText,
  onClick,
  interactivePreview,
}) => {
  return (
    <div className="relative rounded-3xl glass-panel p-6 sm:p-7 glass-card-hover border border-slate-800/80 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between overflow-hidden group">
      {/* Background soft ambient highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 shadow-inner group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
          <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
            {badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 dark:text-white light:text-slate-900 mb-2.5">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-5">
          {description}
        </p>

        {/* Interactive mini demonstration block */}
        <div className="mb-5 rounded-xl bg-slate-950/60 dark:bg-slate-950/80 light:bg-slate-100/80 p-3 border border-slate-800/80 light:border-slate-300">
          {interactivePreview}
        </div>
      </div>

      <button
        onClick={onClick}
        className="w-full py-2.5 px-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/20 dark:bg-slate-800/60 dark:hover:bg-cyan-950/60 light:bg-slate-200/80 light:hover:bg-cyan-100/80 border border-slate-700/60 dark:border-slate-700 light:border-slate-300 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer group-hover:border-cyan-500/40"
      >
        <span>{actionText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

interface WhySectionProps {
  onExploreChapters: () => void;
  onExploreLab: () => void;
  onAskAI: () => void;
}

export const WhySection: React.FC<WhySectionProps> = ({
  onExploreChapters,
  onExploreLab,
  onAskAI,
}) => {
  return (
    <section id="why-physics-lab" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Visual Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900 leading-tight">
            “Physics Isn't Just a Subject.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              It's Something You Can See.
            </span>”
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            Stop memorising diagrams and formulas without understanding them. Physics Lab 10 turns difficult Class 10 Physics concepts into interactive learning experiences.
          </p>
        </div>

        {/* Three Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. Understand */}
          <FeatureCard
            icon={<Brain className="w-7 h-7 text-indigo-400 animate-pulse" />}
            badge="Cognitive Visuals"
            badgeColor="bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
            title="🧠 Understand"
            description="Learn concepts through simple explanations, visualisations, examples, and formulas that reveal the physical meaning behind each equation."
            actionText="Browse Visual Concepts"
            onClick={onExploreChapters}
            interactivePreview={
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span className="text-slate-300">Snell's Law:</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-bold">
                  n = sin i / sin r
                </div>
              </div>
            }
          />

          {/* 2. Experiment */}
          <FeatureCard
            icon={<FlaskConical className="w-7 h-7 text-cyan-400 animate-bounce" />}
            badge="20+ Labs"
            badgeColor="bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
            title="🔬 Experiment"
            description="Perform virtual experiments and observe what happens when you change variables like focal length, voltage, wire thickness, and angles in real time."
            actionText="Launch Experiment Workbench"
            onClick={onExploreLab}
            interactivePreview={
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">Resistor Slider:</span>
                </div>
                <span className="text-cyan-400 font-semibold">R = 5Ω → I = 2.4A</span>
              </div>
            }
          />

          {/* 3. Ask AI */}
          <FeatureCard
            icon={<Bot className="w-7 h-7 text-emerald-400" />}
            badge="24/7 CBSE Assistant"
            badgeColor="bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
            title="🤖 Ask AI"
            description="Ask the Physics AI Tutor questions and get step-by-step explanations, Cartesian sign conventions, and marking scheme rubrics."
            actionText="Open AI Doubt Solver"
            onClick={onAskAI}
            interactivePreview={
              <div className="text-left text-[11px] font-mono text-slate-300 truncate">
                <span className="text-emerald-400 font-bold">AI: </span>
                "V = IR. As R increases, electrons face higher resistance..."
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};
