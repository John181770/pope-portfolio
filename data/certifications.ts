export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  badgeUrl?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'cloud' | 'databricks' | 'analytics';
}

export const certificationsData: Certification[] = [
  {
    id: "oracle-genai-2025",
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    year: "2025",
    category: "cloud",
    credentialUrl: "https://www.linkedin.com/in/pope-john-paul-kaligithi-450040275/details/certifications/",
  },
  {
    id: "databricks-fundamentals-2026",
    name: "Databricks Fundamentals Accreditation",
    issuer: "Databricks Academy",
    year: "2026",
    category: "databricks",
    credentialUrl: "https://www.linkedin.com/in/pope-john-paul-kaligithi-450040275/details/certifications/",
  },
  {
    id: "dbt-learn-fundamentals",
    name: "dbt Learn: Fundamentals",
    issuer: "dbt Labs",
    year: "2025",
    category: "analytics",
    credentialUrl: "https://www.linkedin.com/in/pope-john-paul-kaligithi-450040275/details/certifications/",
  },
  {
    id: "databricks-aibi-2026",
    name: "Databricks Academy: AI/BI for Data Analysts",
    issuer: "Databricks Academy",
    year: "2026",
    category: "databricks",
    credentialUrl: "https://www.linkedin.com/in/pope-john-paul-kaligithi-450040275/details/certifications/",
  }
];
