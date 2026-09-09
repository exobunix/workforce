"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { MapPin, Users, Database, Radio, CheckCircle2, Shield } from "lucide-react";

interface RegionInfo {
  id: string;
  nameHi: string;
  nameEn: string;
  seats: string;
  districtsHi: string;
  districtsEn: string;
  booths: string;
  readiness: string;
  descHi: string;
  descEn: string;
}

const regions: RegionInfo[] = [
  {
    id: "purvanchal",
    nameHi: "पूर्वांचल (पूर्वी उत्तर प्रदेश)",
    nameEn: "Purvanchal (Eastern UP)",
    seats: "130+ सीटें",
    districtsHi: "वाराणसी, गोरखपुर, आजमगढ़, प्रयागराज, जौनपुर, गाजीपुर, मिर्जापुर, बस्ती",
    districtsEn: "Varanasi, Gorakhpur, Azamgarh, Prayagraj, Jaunpur, Ghazipur, Mirzapur, Basti",
    booths: "50,000+ पोलिंग बूथ",
    readiness: "हाई-अलर्ट वॉर रूम",
    descHi: "सघन ग्रामीण आबादी, जातीय समीकरणों की संवेदनशीलता और स्थानीय बोलियों (भोजपुरी) पर केंद्रित सघन डोर-टू-डोर संपर्क व ऑडियो-विजुअल प्रचार।",
    descEn: "Dense rural demography, nuanced social equations, and localized Bhojpuri content integration with massive chaupal screenings."
  },
  {
    id: "awadh",
    nameHi: "अवध एवं मध्य उत्तर प्रदेश",
    nameEn: "Awadh & Central UP",
    seats: "80+ सीटें",
    districtsHi: "लखनऊ, अयोध्या, कानपुर, रायबरेली, सीतापुर, बाराबंकी, उन्नाव, हरदोई",
    districtsEn: "Lucknow, Ayodhya, Kanpur, Raebareli, Sitapur, Barabanki, Unnao, Hardoi",
    booths: "32,000+ पोलिंग बूथ",
    readiness: "सेंट्रल मीडिया हब",
    descHi: "राज्य की राजधानी और मुख्य राजनीतिक केंद्र। डिजिटल नैरेटिव, प्रेस कॉन्फ्रेंस, वरिष्ठ मीडिया समन्वय और तीव्र गति से प्रतिक्रिया प्रबंधन।",
    descEn: "The state capital and administrative political epicenter. Rapid media response, press coordination, and high-velocity digital narratives."
  },
  {
    id: "western",
    nameHi: "पश्चिमी उत्तर प्रदेश",
    nameEn: "Western Uttar Pradesh",
    seats: "100+ सीटें",
    districtsHi: "मेरठ, मुजफ्फरनगर, सहारनपुर, गाजियाबाद, नोएडा, अलीगढ़, आगरा, मथुरा",
    districtsEn: "Meerut, Muzaffarnagar, Saharanpur, Ghaziabad, Noida, Aligarh, Agra, Mathura",
    booths: "42,000+ पोलिंग बूथ",
    readiness: "डिजिटल एवं ग्राउंड सिंक",
    descHi: "अर्ध-शहरी एवं औद्योगिक मतदाताओं का उच्च अनुपात। सोशल मीडिया रील्स, व्हाट्सऐप नेटवर्क्स और युवा मतदाताओं के साथ तीव्र डिजिटल संवाद।",
    descEn: "High concentration of peri-urban and industrial electors. Fast-paced social media reels, WhatsApp communities, and youth outreach drives."
  },
  {
    id: "bundelkhand",
    nameHi: "बुंदेलखंड क्षेत्र",
    nameEn: "Bundelkhand Region",
    seats: "19 सीटें",
    districtsHi: "झांसी, बांदा, महोबा, ललितपुर, चित्रकूट, हमीरपुर, जालौन",
    districtsEn: "Jhansi, Banda, Mahoba, Lalitpur, Chitrakoot, Hamirpur, Jalaun",
    booths: "8,500+ पोलिंग बूथ",
    readiness: "मोबाइल एलईडी वैन नेटवर्क",
    descHi: "भौगोलिक रूप से विस्तृत और दूरस्थ गांव। मोबाइल प्रचार रथ, एलईडी वैन और स्थानीय पानी-सड़क-कृषि मुद्दों पर केंद्रित लक्षित अभियान।",
    descEn: "Geographically expansive and dispersed villages. Dedicated mobile LED raths, sound vans, and focus on rural water and agrarian issues."
  },
  {
    id: "rohilkhand",
    nameHi: "रुहेलखंड क्षेत्र",
    nameEn: "Rohilkhand Region",
    seats: "52 सीटें",
    districtsHi: "बरेली, मुरादाबाद, रामपुर, पीलीभीत, शाहजहांपुर, बदायूं, संभल",
    districtsEn: "Bareilly, Moradabad, Rampur, Pilibhit, Shahjahanpur, Budaun, Sambhal",
    booths: "21,000+ पोलिंग बूथ",
    readiness: "सूक्ष्म बूथ मैपिंग",
    descHi: "विशिष्ट सामाजिक संरचना और कृषि आधारित अर्थव्यवस्था। बूथ स्तर पर पन्ना प्रमुखों का सघन प्रशिक्षण और सूक्ष्म मतदाता वर्गीकरण।",
    descEn: "Distinct demographic profile and agrarian economy. Micro-booth voter classification and intensive grassroots worker coordination."
  }
];

