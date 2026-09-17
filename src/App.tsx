import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { WhySection } from './components/WhySection';
import { ChaptersPreview } from './components/ChaptersPreview';
import { DiscoverLabSection } from './components/DiscoverLabSection';
import { AITutorPreview } from './components/AITutorPreview';
import { QuestionPreview } from './components/QuestionPreview';
import { BoardPrepSection } from './components/BoardPrepSection';
import { LearningFlow } from './components/LearningFlow';
import { DashboardPreview } from './components/DashboardPreview';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import {
  ChaptersView,
  DiscoverLabView,
  QuestionBankView,
  BoardPrepView,
  AITutorView,
  ProgressView,
} from './components/DedicatedViews';

export default function App() {
  // Client-side route state (handles both clean paths and hash-based URLs)
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path && path !== '/') return path;
      const hash = window.location.hash.replace('#', '');
      if (hash) return `/${hash}`;
    }
    return '/';
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path && path !== '/') {
        setCurrentRoute(path);
      } else {
        const hash = window.location.hash.replace('#', '');
        setCurrentRoute(hash ? `/${hash}` : '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState(null, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    navigateTo('/');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        {/* Top Attribution Banner */}
        <div
          id="top-creator-announcement"
          className="w-full bg-slate-900/95 dark:bg-slate-950 light:bg-slate-100 border-b border-cyan-500/30 dark:border-cyan-500/30 light:border-slate-300 py-2.5 px-4 text-center z-50 transition-colors shadow-sm"
        >
          <p className="max-w-7xl mx-auto text-xs sm:text-sm font-bold text-slate-100 dark:text-white light:text-slate-900 tracking-wide">
            <strong>This website is made by Aryan yadav, a Student of Scale Carrer Institute</strong>
          </p>
        </div>

        {/* Sticky Translucent Navbar */}
        <Navbar
          activeRoute={currentRoute}
          onNavigate={navigateTo}
          onOpenSearch={() => setSearchModalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* LANDING PAGE (Route: '/') */}
          {currentRoute === '/' && (
            <div className="animate-fadeIn">
              {/* 1. Hero Section with Interactive Laboratory Visual */}
              <HeroSection
                onStartLearning={() => navigateTo('/chapters')}
                onExploreLab={() => navigateTo('/discover-lab')}
              />

              {/* 2. Trust & Overview Statistics Strip */}
              <StatsSection />

              {/* 3. Why Physics Lab 10? */}
              <WhySection
                onExploreChapters={() => navigateTo('/chapters')}
                onExploreLab={() => navigateTo('/discover-lab')}
                onAskAI={() => navigateTo('/ai-tutor')}
              />

              {/* 4. Chapters Preview */}
              <ChaptersPreview
                onSelectChapter={(chapterId) => navigateTo('/chapters')}
              />

              {/* 5. Discover Lab Feature & Workbench */}
              <DiscoverLabSection
                onEnterLab={() => navigateTo('/discover-lab')}
              />

              {/* 6. AI Physics Tutor Section */}
              <AITutorPreview
                onAskAI={() => navigateTo('/ai-tutor')}
              />

              {/* 7. Question Bank Preview */}
              <QuestionPreview
                onGoToPractice={() => navigateTo('/question-bank')}
              />

              {/* 8. Board Preparation Command Centre */}
              <BoardPrepSection
                onStartPrep={() => navigateTo('/board-prep')}
              />

              {/* 9. Visual Learning Flow Timeline */}
              <LearningFlow />

              {/* 10. Student Progress Dashboard Preview */}
              <DashboardPreview
                onTrackProgress={() => navigateTo('/progress')}
              />

              {/* 11. Final Call To Action */}
              <CTASection
                onStartLearning={() => navigateTo('/chapters')}
                onExploreLab={() => navigateTo('/discover-lab')}
              />
            </div>
          )}

          {/* DEDICATED SUBPAGE VIEWS (Ensures all routes and CTAs work completely) */}
          {currentRoute === '/chapters' && (
            <ChaptersView onBack={handleBackToHome} />
          )}

          {currentRoute === '/discover-lab' && (
            <DiscoverLabView onBack={handleBackToHome} />
          )}

          {(currentRoute === '/question-bank' || currentRoute === '/practice') && (
            <QuestionBankView onBack={handleBackToHome} />
          )}

          {currentRoute === '/board-prep' && (
            <BoardPrepView onBack={handleBackToHome} />
          )}

          {currentRoute === '/ai-tutor' && (
            <AITutorView onBack={handleBackToHome} />
          )}

          {currentRoute === '/progress' && (
            <ProgressView onBack={handleBackToHome} />
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Global Command & Search Modal */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onNavigate={navigateTo}
        />
      </div>
    </ThemeProvider>
  );
}
