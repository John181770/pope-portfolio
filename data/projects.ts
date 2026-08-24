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
    id: "aws-resource-tagging-toolkit",
    title: "AWS Resource Tagging Toolkit",
    category: "Cloud Engineering + GenAI",
    isFlagship: true,
    priority: "flagship",
    oneLiner: "AI-assisted toolkit for AWS resource tagging, inventory, and compliance checks using an LLM-based router and Streamlit app.",
    description: "An end-to-end toolkit that automates AWS resource discovery, applies tag compliance checks, and uses an LLM-based router to suggest and apply tags. Includes an S3-backed tag data reader and a Streamlit web app for reviewing and applying tags interactively.",
    technologies: ["Python", "AWS", "S3", "Streamlit", "LLM", "Boto3", "GenAI"],
    image: "/projects/aws-tagging.jpg",
    links: {
      github: "https://github.com/John181770/aws-resource-tagging-toolkit",
    },
  },
  {
    id: "ecommerce-predictive-analytics",
    title: "E-Commerce Predictive & Prescriptive Analytics",
    category: "Data Science + Analytics",
    isFlagship: true,
    priority: "flagship",
    oneLiner: "Predictive and prescriptive analytics platform for e-commerce decision support using ML and Jupyter notebooks.",
    description: "Applies predictive analytics (forecasting sales trends, customer churn) and prescriptive analytics (recommending optimal pricing, inventory actions) to improve e-commerce business outcomes. Built with Python, Pandas, Scikit-learn, and Matplotlib in Jupyter Notebooks.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn", "Matplotlib", "Machine Learning"],
    image: "/projects/ecommerce-analytics.jpg",
    links: {
      github: "https://github.com/John181770/Enhancing-E-Commerce-Business-Insights-through-Predictive-and-Prescriptive-Analytics",
    },
  },
  {
    id: "coffee-shop-sales-dashboard",
    title: "Coffee Shop Sales Dashboard",
    category: "Business Intelligence + Power BI",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Interactive Power BI dashboard analyzing coffee shop sales performance, customer behavior, and product insights.",
    description: "A comprehensive Power BI dashboard that visualizes coffee shop revenue trends, tracks customer behavior patterns, analyzes product performance, and delivers actionable insights to support data-driven business decisions.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"],
    image: "/projects/coffee-shop.jpg",
    links: {
      github: "https://github.com/John181770/coffee-shop-sales-dashboard",
    },
  },
  {
    id: "databricks-chatbot",
    title: "Databricks Chatbot",
    category: "GenAI + Databricks",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Conversational AI chatbot integrated with Databricks for natural language data querying and analysis.",
    description: "A Python-based chatbot that connects to the Databricks platform, allowing users to query data, run analytics, and get insights through natural language conversations. Leverages LLM capabilities with Databricks as the data backend.",
    technologies: ["Python", "Databricks", "LLM", "GenAI", "NLP"],
    image: "/projects/databricks-chatbot.jpg",
    links: {
      github: "https://github.com/John181770/databricks-chatbot",
    },
  },
  {
    id: "job-analyst",
    title: "Job Analyst",
    category: "Data Engineering + Python",
    isFlagship: false,
    priority: "secondary",
    oneLiner: "Python tool for scraping, analyzing, and visualizing job market data to identify in-demand skills and salary trends.",
    description: "Automated Python tool that scrapes job listings, extracts skills requirements and salary data using NLP, and produces analytics dashboards showing top demanded technologies, job category distribution, and compensation benchmarks.",
    technologies: ["Python", "NLP", "Web Scraping", "Pandas", "Data Analysis", "Visualization"],
    image: "/projects/job-analyst.jpg",
    links: {
      github: "https://github.com/John181770/job-analyst",
    },
  },
  {
    id: "dbt-learn-gt-init",
    title: "dbt Learn — Group Training Init",
    category: "Analytics Engineering + dbt",
    isFlagship: false,
    priority: "lower",
    oneLiner: "Starter repository for dbt Learn group training sessions — dbt project initialization and best practices.",
    description: "A foundational dbt project repository used for group training sessions. Demonstrates dbt project structure, model layering (staging, marts), testing, documentation, and best practices for analytics engineering workflows.",
    technologies: ["dbt", "SQL", "Analytics Engineering", "Data Modeling"],
    image: "",
    links: {
      github: "https://github.com/John181770/dbt-learn-gt-init",
    },
  },
  {
    id: "omniroute-debug",
    title: "OmniRoute Debug",
    category: "TypeScript + Developer Tools",
    isFlagship: false,
    priority: "lower",
    oneLiner: "TypeScript utility for debugging and tracing multi-route application flows with MIT license.",
    description: "A TypeScript debugging and routing inspection tool that helps trace and debug complex multi-route application flows. Open-source under the MIT license.",
    technologies: ["TypeScript", "Node.js", "Debugging", "Developer Tools"],
    image: "",
    links: {
      github: "https://github.com/John181770/OmniRoute-Debug",
    },
  },
];
