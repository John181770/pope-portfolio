'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Github, Terminal } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { socialsData } from '@/data/socials';

export const DataEngineeringProjects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'bi' | 'de'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ai') return p.category.toLowerCase().includes('genai') || p.category.toLowerCase().includes('ai');
    if (filter === 'bi') return p.category.toLowerCase().includes('bi') || p.category.toLowerCase().includes('science') || p.category.toLowerCase().includes('analytics');
    if (filter === 'de') return p.category.toLowerCase().includes('data engineering') || p.category.toLowerCase().includes('dbt') || p.category.toLowerCase().includes('typescript');
    return true;
  });

  const filterBtns = [
    { key: 'all' as const, label: 'All Projects' },
    { key: 'ai' as const, label: 'GenAI & Cloud' },
    { key: 'bi' as const, label: 'BI & Analytics' },
    { key: 'de' as const, label: 'Data Eng & Tools' },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              MY GITHUB PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Projects & Builds
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl font-sans">
              Real projects from my GitHub — spanning GenAI, cloud engineering, business intelligence, data science, and developer tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl w-fit">
            {filterBtns.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                  filter === key
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <ProjectCard project={project} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="flex justify-center pt-6">
          <a
            href={socialsData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl hover:bg-emerald-500/20 transition-colors"
          >
            <Github className="w-4 h-4" />
            Explore All Repos on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
