'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, ChevronDown, Cpu, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { experienceData } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const Experience: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const activeVersion = experienceData.versions.versionA;

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            ENTERPRISE EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Amgen Experience Case Study
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Engineered AI-powered operational tools and Databricks observability solutions for a global biotechnology leader.
          </p>
        </div>

        {/* Main Experience Card */}
        <motion.div
          key="amgen-experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Building2 className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    {experienceData.company}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {experienceData.location}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-base font-semibold text-emerald-400">
                  {activeVersion.title}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  • {activeVersion.department}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 w-fit">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>{activeVersion.period}</span>
            </div>
          </div>

          {/* Problem & Solution Case Study */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <AlertCircle className="w-4 h-4" />
                OPERATIONAL PROBLEM
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {experienceData.publicDescription.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                ENGINEERED SOLUTION
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {experienceData.publicDescription.solution}
              </p>
            </div>
          </div>

          {/* Technical Contributions Toggle */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                Technical Contributions & Engineering Details
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                icon={
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? 'transform rotate-180 text-emerald-400' : ''
                    }`}
                  />
                }
              >
                {isExpanded ? 'Collapse Detail' : 'Expand Detail'}
              </Button>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  {/* Architecture & Workflow List */}
                  <div className="space-y-3 p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase block">
                      Architecture & Request Flow Overview
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {experienceData.publicDescription.architectureOverview.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-cyan-400">0{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities Bullets */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Key Deliverables & Hands-on Work
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                      {experienceData.publicDescription.technicalContributions.map((contrib, idx) => (
                        <li key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineering Decisions */}
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase block">
                      Core Engineering Decisions & Tradeoffs
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {experienceData.publicDescription.engineeringDecisions.map((dec, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                          {dec}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-4 border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Technologies & Platform Tools Utilized
            </span>
            <div className="flex flex-wrap gap-2">
              {experienceData.technologies.map((tech) => (
                <Badge key={tech} variant="primary" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
