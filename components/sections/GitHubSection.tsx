'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Star, Code2 } from 'lucide-react';
import { socialsData } from '@/data/socials';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const GitHubSection: React.FC = () => {
  const featuredRepos = [
    {
      name: "databricks-job-failure-analysis-demo",
      description: "AI-powered platform analyzing failed Databricks jobs using workflow context, platform metadata, and LLM reasoning via Databricks Model Serving.",
      language: "Python",
      tech: ["Python", "Databricks", "FastAPI", "Streamlit", "Docker"],
      url: "https://github.com/John181770/databricks-job-failure-analysis-demo"
    },
    {
      name: "databricks-finops-ai-assistant",
      description: "Natural-language FinOps assistant analyzing SQL Warehouse utilization and DBU consumption with read-only SQL generation and AST safety.",
      language: "Python",
      tech: ["Python", "SQL", "Databricks", "System Tables", "Unity Catalog"],
      url: "https://github.com/John181770/databricks-finops-ai-assistant"
    },
    {
      name: "formula1-data-engineering-platform",
      description: "Lakehouse Medallion Architecture implementation (Bronze -> Silver -> Gold) with PySpark, Delta Lake, and dbt analytics modeling.",
      language: "Python",
      tech: ["PySpark", "Databricks", "Delta Lake", "dbt", "SQL"],
      url: "https://github.com/John181770/formula1-data-engineering-platform"
    },
    {
      name: "realtime-streaming-data-platform",
      description: "Kafka & Spark Structured Streaming micro-batch event processing platform writing into ACID Delta Lake streaming sinks.",
      language: "Python",
      tech: ["Apache Kafka", "Spark Streaming", "PySpark", "Delta Lake"],
      url: "https://github.com/John181770/realtime-streaming-data-platform"
    }
  ];

  return (
    <section id="github" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              CODE & REPOSITORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Featured GitHub Repositories
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl font-sans">
              Open technical repositories containing full source code implementations, architecture documentation, and data models.
            </p>
          </div>

          <a href={socialsData.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="md" icon={<Github className="w-4 h-4" />}>
              Explore Full GitHub Profile
            </Button>
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRepos.map((repo) => (
            <motion.div
              key={repo.name}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base font-bold text-emerald-400 hover:underline flex items-center gap-2"
                  >
                    <GitBranch className="w-4 h-4 shrink-0 text-slate-400" />
                    <span className="truncate">{repo.name}</span>
                  </a>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {repo.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {repo.tech.map((t) => (
                    <Badge key={t} variant="secondary" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    {repo.language}
                  </span>
                  <span>Open Source</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
