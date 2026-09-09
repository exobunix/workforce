import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import ServicesGrid from "@/components/home/ServicesGrid";
import FinalCta from "@/components/home/FinalCta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "हमारी चुनावी सेवाएं | Workforce Infotech Pvt. Ltd.",
  description: "उत्तर प्रदेश विधानसभा चुनाव 2027 के लिए सभी 11 संपूर्ण चुनाव प्रबंधन सेवाएं — सोशल मीडिया, डेटा, बूथ, कॉल सेंटर, तकनीक, वीडियो, पीआर, आउटडोर, रैलियां, ब्रांडिंग और वार रूम।",
};

export default function ServicesIndexPage() {
  return (
    <main className="flex-1 bg-navy-900">
      <div className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-4">
          <Link href="/" className="hover:text-accent-gold">HOME</Link>
          <span>/</span>
          <span className="text-accent-orange font-bold">SERVICES DIRECTORY</span>
        </div>
      </div>

      <ServicesGrid />

      <FinalCta />
    </main>
  );
}
