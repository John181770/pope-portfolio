'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Copy, Check, Terminal, Phone } from 'lucide-react';
import { socialsData } from '@/data/socials';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialsData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let&apos;s Build Reliable Data Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Interested in Data Engineering, Databricks, cloud data platforms, analytics engineering, and intelligent data applications. Open for full-time opportunities.
          </p>
        </div>

        {/* Email Direct Action Card */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Direct Email</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-slate-100 select-all">
                {socialsData.email}
              </span>
            </div>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={copyEmail}
            icon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </Button>
        </div>

        {/* Phone Card */}
        <a href={`tel:${socialsData.phone.replace(/\s/g, '')}`} className="block max-w-lg mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 shadow-xl hover:border-emerald-500/50 transition-colors">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Phone</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-slate-100">
                {socialsData.phone}
              </span>
            </div>
          </div>
        </a>

        {/* Quick Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href={`mailto:${socialsData.email}`}>
            <Button variant="primary" size="lg" icon={<Mail className="w-4 h-4" />}>
              Send Direct Email
            </Button>
          </a>
          <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" icon={<Linkedin className="w-4 h-4 text-blue-400" />}>
              Connect on LinkedIn
            </Button>
          </a>
          <a href={socialsData.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" icon={<Github className="w-4 h-4" />}>
              GitHub Profile
            </Button>
          </a>
          <a href={socialsData.resumeUrl} download="Pope_John_Paul_Kaligithi_Resume.pdf">
            <Button variant="secondary" size="lg" icon={<FileText className="w-4 h-4 text-amber-400" />}>
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
