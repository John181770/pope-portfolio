export interface Profile {
  name: string;
  headline: string;
  targetRoles: string[];
  positioningStatement: string;
  supportingLine: string;
  openToWorkBadge: string;
  bio: string;
  educationSummary: {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
    alternateCgpaNote?: string;
  };
  achievement: {
    title: string;
    detail: string;
  };
}

export const profileData: Profile = {
  name: "Pope John Paul Kaligithi",
  headline: "Data Engineer",
  targetRoles: [
    "Data Engineer",
    "Databricks Data Engineer",
    "Cloud Data Engineer",
    "Analytics Engineer",
    "GenAI Engineer",
    "Data Platform Engineer"
  ],
  positioningStatement: "Data Engineer focused on building reliable data pipelines, modern data platforms, lakehouse architectures, analytics engineering workflows, cloud-based data systems, and intelligent data applications.",
  supportingLine: "Data Engineer focused on modern data platforms, distributed processing, lakehouse architecture, analytics engineering, cloud infrastructure, and enterprise GenAI applications.",
  openToWorkBadge: "Open to Data Engineering / Databricks / Cloud Data Engineering opportunities",
  bio: "I am a Computer Science and Engineering graduate focused on Data Engineering, Databricks, cloud data platforms, and intelligent data applications. My work combines Python, SQL, Apache Spark, Databricks, dbt, AWS, and GenAI technologies to build data pipelines, analytical systems, and enterprise-oriented applications.",
  educationSummary: {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Vellore Institute of Technology, Andhra Pradesh",
    period: "2022–2026",
    cgpa: "7.72/10", // Configurable field (earlier resume version listed 7.76/10)
    alternateCgpaNote: "Configurable CGPA field: 7.72/10 default (7.76/10 alternate recorded in earlier resume version)"
  },
  achievement: {
    title: "State-Level Engineering Entrance Rank",
    detail: "Ranked in the top 4% among 100,000 participants in a state-level engineering entrance examination."
  }
};
