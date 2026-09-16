import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, FlaskConical, Sigma, HelpCircle, ArrowRight } from 'lucide-react';
import { CHAPTERS_DATA, EXPERIMENTS_LIST, SAMPLE_QUESTIONS } from '../data/physicsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredChapters = CHAPTERS_DATA.filter(
    c =>
      c.title.toLowerCase().includes(normalizedQuery) ||
      c.description.toLowerCase().includes(normalizedQuery) ||
      c.topics.some(t => t.toLowerCase().includes(normalizedQuery)) ||
      c.keyFormulas.some(f => f.toLowerCase().includes(normalizedQuery))
  );

  const filteredExperiments = EXPERIMENTS_LIST.filter(
    e =>
      e.name.toLowerCase().includes(normalizedQuery) ||
      e.description.toLowerCase().includes(normalizedQuery) ||
      e.tag.toLowerCase().includes(normalizedQuery)
  );

  const filteredQuestions = SAMPLE_QUESTIONS.filter(
    q =>
      q.question.toLowerCase().includes(normalizedQuery) ||
      q.category.toLowerCase().includes(normalizedQuery) ||
      q.chapter.toLowerCase().includes(normalizedQuery)
  );

  const handleSelect = (route: string) => {
    onNavigate(route);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        id="search-modal-container"
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            id="search-query-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, formulas, experiments, questions... (e.g. Ohm's Law, Convex lens, V=IR)"
            className="w-full bg-transparent text-sm md:text-base text-slate-100 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results list */}
        <div className="overflow-y-auto p-4 space-y-4">
          {/* Quick Shortcuts when empty */}
          {!normalizedQuery && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Popular Quick Jumps
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelect('/discover-lab')}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-950/40 border border-slate-700/60 hover:border-cyan-500/50 text-left transition"
                >
                  <FlaskConical className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-xs font-medium text-slate-200">Interactive Lab</div>
                    <div className="text-[11px] text-slate-400">Ray tracing & Ohm's law</div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect('/chapters')}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-950/40 border border-slate-700/60 hover:border-cyan-500/50 text-left transition"
                >
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <div>
                    <div className="text-xs font-medium text-slate-200">4 Core Chapters</div>
                    <div className="text-[11px] text-slate-400">Optics, Electricity, Magnetism</div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect('/question-bank')}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-950/40 border border-slate-700/60 hover:border-cyan-500/50 text-left transition"
                >
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-xs font-medium text-slate-200">Question Bank</div>
                    <div className="text-[11px] text-slate-400">Numericals & Case studies</div>
                  </div>
                </button>
                <button
                  onClick={() => handleSelect('/board-prep')}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-950/40 border border-slate-700/60 hover:border-cyan-500/50 text-left transition"
                >
                  <Sigma className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-xs font-medium text-slate-200">Formula Hub</div>
                    <div className="text-[11px] text-slate-400">Cartesian sign rules & SI units</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Chapters found */}
          {filteredChapters.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Chapters
              </p>
              <div className="space-y-1.5">
                {filteredChapters.map((ch) => (
                  <div
                    key={ch.id}
                    onClick={() => handleSelect('/chapters')}
                    className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 hover:border-cyan-500/40 cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                        Ch {ch.number}: {ch.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">{ch.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experiments found */}
          {filteredExperiments.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-emerald-400" /> Virtual Experiments
              </p>
              <div className="space-y-1.5">
                {filteredExperiments.map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => handleSelect('/discover-lab')}
                    className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 hover:border-emerald-500/40 cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 flex items-center gap-2">
                        {exp.name}
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {exp.tag}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">{exp.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Questions found */}
          {filteredQuestions.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Questions & Numericals
              </p>
              <div className="space-y-1.5">
                {filteredQuestions.map((q) => (
                  <div
                    key={q.id}
                    onClick={() => handleSelect('/question-bank')}
                    className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 hover:border-amber-500/40 cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="text-xs font-semibold text-amber-300 flex items-center gap-2">
                        <span>{q.category}</span>
                        <span>•</span>
                        <span className="text-slate-400">{q.chapter}</span>
                        <span className="text-[10px] text-slate-400">({q.marks} Marks)</span>
                      </div>
                      <div className="text-xs text-slate-300 line-clamp-1 mt-0.5">{q.question}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {normalizedQuery &&
            filteredChapters.length === 0 &&
            filteredExperiments.length === 0 &&
            filteredQuestions.length === 0 && (
              <div className="py-12 text-center text-slate-400">
                <p className="text-base font-medium text-slate-300">No matching physics content found</p>
                <p className="text-xs text-slate-500 mt-1">
                  Try searching for "Ohm's law", "Concave mirror", "Solenoid", "Prism", or "Resistance"
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
