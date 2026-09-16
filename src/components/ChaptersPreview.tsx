import React from 'react';
import { Telescope, Eye, Zap, Magnet, ArrowRight, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { Chapter } from '../types';
import { CHAPTERS_DATA } from '../data/physicsData';

const iconMap: Record<string, React.ElementType> = {
  Telescope,
  Eye,
  Zap,
  Magnet,
};

interface ChapterCardProps {
  chapter: Chapter;
  onExplore: (chapterId: string) => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, onExplore }) => {
  const IconComponent = iconMap[chapter.iconName] || BookOpen;

  return (
    <div
      onClick={() => onExplore(chapter.id)}
      className="group relative rounded-3xl glass-panel p-6 sm:p-7 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-500/50 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Top ambient color glow */}
      <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${chapter.color} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`} />

      <div>
        {/* Header: Chapter Number & Icon Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 dark:bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-mono font-bold text-cyan-400">
              Chapter {chapter.number}
            </span>
            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
              {chapter.subtitle}
            </span>
          </div>

          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 dark:text-white light:text-slate-900 mb-3 group-hover:text-cyan-400 transition-colors">
          {chapter.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {chapter.description}
        </p>

        {/* Key Formulas or Topics pills */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {chapter.topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900/70 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
            >
              {topic}
            </span>
          ))}
          {chapter.topics.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 rounded-md text-slate-400">
              +{chapter.topics.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer: Progress indicator & Action CTA */}
      <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-400 font-medium">Chapter Mastery</span>
          <span className="font-mono font-bold text-cyan-400">{chapter.progressPercentage}%</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 dark:bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden mb-4">
          <div
            className={`h-full bg-gradient-to-r ${chapter.color} transition-all duration-700`}
            style={{ width: `${chapter.progressPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 group-hover:text-cyan-300">
          <span className="flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>{chapter.experimentCount} Labs included</span>
          </span>
          <span className="inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
            <span>Explore Chapter</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

interface ChaptersPreviewProps {
  onSelectChapter: (chapterId: string) => void;
}

export const ChaptersPreview: React.FC<ChaptersPreviewProps> = ({ onSelectChapter }) => {
  return (
    <section id="chapters-section" className="relative py-16 sm:py-24 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full NCERT Syllabus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900">
              Explore Class 10 Physics
            </h2>
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
              Everything organised chapter-by-chapter.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>4 Chapters • 100% CBSE 2026 Compatible</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CHAPTERS_DATA.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onExplore={onSelectChapter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
