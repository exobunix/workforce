import React from "react";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import OneAgencyPillars from "@/components/home/OneAgencyPillars";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CommandCenterPreview from "@/components/home/CommandCenterPreview";
import InteractiveUpMap from "@/components/home/InteractiveUpMap";
import TechStackShowcase from "@/components/home/TechStackShowcase";
import TeamSection from "@/components/home/TeamSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolutionShowcase from "@/components/home/SolutionShowcase";
import ComplianceSection from "@/components/home/ComplianceSection";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "उत्तर प्रदेश चुनाव प्रबंधन 2027 | Workforce Infotech Pvt. Ltd.",
  description: "उत्तर प्रदेश विधानसभा चुनाव 2027 के लिए चुनाव प्रबंधन, डेटा एवं रिसर्च, डिजिटल मीडिया, बूथ प्रबंधन, कॉल सेंटर, तकनीकी समाधान, मीडिया, क्रिएटिव और वार रूम सेवाएं।",
  keywords: "Election Campaign Management Uttar Pradesh, Political Campaign Management UP 2027, Election Data Research, Booth Management, Political Digital Marketing, Election War Room, Candidate Branding, Political Campaign Technology",
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      {/* 3 & 4. Hero Section & Campaign Intelligence Dashboard */}
      <Hero />

      {/* 5. Trust / Stat Strip */}
      <TrustStrip />

      {/* 6. About Workforce */}
      <AboutTeaser />

      {/* 7. 11 Services Grid */}
      <ServicesGrid />

      {/* 8. One Agency — Complete Campaign */}
      <OneAgencyPillars />

      {/* 9. Data -> Strategy -> Content -> Communication -> Ground -> Monitoring -> Reporting */}
      <ProcessTimeline />

      {/* 10. Campaign Command Center Split-Screen */}
      <CommandCenterPreview />

      {/* 11. Interactive Uttar Pradesh Strategic Map */}
      <InteractiveUpMap />

      {/* 12. Technology Powered Campaign Management */}
      <TechStackShowcase />

      {/* 13. 1000+ Professional Workforce / Team */}
      <TeamSection />

      {/* 14. Why Workforce Infotech */}
      <WhyChooseUs />

      {/* 15. Campaign Solution Examples (Illustrative Showcases) */}
      <SolutionShowcase />

      {/* 16. Responsible & Rule-Compliant Campaigning (Compliance) */}
      <ComplianceSection />

      {/* 17. FAQ Preview */}
      <FaqPreview />

      {/* 18. Final High-Impact CTA */}
      <FinalCta />
    </main>
  );
}
