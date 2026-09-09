"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import EnquiryModal from "@/components/shared/EnquiryModal";

export default function FloatingContact() {
  const { language } = useLanguage();
  const { settings } = useContent();
  const [modalOpen, setModalOpen] = useState(false);

  const phone1 = settings.phone1 || "9621762121";
  const whatsappNum = (settings.whatsappNumber || "919621762121").replace(/[^0-9]/g, "");
  const defaultMsg = settings.whatsappDefaultMessage || (
    language === "hi"
      ? "नमस्कार! मैं उत्तर प्रदेश विधानसभा चुनाव 2027 के लिए वर्कफोर्स इन्फोटेक की चुनाव प्रबंधन सेवाओं के संबंध में चर्चा करना चाहता/चाहती हूँ।"
      : "Hello! I would like to discuss Workforce Infotech's election campaign management services for the Uttar Pradesh Assembly Election 2027."
  );
  const whatsappMessage = encodeURIComponent(defaultMsg);

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="hidden sm:block">
        {/* Call button bottom left */}
        <a
          href={`tel:${phone1}`}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-white/95 dark:bg-navy-900/90 hover:bg-slate-50 dark:hover:bg-navy-850 text-navy-950 dark:text-white border border-slate-200 dark:border-navy-700/80 shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-accent-orange group"
          title="Direct Phone Line"
        >
          <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center text-white shadow-md flex-shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block leading-tight font-medium">
              {language === "hi" ? "हेल्पलाइन" : "Helpline"}
            </span>
            <span className="text-xs font-bold text-navy-950 dark:text-white group-hover:text-accent-orange font-mono">
              {phone1}
            </span>
          </div>
        </a>

        {/* WhatsApp button bottom right */}
        <a
          href={`https://wa.me/${whatsappNum}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-105 group border border-emerald-500/50"
          title="WhatsApp Official Channel"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
          <span className="text-xs font-bold pr-1">
            {language === "hi" ? "व्हाट्सएप परामर्श" : "WhatsApp"}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Dock */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-lg border-t border-navy-800 px-3 py-2 flex items-center justify-around shadow-2xl">
        <a
          href={`tel:${phone1}`}
          className="flex flex-col items-center justify-center gap-1 text-slate-300 hover:text-white px-3 py-1 text-center"
        >
          <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-emerald-400 border border-navy-700">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium">{language === "hi" ? "कॉल" : "Call"}</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNum}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-slate-300 hover:text-white px-3 py-1 text-center"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="flex flex-col items-center justify-center gap-1 text-slate-300 hover:text-white px-3 py-1 text-center cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center text-white shadow-md">
            <FileText className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium">{language === "hi" ? "परामर्श" : "Enquiry"}</span>
        </button>
      </div>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
