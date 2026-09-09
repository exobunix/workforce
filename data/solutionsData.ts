export interface SolutionShowcase {
  id: string;
  tagHi: string;
  tagEn: string;
  titleHi: string;
  titleEn: string;
  badge: "Illustrative Solution";
  descHi: string;
  descEn: string;
  metrics: {
    labelHi: string;
    labelEn: string;
    value: string;
  }[];
  featuresHi: string[];
  featuresEn: string[];
}

export const solutionsData: SolutionShowcase[] = [
  {
    id: "command-center",
    tagHi: "एकीकृत कमान प्रणाली",
    tagEn: "Integrated Command System",
    titleHi: "डिजिटल कैंपेन कमांड सेंटर",
    titleEn: "Digital Campaign Command Center",
    badge: "Illustrative Solution",
    descHi: "विधानसभा स्तर पर डिजिटल नैरेटिव, फील्ड टीमों, सोशल एंगेजमेंट और कॉल सेंटर के समेकित संचालन हेतु डेमो कमान प्रणाली।",
    descEn: "An integrated command architecture orchestrating digital narratives, field telemetry, voter outreach, and live sentiment triage.",
    metrics: [
      { labelHi: "बूथ मॉनिटरिंग", labelEn: "Booth Telemetry", value: "480+ Booths" },
      { labelHi: "दैनिक प्रतिक्रिया", labelEn: "Daily Responses", value: "15,000+" },
      { labelHi: "औसत रिस्पांस समय", labelEn: "Response Latency", value: "< 12 Mins" }
    ],
    featuresHi: [
      "मल्टी-स्क्रीन रियल-टाइम स्थिति प्रदर्शन",
      "सोशल लिसनिंग एवं नैरेटिव मॉनिटरिंग",
      "फील्ड टीमों की लाइव जीपीएस मैपिंग",
      "आपातकालीन समस्या निवारण प्रोटोकॉल"
    ],
    featuresEn: [
      "Multi-display synchronized telemetry dashboard",
      "Automated social sentiment and issue listening",
      "Live GPS fleet and volunteer team mapping",
      "Rapid escalation workflows for ground bottlenecks"
    ]
  },
  {
    id: "constituency-dashboard",
    tagHi: "डेटा एवं एनालिटिक्स",
    tagEn: "Data & Spatial Analytics",
    titleHi: "विधानसभा डेटा एवं रिसर्च डैशबोर्ड",
    titleEn: "Constituency Data & Spatial Dashboard",
    badge: "Illustrative Solution",
    descHi: "अधिकृत ऐतिहासिक चुनावी आंकड़ों, बूथ-वार मतदान प्रवृत्तियों और जनसांख्यिकीय पैटर्न का विश्लेषणात्मक डेमो मॉडल।",
    descEn: "Illustrative analytical concept synthesizing historical gazetted election returns, turnout variances, and demographic indicators.",
    metrics: [
      { labelHi: "ऐतिहासिक विश्लेषण", labelEn: "Election History", value: "Past 3 Cycles" },
      { labelHi: "स्विंग बूथ पहचान", labelEn: "Swing Booths Identified", value: "112 Critical" },
      { labelHi: "डेटा शुद्धता", labelEn: "Data Hygiene", value: "100% Verified" }
    ],
    featuresHi: [
      "वोटर टर्नआउट वेरियंस हीटमैप्स",
      "स्विंग बूथों का स्वतः प्राथमिकता निर्धारण",
      "स्थानीय जनसमस्याओं की वार्ड-वार टैगिंग",
      "दैनिक एक्सेल व पीडीएफ सारांश एक्सपोर्ट"
    ],
    featuresEn: [
      "Granular voter turnout variance heatmaps",
      "Automated prioritization of high-delta swing polling centers",
      "Ward-level civic grievance tagging and logging",
      "Encrypted one-click PDF and CSV executive export"
    ]
  },
  {
    id: "candidate-branding",
    tagHi: "पर्सनल ब्रांडिंग एवं छवि निर्माण",
    tagEn: "Leadership Persona & Image Building",
    titleHi: "उम्मीदवार डिजिटल ब्रांडिंग सिस्टम",
    titleEn: "Candidate Digital Branding Ecosystem",
    badge: "Illustrative Solution",
    descHi: "उम्मीदवार के विजन, संघर्ष और जनसेवा को प्रामाणिक डिजिटल उपस्थिति में बदलने की नमूना कार्यप्रणाली।",
    descEn: "A structured conceptual framework turning a candidate's lifetime public service and policy vision into a trusted, accessible leadership brand.",
    metrics: [
      { labelHi: "मल्टी-प्लेटफॉर्म ब्रांडिंग", labelEn: "Platforms Unified", value: "6 Major" },
      { labelHi: "डिजिटल सर्च उपस्थिति", labelEn: "Search Visibility", value: "Verified Stature" },
      { labelHi: "मासिक विजुअल्स", labelEn: "Monthly Visual Assets", value: "90+ Creatives" }
    ],
    featuresHi: [
      "सिनेमैटिक बायोग्राफी एवं विजन डॉक्यूमेंट",
      "यूनिफाइड विजुअल आइडेंटिटी एवं कलर पैलेट",
      "भाषण तैयारी एवं मीडिया टॉकिंग पॉइंट्स",
      "जनसंवाद प्रभावशीलता का मासिक ऑडिट"
    ],
    featuresEn: [
      "Biographical documentary film and published vision booklet",
      "Unified signature aesthetic, color palette, and typography",
      "Constituency speechwriting and TV interview briefing cards",
      "Monthly qualitative voter perception and reach audits"
    ]
  },
  {
    id: "war-room",
    tagHi: "24/7 केंद्रीय नियंत्रण",
    tagEn: "24/7 Strategic Command Hub",
    titleHi: "चुनावी वॉर रूम आर्किटेक्चर",
    titleEn: "Election War Room Architecture",
    badge: "Illustrative Solution",
    descHi: "विधानसभा चुनाव के दौरान सभी 11 कार्यक्षेत्रों के लाइव इनपुट्स को प्रोसेस करने वाला मॉडल कमांड ढांचा।",
    descEn: "Illustrative command-hub blueprint integrating real-time telemetry from all 11 field and digital operational streams.",
    metrics: [
      { labelHi: "ऑपरेशनल शिफ्ट्स", labelEn: "Staffing Rotation", value: "24/7 Non-stop" },
      { labelHi: "लाइव डेटा फीड्स", labelEn: "Telemetry Feeds", value: "8 Core Streams" },
      { labelHi: "डेली बुलेटिन डिलीवरी", labelEn: "Nightly Dossier", value: "Daily 8:00 PM" }
    ],
    featuresHi: [
      "सोशल, फील्ड और कॉल सेंटर फीड का एकत्रीकरण",
      "अफवाहों पर 15 मिनट में तथ्य-आधारित खंडन",
      "मतदान दिवस पर बूथ-वार टर्नआउट ट्रैकिंग",
      "उम्मीदवार के लिए एन्क्रिप्टेड मोबाइल समरी"
    ],
    featuresEn: [
      "Multi-stream aggregation across media, ground, and telephony",
      "Rapid 15-minute counter-narrative verification protocol",
      "Live Poll Day hourly turnout tracking per station",
      "Encrypted executive briefing delivered to candidate's mobile"
    ]
  },
  {
    id: "social-media-system",
    tagHi: "डिजिटल प्रचार प्रणाली",
    tagEn: "Digital Media Matrix",
    titleHi: "सोशल मीडिया कैंपेन सिस्टम",
    titleEn: "Social Media Campaign Engine",
    badge: "Illustrative Solution",
    descHi: "अनुमोदित राजनीतिक संदेशों को फेसबुक, इंस्टाग्राम, व्हाट्सएप और यूट्यूब पर योजनाबद्ध तरीके से पहुंचाने का डेमो सिस्टम।",
    descEn: "Demo campaign distribution workflow designed to deliver verified, high-engagement visual assets across social channels.",
    metrics: [
      { labelHi: "कंटेंट शेड्यूलिंग", labelEn: "Scheduled Cadence", value: "4-6 Posts/Day" },
      { labelHi: "शॉर्ट वीडियो रील्स", labelEn: "High-Impact Reels", value: "25+/Month" },
      { labelHi: "अनुपालन मानक", labelEn: "ECI & Platform Rules", value: "100% Adherent" }
    ],
    featuresHi: [
      "मासिक रणनीतिक नैरेटिव कैलेंडर",
      "स्थानीय बोली और मुद्दों पर 9:16 रील्स",
      "नकारात्मक प्रचार का त्वरित तथ्यात्मक प्रत्युत्तर",
      "मेटा विज्ञापन नीति और आचार संहिता अनुपालन"
    ],
    featuresEn: [
      "Structured monthly thematic narrative calendar",
      "Culturally resonant 9:16 vertical short-form reels",
      "Real-time factual rebuttals to mischaracterizations",
      "Strict compliance with Meta political ads and ECI MCC rules"
    ]
  }
];
