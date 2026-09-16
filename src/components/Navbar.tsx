import React, { useState, useEffect } from 'react';
import { Atom, Search, Moon, Sun, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onNavigate, onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', route: '/' },
    { label: 'Chapters', route: '/chapters' },
    { label: 'Discover Lab', route: '/discover-lab', badge: 'Interactive' },
    { label: 'Question Bank', route: '/question-bank' },
    { label: 'Practice', route: '/practice' },
    { label: 'Board Prep', route: '/board-prep' },
    { label: 'AI Tutor', route: '/ai-tutor', badge: 'AI' },
  ];

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-lg shadow-black/10 py-3 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          aria-label="Physics Lab 10 Home"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
            <Atom className="w-5 h-5 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-400 opacity-20 blur group-hover:opacity-50 transition duration-300"></div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base md:text-lg tracking-tight bg-gradient-to-r from-slate-100 via-cyan-100 to-cyan-400 dark:from-white dark:to-cyan-300 light:from-slate-900 light:to-cyan-600 bg-clip-text text-transparent">
                Physics Lab 10
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-semibold uppercase tracking-wider">
                CBSE
              </span>
            </div>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 dark:bg-cyan-950/50 light:bg-cyan-50 light:text-cyan-600 font-semibold'
                    : 'text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-cyan-200 light:text-slate-600 light:hover:text-slate-900 hover:bg-slate-800/40 light:hover:bg-slate-100'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="text-[9px] px-1 py-0.2 rounded font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 text-xs rounded-xl bg-slate-900/60 dark:bg-slate-900/80 light:bg-white border border-slate-700/60 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
            title="Search Physics Content (Cmd + K)"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline text-xs text-slate-400">Search</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-400 rounded border border-slate-700 light:border-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 light:bg-white border border-slate-700/60 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Start Learning Primary CTA */}
          <button
            id="nav-start-learning-btn"
            onClick={() => handleNavClick('/chapters')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/60 dark:bg-slate-900 light:bg-white border border-slate-700/60 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200 mt-2 px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => handleNavClick(item.route)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-left transition ${
                activeRoute === item.route
                  ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60 dark:hover:bg-slate-800 light:text-slate-700 light:hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
            <button
              onClick={() => handleNavClick('/chapters')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Learning Class 10</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
