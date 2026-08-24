'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionItemData } from '@/components/ui/Accordion';
import { profileData } from '@/data/profile';
import { educationData } from '@/data/education';

export const FAQSection: React.FC = () => {
  const faqItems: AccordionItemData[] = [
    {
      id: "faq-1",
      question: "Who is Pope John Paul Kaligithi?",
      answer: "Pope John Paul Kaligithi is a Computer Science and Engineering graduate from VIT Andhra Pradesh (2022–2026) focused on Data Engineering, Databricks, cloud data platforms, and intelligent data applications."
    },
    {
      id: "faq-2",
      question: "What type of Data Engineer is he?",
      answer: "He focuses on building reliable data pipelines, modern data platforms, lakehouse architectures (Medallion Architecture), analytics engineering workflows (dbt), cloud systems (AWS), and operational GenAI applications."
    },
    {
      id: "faq-3",
      question: "What technologies does he specialize in?",
      answer: "His primary core stack includes Python, SQL, Apache Spark, PySpark, Databricks, Delta Lake, dbt, AWS, Docker, Git, and Linux, alongside FastAPI, Streamlit, and GenAI Model Serving."
    },
    {
      id: "faq-4",
      question: "Does he work with Databricks?",
      answer: "Yes. He has hands-on and project experience across Databricks SQL Warehouses, Jobs, Workflows, Clusters, Unity Catalog governance, Delta Lake ACID tables, System Tables analytics, and Model Serving / Mosaic AI."
    },
    {
      id: "faq-5",
      question: "Does he work with Apache Spark?",
      answer: "Yes. He uses PySpark for distributed data transformations, broadcast joins, aggregations, window functions, and Spark Structured Streaming for low-latency event processing."
    },
    {
      id: "faq-6",
      question: "What flagship projects has he built?",
      answer: "He built an AI-Powered Databricks Job Failure Analysis Platform and a Databricks FinOps AI Assistant, along with a Formula 1 Lakehouse Medallion Platform, a Real-Time Kafka Streaming Platform, an Analytics Engineering dbt Platform, and a Data Quality Framework."
    },
    {
      id: "faq-7",
      question: "What cloud technologies does he use?",
      answer: "He works with AWS core infrastructure including Amazon EC2 instances, S3 object storage staging, IAM roles and security policies, combined with Docker containerization and Linux server administration."
    },
    {
      id: "faq-8",
      question: "Does he work with GenAI?",
      answer: "Yes. He builds operational GenAI applications combining LLM reasoning via Databricks Model Serving / Mosaic AI with workflow context, system metadata, structured JSON parsing, and cache-first architectures."
    },
    {
      id: "faq-9",
      question: "What roles is he seeking?",
      answer: "He is seeking roles as a Data Engineer, Databricks Data Engineer, Cloud Data Engineer, Analytics Engineer, GenAI Engineer, or Data Platform Engineer."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            RECRUITER FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Direct answers to common recruiter and technical screener questions.
          </p>
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
};
