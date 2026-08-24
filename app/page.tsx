import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { DataEngineeringProjects } from '@/components/sections/DataEngineeringProjects';
import { CapabilitiesArchitecture } from '@/components/sections/CapabilitiesArchitecture';
import { TechnicalSkills } from '@/components/sections/TechnicalSkills';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1 space-y-0">
        {/* 2. Hero & Recruiter Quick Scan */}
        <Hero />

        {/* 3. About & Core Competencies & Education */}
        <About />

        {/* 4. Experience Case Study */}
        <Experience />

        {/* 5. Projects & Builds */}
        <DataEngineeringProjects />

        {/* 6. Architecture & Lakehouse Capabilities */}
        <CapabilitiesArchitecture />

        {/* 7. Technical Skills */}
        <TechnicalSkills />

        {/* 8. Certifications */}
        <Certifications />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
