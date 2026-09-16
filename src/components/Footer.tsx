import React from 'react';
import { Atom, Heart, ExternalLink, Mail, Shield, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/physicsData';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-300 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Atom className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-100 dark:text-white light:text-slate-900">
                Physics Lab 10
              </span>
            </div>

            <p className="text-sm font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-sm">
              An interactive virtual physics laboratory and CBSE board preparation platform built specifically for Class 10 students to visualize invisible physical phenomena.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>CBSE Curriculum 2025-2026</span>
            </div>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 dark:text-white light:text-slate-900 mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/chapters')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Chapters
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/chapters')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Concepts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/board-prep')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Formula Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/chapters')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Diagrams
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 dark:text-white light:text-slate-900 mb-4">
              Practice
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/question-bank')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Question Bank
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/board-prep')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Practice Tests
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/board-prep')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Board Preparation
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 dark:text-white light:text-slate-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/discover-lab')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Discover Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/ai-tutor')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  AI Tutor
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/progress')}
                  className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
                >
                  Progress
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
          <p>
            © 2026 Physics Lab 10. Built for Class 10 CBSE learners.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('Physics Lab 10 follows strict student privacy regulations. No student data is sold or shared.')}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => alert('Physics Lab 10 is designed for educational use aligned with the CBSE curriculum.')}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => alert('Contact: support@physicslab10.edu or feedback in the CBSE community forum.')}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Creator Attribution */}
        <div className="mt-8 pt-6 border-t border-slate-850 dark:border-slate-850/60 light:border-slate-200/80 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
            This website is made by{' '}
            <span className="text-cyan-400 font-semibold">Aryan yadav</span>
            , a Student of{' '}
            <span className="text-blue-400 font-semibold">Scale Carrer Institute</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
