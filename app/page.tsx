import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { DataEngineeringProjects } from '@/components/sections/DataEngineeringProjects';
import { CapabilitiesArchitecture } from '@/components/sections/CapabilitiesArchitecture';
import { TechnicalSkills } from '@/components/sections/TechnicalSkills';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { FAQSection } from '@/components/sections/FAQSection';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1 space-y-0">
        {/* 2. Hero & Recruiter Quick Scan */}
        <Hero />

        {/* 3. About & Core Competencies */}
        <About />

        {/* 4. Experience Case Study */}
        <Experience />

        {/* 9. Data Engineering Projects (3-6) & Lower-Priority Projects */}
        <DataEngineeringProjects />

        {/* 10. Architecture / Engineering Capabilities */}
        <CapabilitiesArchitecture />

        {/* 11. Technical Skills */}
        <TechnicalSkills />

        {/* 12. GitHub Featured Repositories */}
        <GitHubSection />

        {/* 13. Certifications */}
        <Certifications />

        {/* 14. Education */}
        <Education />

        {/* 15. FAQ Accordion */}
        <FAQSection />

        {/* 16. Contact */}
        <Contact />
      </main>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
}
