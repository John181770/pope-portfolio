'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { certificationsData } from '@/data/certifications';
import { Badge } from '@/components/ui/Badge';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            CREDENTIALS & ACCREDITATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Professional Certifications
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Verified industry certifications across cloud architecture, Databricks platforms, and dbt analytics engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                    {cert.name}
                  </h3>
                  <Badge variant="primary" size="sm">
                    {cert.year}
                  </Badge>
                </div>

                <p className="text-xs font-mono text-slate-400">
                  Issued by: {cert.issuer}
                </p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline pt-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verify Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
