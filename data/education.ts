export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  cgpaConfigNote?: string;
  coursework: string[];
}

export const educationData: EducationItem = {
  degree: "B.Tech",
  major: "Computer Science and Engineering",
  institution: "Vellore Institute of Technology, Andhra Pradesh",
  location: "Andhra Pradesh, India",
  period: "2022 – 2026",
  cgpa: "7.72/10", // Configurable (7.76/10 alternate listed in earlier resume version)
  cgpaConfigNote: "Configurable CGPA default is 7.72/10. Easily toggled to 7.76/10 if required.",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Probability & Statistics",
    "Data Analytics & Visualization"
  ]
};
