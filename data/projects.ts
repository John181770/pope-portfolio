// Architecture diagram types (used by CapabilitiesArchitecture section)
export interface ProjectArchitectureNode {
  id: string;
  label: string;
  type: 'source' | 'processing' | 'storage' | 'api' | 'ai' | 'ui' | 'governance';
  description: string;
  iconName?: string;
}

export interface ProjectArchitectureConnection {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

export interface ProjectArchitecture {
  nodes: ProjectArchitectureNode[];
  connections: ProjectArchitectureConnection[];
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  isFlagship: boolean;
  priority: "flagship" | "secondary" | "lower";
  oneLiner: string;
  description: string;
  technologies: string[];
  image?: string;
  links: ProjectLinks;
}

export const projectsData: Project[] = [
  {
    id: "databricks-job-failure-analysis",
    title: "AI-Powered Databricks Job Failure Analysis Platform",
    category: "GenAI + Databricks + Observability",
    isFlagship: true,
    priority: "flagship",
    oneLiner: "Automated root-cause diagnostic platform for failed Databricks workflows using System Tables metadata, SQL analytics, and LLM reasoning.",
    description: "Engineered an operational AI platform that extracts execution context from failed Databricks Jobs/Workflows, queries Unity Catalog and System Tables via Databricks SQL Warehouse, and synthesizes structured JSON remediation steps via Databricks Model Serving / Mosaic AI with a cache-first FastAPI middleware.",
    technologies: ["Databricks", "Mosaic AI", "Databricks Model Serving", "SQL Warehouse", "Unity Catalog", "System Tables", "FastAPI", "Python", "Streamlit"],
    image: "/projects/databricks-chatbot.jpg",
    links: {
      github: "https://github.com/John181770/databricks-chatbot",
    },
  },
  {
    id: "databricks-finops-engine",
    title: "Databricks FinOps AI Cost Optimization Engine",
    category: "Cloud FinOps + Lakehouse Analytics",
    isFlagship: true,
    priority: "flagship",
    oneLiner: "AI-assisted compute usage analytics and cost governor analyzing DBU consumption, cluster idle time, and Photon acceleration savings.",
    description: "Built a lakehouse FinOps monitoring tool analyzing Databricks System Tables billing records. Identifies underutilized SQL Warehouses, flags idle clusters for auto-termination, evaluates Photon engine acceleration ROI, and generates conversational cost reduction recommendations for platform teams.",
    technologies: ["Databricks", "System Tables", "SQL Analytics", "FinOps", "Python", "DBU Monitoring", "Cost Optimization"],
    image: "/projects/finops-engine.jpg",
    links: {
      github: "https://github.com/John181770/without-vannaai",
    },
  },
  {
    id: "dbt-analytics-engineering",
    title: "dbt Learn — Analytics Engineering & Data Modeling",
    category: "Analytics Engineering + dbt Core",
    isFlagship: true,
    priority: "flagship",
    oneLiner: "Modular data transformation pipelines with dbt: Jinja SQL templating, DAG lineage, layered dimensional models, and automated schema tests.",
    description: "Production analytics engineering workflow implementing modular model layering (Staging stg_, Intermediate int_, Marts fct_/dim_), Jinja templating with ref() and source() macros, dynamic materializations (views, tables, incremental, ephemeral), and automated data quality testing (unique, not_null, accepted_values, relationships).",
    technologies: ["dbt Core", "SQL", "Jinja", "Data Modeling", "Schema Testing", "Lineage DAG", "Analytics Engineering"],
    image: "/projects/dbt-learn.jpg",
    links: {
      github: "https://github.com/John181770/dbt-learn-gt-init",
    },
  },
  {
    id: "aws-resource-tagging-toolkit",
    title: "AWS Resource Tagging & Compliance Toolkit",
    category: "Cloud Infrastructure + GenAI",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Automated AWS inventory and compliance toolkit utilizing an LLM router, S3 tag reader, and Streamlit review interface.",
    description: "Solves multi-account cloud resource untagged sprawl by enumerating EC2 and S3 resources via Boto3, running automated policy compliance checks, and leveraging an LLM router to classify and apply structured owner/environment tags interactively through a Streamlit UI.",
    technologies: ["Python", "AWS", "Boto3", "S3", "Streamlit", "LLM", "GenAI"],
    image: "/projects/aws-tagging.jpg",
    links: {
      github: "https://github.com/John181770/aws-resource-tagging-toolkit",
    },
  },
  {
    id: "ecommerce-predictive-analytics",
    title: "E-Commerce Predictive & Prescriptive Analytics",
    category: "Data Science + ML Modeling",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Machine learning revenue forecasting and prescriptive pricing/inventory decision support system.",
    description: "Built end-to-end predictive models (Random Forest regression, customer RFM clustering) for forecasting multi-month sales trajectories alongside prescriptive analytics engines recommending optimal pricing adjustments and restock priorities to minimize stockouts.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Jupyter Notebook", "Matplotlib"],
    image: "/projects/ecommerce-analytics.jpg",
    links: {
      github: "https://github.com/John181770/Enhancing-E-Commerce-Business-Insights-through-Predictive-and-Prescriptive-Analytics",
    },
  },
  {
    id: "coffee-shop-sales-dashboard",
    title: "Coffee Shop Sales Performance & BI Dashboard",
    category: "Business Intelligence + Power BI",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Interactive Power BI executive dashboard with DAX modeling, product mix analytics, and revenue trend visualizers.",
    description: "Engineered dimensional star-schema data models and DAX KPI calculations in Power BI to analyze $340k+ in sales records, visualizing customer order distributions, peak hourly revenue trends, and regional product velocity to inform store operational strategies.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"],
    image: "/projects/coffee-shop.jpg",
    links: {
      github: "https://github.com/John181770/coffee-shop-sales-dashboard",
    },
  },
  {
    id: "job-analyst",
    title: "Job Market NLP & Salary Analytics Pipeline",
    category: "Data Engineering + NLP",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Automated scraping, NLP extraction, and analytics pipeline tracking high-demand data engineering skills and compensation benchmarks.",
    description: "Designed a multi-source web scraping and NLP parsing pipeline in Python that extracts demanded skill keywords, normalizes experience levels, and computes compensation benchmarks across data engineering postings with automated deduplication and trend charts.",
    technologies: ["Python", "NLP", "Web Scraping", "Pandas", "Data Pipeline", "Visualization"],
    image: "/projects/job-analyst.jpg",
    links: {
      github: "https://github.com/John181770/job-analyst",
    },
  },
];
