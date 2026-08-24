'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, FileText, Sparkles, Terminal, Activity, Layers, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { profileData } from '@/data/profile';
import { socialsData } from '@/data/socials';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const Hero: React.FC = () => {
  const metrics = [
    {
      value: "31%",
      label: "Faster Triage",
      detail: "Failure diagnostic time cut via AI observability",
      icon: <Activity className="w-4 h-4 text-emerald-400" />
    },
    {
      value: "7+",
      label: "Production Builds",
      detail: "Databricks, Spark, dbt & Cloud solutions",
      icon: <Layers className="w-4 h-4 text-cyan-400" />
    },
    {
      value: "$340k+",
      label: "Modeled Data",
      detail: "Star-schema dimensional & DAX analytics",
      icon: <TrendingUp className="w-4 h-4 text-purple-400" />
    },
    {
      value: "4",
      label: "Accreditations",
      detail: "Oracle GenAI, Databricks & dbt certified",
      icon: <Award className="w-4 h-4 text-amber-400" />
    }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Background Radial Atmosphere Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-medium text-emerald-400">
            Open to Data Engineer & GenAI Platform Roles • Hyderabad & Remote
          </span>
        </motion.div>

        {/* Primary Headline & Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {profileData.name}
          </h1>

          <div className="flex items-center justify-center gap-2 text-emerald-400 font-mono text-sm sm:text-base font-semibold uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Data Engineer — Databricks, Apache Spark, dbt & GenAI</span>
          </div>

          <p className="text-base sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed pt-1 font-sans">
            Building reliable lakehouse data platforms, high-throughput Spark pipelines, and enterprise AI diagnostics that turn distributed data into decision-ready assets.
          </p>
        </motion.div>

        {/* Core Tech Stack Micro-Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {["Databricks", "Apache Spark", "PySpark", "SQL", "dbt Core", "AWS", "FastAPI", "Docker"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 text-slate-200 border border-slate-800 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Primary Recruiter CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <a href="#projects">
            <Button variant="primary" size="lg" icon={<Sparkles className="w-4 h-4" />}>
              Explore Verified Projects
            </Button>
          </a>
          <a href={socialsData.resumeUrl} download="Pope_John_Paul_Kaligithi_Resume.pdf">
            <Button variant="secondary" size="lg" icon={<FileText className="w-4 h-4" />}>
              Download Resume
            </Button>
          </a>
          <a href={socialsData.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" icon={<Github className="w-4 h-4" />}>
              GitHub Repositories
            </Button>
          </a>
        </motion.div>

        {/* ── Impact Metrics Strip (Proof-First Numbers) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto text-left">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 backdrop-blur-md transition-all space-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono">
                    {m.value}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    {m.icon}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-200 font-sans">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-400 font-sans leading-tight">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="mt-8 text-center text-slate-600 animate-bounce">
        <a href="#projects" aria-label="Scroll to Projects">
          <ArrowDown className="w-5 h-5 mx-auto hover:text-emerald-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};
