'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers, Sparkles, ArrowUpRight, Info, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const isFlagship = project.isFlagship;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl",
        isFlagship
          ? "border-emerald-500/30 hover:border-emerald-500/60 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"
          : "border-slate-800 hover:border-slate-700 bg-slate-900/80",
        className
      )}
    >
      {/* Project Image & Interactive Hover Overlay */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-950">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            className={cn(
              "object-cover transition-all duration-500",
              isHovered ? "scale-110 blur-sm opacity-30" : "scale-100 opacity-90"
            )}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6 text-center">
            <Layers className="w-10 h-10 text-emerald-400/40" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Category & Flagship Badges on Image */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="text-[10px] font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30">
            <Layers className="w-3 h-3 text-emerald-400" />
            {project.category}
          </span>
        </div>

        {/* Top Right Badges: Flagship & Summary Hint */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          {isFlagship && (
            <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1 bg-amber-500/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-500/40 shadow-sm">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              Flagship
            </span>
          )}
          <button
            onClick={() => setShowMobileSummary(!showMobileSummary)}
            className="flex items-center gap-1 text-[10px] font-mono text-slate-300 bg-slate-950/85 backdrop-blur-md px-2 py-1 rounded-full border border-slate-700 hover:border-emerald-400/50 hover:text-emerald-400 transition-colors"
            title="Hover or tap for project architecture summary"
          >
            <Info className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">Overview</span>
          </button>
        </div>

        {/* Slide-In Summary Overlay on Hover */}
        <AnimatePresence>
          {(isHovered || showMobileSummary) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-20 bg-slate-950/95 backdrop-blur-md p-4 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Project Overview & Architecture</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans line-clamp-5">
                  {project.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span>{project.technologies.slice(0, 3).join(' • ')}</span>
                <span className="text-slate-400 text-[10px]">Click below for repo →</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-2">
            {project.oneLiner}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-slate-400 py-0.5 px-1.5 bg-slate-800/40 rounded-md border border-slate-700/50">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <div />
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
