import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, Award, FileText, ChevronRight } from 'lucide-react';
import { QUESTION_CATEGORIES, SAMPLE_QUESTIONS } from '../data/physicsData';

interface QuestionPreviewProps {
  onGoToPractice: () => void;
}

export const QuestionPreview: React.FC<QuestionPreviewProps> = ({ onGoToPractice }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Numericals');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // Find sample question matching category or default to first
  const activeQuestion =
    SAMPLE_QUESTIONS.find((q) => q.category.toLowerCase() === selectedCategory.toLowerCase()) ||
    SAMPLE_QUESTIONS[0];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowAnswer(true);
  };

  return (
    <section id="question-bank-section" className="relative py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CBSE Pattern Question Bank</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900">
            Practice Until You're Board Ready.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600">
            Master every question archetype expected in the Class 10 CBSE Board Physics examination.
          </p>
        </div>

        {/* Categories Horizontal Scrolling Pill Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {QUESTION_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-900/80 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Interactive Question Card */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel p-6 sm:p-8 border border-slate-700/80 dark:border-slate-800 light:border-slate-200 shadow-2xl relative">
          {/* Top metadata tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                {activeQuestion.category}
              </span>
              <span className="text-xs text-slate-400">
                {activeQuestion.chapter}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                Difficulty: <strong className="text-amber-400 font-bold">{activeQuestion.difficulty}</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                Marks: <strong className="text-cyan-400 font-bold">{activeQuestion.marks}</strong>
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 dark:text-white light:text-slate-900 leading-relaxed whitespace-pre-line">
              {activeQuestion.question}
            </h3>
          </div>

          {/* Options */}
          {activeQuestion.options && (
            <div className="space-y-3 mb-6">
              {activeQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === activeQuestion.correctOptionIndex;
                let optionStyle =
                  'bg-slate-900/60 dark:bg-slate-900 light:bg-slate-100 border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-slate-600';

                if (showAnswer) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-cyan-500 bg-cyan-950/40 text-cyan-300';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-sm sm:text-base flex items-center justify-between transition cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-mono text-xs text-slate-300 font-bold shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {showAnswer && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {showAnswer && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation & Marking Scheme Reveal */}
          {showAnswer && (
            <div className="p-4 rounded-2xl bg-slate-950/90 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-300 space-y-3 mb-6 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>CBSE Marking Scheme & Solution:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {activeQuestion.explanation}
              </p>

              <div className="pt-2 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-300 space-y-1">
                <div className="text-xs font-mono font-semibold text-slate-400">Step-wise distribution:</div>
                {activeQuestion.markingBreakdown.map((point, i) => (
                  <div key={i} className="text-xs text-emerald-400 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-slate-400">
              Over 500+ curated CBSE Physics questions available
            </span>
            <button
              id="try-practice-questions-cta"
              onClick={onGoToPractice}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>Try Practice Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
