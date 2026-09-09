export interface ServiceDetail {
  id: string;
  slug: string;
  icon: string;
  titleHi: string;
  titleEn: string;
  tagHi: string;
  tagEn: string;
  shortDescHi: string;
  shortDescEn: string;
  heroSubHi: string;
  heroSubEn: string;
  capabilitiesHi: string[];
  capabilitiesEn: string[];
  whyMattersHi: string;
  whyMattersEn: string;
  whatWeProvideHi: string[];
  whatWeProvideEn: string[];
  deliverablesHi: string[];
  deliverablesEn: string[];
  workflow: {
    step: string;
    titleHi: string;
    titleEn: string;
    descHi: string;
    descEn: string;
  }[];
  techTools: string[];
  complianceHi: string;
  complianceEn: string;
  faqs: {
    qHi: string;
    qEn: string;
    aHi: string;
    aEn: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "01",
    slug: "social-media-management",
    icon: "Share2",
    titleHi: "सोशल मीडिया प्रबंधन",
    titleEn: "Social Media Management",
    tagHi: "डिजिटल नैरेटिव एवं एंगेजमेंट",
    tagEn: "Digital Narrative & Engagement",
    shortDescHi: "Facebook एवं Instagram प्रबंधन, content planning, creative design, reels, video editing, AI video production, campaign management और engagement management।",
    shortDescEn: "Comprehensive Facebook & Instagram operations, content calendar, high-impact reels, AI-assisted video editing, paid campaign optimization, and 24/7 engagement moderation.",
    heroSubHi: "आपकी डिजिटल पहचान को व्यवस्थित, प्रोफेशनल और प्रभावी बनाना।",
    heroSubEn: "Transforming your political digital identity with precision narrative, rapid response, and multi-channel voter engagement.",
    capabilitiesHi: [
      "Facebook एवं Instagram पेज का संपूर्ण दैनिक प्रबंधन",
      "कंटेंट कैलेंडर एवं रणनीतिक नैरेटिव शेड्यूलिंग",
      "राजनीतिक पोस्टर्स, बैनर्स एवं हाई-इम्पैक्ट रील्स",
      "AI-असिस्टेड वीडियो एडिटिंग एवं विजुअल प्रोडक्शन",
      "कम्युनिटी एंगेजमेंट एवं कमेंट मॉडरेशन",
      "अकाउंट ग्रोथ स्ट्रैटेजी एवं वेरिफिकेशन असिस्टेंस"
    ],
    capabilitiesEn: [
      "End-to-end Facebook & Instagram page governance",
      "Strategic content calendar & narrative alignment",
      "Political posters, banners & viral reel production",
      "AI-assisted video editing & motion graphics",
      "Real-time community moderation & sentiment triage",
      "Account verification assistance & verified reach scaling"
    ],
    whyMattersHi: "उत्तर प्रदेश विधानसभा चुनाव 2027 में 65% से अधिक मतदाता स्मार्टफोन और सोशल मीडिया पर सक्रिय हैं। किसी भी उम्मीदवार या संगठन की राजनीतिक छवि, जनहित के मुद्दों पर त्वरित प्रतिक्रिया और दैनिक जमीनी गतिविधियों का प्रभाव सीधे तौर पर उनके सोशल मीडिया प्रबंधन की गुणवत्ता पर निर्भर करता है।",
    whyMattersEn: "In the upcoming Uttar Pradesh Assembly Election 2027, over 65% of the electorate relies heavily on digital feeds. A candidate's narrative leadership, policy defense, and constituency connection are directly shaped by structured, 24/7 digital management.",
    whatWeProvideHi: [
      "फेसबुक व इंस्टाग्राम आधिकारिक पेजों का 24/7 प्रोफेशनल संचालन",
      "मासिक एवं साप्ताहिक चुनावी नैरेटिव व कंटेंट कैलेंडर",
      "प्रतिदिन हाई-क्वालिटी ग्राफिक डिजाइन और इंफोग्राफिक्स",
      "स्थानीय मुद्दों एवं जनसंपर्क पर आधारित 9:16 रील्स व शॉर्ट वीडियोज",
      "सकारात्मक नैरेटिव निर्माण एवं नकारात्मक प्रोपेगैंडा का तथ्यात्मक खंडन",
      "अधिकृत व अनुमति-प्राप्त डिजिटल बूस्टिंग और टार्गेटेड कैंपेनिंग"
    ],
    whatWeProvideEn: [
      "24/7 professional operation of official candidate pages",
      "Weekly and monthly strategic campaign narrative calendars",
      "Daily broadcast-grade graphic designs and policy infographics",
      "Constituency-centric 9:16 vertical reels and short videos",
      "Positive narrative building and rapid fact-checking of false claims",
      "Authorized, policy-compliant targeted digital campaign amplification"
    ],
    deliverablesHi: [
      "मासिक 60+ कस्टमाइज्ड सोशल मीडिया पोस्टर्स व ग्राफिक्स",
      "प्रति माह 20-30 हाई-इम्पैक्ट 9:16 वीडियो रील्स",
      "दैनिक कंटेंट शेड्यूलिंग और कम्युनिटी रिस्पांस ट्रैकर",
      "साप्ताहिक सोशल रीच, एंगेजमेंट एवं सेंटिमेंट ऑडिट रिपोर्ट",
      "क्राइसिस कम्युनिकेशन एवं काउंटर-नैरेटिव टेंपलेट्स"
    ],
    deliverablesEn: [
      "60+ customized social media creatives and infographics monthly",
      "20-30 high-retention 9:16 video reels per month",
      "Daily content publishing queue and response logs",
      "Weekly analytics audit detailing reach, impressions, and sentiment",
      "Crisis communication playbook and counter-narrative assets"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "नैरेटिव ऑडिट व रणनीति",
        titleEn: "Narrative Audit & Strategy",
        descHi: "उम्मीदवार की वर्तमान डिजिटल उपस्थिति और विधानसभा के प्रमुख स्थानीय मुद्दों का गहन विश्लेषण।",
        descEn: "In-depth audit of existing handles, voter sentiment, and key local constituency issues."
      },
      {
        step: "02",
        titleHi: "कंटेंट कैलेंडर व क्रिएटिव पाइपलाइन",
        titleEn: "Content Calendar & Production",
        descHi: "साप्ताहिक थीम, जनहित के कार्य, भाषण और जनसंपर्क के आधार पर विजुअल कंटेंट तैयार करना।",
        descEn: "Developing theme-based weekly calendars, speech snippets, and graphics."
      },
      {
        step: "03",
        titleHi: "मल्टी-प्लेटफॉर्म पब्लिशिंग व मॉडरेशन",
        titleEn: "Multi-Platform Governance",
        descHi: "समयबद्ध पोस्टिंग, टिप्पणियों की निगरानी और सकारात्मक जनसंवाद को बढ़ावा देना।",
        descEn: "Scheduled releases, active comment filtering, and positive voter dialogue."
      },
      {
        step: "04",
        titleHi: "एनालिटिक्स व ऑप्टिमाइजेशन",
        titleEn: "Analytics & Iteration",
        descHi: "दैनिक पहुंच और प्रतिक्रिया के आधार पर कंटेंट फॉर्मेट को लगातार बेहतर बनाना।",
        descEn: "Continuous metric tracking to refine messaging and amplify top-performing posts."
      }
    ],
    techTools: ["Meta Business Suite", "Adobe Creative Cloud", "Figma", "Sprout Social", "Midjourney/Canva Pro", "Custom Dashboard"],
    complianceHi: "सभी सोशल मीडिया गतिविधियां और स्पॉन्सर्ड अभियान भारत निर्वाचन आयोग (ECI) के सोशल मीडिया दिशा-निर्देशों, मेटा विज्ञापन नीतियों और लागू चुनावी आचार संहिता के पूर्ण अनुपालन में संचालित किए जाते हैं।",
    complianceEn: "All social media publishing and sponsored distributions strictly adhere to the Election Commission of India (ECI) social media guidelines, Meta political advertising policies, and the Model Code of Conduct.",
    faqs: [
      {
        qHi: "क्या आप उम्मीदवार के सभी सोशल मीडिया हैंडल खुद मैनेज करते हैं?",
        qEn: "Do you handle all candidate social media profiles end-to-end?",
        aHi: "हाँ, हमारी समर्पित सोशल मीडिया टीम कंटेंट प्लानिंग, ग्राफिक डिजाइनिंग, वीडियो एडिटिंग, पोस्टिंग और कम्युनिटी मॉडरेशन का संपूर्ण दायित्व संभालती है।",
        aEn: "Yes, our dedicated digital unit handles end-to-end publishing, graphics, reel cutting, scheduling, and community moderation with prior strategy approval."
      },
      {
        qHi: "क्या कंटेंट पोस्ट करने से पहले हमारी सहमति ली जाती है?",
        qEn: "Is candidate approval required prior to publishing content?",
        aHi: "बिल्कुल, सभी प्रमुख नीतिगत पोस्ट, बयान और कैंपेन वीडियो अधिकृत टीम या उम्मीदवार के अनुमोदन के बाद ही लाइव किए जाते हैं।",
        aEn: "Absolutely. All major policy statements, press statements, and strategic reels are posted only after formal approval by the designated campaign authority."
      }
    ]
  },
  {
    id: "02",
    slug: "election-data-research",
    icon: "Database",
    titleHi: "चुनावी डेटा एवं रिसर्च",
    titleEn: "Election Data & Research",
    tagHi: "डेटा-आधारित चुनावी बुद्धिमत्ता",
    tagEn: "Data Intelligence & Analytics",
    shortDescHi: "विधानसभा स्तर का डेटा, बूथ स्तर का विश्लेषण, मतदाता वर्गीकरण, सर्वे, feedback collection और strategic reporting।",
    shortDescEn: "Constituency-level demography, historical booth trends, demographic voter profiling, ground surveys, and predictive analytical reporting.",
    heroSubHi: "बेहतर रणनीति के लिए व्यवस्थित डेटा और सटीक जमीनी जानकारी।",
    heroSubEn: "Transforming raw electoral statistics into actionable constituency and booth-level campaign strategies.",
    capabilitiesHi: [
      "विधानसभा स्तरीय ऐतिहासिक चुनावी रुझानों का विश्लेषण",
      "बूथ-स्तरीय मतदाता वर्गीकरण एवं स्विंग बूथ पहचान",
      "स्थानीय जनमत सर्वेक्षण एवं जमीनी फीडबैक संकलन",
      "जातीय, सामाजिक एवं क्षेत्रीय समीकरणों का तटस्थ अध्ययन",
      "इश्यू मैपिंग (स्थानीय समस्याएं, विकास कार्य एवं जन-अपेक्षाएं)",
      "डेटा विजुअलाइजेशन एवं डायनामिक कैंपेन डैशबोर्ड्स"
    ],
    capabilitiesEn: [
      "Historical election trend analysis across assembly constituencies",
      "Booth-level voting pattern analysis and swing booth identification",
      "Constituency opinion polling and qualitative field surveys",
      "Demographic and regional issue correlation studies",
      "Micro-issue mapping across urban and rural pockets",
      "Data visualization and dynamic campaign intelligence dashboards"
    ],
    whyMattersHi: "आधुनिक चुनाव केवल अनुमानों पर नहीं लड़े जा सकते। उत्तर प्रदेश की प्रत्येक विधानसभा में 350 से 500 से अधिक बूथ होते हैं, जहां हर बूथ की जनसांख्यिकी और चुनावी प्राथमिकताएं भिन्न होती हैं। सटीक डेटा रिसर्च से यह तय होता है कि किस बूथ पर अतिरिक्त ध्यान देने की आवश्यकता है।",
    whyMattersEn: "Modern assembly campaigns cannot rely on guesswork. An average UP assembly constituency encompasses 350 to 500+ polling booths, each with distinct demographic textures. Data science pinpoints vulnerable pockets and optimizes resource allocation.",
    whatWeProvideHi: [
      "विधानसभा क्षेत्र की विस्तृत राजनीतिक व जनसांख्यिकी प्रोफाइल",
      "पिछले 3 विधानसभा और लोकसभा चुनावों का बूथ-वार सूक्ष्म विश्लेषण",
      "मजबूत, कमजोर और निर्णायक (Swing) बूथों का स्पष्ट वर्गीकरण",
      "जमीनी सर्वेक्षकों द्वारा निष्पक्ष रायशुमारी और मुद्दों की पहचान",
      "दैनिक और साप्ताहिक रिसर्च बुलेटिन व रणनीति दस्तावेज"
    ],
    whatWeProvideEn: [
      "Comprehensive assembly demographic and political baseline profile",
      "Micro-level booth trend analysis over past 3 election cycles",
      "Actionable classification: stronghold, weak, and critical swing booths",
      "On-ground qualitative survey sweeps capturing voter mood and pain points",
      "Strategic constituency intelligence dossiers and daily insights"
    ],
    deliverablesHi: [
      "विधानसभा मास्टर डेटा डॉसियर (बूथ प्रोफाइलिंग सहित)",
      "स्विंग बूथ एवं टार्गेट बूथ एक्शन लिस्ट",
      "मुद्दों एवं प्राथमिकताओं पर आधारित फील्ड सर्वे रिपोर्ट",
      "डिजिटल इंटरेक्टिव डेटा डैशबोर्ड एक्सेस",
      "साप्ताहिक रणनीति रिकमेंडेशन नोट"
    ],
    deliverablesEn: [
      "Assembly Master Constituency Dossier with full booth profiling",
      "Categorized swing and high-priority booth target rosters",
      "Field sample survey and issue-priority synthesis reports",
      "Interactive digital constituency data portal credentials",
      "Weekly strategic advisory memorandum"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "डेटा संकलन व एकत्रीकरण",
        titleEn: "Data Aggregation",
        descHi: "सार्वजनिक रूप से उपलब्ध आधिकारिक निर्वाचन आंकड़ों और भौगोलिक सीमाओं का एकत्रीकरण।",
        descEn: "Synthesizing publicly available election gazettes and geographic ward boundaries."
      },
      {
        step: "02",
        titleHi: "बूथ-स्तरीय पैटर्न मैपिंग",
        titleEn: "Booth Pattern Mapping",
        descHi: "मतदान प्रतिशत, पिछले नतीजों और स्थानीय कारकों का गहन सांख्यिकीय विश्लेषण।",
        descEn: "Statistical modeling of voter turnout history and swing margins per booth."
      },
      {
        step: "03",
        titleHi: "फील्ड सर्वे व फीडबैक",
        titleEn: "Field Sample Survey",
        descHi: "जमीनी शोध दल द्वारा विभिन्न वर्गों से वस्तुनिष्ठ प्रतिक्रिया और प्राथमिकताओं का संग्रह।",
        descEn: "On-ground structured polling across cross-sectional demographic cohorts."
      },
      {
        step: "04",
        titleHi: "रणनीतिक रिपोर्टिंग",
        titleEn: "Strategic Synthesis",
        descHi: "उम्मीदवार और वॉर रूम के लिए कार्रवाई-योग्य रणनीतिक रिपोर्ट तैयार करना।",
        descEn: "Delivering clear, decision-ready data intelligence to campaign leadership."
      }
    ],
    techTools: ["PostGIS / QGIS Mapping", "Python Data Science Stack", "PowerBI / Tableau", "Mobile Survey App", "Secure Cloud Warehouse"],
    complianceHi: "सभी चुनावी डेटा का उपयोग लागू कानूनों, डेटा-सुरक्षा आवश्यकताओं (DPDP Act), निर्वाचन आयोग के नियमों और अधिकृत सार्वजनिक स्रोतों के अनुसार किया जाता है। हम किसी भी अनधिकृत या गैर-कानूनी निजी डेटा का संकलन नहीं करते।",
    complianceEn: "All data processing strictly complies with India's Digital Personal Data Protection (DPDP) Act, Election Commission regulations, and authorized public voter lists. No unauthorized or invasive data mining is conducted.",
    faqs: [
      {
        qHi: "क्या आप बूथ स्तर का डेटा प्रदान करते हैं?",
        qEn: "Do you provide booth-level analytical breakdowns?",
        aHi: "हाँ, हम अधिकृत सार्वजनिक चुनावी आंकड़ों और पिछले नतीजों के आधार पर प्रत्येक बूथ का ऐतिहासिक रुझान, मतदान प्रतिशत और प्राथमिकता विश्लेषण प्रस्तुत करते हैं।",
        aEn: "Yes. Using authorized public electoral records and past polling returns, we deliver deep historical trends, voter turnout patterns, and swing analytics for every booth."
      },
      {
        qHi: "डेटा सुरक्षा और गोपनीयता कैसे सुनिश्चित होती है?",
        qEn: "How do you ensure data confidentiality and privacy?",
        aHi: "हमारी प्रणाली में डेटा एन्क्रिप्शन और सख्त एक्सेस कंट्रोल लागू हैं। अभियान की रणनीतिक रिपोर्ट केवल अधिकृत व्यक्ति के साथ गोपनीय रूप से साझा की जाती है।",
        aEn: "We implement multi-factor authentication, end-to-end encryption, and rigorous non-disclosure agreements. Your strategic insights remain completely confidential."
      }
    ]
  },
  {
    id: "03",
    slug: "booth-ground-management",
    icon: "Users",
    titleHi: "बूथ एवं जमीनी चुनाव प्रबंधन",
    titleEn: "Booth & Ground Management",
    tagHi: "फील्ड ऑपरेशंस एवं कार्यकर्ता समन्वय",
    tagEn: "Field Operations & Volunteer Mobilization",
    shortDescHi: "बूथ टीम, field team, door-to-door campaign coordination, ground feedback और real-time campaign monitoring।",
    shortDescEn: "Micro-booth committee structuring, field volunteer supervision, door-to-door voter mobilization, and real-time ground intelligence.",
    heroSubHi: "बूथ से विधानसभा तक, अभियान का व्यवस्थित और संगठित प्रबंधन।",
    heroSubEn: "From every polling booth to the entire constituency: disciplined, tech-enabled field execution.",
    capabilitiesHi: [
      "बूथ-स्तरीय समितियों एवं प्रभारियों का डिजिटल गठन व सत्यापन",
      "डोर-टू-डोर जनसंपर्क अभियान का रूट-प्लानिंग एवं ट्रैकिंग",
      "वॉलंटियर मैनेजमेंट एवं फील्ड टीम कोऑर्डिनेशन",
      "मतदान दिवस (Poll Day) बूथ वार रूम एवं बस्ता प्रबंधन प्रणाली",
      "जमीनी स्तर से वास्तविक समय का फीडबैक संकलन",
      "फील्ड एक्टिविटी दैनिक रिपोर्टिंग एवं उपस्थिति निगरानी"
    ],
    capabilitiesEn: [
      "Digital constitution and verification of booth-level committees",
      "Route-optimized door-to-door voter outreach tracking",
      "Volunteer onboarding, hierarchy management, and task allocation",
      "Polling Day booth war room and voter slip distribution logistics",
      "Real-time ground intelligence escalation from village to central HQ",
      "Daily activity logs, geofenced team presence, and coverage metrics"
    ],
    whyMattersHi: "चुनाव केवल हवा में या सोशल मीडिया पर नहीं जीता जाता, अंतिम निर्णय मतदान केंद्र के बस्ते पर होता है। यदि बूथ स्तर पर समर्पित कार्यकर्ता, मतदाता सूची का उचित मिलान और अंतिम दिन मतदाताओं को बूथ तक लाने की पुख्ता व्यवस्था न हो, तो पूरी मेहनत व्यर्थ हो सकती है।",
    whyMattersEn: "Elections are ultimately decided at the polling booth. Without verified committee workers, door-to-door touchpoints, and systematic turnout logistics on election morning, aerial campaigns fail to convert into solid ballots.",
    whatWeProvideHi: [
      "विधानसभा के प्रत्येक बूथ के लिए 10-सदस्यीय डिजिटल बूथ कमेटी स्ट्रक्चरिंग",
      "डोर-टू-डोर प्रचार सामग्री का व्यवस्थित वितरण व रूट मॉनिटरिंग",
      "बूथ अध्यक्षों और पन्ना प्रमुखों के लिए प्रशिक्षण व समन्वय मॉड्यूल",
      "मतदान दिवस संचालन योजना (वोटर स्लिप, परिवहन एवं बूथ एजेंट सुरक्षा)",
      "प्रतिदिन फील्ड टीम की कार्य प्रगति और विलेज-लेवल संपर्क रिपोर्ट"
    ],
    whatWeProvideEn: [
      "Structured 10-member digital committee framework per booth",
      "Systematic door-to-door campaign kit delivery and tracking",
      "Training modules and daily guidance for booth in-charges",
      "Comprehensive Poll Day mobilization roadmap (voter slip logistics, agents)",
      "Daily field progress reports detailing villages, wards, and households covered"
    ],
    deliverablesHi: [
      "सत्यापित बूथ कार्यकर्ता डायरेक्टरी और संपर्क सूची",
      "डोर-टू-डोर संपर्क चेकलिस्ट और रूट मैप्स",
      "मतदान दिवस चेकलिस्ट और इमरजेंसी रिस्पांस प्रोटोकॉल",
      "दैनिक फील्ड कवरेज डैशबोर्ड अपडेट्स",
      "कमजोर बूथों के लिए विशेष संपर्क कार्ययोजना"
    ],
    deliverablesEn: [
      "Verified booth worker registry with geo-tagged assignments",
      "Household canvassing checklist and route progression maps",
      "Poll Day crisis protocol and voter assistance toolkit",
      "Daily ground coverage dashboard with completion metrics",
      "Targeted remedial outreach blueprint for trailing booths"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "बूथ मैपिंग व ऑडिट",
        titleEn: "Booth Mapping & Audit",
        descHi: "विधानसभा के सभी पोलिंग स्टेशनों की भौगोलिक स्थिति और वर्तमान कार्यकर्ता नेटवर्क की पड़ताल।",
        descEn: "Geographic assessment of all polling stations and existing grassroots cadre."
      },
      {
        step: "02",
        titleHi: "कमेटी गठन व सत्यापन",
        titleEn: "Committee Digitalization",
        descHi: "प्रत्येक बूथ पर सक्रिय कार्यकर्ताओं की डिजिटल एंट्री और फोन सत्यापन।",
        descEn: "Digital onboarding and telephonic verification of booth in-charges."
      },
      {
        step: "03",
        titleHi: "डोर-टू-डोर जनसंपर्क",
        titleEn: "Systematic Outreach",
        descHi: "घर-घर संपर्क अभियान, प्रचार सामग्री का वितरण और स्थानीय मुद्दों का संकलन।",
        descEn: "Structured household outreach, manifesto distribution, and issue logging."
      },
      {
        step: "04",
        titleHi: "मतदान दिवस क्रियान्वयन",
        titleEn: "Poll Day Turnout Drive",
        descHi: "मतदान के दिन प्रातः 6 बजे से शाम तक वोटर टर्नआउट और एजेंट समन्वय की निगरानी।",
        descEn: "End-to-end agent coordination, voter slip desks, and hourly turnout monitoring."
      }
    ],
    techTools: ["Field Coordinator Mobile App", "Geofencing Attendance Tracker", "Booth Directory Engine", "WhatsApp Volunteer Network", "Poll Day Control System"],
    complianceHi: "फील्ड में सभी डोर-टू-डोर संपर्क, जनसभाएं और बूथ गतिविधियां संबंधित स्थानीय प्रशासन से प्राप्त लिखित अनुमतियों और चुनाव आयोग के आचार संहिता नियमों के तहत संपन्न कराई जाती हैं।",
    complianceEn: "All ground outreach, assembly meetings, and booth camps are executed within legal permissions granted by local authorities and in accordance with the Election Commission Model Code of Conduct.",
    faqs: [
      {
        qHi: "क्या आपकी टीम बूथ स्तर पर कार्यकर्ता तैयार करने में मदद करती है?",
        qEn: "Do you help recruit and organize booth-level volunteer committees?",
        aHi: "हाँ, हम उम्मीदवार के स्थानीय समर्थकों और कार्यकर्ताओं को एक डिजिटल संगठनात्मक ढांचे में संगठित करने, उन्हें प्रशिक्षण देने और उनकी सक्रियता सुनिश्चित करने का पूरा सिस्टम प्रदान करते हैं।",
        aEn: "Yes, we bring candidate supporters into a structured digital framework, provide standard operating guidelines, and verify ongoing activity."
      },
      {
        qHi: "मतदान के दिन आपकी क्या भूमिका रहती है?",
        qEn: "What is your operational role on Polling Day?",
        aHi: "मतदान दिवस पर हमारा वॉर रूम प्रत्येक बूथ पर एजेंट उपस्थिति, वोटर स्लिप वितरण, टर्नआउट प्रतिशत और किसी भी तकनीकी समस्या के त्वरित समाधान की निगरानी करता है।",
        aEn: "On election day, our central operations desk monitors agent attendance, voter slip distribution, hourly turnout trends, and rapid escalation of any field bottlenecks."
      }
    ]
  },
  {
    id: "04",
    slug: "voter-communication",
    icon: "PhoneCall",
    titleHi: "मतदाता संपर्क एवं कॉल सेंटर",
    titleEn: "Voter Communication & Call Center",
    tagHi: "टेली-कॉलिंग, वॉइस एवं मैसेजिंग",
    tagEn: "Tele-Calling, Voice & Messaging Systems",
    shortDescHi: "SMS, WhatsApp, voice communication, IVR, missed call, toll-free और tele-calling operations।",
    shortDescEn: "DLT-compliant SMS broadcasts, authorized WhatsApp communication, cloud tele-calling desks, inbound toll-free setups, and interactive IVR feedback.",
    heroSubHi: "मतदाताओं से सीधा, व्यक्तिगत और विश्वसनीय दो-तरफा संवाद।",
    heroSubEn: "Establishing structured, compliant, and transparent direct communication with every household.",
    capabilitiesHi: [
      "डेडिकेटेड इलेक्शन कॉल सेंटर एवं प्रोफेशनल टेली-कॉलिंग टीम",
      "DLT-अनुमोदित बल्क SMS एवं कस्टमाइज्ड संदेश प्रसारण",
      "अधिकृत व्हाट्सएप कम्युनिटी एवं ब्रॉडकास्ट चैनल्स",
      "आउटबाउंड वॉइस कॉल्स एवं ऑटोमेटेड IVR फीडबैक सिस्टम",
      "मिस-कॉल कैंपेन एवं सपोर्टर रजिस्ट्रेशन सिस्टम",
      "टोल-फ्री वोटर हेल्पलाइन एवं ग्रिवांस रिड्रेसल डेस्क"
    ],
    capabilitiesEn: [
      "Dedicated election call center with trained bilingual tele-callers",
      "DLT-approved bulk SMS campaign execution with dynamic tags",
      "Authorized WhatsApp broadcast infrastructure and citizen opt-ins",
      "Outbound interactive voice recordings (IVR) and automated sentiment polls",
      "Missed-call supporter onboarding and database registration",
      "Toll-free citizen enquiry and voter grievance helpline desks"
    ],
    whyMattersHi: "विशाल जनसमूह तक व्यक्तिगत पहुंच बनाना केवल भौतिक मुलाकातों से संभव नहीं है। आधुनिक कॉल सेंटर और डिजिटल वॉइस कम्युनिकेशन के माध्यम से उम्मीदवार का संदेश प्रत्येक मतदाता के घर तक सीधे उनके फोन पर पहुंचता है, और उनकी समस्याओं का त्वरित फीडबैक प्राप्त होता है।",
    whyMattersEn: "Directly reaching 3 to 4 lakh electors through physical travel alone is logistically impossible. A cloud-managed tele-calling and approved voice desk delivers candidate messages personally while gathering authentic voter reactions.",
    whatWeProvideHi: [
      "50 से 200+ सीटों वाला क्लाउड इलेक्शन कॉल सेंटर इंफ्रास्ट्रक्चर",
      "स्थानीय भाषा/बोली (भोजपुरी, अवधी, ब्रज, खड़ी बोली) में दक्ष प्रशिक्षित कॉलिंग टीम",
      "सरकारी योजनाओं, उम्मीदवार के विजन और चुनावी वादों पर संरचित कॉलिंग स्क्रिप्ट्स",
      "दैनिक 25,000 से 1,00,000+ मतदाताओं से प्रत्यक्ष टेलीफोनिक संवाद",
      "इनबाउंड वोटर हेल्पलाइन प्रबंधन और समस्याओं का डिजिटल संकलन"
    ],
    whatWeProvideEn: [
      "Scalable 50 to 200+ seat cloud election tele-calling infrastructure",
      "Trained operators conversant in regional UP dialects (Bhojpuri, Awadhi, Braj, Western Hindi)",
      "Structured, persuasive conversation scripts highlighting manifesto promises",
      "Capacity for 25,000 to 1,00,000+ outbound voter touchpoints daily",
      "Inbound candidate helpline management and automated call logging"
    ],
    deliverablesHi: [
      "दैनिक कॉल सारांश (सफल कॉल्स, सकारात्मक/नकारात्मक रुझान, अनरीचेबल)",
      "वोटर फीडबैक एवं प्रमुख स्थानीय शिकायतों की विस्तृत सूची",
      "DLT-वेरिफाइड SMS डिलीवरी ऑडिट और टाइमस्टैम्प्ड रिपोर्ट्स",
      "सपोर्टर डेटाबेस (जो उम्मीदवार के पक्ष में खुलकर सामने आए)",
      "इमरजेंसी ब्रॉडकास्ट एवं अपील ऑडियो रिकॉर्डिंग्स"
    ],
    deliverablesEn: [
      "Daily calling disposition metrics (connected, positive, neutral, complaints)",
      "Granular voter feedback log with identified civic grievances",
      "DLT-verified SMS broadcast delivery audit logs",
      "Identified supporter directory tagged for poll-day follow-up",
      "Candidate appeal audio recordings and IVR broadcast reports"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "स्क्रिप्ट व भाषा चयन",
        titleEn: "Scripting & Localization",
        descHi: "स्थानीय जनभावना और क्षेत्र की बोली के अनुरूप प्रामाणिक और शालीन कॉलिंग स्क्रिप्ट तैयार करना।",
        descEn: "Crafting respectful, engaging phone scripts localized to regional dialects."
      },
      {
        step: "02",
        titleHi: "टेलीकॉम व DLT अनुपालन",
        titleEn: "Telecom & DLT Approvals",
        descHi: "TRAI, DLT और टेलीकॉम ऑपरेटरों से आवश्यक सभी हेडर और टेम्पलेट्स का अनुमोदन।",
        descEn: "Securing mandatory TRAI/DLT sender ID approvals and compliant templates."
      },
      {
        step: "03",
        titleHi: "कॉलिंग एवं ब्रॉडकास्ट",
        titleEn: "Execution & Outreach",
        descHi: "प्रशिक्षित टेली-कॉलर्स और ऑटोमेटेड सिस्टम द्वारा मतदाताओं से संवाद और फीडबैक नोट करना।",
        descEn: "Live agent tele-calling and scheduled broadcasts with real-time response capture."
      },
      {
        step: "04",
        titleHi: "डेटा क्लीनिंग व रिपोर्टिंग",
        titleEn: "Data Synthesis",
        descHi: "कॉलिंग से प्राप्त निष्कर्षों को वॉर रूम और फील्ड टीम को तुरंत कार्रवाई हेतु भेजना।",
        descEn: "Consolidating voter sentiments and channeling action items to ground units."
      }
    ],
    techTools: ["Cloud Telephony PBX", "Vicidial / Custom CRM", "DLT Enterprise Gateway", "WhatsApp Business API", "IVR Voice Engine"],
    complianceHi: "सभी संचार सेवाएं भारतीय दूरसंचार विनियामक प्राधिकरण (TRAI), DLT नियमों, NDNC दिशा-निर्देशों और चुनाव आयोग की आचार संहिता के तहत केवल कानूनी व अधिकृत रूप से संपन्न की जाती हैं।",
    complianceEn: "All outbound telecommunications strictly comply with Telecom Regulatory Authority of India (TRAI) directives, DLT distributed ledger mandates, NDNC restrictions, and ECI regulations.",
    faqs: [
      {
        qHi: "क्या कॉल सेंटर पर हमारे क्षेत्र की बोली में बात की जाएगी?",
        qEn: "Are your call center agents fluent in local Uttar Pradesh dialects?",
        aHi: "हाँ, हम पश्चिमी यूपी, अवध, पूर्वांचल और बुंदेलखंड के अनुसार स्थानीय बोली (अवधी, ब्रज, भोजपुरी) के जानकार टेली-कॉलर्स तैनात करते हैं ताकि मतदाता से आत्मीय जुड़ाव हो सके।",
        aEn: "Yes. We assign callers fluent in specific local dialects (Awadhi, Bhojpuri, Braj, Khadi Boli) to ensure genuine, culturally resonant voter dialogue."
      },
      {
        qHi: "क्या कॉल सेंटर से मतदाताओं की समस्याएं नोट होती हैं?",
        qEn: "Do callers record ground grievances during interactions?",
        aHi: "बिल्कुल, प्रत्येक कॉल का विस्तृत रिकॉर्ड CRM में दर्ज होता है और क्षेत्र की प्रमुख समस्याओं की सूची उम्मीदवार को प्रतिदिन सौंपी जाती है।",
        aEn: "Yes, our custom CRM logs feedback, civic grievances, and sentiment markers on every interaction for daily strategic review."
      }
    ]
  },
  {
    id: "05",
    slug: "election-technology",
    icon: "Cpu",
    titleHi: "चुनावी तकनीकी समाधान",
    titleEn: "Election Technology Solutions",
    tagHi: "डिजिटल प्लेटफॉर्म एवं टूल्स",
    tagEn: "Command Applications & Infrastructure",
    shortDescHi: "Mobile applications, campaign dashboard, real-time monitoring, war room, WhatsApp war room, IT cell और data management।",
    shortDescEn: "Custom volunteer mobile apps, central analytics dashboards, real-time monitoring suites, WhatsApp workflow automation, and IT cell infrastructure.",
    heroSubHi: "अभियान को दें एक आधुनिक, सुरक्षित और केंद्रीकृत डिजिटल सिस्टम।",
    heroSubEn: "Empowering your political campaign with real-time cloud technology, mobile coordination, and ironclad data governance.",
    capabilitiesHi: [
      "कस्टमाइज्ड कैंपेन मैनेजमेंट डैशबोर्ड (वेब व मोबाइल)",
      "कार्यकर्ता एवं वॉलंटियर मोबाइल एप्लीकेशन (Android)",
      "रियल-टाइम फील्ड एक्टिविटी और टर्नआउट मॉनिटरिंग सिस्टम",
      "डिजिटल व्हाट्सएप वॉर रूम और ऑटोमेटेड वर्कफ़्लोज़",
      "सुरक्षित क्लाउड इंफ्रास्ट्रक्चर और डेटाबेस मैनेजमेंट",
      "उम्मीदवार की आधिकारिक वेबसाइट एवं डिजिटल बायोडाटा पोर्टल"
    ],
    capabilitiesEn: [
      "Custom Campaign Management Dashboard (Web & Mobile responsive)",
      "Field Volunteer & Worker Mobile Application (Android/iOS)",
      "Real-time field activity and voter turnout monitoring system",
      "Digital WhatsApp command room and automated workflow pipelines",
      "Bank-grade encrypted cloud infrastructure and relational database engines",
      "Official candidate web portal and interactive digital biodata experience"
    ],
    whyMattersHi: "2027 का चुनाव कागजी रजिस्टरों और अनौपचारिक व्हाट्सएप ग्रुपों से नहीं जीता जा सकता। सूचनाओं का प्रवाह तेज और सटीक होना चाहिए। एक केंद्रीकृत तकनीक समाधान से उम्मीदवार एक स्क्रीन पर देख सकता है कि किस गांव में कौन सा कार्यक्रम चल रहा है, कितनी कॉल्स हुईं और कहां क्या स्थिति है।",
    whyMattersEn: "A 2027 assembly election cannot be coordinated over fragmented WhatsApp chats and paper notebooks. Technology unites field teams, call centers, and media strategists into one transparent command terminal.",
    whatWeProvideHi: [
      "उम्मीदवार और मुख्य कोर-कमेटी के लिए सेंट्रलाइज्ड वॉर रूम डैशबोर्ड",
      "बूथ प्रभारियों के लिए उपयोग में आसान हिंदी मोबाइल ऐप",
      "कार्यकर्ताओं की उपस्थिति, दैनिक संपर्क और लोकेशन का सटीक ट्रैकिंग सिस्टम",
      "स्वचालित दैनिक पीडीएफ रिपोर्ट जनरेटर और अलर्ट नोटिफिकेशन",
      "24/7 तकनीकी सहायता और सर्वर अपटाइम गारंटी"
    ],
    whatWeProvideEn: [
      "Unified War Room Executive Dashboard for the candidate and core strategists",
      "Intuitive Hindi-first mobile application for booth workers",
      "Real-time activity logs, GPS geofencing, and milestone tracking",
      "Automated daily PDF intelligence summary generator and SMS alerts",
      "24/7 round-the-clock technical DevOps support and 99.9% uptime"
    ],
    deliverablesHi: [
      "रेडी-टू-यूज़ कस्टम कैंपेन डैशबोर्ड लॉगिन क्रेडेंशियल्स",
      "कार्यकर्ता मोबाइल एप्लीकेशन APK और डिप्लॉयमेंट गाइड",
      "डेटा बैकअप, एन्क्रिप्शन और एक्सेस-रोल मैनेजमेंट प्रोटोकॉल",
      "उम्मीदवार की रेस्पॉन्सिव आधिकारिक वेब उपस्थिति",
      "प्रतिदिन ऑटो-जेनरेटेड कैंपेन एनालिटिक्स रिपोर्ट्स"
    ],
    deliverablesEn: [
      "Production-ready Campaign Dashboard login credentials and role permissions",
      "Field worker Android APK deployment with guided onboarding manuals",
      "Comprehensive data encryption, scheduled backups, and access audit logs",
      "High-speed, SEO-optimized official candidate web portal",
      "Automated end-of-day campaign performance summary dossiers"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "आवश्यकता विश्लेषण व आर्किटेक्चर",
        titleEn: "System Architecture",
        descHi: "विधानसभा की भौगोलिक स्थिति और कैंपेन संरचना के अनुसार उपयुक्त तकनीकी टूल्स का चयन।",
        descEn: "Tailoring digital architecture to constituency scale, team size, and security tiers."
      },
      {
        step: "02",
        titleHi: "कस्टमाइजेशन व डिप्लॉयमेंट",
        titleEn: "Rapid Deployment",
        descHi: "डैशबोर्ड, मोबाइल ऐप और डेटाबेस को कस्टमाइज़ करके सुरक्षित क्लाउड पर लाइव करना।",
        descEn: "Configuring dashboards, mobile APKs, and cloud databases within 72 hours."
      },
      {
        step: "03",
        titleHi: "टीम ट्रेनिंग व ऑनबोर्डिंग",
        titleEn: "Worker Onboarding",
        descHi: "वॉर रूम एनालिस्ट्स और फील्ड कार्यकर्ताओं को टूल्स चलाने की व्यावहारिक ट्रेनिंग देना।",
        descEn: "Hands-on video and in-person training for core operators and field coordinators."
      },
      {
        step: "04",
        titleHi: "लाइव मॉनिटरिंग व सपोर्ट",
        titleEn: "Live Governance",
        descHi: "पूरे चुनाव के दौरान निरंतर सर्वर मॉनिटरिंग, डेटा सिंक्रनाइज़ेशन और तकनीकी सहायता।",
        descEn: "Continuous server optimization, hourly sync checks, and instant issue resolution."
      }
    ],
    techTools: ["Next.js / React Web", "React Native / Flutter App", "PostgreSQL / SQLite", "AWS / Google Cloud", "Automated WhatsApp API"],
    complianceHi: "सभी एप्लिकेशन और सॉफ्टवेयर सिस्टम डेटा सुरक्षा, एन्क्रिप्शन मानकों और भारतीय आईटी अधिनियम 2000 एवं DPDP अधिनियम 2023 के कड़े प्रावधानों के तहत निर्मित और संचालित किए जाते हैं।",
    complianceEn: "All proprietary applications and server stacks comply with Indian IT Act 2000 amendments, ISO 27001 data integrity practices, and DPDP Act 2023 confidentiality standards.",
    faqs: [
      {
        qHi: "क्या हमारे कार्यकर्ताओं के लिए मोबाइल ऐप सीखना आसान होगा?",
        qEn: "Is the mobile application easy to use for grassroots workers?",
        aHi: "हाँ, ऐप को पूरी तरह से सरल हिंदी, बड़े आइकन्स और न्यूनतम टेक्स्ट इनपुट के साथ डिज़ाइन किया गया है ताकि कोई भी सामान्य कार्यकर्ता इसे 5 मिनट में समझ सके।",
        aEn: "Yes. The mobile UI is crafted specifically in intuitive Hindi with large graphical buttons, voice inputs, and minimal typing requirements."
      },
      {
        qHi: "डेटा का मालिकाना हक किसके पास रहेगा?",
        qEn: "Who owns the data collected through these applications?",
        aHi: "डेटा का 100% पूर्ण स्वामित्व केवल उम्मीदवार/क्लाइंट के पास रहता है। हम डेटा को एन्क्रिप्टेड रखते हैं और चुनाव के बाद सुरक्षित रूप से हैंडओवर करते हैं।",
        aEn: "100% of all collected operational data remains the exclusive property of the candidate/organization, protected by strict non-disclosure covenants."
      }
    ]
  },
  {
    id: "06",
    slug: "video-creative",
    icon: "Video",
    titleHi: "वीडियो, क्रिएटिव एवं कंटेंट",
    titleEn: "Video, Creative & Content",
    tagHi: "विजुअल स्टोरीटेलिंग एवं प्रोडक्शन",
    tagEn: "Visual Storytelling & Broadcast Production",
    shortDescHi: "Political songs, election videos, AI videos, reels, photography, biography, posters, banners और graphics।",
    shortDescEn: "Campaign anthem songs, cinematic candidate profiles, AI-assisted video narratives, 9:16 viral reels, photojournalism, posters, and print hoardings.",
    heroSubHi: "कहानी ऐसी हो, जो सीधे मतदाताओं के दिलों तक पहुंचे।",
    heroSubEn: "Compelling political storytelling through broadcast-grade video, emotionally resonant anthems, and viral visual formats.",
    capabilitiesHi: [
      "ओरिजिनल चुनावी थीम सॉन्ग्स (Political Anthem) की रचना व रिकॉर्डिंग",
      "सिनेमैटिक डॉक्यूमेंट्री, उम्मीदवार की जीवन यात्रा एवं विजन वीडियोज",
      "दैनिक 9:16 रील्स, यूट्यूब शॉर्ट्स एवं व्हाट्सएप स्टेटस वीडियोज",
      "AI-इनेबल्ड वीडियो प्रोडक्शन एवं हाइपर-रियलिस्टिक विजुअल्स",
      "प्रोफेशनल कैंडिडेट फोटोशूट एवं इवेंट वीडियो कवरेज",
      "आउटडोर होर्डिंग्स, फ्लेक्स, वॉल पेंटिंग एवं डिजिटल ग्राफिक्स"
    ],
    capabilitiesEn: [
      "Original campaign anthem songwriting, vocal recording, and scoring",
      "Cinematic candidate biographical documentaries and policy manifesto videos",
      "Daily viral 9:16 reels, YouTube Shorts, and WhatsApp video cards",
      "AI-enabled voice cloning, stylized animations, and visual production",
      "Professional candidate portraiture sessions and rally documentary videography",
      "High-resolution outdoor flex hoardings, banners, and digital display assets"
    ],
    whyMattersHi: "आज के युग में विजुअल कंटेंट टेक्स्ट से 10 गुना अधिक तेजी से जनमत तैयार करता है। एक जोशीला चुनावी गीत, उम्मीदवार के संघर्ष की भावुक डॉक्यूमेंट्री या स्थानीय मुद्दे पर बनी 30 सेकंड की रील पूरे क्षेत्र में कुछ ही घंटों में माहौल बदल सकती है।",
    whyMattersEn: "In the contemporary digital age, video content shapes public sentiment exponentially faster than text. A powerful anthem, a candid biographical documentary, or a sharp 30-second reel on local neglect galvanizes the constituency.",
    whatWeProvideHi: [
      "स्टूडियो-ग्रेड संगीतकारों और गायकों द्वारा तैयार समर्पित चुनावी गीत",
      "4K सिनेमा कैमरों और ड्रोन से सुसज्जित इन-हाउस प्रोडक्शन टीम",
      "स्थानीय जनसमस्याओं और उम्मीदवार के विकास कार्यों पर आधारित डॉक्यु-ड्रामा",
      "हर बड़े त्योहार, दिवस और राजनीतिक घटनाक्रम पर तुरंत क्रिएटिव डिलीवरी",
      "सोशल मीडिया के सभी अनुपातों (9:16, 16:9, 1:1, 4:5) में कस्टमाइज्ड वीडियोज"
    ],
    whatWeProvideEn: [
      "Custom studio-recorded campaign theme anthems with regional folk instruments",
      "In-house production crew equipped with 4K cinema cameras and licensed drones",
      "Constituency development impact documentaries and civic issue exposes",
      "Rapid-turnaround creative graphics for festive occasions and breaking news",
      "Multi-format assets optimized for 9:16, 16:9, 1:1, and 4:5 aspect ratios"
    ],
    deliverablesHi: [
      "1-2 पूर्ण चुनावी थीम गीत (ऑडियो एवं वीडियो रिलीज सहित)",
      "उम्मीदवार की 3 से 5 मिनट की मुख्य सिनेमैटिक बायोग्राफी फिल्म",
      "प्रति सप्ताह 5-7 एडिटेड रील्स और शॉर्ट क्लिप्स",
      "मासिक 100+ हाई-रेजोल्यूशन पोस्टर्स और सोशल मीडिया ग्राफिक्स",
      "प्रिंट रेडी फ्लेक्स, होर्डिंग और हैंडबिल डिज़ाइन्स"
    ],
    deliverablesEn: [
      "1-2 signature campaign audio-video anthems with full broadcast rights",
      "Flagship 3-5 minute candidate biographical documentary film",
      "5-7 professionally mastered vertical reels per week",
      "100+ high-resolution print and digital banners monthly",
      "Press-ready print hoardings, brochures, and pamphlet artwork"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "कॉन्सेप्ट व स्क्रिप्टिंग",
        titleEn: "Concept & Scripting",
        descHi: "उम्मीदवार के व्यक्तित्व, संघर्ष और मुख्य चुनावी मुद्दों के आधार पर पटकथा लेखन।",
        descEn: "Scripting compelling story arcs based on the candidate's life and core public vision."
      },
      {
        step: "02",
        titleHi: "शूटिंग व फील्ड कवरेज",
        titleEn: "Cinema Shoot",
        descHi: "प्रोफेशनल कैमरामैन, लाइटिंग और ड्रोन के साथ जनसंपर्क और बायोग्राफी शूट।",
        descEn: "On-location filming with cinema optics, lighting, and aerial drone captures."
      },
      {
        step: "03",
        titleHi: "एडिटिंग, कलर व साउंड",
        titleEn: "Post-Production",
        descHi: "डायनामिक कटिंग, बैकग्राउंड स्कोर, कलर ग्रेडिंग और सबटाइटल्स जोड़ना।",
        descEn: "Dynamic editing, audio mastering, custom sound design, and Hindi subtitles."
      },
      {
        step: "04",
        titleHi: "मल्टी-फॉर्मेट एक्सपोर्ट",
        titleEn: "Multi-Format Delivery",
        descHi: "टीवी, एलईडी वैन, यूट्यूब, इंस्टाग्राम और व्हाट्सएप के लिए अनुकूलित फाइल्स।",
        descEn: "Optimized rendering for LED display vans, YouTube, Instagram, and WhatsApp."
      }
    ],
    techTools: ["DaVinci Resolve Studio", "Adobe Premiere Pro / After Effects", "Sony Cinema FX Series", "DJI Drones", "Midjourney AI"],
    complianceHi: "सभी वीडियो और विज्ञापन निर्वाचन आयोग के मीडिया प्रमाणन एवं निगरानी समिति (MCMC) के दिशा-निर्देशों के अनुरूप प्री-सर्टिफिकेशन हेतु तैयार किए जाते हैं। किसी भी भ्रामक या कॉपीराइट सामग्री का उपयोग नहीं किया जाता।",
    complianceEn: "All broadcast advertising and political song releases are structured in strict readiness for ECI Media Certification and Monitoring Committee (MCMC) pre-clearance.",
    faqs: [
      {
        qHi: "चुनावी गाना तैयार करने में कितना समय लगता है?",
        qEn: "What is the turnaround time for a custom campaign anthem?",
        aHi: "गीत लेखन, कंपोजिशन, स्टूडियो रिकॉर्डिंग और वीडियो संपादन में सामान्यतः 5 से 7 कार्यदिवस का समय लगता है।",
        aEn: "Concept writing, lyrics, studio vocal recording, and final cinematic video mastering typically require 5 to 7 working days."
      },
      {
        qHi: "क्या रील्स डेली बेसिस पर मिल सकती हैं?",
        qEn: "Can daily reels be produced covering daily canvassing tours?",
        aHi: "हाँ, हमारी वीडियो टीम उम्मीदवार के साथ फील्ड में रहकर उसी दिन के दौरों की आकर्षक रील्स 2 से 4 घंटे के भीतर एडिट करके उपलब्ध कराती है।",
        aEn: "Yes. An embedded field videographer captures daily tours and delivers packaged reels within 2 to 4 hours for real-time publishing."
      }
    ]
  },
  {
    id: "07",
    slug: "media-public-relations",
    icon: "Newspaper",
    titleHi: "मीडिया प्रबंधन एवं जनसंपर्क",
    titleEn: "Media & Public Relations",
    tagHi: "प्रेस, डिजिटल एवं परसेप्शन मैनेजमेंट",
    tagEn: "Press Relations & Reputation Management",
    shortDescHi: "Print media, digital media, news coordination, FM/radio, press conferences, press releases, podcasts और image building।",
    shortDescEn: "Print journalism liaisons, digital news portal coordination, press conference hosting, official press releases, podcasts, and strategic reputational PR.",
    heroSubHi: "मजबूत संदेश, संतुलित मीडिया उपस्थिति और विश्वसनीय सार्वजनिक छवि।",
    heroSubEn: "Building an authoritative, consistent, and trusted public narrative across newspapers, news channels, and digital media.",
    capabilitiesHi: [
      "दैनिक प्रिंट समाचार पत्रों एवं पत्रकारों के साथ प्रोफेशनल समन्वय",
      "प्रेस नोट लेखन (हिंदी में मानक पत्रकारिता शैली में) एवं त्वरित वितरण",
      "प्रेस कॉन्फ्रेंस (Press Conference) का संपूर्ण आयोजन एवं मीडिया इनवाइट्स",
      "डिजिटल न्यूज़ पोर्टल्स, यूट्यूब न्यूज चैनल्स एवं पॉडकास्ट समन्वय",
      "स्थानीय एफएम/रेडियो कैंपेन प्लानिंग एवं प्रसारण सहायता",
      "क्राइसिस मैनेजमेंट एवं नकारात्मक खबरों का त्वरित तथ्यात्मक प्रत्युत्तर"
    ],
    capabilitiesEn: [
      "Structured media relations with regional bureau chiefs and correspondents",
      "Professional press note authoring in standard Hindi journalistic style",
      "Turnkey press conference management, venue branding, and reporter invites",
      "Digital news portal integrations, YouTube interviews, and long-form podcasts",
      "Regional FM radio campaign planning and slot coordination",
      "Crisis PR management, fact-checked rebuttals, and reputation defense"
    ],
    whyMattersHi: "पारंपरिक समाचार पत्र और प्रतिष्ठित मीडिया आज भी आम जनता के बीच विश्वसनीयता का सबसे बड़ा पैमाना हैं। जब अखबारों और न्यूज़ पोर्टल्स में उम्मीदवार के जनहित के कार्यों और बयानों को प्रमुखता मिलती है, तो इसका सीधा असर मतदाता की राय पर पड़ता है।",
    whyMattersEn: "Traditional newspapers and credible news outlets remain the gold standard of public trust in Uttar Pradesh. Consistent, respectful press visibility cements candidate credibility across opinion leaders and fence-sitters.",
    whatWeProvideHi: [
      "वरिष्ठ राजनीतिक पत्रकारों और मीडिया रणनीतिकारों की समर्पित पीआर डेस्क",
      "प्रतिदिन उम्मीदवार के कार्यक्रमों की औपचारिक प्रेस विज्ञप्ति तैयार करना व भेजना",
      "विधानसभा और जिला मुख्यालय पर प्रेस सम्मेलनों का सुव्यवस्थित आयोजन",
      "राज्य और स्थानीय डिजिटल पत्रकारों के साथ वन-ऑन-वन इंटरव्यू व्यवस्था",
      "दैनिक समाचार पत्र क्लिपिंग ऑडिट और मीडिया मॉनिटरिंग रिपोर्ट"
    ],
    whatWeProvideEn: [
      "Dedicated PR desk managed by seasoned political journalists and media specialists",
      "Daily authoring and broadcast of official press releases covering campaign rallies",
      "Turnkey organization of press conferences at district/constituency centers",
      "Arranging one-on-one exclusive interviews with top regional digital outlets",
      "Comprehensive daily morning print news clipping dossiers and sentiment tracking"
    ],
    deliverablesHi: [
      "दैनिक मॉर्निंग मीडिया क्लिपिंग्स डॉसियर (सुबह 8:00 बजे तक)",
      "सत्यापित क्षेत्रीय पत्रकारों व मीडिया प्रतिनिधियों की संपर्क डायरेक्टरी",
      "व्यावसायिक प्रेस किट (बायोडाटा, हाई-रेज फोटो, विजन डॉक्यूमेंट)",
      "साप्ताहिक मीडिया इंप्रेशन एवं कवरेज एनालिसिस रिपोर्ट",
      "पॉडकास्ट और एक्सक्लूसिव डिजिटल इंटरव्यू कोऑर्डिनेशन"
    ],
    deliverablesEn: [
      "Daily Morning Press Clipping Dossier delivered by 8:00 AM",
      "Verified directory of regional print, broadcast, and digital journalists",
      "Standard candidate Media Press Kit (biography, photos, manifesto planks)",
      "Weekly media reach and coverage sentiment analysis report",
      "Coordination of in-depth digital video interviews and podcasts"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "मीडिया मैपिंग",
        titleEn: "Media Mapping",
        descHi: "जिले व विधानसभा में सक्रिय समाचार पत्रों, डिजिटल पोर्टल्स और संवाददाताओं की सूची तैयार करना।",
        descEn: "Cataloging all active district bureau chiefs, stringers, and digital journalists."
      },
      {
        step: "02",
        titleHi: "दैनिक प्रेस विज्ञप्ति",
        titleEn: "Daily Press Note",
        descHi: "दौरे समाप्त होते ही शाम को तथ्यात्मक प्रेस नोट और चयनित हाई-क्वालिटी फोटो भेजना।",
        descEn: "Dispatching accurate, photo-backed press releases every evening."
      },
      {
        step: "03",
        titleHi: "प्रेस वार्ता व इंटरव्यू",
        titleEn: "Press Conferences",
        descHi: "प्रमुख नीतिगत घोषणाओं और चुनावी घोषणापत्र के विमोचन पर प्रेस वार्ता का आयोजन।",
        descEn: "Hosting structured press briefings for manifesto and policy announcements."
      },
      {
        step: "04",
        titleHi: "मॉनिटरिंग व आर्काइविंग",
        titleEn: "Audit & Archiving",
        descHi: "अगले दिन सभी अखबारों में छपी खबरों का संकलन और वॉर रूम को रिपोर्टिंग।",
        descEn: "Documenting print mentions and archiving all television/digital discussions."
      }
    ],
    techTools: ["Digital News Wire Network", "Automated Media Monitor", "Press Room Suite", "Clipping Generator", "Cloud Media Storage"],
    complianceHi: "सभी मीडिया संवाद, विज्ञापनों और प्रेस सम्मेलनों में पेड न्यूज (Paid News) निषेध नियमों, चुनाव आयोग के प्रेस दिशा-निर्देशों और भारतीय प्रेस परिषद (PCI) के मानकों का पूर्ण सम्मान किया जाता है।",
    complianceEn: "All media activities strictly honor Press Council of India standards, ECI rules against Paid News, and mandatory disclosure guidelines for certified print advertisements.",
    faqs: [
      {
        qHi: "क्या प्रेस नोट अखबारों में छपने की गारंटी होती है?",
        qEn: "Can newspaper publication of press notes be guaranteed?",
        aHi: "अखबार में छपना संपादकीय नीति पर निर्भर करता है, लेकिन हमारे पत्रकारिता-मानक ड्राफ्ट, समय पर डिलीवरी और मजबूत मीडिया संबंधों से 90%+ सफलता दर रहती है।",
        aEn: "Editorial inclusion rests with newspaper editors, but our journalist-grade drafts and established press relations ensure maximum coverage."
      },
      {
        qHi: "क्या आप इंटरव्यू और पॉडकास्ट भी अरेंज करते हैं?",
        qEn: "Do you arrange video podcasts and channel interviews?",
        aHi: "हाँ, हम प्रतिष्ठित डिजिटल न्यूज़ चैनलों और लोकप्रिय राजनीतिक पॉडकास्टर्स के साथ उम्मीदवार के विजन पर केंद्रित गंभीर और प्रभावोत्पादक इंटरव्यू आयोजित करते हैं।",
        aEn: "Yes, we coordinate high-value interviews on reputable regional digital channels and podcasts to project political gravitas."
      }
    ]
  },
  {
    id: "08",
    slug: "outdoor-campaign",
    icon: "Truck",
    titleHi: "आउटडोर एवं जमीनी प्रचार",
    titleEn: "Outdoor Campaign & Road Mobility",
    tagHi: "एलईडी वैन, रथ एवं विजुअल ब्रांडिंग",
    tagEn: "LED Campaign Vans, Mobile Raths & Display",
    shortDescHi: "LED vans, LED walls, rath campaign, sound vans, outdoor branding, campaign vehicles और rally/roadshow support।",
    shortDescEn: "State-of-the-art mobile LED campaign vans, hydraulic election raths, high-fidelity sound vans, hoarding networks, and roadshow fabrication.",
    heroSubHi: "सड़कों से चौराहों तक, उम्मीदवार की भव्य और आकर्षक दृश्य उपस्थिति।",
    heroSubEn: "Dominating physical geography with custom-fabricated mobile campaign raths, crystal-clear LED displays, and strategic outdoor presence.",
    capabilitiesHi: [
      "हाई-डेफिनिशन आउटडोर P4/P3 एलईडी डिस्प्ले प्रचार वैन (LED Vans)",
      "उम्मीदवार के लिए कस्टमाइज्ड चुनावी रथ (Election Rath) डिजाइन व निर्माण",
      "हाई-डेसिबल साउंड सिस्टम वैन (Sound Vans) एवं घोषणा वाहन",
      "विधानसभा के प्रमुख चौराहों पर रणनीतिक होर्डिंग्स व साइनेज मैपिंग",
      "रोड शो एवं पदयात्राओं के लिए मोबाइल स्टेज एवं लाइटिंग सिस्टम",
      "GPS-सक्षम वाहन ट्रैकिंग और रूट-कम्प्लीशन मॉनिटरिंग"
    ],
    capabilitiesEn: [
      "High-definition P3/P4 weatherproof mobile LED campaign video vans",
      "Turnkey hydraulic campaign rath custom fabrication and branding",
      "Acoustically tuned announcement sound vans with wireless PA rigs",
      "Strategic hoarding, unipole, and gantry placement across key intersections",
      "Mobile stage, generator backup, and lighting rigs for evening roadshows",
      "GPS real-time route tracking and broadcast verification sensors"
    ],
    whyMattersHi: "ग्रामीण और अर्ध-शहरी क्षेत्रों में रात के समय चौपालों पर एलईडी वैन से उम्मीदवार का भाषण, विकास कार्य और चुनावी गीत दिखाना सबसे प्रभावशाली माध्यम है। इससे एक ही दिन में दर्जनों गांवों में सैकड़ों मतदाताओं तक जीवंत प्रचार पहुंचता है।",
    whyMattersEn: "In rural and semi-urban assembly seats, evening village square LED screenings of candidate documentaries and local issues create instant buzz, assembling hundreds of voters without logistical overhead.",
    whatWeProvideHi: [
      "पूर्णतः सुसज्जित, ब्रांडेड और साउंड-इंटीग्रेटेड हाई-ब्राइटनेस एलईडी वाहन",
      "अनुभवी ड्राइवर, तकनीकी ऑपरेटर और जनरेटर बैकअप सपोर्ट",
      "प्रतिदिन 8-10 गांवों/वार्डों का पूर्व-निर्धारित रूट चार्ट और शेड्यूल",
      "सार्वजनिक स्थलों, बाजारों और नुक्कड़ नाटकों के लिए उपयुक्त ऑडियो-विजुअल सेटअप",
      "वाहन की लाइव लोकेशन और स्क्रीन टाइम का डिजिटल डैशबोर्ड ट्रैकिंग"
    ],
    whatWeProvideEn: [
      "Turnkey branded campaign vehicles with ultra-bright daylight-visible LED walls",
      "Dedicated on-board technician, driver, and silent fuel generator backup",
      "Pre-planned daily route itinerary covering 8 to 10 village squares per vehicle",
      "High-impact audio-video playback optimized for evening chaupals and markets",
      "Real-time GPS movement dashboard tracking route coverage and operational hours"
    ],
    deliverablesHi: [
      "GPS-लॉग्ड दैनिक रूट कवरेज रिपोर्ट और विलेज विजिट लॉग्स",
      "प्रत्येक चौपाल स्क्रीनिंग की टाइमस्टैम्प्ड तस्वीरें और वीडियो क्लिप्स",
      "आउटडोर होर्डिंग्स की जियो-टैग की गई लोकेशन लिस्ट",
      "वाहन परफॉर्मेंस और दर्शक उपस्थिति का दैनिक सारांश",
      "आपातकालीन बैकअप वाहन और ऑन-साइट स्पेयर पार्ट्स गारंटी"
    ],
    deliverablesEn: [
      "GPS-logged daily route logs certifying village chaupal screenings",
      "Timestamped high-resolution photos and video clips of each screening",
      "Geotagged master directory of installed billboards and street hoardings",
      "Daily audience assembly estimates and route completion audit",
      "On-call replacement guarantee in case of vehicular or mechanical faults"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "रूट प्लानिंग व अनुमति",
        titleEn: "Route & Permission Planning",
        descHi: "विधानसभा के सभी गांवों और चौराहों का रूट मैप बनाकर प्रशासन से वाहन अनुमति लेना।",
        descEn: "Mapping high-density village squares and securing administrative permits."
      },
      {
        step: "02",
        titleHi: "वाहन फैब्रिकेशन व ब्रांडिंग",
        titleEn: "Fabrication & Branding",
        descHi: "वाहन पर उच्च-गुणवत्ता की विनाइल रैपिंग, स्क्रीन टेस्टिंग और साउंड कैलिब्रेशन।",
        descEn: "Premium vinyl wrap branding, LED wall calibration, and sound testing."
      },
      {
        step: "03",
        titleHi: "जमीनी संचालन व स्क्रीनिंग",
        titleEn: "Ground Broadcast",
        descHi: "स्थानीय कार्यकर्ताओं के समन्वय से चौपालों पर शाम के समय वीडियो और गीत प्रसारण।",
        descEn: "Conducting prime evening screenings at village haats and chaupals."
      },
      {
        step: "04",
        titleHi: "GPS ट्रैकिंग व रिपोर्टिंग",
        titleEn: "Telemetry & Logs",
        descHi: "वॉर रूम द्वारा वाहन की गति, रुकने का समय और कुल दर्शकों की दैनिक समीक्षा।",
        descEn: "Reviewing daily run-time, halts, and public engagement metrics via GPS."
      }
    ],
    techTools: ["AIS 140 GPS Telematics", "Novastar LED Video Processors", "JBL/Yamaha Outdoor PA", "Geofence Monitoring App", "Live Streaming Kit"],
    complianceHi: "सभी प्रचार वाहनों, लाउडस्पीकरों और होर्डिंग्स का उपयोग जिला निर्वाचन अधिकारी (DEO) से प्राप्त वैध परमिशन, मोटर वाहन अधिनियम और ध्वनि प्रदूषण नियमों के पूर्ण पालन में किया जाता है।",
    complianceEn: "All campaign vehicles, audio amplification, and public displays operate strictly under formal District Election Officer (DEO) permits and adhere to Central Motor Vehicles and Noise Pollution norms.",
    faqs: [
      {
        qHi: "क्या एलईडी वैन दिन के उजाले में भी साफ दिखती है?",
        qEn: "Are LED screens clearly visible in broad daylight?",
        aHi: "हाँ, हम 5500+ निट्स ब्राइटनेस वाली विशेष आउटडोर वेदरप्रूफ स्क्रीन का उपयोग करते हैं जो तेज धूप में भी क्रिस्टल क्लियर दिखाई देती हैं।",
        aEn: "Yes, our mobile LED modules feature 5,500+ nits outdoor brightness, delivering pristine clarity even under midday direct sunlight."
      },
      {
        qHi: "क्या वाहनों की परमिशन आप खुद कराएंगे?",
        qEn: "Do you handle administration vehicle permits?",
        aHi: "हम परमिशन के लिए सभी आवश्यक तकनीकी दस्तावेज, वाहन कागजात और आवेदन फाइल तैयार करते हैं, जिसे उम्मीदवार की अधिकृत टीम सुगम पोर्टल/निर्वाचन अधिकारी के समक्ष प्रस्तुत करती है।",
        aEn: "We furnish all required vehicular documentation, fitness certificates, and application files for submission to the ECI Suvidha portal."
      }
    ]
  },
  {
    id: "09",
    slug: "event-campaign-management",
    icon: "Calendar",
    titleHi: "कार्यक्रम एवं चुनाव अभियान प्रबंधन",
    titleEn: "Events & Rally Campaign Management",
    tagHi: "जनसभा, रोड शो एवं विशाल आयोजन",
    tagEn: "Rallies, Roadshows & Mega Stage Productions",
    shortDescHi: "Rallies, roadshows, public meetings, event management, stage branding, photography, videography और live streaming।",
    shortDescEn: "Mega rally stage engineering, high-energy roadshow logistics, public chaupal coordination, VIP protocols, broadcast-grade live streaming, and crowd flow management.",
    heroSubHi: "कार्यक्रम से जनसभा तक, हर गतिविधि का व्यवस्थित और भव्य प्रबंधन।",
    heroSubEn: "From intimate village meetings to massive constituency rallies: impeccable stagecraft, crowd coordination, and multi-camera live broadcast.",
    capabilitiesHi: [
      "विशाल चुनावी जनसभाओं (Mega Rallies) का संपूर्ण स्टेज एवं ग्राउंड प्रबंधन",
      "रोड शो (Roadshows) एवं भव्य बाइक रैलियों का रूट समन्वय व सुरक्षा योजना",
      "स्टार प्रचारकों (Star Campaigners) के प्रोटोकॉल, हेलीपैड एवं मंच व्यवस्था",
      "मल्टी-कैमरा सेटअप के साथ 4K लाइव स्ट्रीमिंग (YouTube, Facebook, X)",
      "पब्लिक एड्रेस सिस्टम, जर्मन हैंगर टेंटेज, बैरिकेडिंग एवं वीआईपी लाउंज",
      "भीड़ प्रबंधन, वॉलंटियर तैनाती एवं इमरजेंसी मेडिकल सपोर्ट"
    ],
    capabilitiesEn: [
      "Turnkey stage, sound, and enclosure engineering for mega political rallies",
      "High-energy roadshow routing, pilot vehicle security, and timing logistics",
      "Star campaigner protocol coordination, helipad logistics, and stage access",
      "Multi-camera broadcast-grade 4K live streaming across Facebook, YouTube, and X",
      "Waterproof German hanger structures, crowd barricading, and VIP green rooms",
      "Crowd movement management, volunteer marshals, and on-site medical standby"
    ],
    whyMattersHi: "एक सफल और विशाल जनसभा पूरे विधानसभा क्षेत्र में उम्मीदवार की राजनीतिक ताकत का मनोवैज्ञानिक संदेश देती है। कमजोर ध्वनि, खराब मंच प्रबंधन या अव्यवस्था से बनी गलत छवि अभियान को भारी नुकसान पहुंचा सकती है। प्रोफेशनल मैनेजमेंट हर आयोजन को ऐतिहासिक बनाता है।",
    whyMattersEn: "A well-executed, mammoth rally projects unstoppable momentum and political authority across the constituency. Conversely, audio failures or crowd chaos inflict reputational damage. Professional production ensures awe-inspiring optics.",
    whatWeProvideHi: [
      "5,000 से 50,000+ दर्शकों की क्षमता वाले वाटरप्रूफ जर्मन हैंगर व स्टेज इंफ्रास्ट्रक्चर",
      "विश्वस्तरीय लाइन ऐरे (Line Array) साउंड सिस्टम ताकि अंतिम पंक्ति तक स्पष्ट आवाज पहुंचे",
      "सिनेमैटिक ड्रोन, जिब क्रेन और 4K कैमरामैन की समर्पित प्रोडक्शन टीम",
      "सोशल मीडिया पर लैग-फ्री एचडी लाइव स्ट्रीमिंग के लिए मल्टी-सिम बॉन्डिंग इंटरनेट",
      "कार्यक्रम का मिनट-टू-मिनट एजेंडा और वक्ता समन्वय"
    ],
    whatWeProvideEn: [
      "Waterproof German hanger marquees and engineered stages for 5,000 to 50,000+ capacity",
      "Acoustically engineered Line Array sound arrays guaranteeing vocal clarity everywhere",
      "Dedicated broadcast production unit with dynamic drones, jib arms, and cinema cameras",
      "Bonded cellular broadcast backpacks ensuring zero-latency live streams on all social channels",
      "Minute-to-minute VIP stage agenda and speaker timeline coordination"
    ],
    deliverablesHi: [
      "जनसभा स्थल का लेआउट प्लान, सीटिंग चार्ट और सुरक्षा रूट",
      "फुल एचडी लाइव स्ट्रीम रिकॉर्डिंग एवं तत्काल सोशल मीडिया क्लिपिंग्स",
      "हाई-रेजोल्यूशन फोटोग्राफी आर्काइव (सैकड़ों एडिटेड तस्वीरें)",
      "आयोजन समाप्ति के 2 घंटे के भीतर जनसभा की 60-सेकंड सिनेमैटिक हाइलाइट रील",
      "प्रशासनिक अनुमति अनुपालन चेकलिस्ट"
    ],
    deliverablesEn: [
      "Architectural rally ground layout, emergency exits, and VIP egress schematics",
      "Full HD broadcast master recording and instant social soundbite clips",
      "Curated high-resolution photo gallery delivered immediately post-event",
      "60-second cinematic event highlight reel delivered within 2 hours of wrap",
      "Administrative compliance and sound decibel verification certificate"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "स्थल सर्वेक्षण व प्लानिंग",
        titleEn: "Venue Recce & Layout",
        descHi: "मैदान की क्षमता, प्रवेश-निकास द्वार, पार्किंग और हेलीपैड की फिजिबिलिटी जांच।",
        descEn: "Ground recce inspecting capacity, approach roads, parking, and stage wind safety."
      },
      {
        step: "02",
        titleHi: "प्रशासनिक अनुमतियां",
        titleEn: "Permits & Clearances",
        descHi: "अग्नि सुरक्षा, पुलिस, पीडब्ल्यूडी और चुनाव अधिकारी से समयबद्ध क्लीयरेंस।",
        descEn: "Coordinating fire safety, police bandobast, and election officer clearances."
      },
      {
        step: "03",
        titleHi: "स्टेज व तकनीक सेटअप",
        titleEn: "Stage & Tech Build",
        descHi: "इवेंट से 24 घंटे पूर्व स्टेज, जर्मन हैंगर, साउंड और लाइव ब्रॉडकास्ट की रिहर्सल।",
        descEn: "Stage fabrication, acoustic line-array tuning, and camera rehearsals 24h prior."
      },
      {
        step: "04",
        titleHi: "लाइव एग्जीक्यूशन व कवरेज",
        titleEn: "Live Execution",
        descHi: "कार्यक्रम का सफल संचालन, लाइव स्ट्रीमिंग और त्वरित सोशल मीडिया कवरेज।",
        descEn: "Flawless stage agenda management, real-time live-streaming, and immediate reels."
      }
    ],
    techTools: ["LiveU / Teradek Bonding", "Line Array Audio Arrays", "Blackmagic ATEM Switchers", "DJI Cinema Drones", "German Hanger Structures"],
    complianceHi: "सभी रैलियां और रोड शो सुविधा पोर्टल (Suvidha Portal) से पूर्व-अनुमोदित लिखित अनुमति, लाउडस्पीकर समय सीमा (रात्रि 10:00 बजे से प्रातः 6:00 बजे तक प्रतिबंध) और वाहन आचार संहिता के तहत आयोजित किए जाते हैं।",
    complianceEn: "Every public gathering and roadshow strictly complies with pre-sanctioned permissions via ECI's Suvidha portal, mandatory loudspeaker curfew rules (10 PM to 6 AM), and prescribed convoy vehicle ceilings.",
    faqs: [
      {
        qHi: "क्या आप बहुत कम समय में बड़ी रैली आयोजित कर सकते हैं?",
        qEn: "Can you mobilize infrastructure for major rallies on short notice?",
        aHi: "हाँ, हमारे पास विशाल इन-हाउस इन्वेंट्री और नेटवर्क है जिससे हम 48 से 72 घंटे के भीतर 25,000+ क्षमता की जनसभा का भव्य ढांचा खड़ा करने में सक्षम हैं।",
        aEn: "Yes. With expansive in-house marquee staging inventory, we can mobilize and commission a 25,000+ capacity venue within 48 to 72 hours."
      },
      {
        qHi: "लाइव स्ट्रीमिंग में नेटवर्क न होने पर क्या समाधान है?",
        qEn: "How do you ensure uninterrupted live streams in remote rural locations?",
        aHi: "हम मल्टी-सिम सेल्युलर बॉन्डिंग डिवाइस (LiveU) का उपयोग करते हैं जो एयरटेल, जियो और वोडाफोन के 4-6 सिम्स को जोड़कर ग्रामीण क्षेत्रों में भी हाई-स्पीड इंटरनेट प्रदान करता है।",
        aEn: "We deploy multi-carrier cellular bonding backpacks combining 4 to 6 disparate cellular modems, ensuring unbreakable 1080p live streams anywhere in UP."
      }
    ]
  },
  {
    id: "10",
    slug: "candidate-branding",
    icon: "Award",
    titleHi: "उम्मीदवार ब्रांडिंग",
    titleEn: "Candidate Persona & Digital Identity",
    tagHi: "पर्सनल ब्रांडिंग एवं नेतृत्व छवि",
    tagEn: "Leadership Persona & Public Profile",
    shortDescHi: "Biography, professional profile, personal branding, social media branding, digital identity और media positioning।",
    shortDescEn: "Architecting the candidate's personal leadership narrative, published biography, visual styling, public speech prep, and high-stature media positioning.",
    heroSubHi: "उम्मीदवार की पहचान, एक मजबूत, प्रेरणादायक और प्रामाणिक ब्रांड।",
    heroSubEn: "Positioning the candidate as an authentic, visionary, and accessible leader through bespoke branding and narrative architecture.",
    capabilitiesHi: [
      "उम्मीदवार की आधिकारिक जीवनी (Political Biography) एवं विजन बुकलेट",
      "प्रोफेशनल बायोडाटा, पोर्टफोलियो एवं विकिपीडिया/नॉलेज पैनल गाइडेंस",
      "पर्सनल ब्रांड स्टाइल गाइड (कलर पैलेट, सिग्नेचर स्लोगन, विजुअल टोन)",
      "भाषण तैयारी (Speechwriting), मुख्य संदेश एवं पब्लिक स्पीकिंग कोचिंग",
      "सोशल मीडिया पर पर्सनल अकांउट्स की प्रतिष्ठित व सम्मानीय ब्रांडिंग",
      "जनता और विभिन्न सामाजिक वर्गों के बीच नेतृत्व छवि का सुदृढ़ीकरण"
    ],
    capabilitiesEn: [
      "Authoring the candidate's official political biography and vision manifesto",
      "Curated executive biodata, achievement dossiers, and digital knowledge panels",
      "Personal brand design guidelines (palette, signature attire, typography, tone)",
      "High-impact speechwriting, policy talking points, and media interview coaching",
      "Elevating personal social media handles into verified authority hubs",
      "Cultivating an accessible yet commanding leadership image across all voter segments"
    ],
    whyMattersHi: "मतदाता केवल पार्टी के चुनाव चिन्ह पर नहीं, बल्कि उम्मीदवार के चरित्र, उसकी पहुंच, जनहित में किए गए संघर्ष और उसके विजन को देखकर मतदान करते हैं। एक सुस्पष्ट और प्रामाणिक पर्सनल ब्रांड उम्मीदवार को अन्य सभी प्रत्याशियों से अलग और विशिष्ट बनाता है।",
    whyMattersEn: "Modern electors vote for individuals as much as party symbols. Voters seek empathy, decisiveness, and proven integrity. A refined personal brand differentiates the candidate, turning individual character into political capital.",
    whatWeProvideHi: [
      "उम्मीदवार के जीवन संघर्ष, उपलब्धियों और विजन पर आधारित व्यापक ब्रांड स्ट्रेटेजी",
      "अनुभवी स्पीचराइटर्स द्वारा तैयार प्रेरक और स्थानीय संदर्भों से भरे भाषण",
      "हाई-प्रोफाइल फोटोग्राफी सेशन जिसमें सादगी और नेतृत्व दोनों झलके",
      "डिजिटल प्रोफाइलिंग (Google सर्च रिजल्ट्स, डिजिटल प्रेस किट, आधिकारिक वेबसाइट)",
      "जनसंवाद के दौरान जनता से भावनात्मक जुड़ाव स्थापित करने की रणनीति"
    ],
    whatWeProvideEn: [
      "Deep personal brand narrative capturing personal background, public service, and vision",
      "Evocative speech drafts infused with regional idioms, humor, and policy substance",
      "Cinematic portrait photography sessions capturing gravitas, accessibility, and warmth",
      "Digital footprint optimization ensuring top-tier Google search presence",
      "Strategic advice on town-hall interactions to forge lasting emotional bonds"
    ],
    deliverablesHi: [
      "उम्मीदवार 'विजन 2027' बुकलेट (प्रिंट व डिजिटल संस्करण)",
      "पब्लिक स्पीकिंग एवं मीडिया इंटरैक्शन ब्रीफिंग कार्ड्स",
      "आधिकारिक पोर्ट्रेट फोटो बैंक (विभिन्न अवसरों और पोस्टरों के लिए)",
      "कैंडिडेट पर्सनल वेबसाइट और डिजिटल विजिटिंग कार्ड",
      "मासिक लीडरशिप नैरेटिव प्रोग्रेस रिपोर्ट"
    ],
    deliverablesEn: [
      "Official 'Vision 2027' commemorative print and digital manifesto booklet",
      "Pocket debate cards and TV interview talking points on key issues",
      "Curated high-res official portrait archive for posters and digital assets",
      "Modern personal website showcasing social initiatives and track record",
      "Monthly reputation audit and perception tracking metrics"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "पर्सोना ऑडिट व इंटरव्यू",
        titleEn: "Persona Discovery",
        descHi: "उम्मीदवार, परिवार और करीबी सहयोगियों से बातचीत कर मुख्य ताकतों व संघर्षों को समझना।",
        descEn: "Extensive interviews uncovering foundational life values, key battles, and public service."
      },
      {
        step: "02",
        titleHi: "कोर नैरेटिव की रचना",
        titleEn: "Core Narrative Formulation",
        descHi: "एक केंद्रीय संदेश तैयार करना जो उम्मीदवार के व्यक्तित्व और जनता की अपेक्षाओं को जोड़े।",
        descEn: "Forging the primary candidate identity hook that resonates across communities."
      },
      {
        step: "03",
        titleHi: "विजुअल व कंटेंट रोलआउट",
        titleEn: "Visual Alignment",
        descHi: "पोस्टर, वेबसाइट, सोशल मीडिया और सार्वजनिक अपीयरेंस में एकरूपता स्थापित करना।",
        descEn: "Synchronizing visual assets, signature attire, and digital touchpoints."
      },
      {
        step: "04",
        titleHi: "पब्लिक रेस्पॉन्स मॉनिटरिंग",
        titleEn: "Perception Tracking",
        descHi: "भाषणों और मुलाकातों पर जनता की प्रतिक्रिया देखकर संवाद शैली को और प्रभावी बनाना।",
        descEn: "Gathering ground sentiment to continuously calibrate public messaging."
      }
    ],
    techTools: ["Digital Reputation Suite", "Speech Teleprompter Rig", "Portrait Studio Lighting", "Google Knowledge Graph Optimization", "Media Sentiment Tracker"],
    complianceHi: "सभी पर्सनल ब्रांडिंग सामग्री, विजन दस्तावेज और बायोग्राफी में दी गई जानकारी उम्मीदवार द्वारा अधिकृत तथ्यों पर आधारित होती है और चुनाव आयोग के शपथ-पत्र (Form 26) के अनुरूप पारदर्शी रखी जाती है।",
    complianceEn: "All personal biographical details, career milestones, and educational claims are strictly cross-verified against official filings (Form 26) to ensure total transparency.",
    faqs: [
      {
        qHi: "क्या आप हमारे भाषण लिखने में मदद करेंगे?",
        qEn: "Do you provide custom speechwriting for public rallies?",
        aHi: "हाँ, हमारे अनुभवी लेखक हर जनसभा और स्थानीय संदर्भ के अनुसार जोशीले, सटीक और आचार संहिता के अनुकूल भाषण तैयार करते हैं।",
        aEn: "Yes. Our speechwriters produce rousing, policy-rich rally speeches tailored to specific village demographics and local historical pride."
      },
      {
        qHi: "कैंडिडेट ब्रांडिंग से चुनाव में क्या फर्क पड़ता है?",
        qEn: "How does structured personal branding impact voter choice?",
        aHi: "यह तटस्थ (Undecided) मतदाताओं को विश्वास दिलाता है कि उम्मीदवार केवल एक राजनेता नहीं, बल्कि उनकी समस्याओं को हल करने वाला एक सक्षम और दूरदर्शी प्रतिनिधि है।",
        aEn: "It persuades swing and undecided electors that the candidate possesses the moral integrity and administrative capability to deliver real development."
      }
    ]
  },
  {
    id: "11",
    slug: "election-war-room",
    icon: "ShieldAlert",
    titleHi: "चुनावी वार रूम एवं कंट्रोल सेंटर",
    titleEn: "Election War Room & Control Center",
    tagHi: "केंद्रीकृत कमान एवं 24/7 निगरानी",
    tagEn: "Unified Command Hub & 24/7 Monitoring",
    shortDescHi: "Centralized command center, data monitoring, social monitoring, call-center monitoring, field coordination, booth reporting and daily reports।",
    shortDescEn: "High-tech physical/digital campaign command headquarters integrating social intelligence, field movement, call-center streams, and emergency triage.",
    heroSubHi: "चुनावी वार रूम: एक ही जगह से पूरे विधानसभा अभियान की 24/7 निगरानी।",
    heroSubEn: "The operational brain of the campaign: real-time situational awareness, rapid response triage, and centralized operational command.",
    capabilitiesHi: [
      "सेंट्रलाइज्ड फिजिकल एवं डिजिटल वॉर रूम की स्थापना व संचालन",
      "सोशल मीडिया, फील्ड टीम, कॉल सेंटर और मीडिया का लाइव एकीकरण",
      "बूथ-स्तरीय मतदान रिपोर्टिंग और घंटे-दर-घंटे टर्नआउट ट्रैकिंग",
      "क्राइसिस मैनेजमेंट एवं आपातकालीन प्रतिक्रिया डेस्क (Rapid Response Team)",
      "दैनिक रणनीतिक समीक्षा एवं अगले दिन की विस्तृत कार्ययोजना",
      "विपक्षी गतिविधियों और अफवाहों पर 24/7 सतर्क निगरानी"
    ],
    capabilitiesEn: [
      "Turnkey physical command center setup (multi-display video walls, secure comms)",
      "Live integration of social media listening, field telematics, and call center streams",
      "Hourly booth-level turnout monitoring and targeted turnout mobilization triggers",
      "Rapid response desk neutralizing opposition rumors within 15 minutes",
      "Daily executive strategic review dossiers and next-day itinerary orchestration",
      "24/7 opposition tracking, narrative counter-strikes, and legal escalation"
    ],
    whyMattersHi: "चुनाव में हर मिनट महत्वपूर्ण होता है। किसी विरोधी का अचानक दिया गया बयान, किसी बूथ पर ईवीएम में आई खराबी या किसी गांव में उपजी नाराजगी को अगर तुरंत नहीं सुलझाया गया तो बड़ा नुकसान हो सकता है। एक सुसज्जित वॉर रूम अभियान को आंख, कान और त्वरित निर्णय लेने की शक्ति देता है।",
    whyMattersEn: "Elections are won in split-second decisions. An unrefuted rumor, a sudden booth-level logistic failure, or mismanaged candidate travel can derail months of effort. The War Room is the nerve center ensuring zero blind spots.",
    whatWeProvideHi: [
      "विधानसभा मुख्यालय पर 10-15 स्क्रीन वाला मल्टी-डिस्प्ले कमांड सेंटर सेटअप",
      "डेटा एनालिस्ट्स, सोशल मीडिया मॉनिटर्स और फील्ड कोऑर्डिनेटर्स की 24/7 शिफ्ट",
      "प्रत्येक महत्वपूर्ण घटना पर तुरंत उम्मीदवार और कोर टीम को 'रेड अलर्ट' प्रणाली",
      "शाम 8:00 बजे दैनिक संपूर्ण अभियान समीक्षा रिपोर्ट (Daily Campaign Dossier)",
      "मतदान दिवस पर सुबह 5:00 बजे से मतगणना तक विशेष 'इलेक्शन डे ऑपरेशन सेल'"
    ],
    whatWeProvideEn: [
      "Turnkey 10-15 screen video wall command headquarters within the constituency",
      "24/7 round-the-clock shifts of data analysts, media loggers, and field dispatchers",
      "Instant priority alert mechanism informing candidate and campaign manager within 3 minutes",
      "Daily comprehensive operational audit report delivered at 8:00 PM every evening",
      "Dedicated 'Poll Day War Room' operating non-stop from 5 AM until EVMs are sealed in strongrooms"
    ],
    deliverablesHi: [
      "दैनिक वॉर रूम बुलेटिन (सभी 11 विभागों की समेकित रिपोर्ट)",
      "लाइव डैशबोर्ड एक्सेस (उम्मीदवार के फोन पर रीयल-टाइम डेटा)",
      "अफवाह निवारण और काउंटर-नैरेटिव बुलेटिन्स",
      "मतदान दिवस बूथ-वार टर्नआउट ट्रैकर एवं अलर्ट लॉग",
      "मतगणना दिवस (Counting Day) राउंड-वार ट्रेंड्स मॉनिटरिंग सिस्टम"
    ],
    deliverablesEn: [
      "Daily War Room Executive Bulletin consolidating all 11 verticals",
      "Encrypted mobile dashboard providing real-time KPI visibility on candidate's device",
      "Rapid fact-checking assets and counter-propaganda dossiers",
      "Poll Day booth-by-booth turnout delta maps and urgent voter-mobilization queues",
      "Counting Day round-by-round margin tracker and reporting desk"
    ],
    workflow: [
      {
        step: "01",
        titleHi: "इंफ्रास्ट्रक्चर व डिस्प्ले सेटअप",
        titleEn: "War Room Setup",
        descHi: "सुरक्षित इंटरनेट, बड़ी स्क्रीनें, कंप्यूटर वर्कस्टेशन्स और हॉटलाइन फोन स्थापित करना।",
        descEn: "Commissioning high-speed dual WAN fiber, multi-monitor video walls, and secure lines."
      },
      {
        step: "02",
        titleHi: "डेटा फीड्स का एकीकरण",
        titleEn: "Feed Integration",
        descHi: "सोशल मीडिया, फील्ड ऐप, कॉल सेंटर और ग्राउंड वालंटियर्स के डेटा को जोड़ना।",
        descEn: "Interconnecting telemetry feeds from field apps, call centers, and social monitors."
      },
      {
        step: "03",
        titleHi: "24/7 निगरानी व रैपिड रिस्पांस",
        titleEn: "24/7 Active Monitoring",
        descHi: "हर गतिविधि की लाइव मॉनिटरिंग और किसी भी समस्या का तुरंत समाधान करना।",
        descEn: "Triaging ground challenges, media fake news, and coordination bottlenecks."
      },
      {
        step: "04",
        titleHi: "दैनिक रणनीति व समीक्षा",
        titleEn: "Daily Review & Briefing",
        descHi: "शाम को उम्मीदवार और मुख्य रणनीतिकारों के साथ बैठक कर अगले दिन की योजना तय करना।",
        descEn: "Nightly executive briefing analyzing day's performance and locking next day's tour."
      }
    ],
    techTools: ["Unified Command Dashboard", "Dual-ISP Redundant Gateway", "Multi-Screen Video Matrix", "Encrypted VoIP Hotlines", "Emergency Triage System"],
    complianceHi: "वॉर रूम के सभी कार्य कानूनी परिधि में, पूर्णतः पारदर्शी और शांतिपूर्ण लोकतांत्रिक प्रक्रिया के सम्मान के साथ संचालित किए जाते हैं। किसी भी प्रकार की भ्रामक या अवांछित गतिविधि का सख्त निषेध है।",
    complianceEn: "War room operations function strictly within the constitutional boundaries of peaceful democratic elections and ECI guidelines. Unverified claims, unlawful surveillance, and malicious campaigns are strictly forbidden.",
    faqs: [
      {
        qHi: "वॉर रूम कहाँ स्थापित किया जाता है?",
        qEn: "Where is the physical election war room established?",
        aHi: "वॉर रूम विधानसभा क्षेत्र के केंद्रीय स्थान या उम्मीदवार के मुख्य चुनाव कार्यालय में स्थापित किया जाता है, जहाँ हाई-स्पीड इंटरनेट और सुरक्षित वातावरण हो।",
        aEn: "The war room is typically installed within the candidate's primary campaign headquarters or a secure central facility in the constituency."
      },
      {
        qHi: "मतदान के दिन वॉर रूम कैसे काम करता है?",
        qEn: "How does the war room operate on Polling Day?",
        aHi: "मतदान के दिन यह सबसे सक्रिय रहता है। हर बूथ से एजेंट की उपस्थिति, पहली वोट पड़ने की सूचना, हर 2 घंटे का टर्नआउट और कमजोर बूथों पर तुरंत कार्यकर्ताओं को भेजने का काम यहीं से होता है।",
        aEn: "On voting day, it coordinates agent roll-calls at 6 AM, tracks hourly turnout, monitors EVM issues, and dispatches reserves to lagging booths."
      }
    ]
  }
];
