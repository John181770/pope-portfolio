'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { profileData } from '@/data/profile';
import { educationData } from '@/data/education';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            BIOGRAPHY & BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio Copy Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100">
                Engineering Focus
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {profileData.bio}
              </p>
            </div>

            {/* Achievement Badge */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase">
                  {profileData.achievement.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {profileData.achievement.detail}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Summary Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                <GraduationCap className="w-5 h-5" />
                <span>Academic Profile</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  {educationData.degree} in {educationData.major}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {educationData.institution} ({educationData.period})
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 inline-block">
                <span className="text-xs font-mono text-slate-400 block">CGPA Score:</span>
                <span className="text-base font-mono font-bold text-emerald-400">
                  {educationData.cgpa}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                Relevant Computer Science Coursework
              </span>
              <div className="flex flex-wrap gap-1.5">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies Grid */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              CORE PILLARS
            </span>
            <h3 className="text-2xl font-bold text-slate-100">
              Why My Background Fits Data Engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Databricks & Lakehouse Focus",
                desc: "Hands-on with SQL Warehouses, Jobs, Workflows, Unity Catalog governance, Delta Lake ACID tables, and System Tables analytics."
              },
              {
                title: "Distributed Data Processing",
                desc: "Proficient in Apache Spark & PySpark for distributed transformations, broadcast joins, window functions, and structured streaming."
              },
              {
                title: "Cloud & Containerization",
                desc: "Practiced with AWS EC2 host deployment, S3 object staging, IAM policies, Docker containerization, and Linux environments."
              },
              {
                title: "Data + AI Integration",
                desc: "Engineered operational GenAI tools using Databricks Model Serving / Mosaic AI to synthesize metadata into structured diagnostics."
              },
              {
                title: "Analytics & Data Modeling",
                desc: "Applies dbt analytics engineering workflows, modular data modeling, schema assertions, git control, and FastAPI backend service design."
              },
              {
                title: "Cost-Aware FinOps Engineering",
                desc: "Understands DBU consumption, cluster auto-termination, Photon acceleration, and cache-first architectures to control cloud compute spend."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors space-y-2.5"
              >
                <h4 className="text-base font-bold text-slate-100 text-emerald-400">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
