import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { socialsData } from '@/data/socials';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-slate-100">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Terminal className="w-4 h-4" />
              </span>
              <span>{profileData.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {profileData.positioningStatement}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialsData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialsData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socialsData.email}`}
              aria-label="Email"
              className="p-2.5 text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Engineered with Next.js 14, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
