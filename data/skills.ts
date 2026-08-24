export interface SkillItem {
  name: string;
  weight: 'primary' | 'secondary' | 'genai';
  category: string;
  icon?: string;
}

export interface CapabilityBreakdown {
  title: string;
  description: string;
  capabilities: string[];
  handsOnLevel: string;
}

export interface SkillsData {
  primary: SkillItem[];
  secondary: SkillItem[];
  genai: SkillItem[];
  capabilities: {
    databricks: CapabilityBreakdown;
    spark: CapabilityBreakdown;
    dbt: CapabilityBreakdown;
    aws: CapabilityBreakdown;
    devops: CapabilityBreakdown;
  };
}

export const skillsData: SkillsData = {
  primary: [
    { name: "Python", weight: "primary", category: "Languages" },
    { name: "SQL", weight: "primary", category: "Languages" },
    { name: "Apache Spark", weight: "primary", category: "Distributed Processing" },
    { name: "PySpark", weight: "primary", category: "Distributed Processing" },
    { name: "Databricks", weight: "primary", category: "Data Platform" },
    { name: "Delta Lake", weight: "primary", category: "Lakehouse Storage" },
    { name: "dbt", weight: "primary", category: "Analytics Engineering" },
    { name: "AWS", weight: "primary", category: "Cloud Infrastructure" },
    { name: "Docker", weight: "primary", category: "Containerization" },
    { name: "Git", weight: "primary", category: "Version Control" },
    { name: "Linux", weight: "primary", category: "Operating Systems" }
  ],
  secondary: [
    { name: "FastAPI", weight: "secondary", category: "Backend APIs" },
    { name: "Streamlit", weight: "secondary", category: "Web Interfaces" },
    { name: "Power BI", weight: "secondary", category: "Business Intelligence" },
    { name: "Pandas", weight: "secondary", category: "Data Analysis" },
    { name: "NumPy", weight: "secondary", category: "Numerical Computing" },
    { name: "scikit-learn", weight: "secondary", category: "Machine Learning" },
    { name: "Machine Learning", weight: "secondary", category: "Modeling" },
    { name: "MongoDB", weight: "secondary", category: "NoSQL Database" },
    { name: "Cassandra", weight: "secondary", category: "NoSQL Database" },
    { name: "MySQL", weight: "secondary", category: "Relational Database" },
    { name: "SQL Server", weight: "secondary", category: "Relational Database" }
  ],
  genai: [
    { name: "LLM Applications", weight: "genai", category: "GenAI Engineering" },
    { name: "Databricks Model Serving", weight: "genai", category: "AI Deployment" },
    { name: "Mosaic AI", weight: "genai", category: "GenAI Platform" },
    { name: "Prompt Engineering", weight: "genai", category: "LLM Techniques" },
    { name: "RAG Architecture", weight: "genai", category: "GenAI Systems" },
    { name: "Semantic Search", weight: "genai", category: "Information Retrieval" },
    { name: "Vector Search", weight: "genai", category: "Indexing" },
    { name: "Agentic AI Concepts", weight: "genai", category: "AI Systems" },
    { name: "Structured JSON Output", weight: "genai", category: "LLM Parsing" },
    { name: "LLM Response Caching", weight: "genai", category: "Optimization" },
    { name: "AI Recommendations", weight: "genai", category: "Operational AI" }
  ],
  capabilities: {
    databricks: {
      title: "Databricks Platform Capabilities",
      description: "Deep hands-on and project-backed experience across Lakehouse compute, governance, and AI infrastructure.",
      capabilities: [
        "SQL Warehouses",
        "Databricks Jobs & Workflows",
        "All-Purpose & Job Clusters",
        "Unity Catalog Governance",
        "Delta Lake ACID Storage",
        "System Tables Analytics",
        "Databricks Model Serving / Mosaic AI",
        "Billing Usage & DBU Cost Analysis",
        "FinOps Governance Principles",
        "Lakehouse Architecture Design",
        "Photon Engine Acceleration",
        "Cluster Auto-termination & Auto-scaling",
        "Cost-Aware Platform Engineering"
      ],
      handsOnLevel: "Hands-on implementation supported by Amgen experience & Flagship projects."
    },
    spark: {
      title: "Apache Spark & PySpark",
      description: "Distributed data processing techniques focused on high-throughput transformation and streaming.",
      capabilities: [
        "Spark Core Fundamentals",
        "PySpark DataFrames & SQL API",
        "Transformations vs Actions Execution",
        "Broadcast Joins & Shuffle Optimization",
        "Aggregations & Window Functions",
        "Partitioning & Bucketing Strategies",
        "In-Memory Data Caching",
        "Structured Streaming Engine",
        "Spark Memory & Cluster Tuning"
      ],
      handsOnLevel: "Hands-on implementation supported by Formula 1 and Streaming projects."
    },
    dbt: {
      title: "dbt Analytics Engineering & Modeling",
      description: "Modern modular SQL transformations, Jinja templating, materializations, schema testing, and lineage DAG management.",
      capabilities: [
        "Modular Model Layering (Staging stg_, Intermediate int_, Marts fct_/dim_)",
        "Jinja Templating (ref(), source(), config() macros)",
        "Materializations (views, tables, incremental, ephemeral)",
        "Automated Schema Tests (unique, not_null, accepted_values, relationships)",
        "Custom Singular SQL Assertions & Data Quality",
        "dbt CLI Workflows (dbt run, test, seed, compile, docs generate)",
        "DAG Lineage Visualization & Auto-Documentation",
        "dbt Project Structure (dbt_project.yml, sources.yml)"
      ],
      handsOnLevel: "Hands-on analytics engineering implementation and group training build."
    },
    aws: {
      title: "AWS Cloud Infrastructure",
      description: "Core cloud services backing containerized deployments and scalable data pipelines.",
      capabilities: [
        "Amazon EC2 (Instance compute & host deployment)",
        "AWS IAM (Role-based access control & policies)",
        "Amazon S3 (Object storage & staging buckets)",
        "Linux Server Operations & Shell Scripting"
      ],
      handsOnLevel: "Hands-on project & deployment experience (EC2, IAM, S3, Linux)."
    },
    devops: {
      title: "DevOps & Engineering Workflows",
      description: "Modern containerization, version control, and operational software practices.",
      capabilities: [
        "Git & GitHub Version Control",
        "GitLab Enterprise Workflows",
        "Docker Containerization & Image Creation",
        "Linux Environment Administration",
        "Pipeline Observability & Logging",
        "Agile / Scrum Team Collaboration"
      ],
      handsOnLevel: "Hands-on experience supporting enterprise development and personal builds."
    }
  }
};
