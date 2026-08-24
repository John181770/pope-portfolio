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
        {/* 1. Hero & Impact Metrics Strip */}
        <Hero />

        {/* 2. Proof of Work: Flagship & Technical Projects */}
        <DataEngineeringProjects />

        {/* 3. Enterprise Case Study: Amgen */}
        <Experience />

        {/* 4. Architecture & Lakehouse Capabilities */}
        <CapabilitiesArchitecture />

        {/* 5. Technical Skills Deep-Dive */}
        <TechnicalSkills />

        {/* 6. Verified Certifications */}
        <Certifications />

        {/* 7. About & Academic Profile */}
        <About />

        {/* 8. Contact & Resume */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