export default function InteractiveUpMap() {
  const { language } = useLanguage();
  const { homepage } = useContent();
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(regions[0]);

  const im = homepage.interactiveMap;
  const badge = language === "hi" ? (im?.badgeHi || "भौगोलिक व्यापकता") : (im?.badgeEn || "Geographic Footprint");
  const heading = im?.heading || (language === "hi" ? "उत्तर प्रदेश: 403 विधानसभा क्षेत्रों में विस्तृत कवरेज क्षमता" : "Strategic Readiness for Uttar Pradesh 2027");
  const sub = im?.sub || (language === "hi" ? "सभी 403 विधानसभा क्षेत्रों और विविध अंचलों के अनुरूप विशेष रणनीतिक रूपरेखा।" : "Constituency-calibrated operational models tailored to UP's diverse socio-geographic terrain.");

  return (
    <section className="py-12 lg:py-16 bg-navy-900 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-royal-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950 border border-navy-700 text-accent-gold text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-accent-orange" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-hindi">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {sub}
          </p>
        </div>

        {/* Interactive Regional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Region Selector Cards & Abstract Map Visual */}
          <div className="lg:col-span-6 space-y-3">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              {language === "hi" ? "अंचल का चयन करें:" : "Select Strategic Zone:"}
            </p>

            <div className="space-y-2.5">
              {regions.map((region) => {
                const isSelected = selectedRegion.id === region.id;

                return (
                  <div
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-gradient-to-r from-navy-850 to-navy-800 border-accent-orange shadow-lg shadow-accent-orange/10 keep-dark"
                        : "bg-navy-950/70 border-navy-800 hover:border-slate-600 hover:bg-navy-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? "bg-accent-orange text-white" : "bg-navy-900 text-slate-400"}`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-hindi">
                          {language === "hi" ? region.nameHi : region.nameEn}
                        </h4>
                        <span className="text-xs text-accent-gold font-mono">
                          {region.seats}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-navy-800">
                      {region.readiness}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Region Deep Dive Dossier */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-navy-700 bg-gradient-to-b from-navy-850 to-navy-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-5 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-accent-orange tracking-widest uppercase">
                    REGIONAL INTELLIGENCE DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  DEMO MODEL
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-hindi mb-2">
                {language === "hi" ? selectedRegion.nameHi : selectedRegion.nameEn}
              </h3>

              <div className="flex flex-wrap gap-2 my-4">
                <span className="px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-accent-gold font-mono">
                  {selectedRegion.seats}
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-sky-400 font-mono">
                  {selectedRegion.booths}
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-emerald-400 font-mono">
                  {selectedRegion.readiness}
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 pt-3 border-t border-navy-800">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[11px] mb-1">
                    {language === "hi" ? "प्रमुख जिले एवं कार्यक्षेत्र:" : "Key Districts Covered:"}
                  </span>
                  <p className="text-slate-200">
                    {language === "hi" ? selectedRegion.districtsHi : selectedRegion.districtsEn}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[11px] mb-1">
                    {language === "hi" ? "क्षेत्रीय चुनावी विशेषता एवं रणनीति:" : "Strategic Focus & Approach:"}
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {language === "hi" ? selectedRegion.descHi : selectedRegion.descEn}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-accent-orange" />
                  <span>विधानसभा-विशिष्ट अनुकूलन संभव</span>
                </div>
                <span className="italic text-[10px] text-slate-500">Illustrative Concept</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
