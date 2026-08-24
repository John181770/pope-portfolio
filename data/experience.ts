export interface ExperienceVersion {
  title: string;
  department: string;
  period: string;
}

export interface Experience {
  company: string;
  location: string;
  activeVersionKey: 'versionA' | 'versionB';
  versions: {
    versionA: ExperienceVersion;
    versionB: ExperienceVersion;
  };
  summary: string;
  publicDescription: {
    problem: string;
    solution: string;
    architectureOverview: string[];
    technicalContributions: string[];
    engineeringDecisions: string[];
    impact: string[];
  };
  technologies: string[];
}

export const experienceData: Experience = {
  company: "Amgen",
  location: "Global Biotechnology Enterprise",
  activeVersionKey: "versionA", // Switch between 'versionA' and 'versionB' before deploying
  versions: {
    versionA: {
      title: "GenAI Analyst Intern",
      department: "Enterprise GenAI and Databricks Engineering",
      period: "Jan 2026 – Jul 2026"
    },
    versionB: {
      title: "SRE Intern",
      department: "Data Platform Ops Team",
      period: "Jan 2026 – Jul 2026"
    }
  },
  summary: "Engineered AI-powered operational tools and Databricks observability solutions combining workflow context, SQL analytics, Unity Catalog metadata, and LLM reasoning.",
  publicDescription: {
    problem: "Data engineering workflows and Databricks job executions across complex pipelines required manual triage when failures occurred, slowing root-cause isolation and platform operational response.",
    solution: "Designed and built an automated AI-powered Databricks job-failure analysis platform that leverages workflow execution context, platform system metadata, and LLM reasoning via Databricks Model Serving / Mosaic AI to deliver structured root-cause explanations and actionable remediation steps.",
    architectureOverview: [
      "Databricks Jobs / Workflows trigger execution context collection upon pipeline failure event.",
      "Databricks System Tables & Unity Catalog metadata queried via Databricks SQL Warehouse backend.",
      "FastAPI REST services process context, query intent, and enforce cache-first request handling.",
      "Databricks Model Serving / Mosaic AI synthesizes metadata + workflow context into structured JSON outputs.",
      "Streamlit UI presents interactive root-cause diagnostics and recommendations for operational teams."
    ],
    technicalContributions: [
      "Built an AI-powered Databricks job-failure analysis platform combining workflow context and enterprise metadata with LLM reasoning via Databricks Model Serving / Mosaic AI.",
      "Generated structured root-cause explanations and remediation recommendations in standardized JSON.",
      "Developed Streamlit interfaces and FastAPI REST services for internal engineer interaction.",
      "Used Databricks SQL Warehouse as the backend data layer; returned structured JSON for downstream workflows.",
      "Designed cache-first request handling to reduce redundant LLM calls and improve repeat-analysis efficiency.",
      "Grounded recommendations in job and platform metadata without exposing sensitive credentials or unverified data.",
      "Containerized services with Docker; integrated AWS EC2, IAM, and S3 for deployment flexibility.",
      "Worked with Databricks Jobs, Workflows, Clusters, SQL Warehouses, Unity Catalog, System Tables, billing usage, DBU analysis, and FinOps concepts.",
      "Used GitLab for version control; participated in Agile/Scrum workflows; presented technical work and progress."
    ],
    engineeringDecisions: [
      "Cache-First Pattern: Implemented hashed query caching to eliminate redundant LLM API invocation costs and reduce response latency.",
      "Schema-Grounded Context: Constrained LLM prompt contexts to strict system metadata schema to eliminate hallucinations.",
      "Read-Oriented Architecture: Enforced read-only operational boundaries for system table analytics to ensure strict GxP governance compliance."
    ],
    impact: [
      "Accelerated root-cause triage time for failed Databricks workflow executions.",
      "Standardized failure documentation across platform engineering teams into consistent JSON artifacts.",
      "Provided actionable operational clarity for DBU resource utilization and cluster failure patterns."
    ]
  },
  technologies: [
    "Python",
    "Databricks",
    "Databricks Model Serving",
    "Mosaic AI",
    "Databricks SQL Warehouse",
    "Unity Catalog",
    "System Tables",
    "FastAPI",
    "Streamlit",
    "Docker",
    "AWS (EC2, IAM, S3)",
    "GitLab",
    "FinOps",
    "DBU Analysis"
  ]
};
