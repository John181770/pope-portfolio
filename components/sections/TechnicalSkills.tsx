'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, ShieldCheck, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabItem } from '@/components/ui/Tabs';

export const TechnicalSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('databricks');

  const tabs: TabItem[] = [
    { id: 'databricks', label: 'Databricks Deep-Dive', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'spark', label: 'Apache Spark / PySpark', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'aws', label: 'AWS Infrastructure', icon: <Cloud className="w-3.5 h-3.5" /> },
    { id: 'devops', label: 'DevOps & Workflows', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  ];

  const currentCapability = skillsData.capabilities[activeTab as keyof typeof skillsData.capabilities];

  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            TECHNICAL REPERTOIRE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Skills & Platform Expertise
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Categorized skills weighted by visual priority alongside dedicated platform capability breakdowns.
          </p>
        </div>

        {/* Weighted Skill Groups */}
        <div className="space-y-8">
          {/* Primary Skills */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Primary Core Technologies (Highest Visual Weight)</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skillsData.primary.map((skill) => (
                <Badge key={skill.name} variant="primary" size="md" className="py-1.5 px-3.5 text-sm">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* GenAI Skills */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>GenAI & Intelligent Systems</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skillsData.genai.map((skill) => (
                <Badge key={skill.name} variant="genai" size="md" className="py-1.5 px-3 text-xs">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Secondary Skills */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Database className="w-4 h-4" />
              <span>Secondary & Ecosystem Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.secondary.map((skill) => (
                <Badge key={skill.name} variant="secondary" size="md">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Capability Breakdowns */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
              PLATFORM DEEP DIVE
            </span>
            <h3 className="text-xl font-bold text-slate-100">
              Detailed Platform Capabilities
            </h3>
          </div>

          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

          {currentCapability && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 pt-2"
            >
              <div>
                <h4 className="text-lg font-bold text-slate-200">
                  {currentCapability.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                  {currentCapability.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentCapability.capabilities.map((cap, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-sans">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="text-emerald-400 font-semibold">Evidence Level: </span>
                {currentCapability.handsOnLevel}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
