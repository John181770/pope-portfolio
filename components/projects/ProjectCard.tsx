'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers, Sparkles, ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const isFlagship = project.isFlagship;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl",
        isFlagship
          ? "border-emerald-500/30 hover:border-emerald-500/60 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"
          : "border-slate-800 hover:border-slate-700 bg-slate-900/80",
        className
      )}
    >
      {/* Project Image */}
      {project.image ? (
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
          {/* Category label overlaid on image */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1 bg-slate-950/70 backdrop-blur-sm px-2 py-0.5 rounded-full border border-emerald-500/30">
              {isFlagship ? <Sparkles className="w-3 h-3 text-amber-400" /> : <Layers className="w-3 h-3 text-slate-400" />}
              {project.category}
            </span>
          </div>
        </div>
      ) : (
        /* Fallback gradient banner when no image */
        <div className={cn(
          "w-full h-16 flex items-center justify-between px-5",
          isFlagship ? "bg-gradient-to-r from-emerald-950/60 to-slate-900" : "bg-slate-800/40"
        )}>
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            {isFlagship ? <Sparkles className="w-3.5 h-3.5 text-amber-400" /> : <Layers className="w-3.5 h-3.5 text-slate-400" />}
            {project.category}
          </span>
          {isFlagship && (
            <Badge variant="primary" size="sm">Flagship</Badge>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-2">
            {project.oneLiner}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">{tech}</Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-slate-400 py-0.5 px-1.5">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              View on GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ) : <div />}

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
