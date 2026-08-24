'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/Providers';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, FileText, Terminal } from 'lucide-react';
import { socialsData } from '@/data/socials';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = resolvedTheme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Amgen Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#capabilities' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
    }, 120);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-mono text-base font-bold text-slate-100 group"
        >
          <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
            <Terminal className="w-4 h-4" />
          </span>
          <span>Pope John Paul</span>
          <span className="text-emerald-400 text-xs font-mono font-normal hidden sm:inline">
            / DE
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Actions & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={socialsData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socialsData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={socialsData.resumeUrl}
            download="Pope_John_Paul_Kaligithi_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {mounted && isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-slate-400 hover:text-amber-400 rounded-lg"
          >
            {mounted && isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3"
          >
            <nav className="flex flex-col space-y-2 font-mono text-sm text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-900 hover:text-emerald-400 active:bg-slate-900 active:text-emerald-400 transition-colors block cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
              <a
                href={socialsData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialsData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socialsData.resumeUrl}
                download="Pope_John_Paul_Kaligithi_Resume.pdf"
                className="flex-1 text-center py-2 text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
