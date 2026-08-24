'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { educationData } from '@/data/education';
import { profileData } from '@/data/profile';
import { Badge } from '@/components/ui/Badge';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            ACADEMIC QUALIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Education & Foundation
          </h2>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {educationData.degree} in {educationData.major}
                </h3>
                <p className="text-sm font-mono text-emerald-400 mt-1">
                  {educationData.institution}
                </p>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {educationData.location} • {educationData.period}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 text-right">
              <span className="text-xs font-mono text-slate-400 block">Cumulative GPA</span>
              <span className="text-xl font-mono font-bold text-emerald-400">
                {educationData.cgpa}
              </span>
            </div>
          </div>

          {/* Achievement Row */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 flex items-start gap-3">
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

          {/* Coursework Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Relevant Core Computer Science & Math Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {educationData.coursework.map((course) => (
                <div key={course} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  • {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
