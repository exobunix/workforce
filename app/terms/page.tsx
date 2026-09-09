import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "नियम एवं शर्तें (Terms & Conditions) | Workforce Infotech Pvt. Ltd.",
  description: "Workforce Infotech Private Limited नियम व शर्तें — सेवा दायरा, वैधानिक अनुपालन एवं अनुबंध शर्तें।",
};

export default function TermsPage() {
  return (
    <main className="flex-1 bg-navy-900 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        
        {/* Header */}
        <div className="border-b border-navy-800 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-mono">
            <Scale className="w-3.5 h-3.5 text-accent-orange" />
            <span>TERMS OF ENGAGEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-hindi">
            नियम एवं शर्तें (Terms & Conditions)
          </h1>
          <p className="text-sm text-slate-400">
            अंतिम अद्यतन: सितंबर 2026 | वर्कफोर्स इन्फोटेक प्राइवेट लिमिटेड
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">1. सेवाओं का दायरा (Scope of Services)</h2>
            <p>
              वर्कफोर्स इन्फोटेक प्राइवेट लिमिटेड उम्मीदवारों, राजनीतिक दलों एवं संगठनों को चुनाव प्रबंधन, डेटा विश्लेषण, डिजिटल मीडिया, तकनीकी समाधान, मतदाता संवाद और फील्ड समन्वय सेवाएं औपचारिक कार्य-आदेश (Work Order) और सेवा अनुबंध के अनुसार प्रदान करती है।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">2. क्लाइंट दायित्व एवं स्वीकृतियां</h2>
            <p>
              क्लाइंट (उम्मीदवार/अधिकृत प्रतिनिधि) सभी आधिकारिक घोषणाओं, राजनीतिक बयानों, प्रचार सामग्री और घोषणापत्र के तथ्यों की सत्यता के लिए स्वयं जिम्मेदार होगा। सार्वजनिक पोस्टिंग, वीडियो रिलीज या बल्क ब्रॉडकास्ट से पूर्व अधिकृत प्रतिनिधि का पूर्व-अनुमोदन अनिवार्य होगा।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">3. निर्वाचन नियमों एवं अनुमतियों का अनुपालन</h2>
            <p>
              सभी चुनावी गतिविधियां भारत निर्वाचन आयोग (ECI) के दिशा-निर्देशों, आदर्श आचार संहिता (MCC), स्थानीय प्रशासन/जिला निर्वाचन अधिकारी (DEO) से प्राप्त वैध लिखित अनुमतियों और भारतीय कानूनों के दायरे में ही संचालित की जाएंगी। किसी भी गैर-कानूनी या अवांछित गतिविधि का संचालन कंपनी द्वारा नहीं किया जाएगा।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">4. थर्ड-पार्टी प्लेटफॉर्म एवं टेलीकॉम निर्भरता</h2>
            <p>
              सोशल मीडिया प्लेटफॉर्म्स (Meta, YouTube, X), टेलीकॉम नेटवर्क (DLT, SMS गेटवे) और क्लाउड सेवा प्रदाताओं के तकनीकी डाउनटाइम, नीतिगत बदलाव या प्रतिबंधों पर कंपनी का कोई प्रत्यक्ष नियंत्रण नहीं होता। कंपनी उद्योग के सर्वोत्तम प्रयासों (Best Industry Efforts) के साथ सेवा निरंतरता सुनिश्चित करती है।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">5. चुनावी नतीजों की स्थिति (No Guaranteed Victory Claim)</h2>
            <p>
              कंपनी एक पेशेवर प्रबंधन एवं सेवा प्रदाता है। चुनाव परिणाम जनता के विवेक, राजनीतिक परिस्थितियों और पार्टी नीतियों पर निर्भर करते हैं। कंपनी किसी भी प्रकार की "गारंटीड चुनावी जीत" या "निश्चित वोट प्रतिशत" का दावा नहीं करती है।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">6. बौद्धिक संपदा एवं गोपनीयता</h2>
            <p>
              अभियान के दौरान तैयार किए गए उम्मीदवार-विशिष्ट डेटाबेस, रिपोर्ट्स और कस्टमाइज्ड सामग्री क्लाइंट की संपत्ति रहेगी तथा इसे चुनाव के पश्चात सुरक्षित रूप से हैंडओवर किया जाएगा।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">7. क्षेत्राधिकार (Jurisdiction)</h2>
            <p>
              किसी भी विवाद या कानूनी व्याख्या की स्थिति में केवल उत्तर प्रदेश राज्य के अधिकृत न्यायालयों का क्षेत्राधिकार मान्य होगा।
            </p>
          </section>

        </div>

        <div className="pt-8 border-t border-navy-800 flex items-center justify-between">
          <Link href="/" className="text-xs text-accent-gold hover:underline">
            ← होम पेज पर वापस जाएं
          </Link>
          <span className="text-xs text-slate-500 font-mono">
            WORKFORCE INFOTECH PVT. LTD.
          </span>
        </div>

      </div>
    </main>
  );
}
