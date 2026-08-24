'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Activity, GitBranch } from 'lucide-react';
import { ArchitectureDiagram } from '@/components/architecture/ArchitectureDiagram';
import { ProjectArchitecture } from '@/data/projects';

export const CapabilitiesArchitecture: React.FC = () => {
  const [activeDiagramKey, setActiveDiagramKey] = useState<'medallion' | 'streaming' | 'dbt'>('medallion');

  const medallionArchitecture: ProjectArchitecture = {
    nodes: [
      { id: "m1", label: "Raw Ingestion Feeds", type: "source", description: "JSON & CSV file uploads arriving in cloud storage buckets." },
      { id: "m2", label: "Bronze Delta Tables", type: "storage", description: "Raw append-only tables retaining complete original data fidelity." },
      { id: "m3", label: "Silver Cleaned Tables", type: "processing", description: "Enforced schemas, deduplicated records, and relational key joins." },
      { id: "m4", label: "Gold Analytical Marts", type: "storage", description: "High-performance star-schema dimensional models ready for BI." },
      { id: "m5", label: "dbt Lineage & Assertion Tests", type: "governance", description: "Automated schema validation, uniqueness assertions, and lineage." }
    ],
    connections: [
      { from: "m1", to: "m2", label: "Auto Loader", animated: true },
      { from: "m2", to: "m3", label: "PySpark Cleanse", animated: true },
      { from: "m3", to: "m4", label: "Gold Aggregations", animated: true },
      { from: "m4", to: "m5", label: "dbt Documentation", animated: true }
    ]
  };

  const streamingArchitecture: ProjectArchitecture = {
    nodes: [
      { id: "s1", label: "Event Stream Producer", type: "source", description: "High-frequency event logs published to Kafka topics." },
      { id: "s2", label: "Apache Kafka Broker", type: "storage", description: "Partitioned message queue guaranteeing event sequence." },
      { id: "s3", label: "Spark Structured Streaming", type: "processing", description: "Watermarked micro-batch parsing & tumbling window joins." },
      { id: "s4", label: "Delta Lake Streaming Sink", type: "storage", description: "Checkpoint-enabled ACID storage sink." }
    ],
    connections: [
      { from: "s1", to: "s2", label: "Publish", animated: true },
      { from: "s2", to: "s3", label: "ReadStream", animated: true },
      { from: "s3", to: "s4", label: "WriteStream", animated: true }
    ]
  };

  const dbtArchitecture: ProjectArchitecture = {
    nodes: [
      { id: "d1", label: "Raw Source Tables", type: "source", description: "Source tables defined in dbt `sources.yml`." },
      { id: "d2", label: "Staging Layer (`stg_`)", type: "processing", description: "Lightweight 1:1 view models executing column renames." },
      { id: "d3", label: "Intermediate Layer (`int_`)", type: "processing", description: "Complex business logic CTE joins and aggregations." },
      { id: "d4", label: "Marts Layer (`fct_`, `dim_`)", type: "storage", description: "Fact and dimension tables materialized incrementally." }
    ],
    connections: [
      { from: "d1", to: "d2", label: "source()", animated: true },
      { from: "d2", to: "d3", label: "ref()", animated: true },
      { from: "d3", to: "d4", label: "incremental", animated: true }
    ]
  };

  const diagrams = {
    medallion: { title: "Medallion Lakehouse Architecture (Bronze -> Silver -> Gold)", data: medallionArchitecture },
    streaming: { title: "Real-Time Streaming Architecture (Kafka -> Spark -> Delta)", data: streamingArchitecture },
    dbt: { title: "Analytics Engineering dbt Lineage Flow", data: dbtArchitecture },
  };

  return (
    <section id="capabilities" className="py-20 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            SYSTEM ARCHITECTURE & DESIGN PATTERNS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Data Platform Architecture Capabilities
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Demonstrating structured pipeline design patterns across batch lakehouse, streaming micro-batches, and dbt analytics lineage.
          </p>
        </div>

        {/* Architecture Diagram Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveDiagramKey('medallion')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl border transition-all ${
              activeDiagramKey === 'medallion'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Medallion Architecture
          </button>
          <button
            onClick={() => setActiveDiagramKey('streaming')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl border transition-all ${
              activeDiagramKey === 'streaming'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            Real-Time Streaming
          </button>
          <button
            onClick={() => setActiveDiagramKey('dbt')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl border transition-all ${
              activeDiagramKey === 'dbt'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            dbt Analytics Lineage
          </button>
        </div>

        {/* Diagram Display Container */}
        <motion.div
          key={activeDiagramKey}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArchitectureDiagram
            architecture={diagrams[activeDiagramKey].data}
            title={diagrams[activeDiagramKey].title}
          />
        </motion.div>
      </div>
    </section>
  );
};
