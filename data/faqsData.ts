export interface FaqItem {
  id: number;
  category: "general" | "services" | "technology" | "compliance";
  categoryHi: string;
  categoryEn: string;
  qHi: string;
  qEn: string;
  aHi: string;
  aEn: string;
}

export const faqsData: FaqItem[] = [
  {
    id: 1,
    category: "general",
    categoryHi: "सामान्य प्रश्न",
    categoryEn: "General Inquiries",
    qHi: "चुनाव प्रबंधन में आपकी कौन-कौन सी सेवाएं उपलब्ध हैं?",
    qEn: "What comprehensive election management services do you offer?",
    aHi: "वर्कफोर्स इन्फोटेक प्राइवेट लिमिटेड चुनाव प्रचार के लिए 11 मुख्य सेवाएं प्रदान करती है: सोशल मीडिया प्रबंधन, चुनावी डेटा एवं रिसर्च, बूथ एवं जमीनी प्रबंधन, मतदाता संपर्क एवं कॉल सेंटर, तकनीकी समाधान, वीडियो एवं क्रिएटिव प्रोडक्शन, मीडिया एवं जनसंपर्क, आउटडोर व एलईडी प्रचार, कार्यक्रम एवं जनसभा प्रबंधन, उम्मीदवार ब्रांडिंग और सेंट्रलाइज्ड चुनावी वार रूम।",
    aEn: "Workforce Infotech provides 11 end-to-end election management verticals: Social Media Management, Election Data & Research, Booth & Ground Mobilization, Voter Communication & Call Center, Election Technology & Dashboards, Video & Creative Production, Media Relations & PR, Outdoor & LED Campaigning, Rally & Event Management, Candidate Branding, and Turnkey Election War Rooms."
  },
  {
    id: 2,
    category: "general",
    categoryHi: "सामान्य प्रश्न",
    categoryEn: "General Inquiries",
    qHi: "क्या आप विधानसभा स्तर पर campaign support देते हैं?",
    qEn: "Do you provide dedicated assembly-constituency level campaign support?",
    aHi: "हाँ, हम उत्तर प्रदेश विधानसभा चुनाव 2027 के लिए विशेष रूप से विधानसभा स्तर पर संपूर्ण चुनाव प्रबंधन समाधान प्रदान करते हैं। इसमें क्षेत्र के समीकरणों के अध्ययन से लेकर, बूथ स्तर की मैपिंग, डिजिटल नैरेटिव और मतदान दिवस तक का संपूर्ण परिचालन शामिल है।",
    aEn: "Yes, we specialize in constituency-wide campaign execution tailored for the UP Assembly Election 2027, covering demographic analysis, booth mapping, digital narratives, field logistics, and poll-day operations."
  },
  {
    id: 3,
    category: "services",
    categoryHi: "जमीनी एवं बूथ सेवाएं",
    categoryEn: "Ground & Booth",
    qHi: "क्या बूथ स्तर पर टीम उपलब्ध कराई जा सकती है?",
    qEn: "Can booth-level management and field volunteer teams be coordinated?",
    aHi: "हाँ, हम उम्मीदवार के स्थानीय कार्यकर्ताओं को बूथ-स्तरीय समितियों में संगठित करने, उन्हें डिजिटल रूप से जोड़ने, पन्ना प्रमुखों को प्रशिक्षित करने और प्रत्येक बूथ की दैनिक उपस्थिति और गतिविधि ट्रैक करने की संपूर्ण तकनीकी एवं रणनीतिक प्रणाली प्रदान करते हैं।",
    aEn: "Yes, we structure candidate grassroots supporters into verified digital booth committees, train panna pramukhs, and deploy mobile attendance and reporting tracking for every polling station."
  },
  {
    id: 4,
    category: "services",
    categoryHi: "डिजिटल एवं मीडिया",
    categoryEn: "Digital & Media",
    qHi: "क्या आप सोशल मीडिया पूरा manage करते हैं?",
    qEn: "Do you manage all social media platforms end-to-end?",
    aHi: "हाँ, हमारी समर्पित डिजिटल टीम फेसबुक, इंस्टाग्राम, एक्स (ट्विटर) और यूट्यूब के आधिकारिक हैंडल्स का 24/7 संचालन करती है। इसमें कंटेंट प्लानिंग, हाई-क्वालिटी पोस्टर्स, 9:16 रील्स, वीडियो एडिटिंग, नैरेटिव बिल्डिंग और सकारात्मक कम्युनिटी एंगेजमेंट शामिल है।",
    aEn: "Yes, our dedicated digital unit manages Facebook, Instagram, X (Twitter), and YouTube 24/7. This includes daily content calendars, broadcast graphics, 9:16 reels, video editing, narrative alignment, and community moderation."
  },
  {
    id: 5,
    category: "services",
    categoryHi: "ब्रांडिंग",
    categoryEn: "Branding",
    qHi: "क्या आप candidate branding करते हैं?",
    qEn: "Do you provide comprehensive candidate personal branding?",
    aHi: "हाँ, हम उम्मीदवार की प्रामाणिक नेतृत्व छवि को निखारने के लिए विशेष बायोग्राफी, विजन बुकलेट, प्रोफेशनल फोटोशूट, पब्लिक स्पीकिंग नोट्स, डिजिटल नॉलेज प्रोफाइल और मीडिया पोजिशनिंग की संपूर्ण ब्रांडिंग सेवा प्रदान करते हैं।",
    aEn: "Yes, we curate the candidate's authentic public leadership persona through biographical documentaries, vision manifestos, cinematic photoshoots, speech preparation, and high-stature media positioning."
  },
  {
    id: 6,
    category: "technology",
    categoryHi: "तकनीकी समाधान",
    categoryEn: "Technology",
    qHi: "क्या campaign dashboard बनाया जा सकता है?",
    qEn: "Can a custom campaign intelligence dashboard be deployed?",
    aHi: "हाँ, हम उम्मीदवार और कोर कमेटी के लिए सुरक्षित वेब एवं मोबाइल डैशबोर्ड उपलब्ध कराते हैं, जिस पर बूथ कवरेज, कॉलिंग स्टेटस, सोशल मीडिया रीच, फील्ड टीमों की लोकेशन और दैनिक प्रोग्रेस रिपोर्ट लाइव देखी जा सकती है।",
    aEn: "Yes, we deploy encrypted executive campaign dashboards accessible on web and mobile, displaying live booth coverage, calling throughput, social reach, field team telemetry, and daily performance metrics."
  },
  {
    id: 7,
    category: "technology",
    categoryHi: "तकनीकी समाधान",
    categoryEn: "Technology",
    qHi: "क्या mobile application develop की जा सकती है?",
    qEn: "Can customized mobile applications be developed for workers?",
    aHi: "हाँ, हम बूथ प्रभारियों, वालंटियर्स और फील्ड कोऑर्डिनेटर्स के लिए आसान हिंदी मोबाइल ऐप उपलब्ध कराते हैं, जिससे डोर-टू-डोर संपर्क, वोटर स्लिप वितरण और मतदान दिवस की रिपोर्टिंग सीधे दर्ज की जा सकती है।",
    aEn: "Yes, we engineer intuitive, Hindi-first Android mobile applications for booth workers and field coordinators to log household canvassing, voter slip distribution, and poll-day turnout."
  },
  {
    id: 8,
    category: "services",
    categoryHi: "मतदाता संवाद",
    categoryEn: "Voter Outreach",
    qHi: "क्या call center setup किया जा सकता है?",
    qEn: "Can a dedicated election call center be deployed?",
    aHi: "हाँ, हम 50 से 200+ सीटों वाला क्लाउड इलेक्शन कॉल सेंटर स्थापित करते हैं, जिसमें स्थानीय भाषा/बोली (अवधी, भोजपुरी, ब्रज) में प्रशिक्षित टेली-कॉलर्स प्रतिदिन हजारों मतदाताओं से बात कर उम्मीदवार का संदेश और जनसमस्याएं नोट करते हैं।",
    aEn: "Yes, we establish scalable 50 to 200+ seat cloud call centers with callers trained in local UP dialects (Awadhi, Bhojpuri, Braj) engaging thousands of voters daily to deliver messages and record feedback."
  },
  {
    id: 9,
    category: "services",
    categoryHi: "मतदाता संवाद",
    categoryEn: "Voter Outreach",
    qHi: "क्या SMS/WhatsApp/voice communication services उपलब्ध हैं?",
    qEn: "Are bulk SMS, WhatsApp broadcasts, and voice communication available?",
    aHi: "हाँ, हम DLT-रजिस्टर्ड बल्क SMS, अधिकृत व्हाट्सएप कम्युनिटी ब्रॉडकास्ट, आउटबाउंड वॉइस कॉल्स (IVR), मिस-कॉल सपोर्टर कैंपेन और इनबाउंड टोल-फ्री हेल्पलाइन की पूरी तकनीकी सुविधा प्रदान करते हैं।",
    aEn: "Yes, we provide DLT-registered bulk SMS broadcasts, authorized WhatsApp community engagement, outbound interactive voice recordings (IVR), missed-call supporter desks, and inbound toll-free helplines."
  },
  {
    id: 10,
    category: "services",
    categoryHi: "क्रिएटिव",
    categoryEn: "Creative Production",
    qHi: "क्या video और reels production उपलब्ध है?",
    qEn: "Is professional video, anthem, and reels production included?",
    aHi: "हाँ, हमारी इन-हाउस प्रोडक्शन टीम 4K कैमरा और ड्रोन से सुसज्जित है। हम ओरिजिनल चुनावी थीम सॉन्ग्स, डॉक्यूमेंट्री फिल्में, डेली कैंपेन रील्स, AI वीडियोज और सोशल मीडिया पोस्टर्स का उच्च-स्तरीय निर्माण करते हैं।",
    aEn: "Yes, our in-house production crews operate 4K cinema optics and licensed drones, producing original election anthems, biographical documentaries, daily tour reels, AI video assets, and posters."
  },
  {
    id: 11,
    category: "services",
    categoryHi: "इवेंट एवं रैलियां",
    categoryEn: "Events & Rallies",
    qHi: "क्या rally और roadshow management किया जाता है?",
    qEn: "Do you manage mega rallies, roadshows, and public gatherings?",
    aHi: "हाँ, विशाल जनसभाओं के लिए जर्मन हैंगर स्टेज, लाइन ऐरे साउंड सिस्टम, मल्टी-कैमरा 4K लाइव स्ट्रीमिंग, वीआईपी लाउंज, बैरिकेडिंग, रूट प्लानिंग और प्रशासनिक अनुमतियों की कागजी प्रक्रिया का संपूर्ण प्रबंधन किया जाता है।",
    aEn: "Yes, we manage turnkey rally staging with German hanger marquees, acoustic line-array audio, 4K multi-cam live streaming, roadshow logistics, crowd flow engineering, and administrative permit paperwork."
  },
  {
    id: 12,
    category: "services",
    categoryHi: "प्रेस एवं पीआर",
    categoryEn: "Press & PR",
    qHi: "क्या media management उपलब्ध है?",
    qEn: "Is professional press and media management provided?",
    aHi: "हाँ, हमारी समर्पित मीडिया डेस्क दैनिक प्रेस नोट लेखन, समाचार पत्रों और संवाददाताओं से समन्वय, प्रेस कॉन्फ्रेंस का आयोजन, डिजिटल न्यूज़ चैनल्स के इंटरव्यू और दैनिक मीडिया क्लिपिंग्स डॉसियर तैयार करती है।",
    aEn: "Yes, our media relations desk drafts standard journalistic press releases, liaises with regional bureau correspondents, organizes press conferences, secures digital channel interviews, and prepares daily press dossiers."
  },
  {
    id: 13,
    category: "services",
    categoryHi: "आउटडोर",
    categoryEn: "Outdoor Advertising",
    qHi: "क्या LED van और outdoor campaign services उपलब्ध हैं?",
    qEn: "Do you supply high-brightness LED video vans and sound vehicles?",
    aHi: "हाँ, हम 5500+ निट्स ब्राइटनेस वाली आउटडोर LED डिस्प्ले वैन, कस्टमाइज्ड चुनावी रथ, साउंड वैन और विधानसभा के प्रमुख चौराहों पर होर्डिंग्स की व्यवस्था करते हैं। सभी वाहन GPS ट्रैकिंग से लैस होते हैं।",
    aEn: "Yes, we deploy weatherproof P3/P4 daylight-visible LED vans, custom campaign raths, announcement sound vans, and strategic billboard networks, fully monitored via real-time GPS telematics."
  },
  {
    id: 14,
    category: "general",
    categoryHi: "अभियान प्रक्रिया",
    categoryEn: "Process & Setup",
    qHi: "Campaign शुरू करने के लिए क्या जानकारी चाहिए?",
    qEn: "What initial information is required to initiate campaign planning?",
    aHi: "प्रारंभिक योजना के लिए विधानसभा का नाम, उम्मीदवार की वर्तमान संगठनात्मक स्थिति, प्राथमिकता वाली प्रमुख सेवाएं, अनुमानित बजट दायरा और अभियान शुरू करने की लक्षित तिथि की जानकारी आवश्यक होती है।",
    aEn: "To initiate planning, we require the constituency name, current organizational footprint, prioritized services, intended operational timeline, and target campaign scale."
  },
  {
    id: 15,
    category: "general",
    categoryHi: "अभियान प्रक्रिया",
    categoryEn: "Process & Setup",
    qHi: "क्या services customized हो सकती हैं?",
    qEn: "Can campaign services be customized according to specific needs?",
    aHi: "बिल्कुल। उम्मीदवार अपनी आवश्यकतानुसार किसी एक सेवा (जैसे केवल सोशल मीडिया या केवल वॉर रूम) का चयन कर सकते हैं अथवा संपूर्ण 360-डिग्री विधानसभा अभियान प्रबंधन का एकीकृत पैकेज ले सकते हैं।",
    aEn: "Yes, completely. Candidates may select individual modular services (e.g., only Social Media Management or only War Room setup) or choose an integrated, turnkey 360-degree campaign solution."
  },
  {
    id: 16,
    category: "compliance",
    categoryHi: "नियम एवं सुरक्षा",
    categoryEn: "Compliance & Privacy",
    qHi: "Data privacy कैसे handle की जाती है?",
    qEn: "How do you protect campaign data privacy and confidentiality?",
    aHi: "हम भारत के डिजिटल पर्सनल डेटा प्रोटेक्शन (DPDP) अधिनियम और सख्त गोपनीयता अनुबंधों (NDAs) का पालन करते हैं। सभी रणनीतिक रिपोर्ट और डेटा एन्क्रिप्टेड क्लाउड पर सुरक्षित रहते हैं और किसी तीसरे पक्ष से साझा नहीं किए जाते।",
    aEn: "We strictly adhere to India's DPDP Act 2023 and binding non-disclosure agreements (NDAs). All strategy insights and operational data are housed on encrypted servers with strict role-based access."
  },
  {
    id: 17,
    category: "compliance",
    categoryHi: "नियम एवं सुरक्षा",
    categoryEn: "Compliance & Privacy",
    qHi: "क्या campaign services सभी चुनावी नियमों के अनुसार संचालित की जाती हैं?",
    qEn: "Are all campaign activities compliant with Election Commission rules?",
    aHi: "हाँ, हमारी सभी गतिविधियां भारत निर्वाचन आयोग (ECI) के दिशा-निर्देशों, आदर्श आचार संहिता (MCC), टेलीकॉम DLT नियमों और स्थानीय प्रशासन से प्राप्त वैध लिखित अनुमतियों के दायरे में ही संचालित की जाती हैं।",
    aEn: "Yes, all operations strictly comply with Election Commission of India (ECI) guidelines, Model Code of Conduct, TRAI/DLT mandates, and require formal local administrative permissions."
  },
  {
    id: 18,
    category: "general",
    categoryHi: "सामान्य प्रश्न",
    categoryEn: "General Inquiries",
    qHi: "Project pricing कैसे तय होती है?",
    qEn: "How is project pricing and financial engagement determined?",
    aHi: "प्रोजेक्ट का शुल्क चुनी गई सेवाओं, अभियान की अवधि, आवश्यक मैनपावर, कॉल सेंटर की क्षमता, फील्ड वाहनों की संख्या और तकनीकी इन्फ्रास्ट्रक्चर के आधार पर पारदर्शी रूप से तय किया जाता है।",
    aEn: "Engagement pricing is structured transparently based on selected service verticals, campaign duration, deployed team size, call center seats, vehicle fleet requirements, and technical infrastructure."
  },
  {
    id: 19,
    category: "general",
    categoryHi: "सामान्य प्रश्न",
    categoryEn: "General Inquiries",
    qHi: "क्या पूरी विधानसभा campaign management service ली जा सकती है?",
    qEn: "Can an integrated turnkey assembly constituency package be commissioned?",
    aHi: "हाँ, हम 'एक एजेंसी, संपूर्ण चुनावी अभियान' के तहत पूरी विधानसभा की 360-डिग्री जिम्मेदारी संभालते हैं, जिससे उम्मीदवार को अलग-अलग वेंडरों के चक्कर लगाने के बजाय एक ही प्रोफेशनल कमान मिलती है।",
    aEn: "Yes, under our 'One Agency — Complete Campaign' model, we handle turnkey end-to-end constituency operations, providing the candidate with unified command rather than fragmented vendors."
  },
  {
    id: 20,
    category: "general",
    categoryHi: "अभियान प्रक्रिया",
    categoryEn: "Process & Setup",
    qHi: "Consultation कैसे शुरू करें?",
    qEn: "How do we initiate an initial consultation with your strategic team?",
    aHi: "आप हमारी वेबसाइट पर 'अभियान पर चर्चा करें' फॉर्म भर सकते हैं या हमारे आधिकारिक नंबरों 9621762121 / 8467060042 पर सीधे कॉल या व्हाट्सएप कर सकते हैं। हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।",
    aEn: "You can submit the consultation request form on our website or directly call or WhatsApp our official helplines at 9621762121 or 8467060042. Our campaign directors will connect within 24 hours."
  }
];
