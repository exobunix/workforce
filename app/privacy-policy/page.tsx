import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "गोपनीयता नीति (Privacy Policy) | Workforce Infotech Pvt. Ltd.",
  description: "Workforce Infotech Private Limited गोपनीयता नीति — डेटा सुरक्षा, DPDP Act अनुपालन एवं अभियान सूचना संरक्षण।",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-navy-900 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        
        {/* Header */}
        <div className="border-b border-navy-800 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-mono">
            <Lock className="w-3.5 h-3.5 text-accent-orange" />
            <span>LEGAL & COMPLIANCE // DPDP 2023</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-hindi">
            गोपनीयता नीति (Privacy Policy)
          </h1>
          <p className="text-sm text-slate-400">
            अंतिम अद्यतन: सितंबर 2026 | वर्कफोर्स इन्फोटेक प्राइवेट लिमिटेड
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">1. प्रस्तावना एवं दायरा</h2>
            <p>
              वर्कफोर्स इन्फोटेक प्राइवेट लिमिटेड (Workforce Infotech Pvt. Ltd.) उम्मीदवारों, राजनीतिक दलों और अभियान समन्वयकों की गोपनीयता का सर्वोच्च सम्मान करती है। यह नीति स्पष्ट करती है कि हमारी वेबसाइट (workforceinfotech.com) और चुनावी सेवाओं के दौरान डेटा का संकलन, उपयोग और सुरक्षा किस प्रकार की जाती है।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">2. एकत्रित की जाने वाली जानकारी</h2>
            <p>
              जब आप हमारी वेबसाइट पर संपर्क अथवा परामर्श फॉर्म भरते हैं, तो हम निम्नलिखित आवश्यक व्यावसायिक जानकारी प्राप्त करते हैं:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>पूरा नाम और पद/संगठनात्मक भूमिका</li>
              <li>मोबाइल नंबर और ईमेल पता</li>
              <li>लक्षित विधानसभा क्षेत्र एवं जिला</li>
              <li>प्राथमिकता वाली सेवाएं एवं अभियान की सामान्य आवश्यकताएं</li>
            </ul>
            <p className="text-xs text-slate-400 italic">
              हम कभी भी बिना वैध अनुमति या वैधानिक आधार के नागरिकों का असंवेदनशील या निजी व्यक्तिगत डेटा संकलित नहीं करते।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">3. जानकारी का उपयोग</h2>
            <p>
              एकत्रित की गई जानकारी का उपयोग केवल निम्नलिखित उद्देश्यों हेतु किया जाता है:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>आपके अनुरोधित चुनाव प्रबंधन परामर्श सत्र का आयोजन करना</li>
              <li>विधानसभा-विशिष्ट उपयुक्त रणनीतिक प्रस्ताव तैयार करना</li>
              <li>परियोजना अनुबंध और सेवा निष्पादन के दौरान संवाद बनाए रखना</li>
              <li>लागू निर्वाचन आयोग (ECI) एवं कानूनी नियमों का पालन सुनिश्चित करना</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">4. डेटा सुरक्षा एवं गोपनीयता (Confidentiality)</h2>
            <p>
              अभियान की सभी रणनीतिक रिपोर्ट, बूथ प्रोफाइलिंग और उम्मीदवार से संबंधित परामर्श सख्त गैर-प्रकटीकरण समझौते (Non-Disclosure Agreement - NDA) के तहत सुरक्षित रखे जाते हैं। हमारे डेटाबेस AES-256 बिट एन्क्रिप्शन और कड़े एक्सेस कंट्रोल्स से सुरक्षित हैं।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">5. कुकीज़ एवं वेबसाइट एनालिटिक्स</h2>
            <p>
              हमारी वेबसाइट उपयोगकर्ता अनुभव को बेहतर बनाने और ट्रैफिक विश्लेषण के लिए सामान्य कुकीज़ का उपयोग करती है। आप अपने ब्राउज़र की सेटिंग्स में जाकर कुकीज़ को अक्षम कर सकते हैं।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-hindi">6. संपर्क विवरण</h2>
            <p>
              इस गोपनीयता नीति या आपके डेटा से संबंधित किसी भी प्रश्न के लिए आप हमें आधिकारिक ईमेल <strong>contact@workforceinfotech.com</strong> या हेल्पलाइन नंबर <strong>9621762121</strong> पर संपर्क कर सकते हैं।
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
