'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, FileText, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '@/data/profile';
import { socialsData } from '@/data/socials';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <Badge variant="primary" size="md">
            {profileData.openToWorkBadge}
          </Badge>
        </motion.div>

        {/* Primary Identity Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {profileData.name}
          </h1>

          <div className="flex items-center justify-center gap-2 text-emerald-400 font-mono text-sm sm:text-base font-semibold uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Data Engineer — Enterprise Platforms & GenAI</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-bold text-slate-300 max-w-3xl mx-auto leading-snug pt-2">
            Building reliable data platforms and intelligent data applications.
          </h2>
        </motion.div>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          {profileData.supportingLine}
        </motion.p>

        {/* Tech Stack Subheadline Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-2"
        >
          {["Databricks", "Apache Spark", "Python", "SQL", "dbt", "AWS", "GenAI"].map((tech) => (
            <Badge key={tech} variant="secondary" size="md">
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a href="#projects">
            <Button variant="primary" size="lg" icon={<Sparkles className="w-4 h-4" />}>
              View Technical Projects
            </Button>
          </a>
          <a href={socialsData.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" icon={<Github className="w-4 h-4" />}>
              Inspect GitHub
            </Button>
          </a>
          <a href={socialsData.resumeUrl} download="Pope_John_Paul_Kaligithi_Resume.pdf">
            <Button variant="secondary" size="lg" icon={<FileText className="w-4 h-4" />}>
              Download Resume
            </Button>
          </a>
        </motion.div>
        {/* 10-Second Recruiter Quick Scan Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-left"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider shrink-0">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Recruiter Quick Scan:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
            {[
              { name: "Databricks", highlight: true },
              { name: "Apache Spark", highlight: true },
              { name: "PySpark", highlight: true },
              { name: "Python", highlight: false },
              { name: "SQL", highlight: false },
              { name: "dbt", highlight: true },
              { name: "AWS", highlight: false },
              { name: "GenAI Engineering", highlight: true },
              { name: "Docker", highlight: false },
            ].map((skill) => (
              <Badge
                key={skill.name}
                variant={skill.highlight ? "primary" : "secondary"}
                size="sm"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce">
        <a href="#about" aria-label="Scroll to About">
          <ArrowDown className="w-5 h-5 hover:text-emerald-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};
