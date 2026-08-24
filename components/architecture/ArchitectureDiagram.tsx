'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Server, ShieldCheck, Sparkles, Layers, ArrowRight, Activity, Terminal } from 'lucide-react';
import { ProjectArchitecture, ProjectArchitectureNode } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
  title?: string;
  className?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  architecture,
  title,
  className
}) => {
  const [selectedNode, setSelectedNode] = useState<ProjectArchitectureNode | null>(
    architecture.nodes[0] || null
  );

  const getNodeIcon = (type: ProjectArchitectureNode['type']) => {
    switch (type) {
      case 'source':
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'processing':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'storage':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'api':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'governance':
        return <ShieldCheck className="w-4 h-4 text-rose-400" />;
      case 'ui':
        return <Terminal className="w-4 h-4 text-emerald-300" />;
      default:
        return <Activity className="w-4 h-4 text-slate-400" />;
    }
  };

  const getNodeBadgeClass = (type: ProjectArchitectureNode['type']) => {
    switch (type) {
      case 'source':
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case 'processing':
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case 'storage':
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case 'api':
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
      case 'ai':
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case 'governance':
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      case 'ui':
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <div className={cn("p-5 sm:p-6 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-6 shadow-xl", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400 animate-pulse-slow" />
            <h4 className="text-sm font-mono font-semibold text-slate-200 uppercase tracking-wider">
              {title}
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Interactive Architecture Flow
          </span>
        </div>
      )}

      {/* Responsive Horizontal Node Flow View */}
      <div className="overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        <div className="flex items-center gap-3 min-w-max px-2">
          {architecture.nodes.map((node, index) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedNode(node)}
                  className={cn(
                    "flex flex-col gap-2 p-3.5 rounded-xl border text-left transition-all duration-200 max-w-[200px] w-48 shrink-0 relative group",
                    isSelected
                      ? "bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/50"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn("p-1.5 rounded-lg border", getNodeBadgeClass(node.type))}>
                      {getNodeIcon(node.type)}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Step 0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-200 line-clamp-2 leading-snug">
                    {node.label}
                  </span>

                  <span className="text-[10px] text-slate-400 font-mono capitalize">
                    {node.type} node
                  </span>

                  {/* Active node indicator */}
                  {isSelected && (
                    <motion.span
                      layoutId="active-node-indicator"
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-4 ring-slate-950"
                    />
                  )}
                </motion.button>

                {/* Animated Arrow Connector */}
                {index < architecture.nodes.length - 1 && (
                  <div className="flex flex-col items-center justify-center shrink-0 text-slate-600 px-1">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-500/70" />
                    </motion.div>
                    {architecture.connections[index]?.label && (
                      <span className="text-[9px] font-mono text-slate-400 max-w-[80px] text-center truncate mt-0.5">
                        {architecture.connections[index].label}
                      </span>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Node Detail Inspector Panel */}
      {selectedNode && (
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={cn("p-1 rounded-md border", getNodeBadgeClass(selectedNode.type))}>
                {getNodeIcon(selectedNode.type)}
              </span>
              <span className="text-xs font-mono font-bold text-slate-200">
                {selectedNode.label}
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 capitalize">
              Role: {selectedNode.type}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            {selectedNode.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};
