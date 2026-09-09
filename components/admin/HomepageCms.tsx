"use client";

import React, { useState } from "react";
import { HomepageContent } from "@/lib/content-schema";
import {
  Save,
  Layers,
  Sparkles,
  Users,
  Database,
  Radio,
  Workflow,
  Shield,
  MapPin,
  Award,
  Cpu,
  ShieldAlert,
  Scale,
  PhoneCall,
  CheckCircle2,
  Plus,
  Trash2
} from "lucide-react";

interface HomepageCmsProps {
  homepage: HomepageContent;
  setHomepage: React.Dispatch<React.SetStateAction<HomepageContent>>;
  saveSection: (section: string, data: any) => Promise<void>;
  saving: boolean;
}

export default function HomepageCms({
  homepage,
  setHomepage,
  saveSection,
  saving
}: HomepageCmsProps) {
  const [activeSubTab, setActiveSubTab] = useState<string>("hero");

  const subTabs = [
    { id: "hero", label: "1. हीरो व टैगलाइन", icon: Sparkles },
    { id: "telemetry", label: "2. लाइव टेलीमेट्री", icon: Radio },
    { id: "trust", label: "3. ट्रस्ट स्ट्रिप (6 आंकड़े)", icon: Award },
    { id: "about", label: "4. अबाउट टीज़र व कार्ड्स", icon: Shield },
    { id: "services", label: "5. 11 चुनावी सेवाएं", icon: Layers },
    { id: "pillars", label: "6. 7 मजबूत स्तंभ", icon: Workflow },
    { id: "process", label: "7. 7-स्टेप कार्यप्रणाली", icon: Workflow },
    { id: "command", label: "8. कमांड सेंटर मैट्रिक्स", icon: ShieldAlert },
    { id: "map", label: "9. यूपी रणनीतिक मैप", icon: MapPin },
    { id: "why", label: "10. वर्कफोर्स क्यों चुनें", icon: Award },
    { id: "team", label: "11. 1000+ टीम विंग्स", icon: Users },
    { id: "tech", label: "12. टेक अवसंरचना", icon: Cpu },
    { id: "solutions", label: "13. सॉल्यूशंस मॉडल", icon: Sparkles },
    { id: "compliance", label: "14. विधिक अनुपालन", icon: Scale },
    { id: "finalCta", label: "15. फ़ाइनल बैनर", icon: PhoneCall },
  ];

  return (
    <div className="space-y-6 text-left">
      {/* Top Header with Instant Save */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-navy-900 border border-navy-800">
        <div>
          <h3 className="text-xl font-bold text-white font-hindi">होमपेज संपूर्ण कंटेंट प्रबंधन (Homepage Full CMS)</h3>
          <p className="text-xs text-slate-400">होमपेज के प्रत्येक अनुभाग, हेडिंग, कार्ड, आंकड़े और टिकर को यहाँ से लाइव संपादित करें।</p>
        </div>
        <button
          type="button"
          disabled={saving}
          onClick={() => saveSection("homepage", homepage)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-accent-orange/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? "सहेजा जा रहा है..." : "होमपेज के परिवर्तन सहेजें (Save)"}</span>
        </button>
      </div>

      {/* Sub-Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? "bg-accent-orange text-white border-accent-orange shadow-lg shadow-accent-orange/20"
                  : "bg-navy-900 text-slate-300 border-navy-800 hover:bg-navy-850 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* =======================================================
          1. HERO & TAGLINE
          ======================================================= */}
      {activeSubTab === "hero" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-5">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">1. होमपेज हीरो एवं मुख्य टैगलाइन</h4>
            <p className="text-xs text-slate-400">वेबसाइट का मुख्य शीर्षक, उप-विवरण, पंचलाइन और बटन।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">शीर्ष बैज (Eyebrow Badge)</label>
              <input
                type="text"
                value={homepage.hero.eyebrow}
                onChange={(e) => setHomepage({
                  ...homepage,
                  hero: { ...homepage.hero, eyebrow: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white focus:border-accent-orange outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">मुख्य शीर्षक पंक्ति 1 (Title 1)</label>
              <input
                type="text"
                value={homepage.hero.title1}
                onChange={(e) => setHomepage({
                  ...homepage,
                  hero: { ...homepage.hero, title1: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white focus:border-accent-orange outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">मुख्य शीर्षक पंक्ति 2 (Title 2)</label>
              <input
                type="text"
                value={homepage.hero.title2}
                onChange={(e) => setHomepage({
                  ...homepage,
                  hero: { ...homepage.hero, title2: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white focus:border-accent-orange outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">उप-शीर्षक विवरणी (Subtitle)</label>
            <textarea
              rows={2}
              value={homepage.hero.subtitle}
              onChange={(e) => setHomepage({
                ...homepage,
                hero: { ...homepage.hero, subtitle: e.target.value }
              })}
              className="w-full p-3 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white focus:border-accent-orange outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-accent-orange mb-1.5">मुख्य पंचलाइन / टैगलाइन (Primary Tagline)</label>
            <input
              type="text"
              value={homepage.hero.tagline}
              onChange={(e) => setHomepage({
                ...homepage,
                hero: { ...homepage.hero, tagline: e.target.value }
              })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-accent-orange/50 text-sm font-bold text-accent-gold focus:border-accent-orange outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">प्राथमिक CTA बटन टेक्स्ट</label>
              <input
                type="text"
                value={homepage.hero.primaryCta}
                onChange={(e) => setHomepage({
                  ...homepage,
                  hero: { ...homepage.hero, primaryCta: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">द्वितीयक बटन टेक्स्ट (Services)</label>
              <input
                type="text"
                value={homepage.hero.secondaryCta}
                onChange={(e) => setHomepage({
                  ...homepage,
                  hero: { ...homepage.hero, secondaryCta: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">टीम आकार बैज (Team Size Badge)</label>
              <input
                type="text"
                value={homepage.hero.teamBadge}
                onChange={(e) => setHomepage({
                  ...homepage,
                  hero: { ...homepage.hero, teamBadge: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          2. TELEMETRY & LIVE TICKERS
          ======================================================= */}
      {activeSubTab === "telemetry" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-5">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">2. लाइव वॉर रूम टेलीमेट्री एवं टिकर</h4>
            <p className="text-xs text-slate-400">होमपेज पर दाईं ओर प्रदर्शित होने वाले 4 प्रमुख अभियान सूचकांक व लाइव टिकर।</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">विधानसभा कवरेज %</label>
              <input
                type="text"
                value={homepage.telemetry.coveragePercent}
                onChange={(e) => setHomepage({
                  ...homepage,
                  telemetry: { ...homepage.telemetry, coveragePercent: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">कुल बूथ संख्या</label>
              <input
                type="text"
                value={homepage.telemetry.totalBooths}
                onChange={(e) => setHomepage({
                  ...homepage,
                  telemetry: { ...homepage.telemetry, totalBooths: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">सक्रिय फील्ड टीमें</label>
              <input
                type="text"
                value={homepage.telemetry.activeFieldTeams}
                onChange={(e) => setHomepage({
                  ...homepage,
                  telemetry: { ...homepage.telemetry, activeFieldTeams: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">लॉग्ड गतिविधियां</label>
              <input
                type="text"
                value={homepage.telemetry.loggedActivities}
                onChange={(e) => setHomepage({
                  ...homepage,
                  telemetry: { ...homepage.telemetry, loggedActivities: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-mono"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="block text-xs font-semibold text-slate-300">लाइव टेलीमेट्री टिकर इवेंट्स (Live Ticker Messages)</label>
            {homepage.telemetry.tickerEvents.map((ev, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs font-mono text-accent-gold px-2 py-1 rounded bg-navy-950 border border-navy-800">#{idx + 1}</span>
                <input
                  type="text"
                  value={ev}
                  onChange={(e) => {
                    const updated = [...homepage.telemetry.tickerEvents];
                    updated[idx] = e.target.value;
                    setHomepage({
                      ...homepage,
                      telemetry: { ...homepage.telemetry, tickerEvents: updated }
                    });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-xs text-slate-200"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          3. TRUST STRIP (6 CARDS)
          ======================================================= */}
      {activeSubTab === "trust" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-5">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">3. ट्रस्ट स्ट्रिप (6 प्रमुख आंकड़े / बैज)</h4>
            <p className="text-xs text-slate-400">हीरो के ठीक नीचे प्रदर्शित होने वाले 6 ट्रस्ट बैज (संख्या, शीर्षक, विवरण)।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {homepage.trustStrip.items.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent-orange">कार्ड #{idx + 1}</span>
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">संख्या / मुख्य शब्द (Stat)</label>
                  <input
                    type="text"
                    value={item.stat}
                    onChange={(e) => {
                      const updated = [...homepage.trustStrip.items];
                      updated[idx] = { ...updated[idx], stat: e.target.value };
                      setHomepage({ ...homepage, trustStrip: { items: updated } });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-sm text-white font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">शीर्षक (Label Hindi)</label>
                  <input
                    type="text"
                    value={item.labelHi}
                    onChange={(e) => {
                      const updated = [...homepage.trustStrip.items];
                      updated[idx] = { ...updated[idx], labelHi: e.target.value };
                      setHomepage({ ...homepage, trustStrip: { items: updated } });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">छोटा विवरण (Desc Hindi)</label>
                  <input
                    type="text"
                    value={item.descHi}
                    onChange={(e) => {
                      const updated = [...homepage.trustStrip.items];
                      updated[idx] = { ...updated[idx], descHi: e.target.value };
                      setHomepage({ ...homepage, trustStrip: { items: updated } });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          4. ABOUT TEASER & 3 PILLAR CARDS
          ======================================================= */}
      {activeSubTab === "about" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-5">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">4. अबाउट टीज़र एवं 3 पिलर कार्ड्स</h4>
            <p className="text-xs text-slate-400">"चुनाव अभियान केवल प्रचार नहीं..." अनुभाग और 3 मुख्य पिलर कार्ड्स।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">बैज टेक्स्ट</label>
              <input
                type="text"
                value={homepage.aboutTeaser.badgeHi}
                onChange={(e) => setHomepage({
                  ...homepage,
                  aboutTeaser: { ...homepage.aboutTeaser, badgeHi: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">हेडिंग भाग 1</label>
              <input
                type="text"
                value={homepage.aboutTeaser.heading1}
                onChange={(e) => setHomepage({
                  ...homepage,
                  aboutTeaser: { ...homepage.aboutTeaser, heading1: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">हेडिंग भाग 2 (ऑरेंज)</label>
              <input
                type="text"
                value={homepage.aboutTeaser.heading2}
                onChange={(e) => setHomepage({
                  ...homepage,
                  aboutTeaser: { ...homepage.aboutTeaser, heading2: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-accent-orange font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">पैराग्राफ 1</label>
              <textarea
                rows={3}
                value={homepage.aboutTeaser.p1}
                onChange={(e) => setHomepage({
                  ...homepage,
                  aboutTeaser: { ...homepage.aboutTeaser, p1: e.target.value }
                })}
                className="w-full p-3 rounded-xl bg-navy-950 border border-navy-700 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">पैराग्राफ 2</label>
              <textarea
                rows={3}
                value={homepage.aboutTeaser.p2}
                onChange={(e) => setHomepage({
                  ...homepage,
                  aboutTeaser: { ...homepage.aboutTeaser, p2: e.target.value }
                })}
                className="w-full p-3 rounded-xl bg-navy-950 border border-navy-700 text-xs text-white"
              />
            </div>
          </div>

          {/* Left Highlight Box */}
          <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-3">
            <span className="text-xs font-mono font-bold text-accent-orange">बाईं ओर का हाईलाइट बॉक्स (Integrated Architecture)</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">हाईलाइट शीर्षक</label>
                <input
                  type="text"
                  value={homepage.aboutTeaser.highlightTitle}
                  onChange={(e) => setHomepage({
                    ...homepage,
                    aboutTeaser: { ...homepage.aboutTeaser, highlightTitle: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-navy-700 text-sm text-white font-bold"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">हाईलाइट उप-शीर्षक (गोल्ड)</label>
                <input
                  type="text"
                  value={homepage.aboutTeaser.highlightSub}
                  onChange={(e) => setHomepage({
                    ...homepage,
                    aboutTeaser: { ...homepage.aboutTeaser, highlightSub: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-navy-900 border border-navy-700 text-sm text-accent-gold"
                />
              </div>
            </div>
          </div>

          {/* 3 Pillar Cards */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono font-bold text-slate-300">दाईं ओर के 3 पिलर कार्ड्स</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {homepage.aboutTeaser.cards.map((card, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-2">
                  <span className="text-[11px] font-mono text-accent-gold block">कार्ड #{idx + 1}</span>
                  <input
                    type="text"
                    value={card.tag}
                    placeholder="टैग (उदा: डेटा व रिसर्च)"
                    onChange={(e) => {
                      const updated = [...homepage.aboutTeaser.cards];
                      updated[idx] = { ...updated[idx], tag: e.target.value };
                      setHomepage({ ...homepage, aboutTeaser: { ...homepage.aboutTeaser, cards: updated } });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-accent-orange font-bold"
                  />
                  <input
                    type="text"
                    value={card.title}
                    placeholder="कार्ड का शीर्षक"
                    onChange={(e) => {
                      const updated = [...homepage.aboutTeaser.cards];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setHomepage({ ...homepage, aboutTeaser: { ...homepage.aboutTeaser, cards: updated } });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={card.desc}
                    placeholder="कार्ड विवरण..."
                    onChange={(e) => {
                      const updated = [...homepage.aboutTeaser.cards];
                      updated[idx] = { ...updated[idx], desc: e.target.value };
                      setHomepage({ ...homepage, aboutTeaser: { ...homepage.aboutTeaser, cards: updated } });
                    }}
                    className="w-full p-2.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          5. 11 SERVICES GRID SECTION
          ======================================================= */}
      {activeSubTab === "services" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">5. सभी 11 चुनावी सेवाएं (11 Services Section)</h4>
            <p className="text-xs text-slate-400">होमपेज पर प्रदर्शित होने वाले 11 सेवा कार्ड्स के शीर्षक, टैग और विवरण संपादित करें।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सेक्शन बैज</label>
              <input
                type="text"
                value={homepage.servicesSection.badgeHi}
                onChange={(e) => setHomepage({
                  ...homepage,
                  servicesSection: { ...homepage.servicesSection, badgeHi: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.servicesSection.headingHi}
                onChange={(e) => setHomepage({
                  ...homepage,
                  servicesSection: { ...homepage.servicesSection, headingHi: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">उप-विवरण (Subtitle)</label>
              <input
                type="text"
                value={homepage.servicesSection.subHi}
                onChange={(e) => setHomepage({
                  ...homepage,
                  servicesSection: { ...homepage.servicesSection, subHi: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>

          {/* 11 Services List */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-mono font-bold text-slate-300 block">प्रत्येक सेवा का विवरण संपादित करें (11 Services):</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {homepage.servicesSection.services.map((srv, idx) => (
                <div key={srv.id} className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-navy-850 pb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-navy-900 text-accent-gold border border-navy-800">
                      #{srv.id}
                    </span>
                    <input
                      type="text"
                      value={srv.tagHi}
                      placeholder="टैग (उदा: डिजिटल नैरेटिव)"
                      onChange={(e) => {
                        const updated = [...homepage.servicesSection.services];
                        updated[idx] = { ...updated[idx], tagHi: e.target.value };
                        setHomepage({ ...homepage, servicesSection: { ...homepage.servicesSection, services: updated } });
                      }}
                      className="text-[11px] px-2 py-1 rounded bg-navy-900 border border-navy-700 text-accent-orange font-semibold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">सेवा का नाम (हिन्दी)</label>
                    <input
                      type="text"
                      value={srv.titleHi}
                      onChange={(e) => {
                        const updated = [...homepage.servicesSection.services];
                        updated[idx] = { ...updated[idx], titleHi: e.target.value };
                        setHomepage({ ...homepage, servicesSection: { ...homepage.servicesSection, services: updated } });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">संक्षिप्त विवरण (Short Description)</label>
                    <textarea
                      rows={2}
                      value={srv.shortDescHi}
                      onChange={(e) => {
                        const updated = [...homepage.servicesSection.services];
                        updated[idx] = { ...updated[idx], shortDescHi: e.target.value };
                        setHomepage({ ...homepage, servicesSection: { ...homepage.servicesSection, services: updated } });
                      }}
                      className="w-full p-2.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          6. ONE AGENCY 7 PILLARS
          ======================================================= */}
      {activeSubTab === "pillars" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">6. 7 मजबूत स्तंभ (One Agency 7 Pillars)</h4>
            <p className="text-xs text-slate-400">"एक एजेंसी। संपूर्ण चुनावी अभियान।" के 7 स्तंभ।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">शीर्षक 1</label>
              <input
                type="text"
                value={homepage.oneAgency.title1}
                onChange={(e) => setHomepage({
                  ...homepage,
                  oneAgency: { ...homepage.oneAgency, title1: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">शीर्षक 2 (ऑरेंज)</label>
              <input
                type="text"
                value={homepage.oneAgency.title2}
                onChange={(e) => setHomepage({
                  ...homepage,
                  oneAgency: { ...homepage.oneAgency, title2: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-accent-orange font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">उप-विवरण (Sub)</label>
              <input
                type="text"
                value={homepage.oneAgency.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  oneAgency: { ...homepage.oneAgency, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {homepage.oneAgency.pillars.map((pil, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 space-y-2">
                <span className="text-[11px] font-mono font-bold text-accent-gold block">स्तंभ #{idx + 1} ({pil.name})</span>
                <input
                  type="text"
                  value={pil.nameHi}
                  placeholder="स्तंभ नाम हिन्दी"
                  onChange={(e) => {
                    const updated = [...homepage.oneAgency.pillars];
                    updated[idx] = { ...updated[idx], nameHi: e.target.value };
                    setHomepage({ ...homepage, oneAgency: { ...homepage.oneAgency, pillars: updated } });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  value={pil.desc}
                  placeholder="विवरण"
                  onChange={(e) => {
                    const updated = [...homepage.oneAgency.pillars];
                    updated[idx] = { ...updated[idx], desc: e.target.value };
                    setHomepage({ ...homepage, oneAgency: { ...homepage.oneAgency, pillars: updated } });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          7. 7-STEP PROCESS ROADMAP
          ======================================================= */}
      {activeSubTab === "process" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">7. 7-चरण कार्यप्रणाली (7-Step Process)</h4>
            <p className="text-xs text-slate-400">होमपेज पर कार्यप्रणाली के 7 चरण (DATA, STRATEGY, CONTENT, आदि)।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.process.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  process: { ...homepage.process, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.process.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  process: { ...homepage.process, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {homepage.process.steps.map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-navy-900 text-accent-gold border border-navy-800">{step.num}</span>
                <input
                  type="text"
                  value={step.title}
                  placeholder="चरण का नाम"
                  onChange={(e) => {
                    const updated = [...homepage.process.steps];
                    updated[idx] = { ...updated[idx], title: e.target.value };
                    setHomepage({ ...homepage, process: { ...homepage.process, steps: updated } });
                  }}
                  className="w-full sm:w-44 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  value={step.desc}
                  placeholder="चरण विवरण"
                  onChange={(e) => {
                    const updated = [...homepage.process.steps];
                    updated[idx] = { ...updated[idx], desc: e.target.value };
                    setHomepage({ ...homepage, process: { ...homepage.process, steps: updated } });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          8. COMMAND CENTER MATRIX
          ======================================================= */}
      {activeSubTab === "command" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">8. कमांड सेंटर मैट्रिक्स (Command Center Preview)</h4>
            <p className="text-xs text-slate-400">"अभियान की हर गतिविधि पर नज़र।" अनुभाग का विवरण व मैट्रिक्स आंकड़े।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">शीर्षक (Heading)</label>
              <input
                type="text"
                value={homepage.commandCenter.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  commandCenter: { ...homepage.commandCenter, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">बैज टेक्स्ट</label>
              <input
                type="text"
                value={homepage.commandCenter.badgeHi}
                onChange={(e) => setHomepage({
                  ...homepage,
                  commandCenter: { ...homepage.commandCenter, badgeHi: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">विवरण पैराग्राफ</label>
            <textarea
              rows={2}
              value={homepage.commandCenter.desc}
              onChange={(e) => setHomepage({
                ...homepage,
                commandCenter: { ...homepage.commandCenter, desc: e.target.value }
              })}
              className="w-full p-3 rounded-xl bg-navy-950 border border-navy-700 text-xs text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block">3 प्रमुख बुलेट्स</label>
            <input
              type="text"
              value={homepage.commandCenter.bullet1}
              onChange={(e) => setHomepage({
                ...homepage,
                commandCenter: { ...homepage.commandCenter, bullet1: e.target.value }
              })}
              className="w-full px-3.5 py-2 rounded-lg bg-navy-950 border border-navy-700 text-xs text-slate-200 mb-1"
            />
            <input
              type="text"
              value={homepage.commandCenter.bullet2}
              onChange={(e) => setHomepage({
                ...homepage,
                commandCenter: { ...homepage.commandCenter, bullet2: e.target.value }
              })}
              className="w-full px-3.5 py-2 rounded-lg bg-navy-950 border border-navy-700 text-xs text-slate-200 mb-1"
            />
            <input
              type="text"
              value={homepage.commandCenter.bullet3}
              onChange={(e) => setHomepage({
                ...homepage,
                commandCenter: { ...homepage.commandCenter, bullet3: e.target.value }
              })}
              className="w-full px-3.5 py-2 rounded-lg bg-navy-950 border border-navy-700 text-xs text-slate-200"
            />
          </div>
        </div>
      )}

      {/* =======================================================
          9. INTERACTIVE UP STRATEGIC MAP
          ======================================================= */}
      {activeSubTab === "map" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">9. यूपी रणनीतिक मैप (Interactive UP Strategic Map)</h4>
            <p className="text-xs text-slate-400">403 विधानसभाओं की भौगोलिक कवरेज और पांचों क्षेत्रों (पूर्वांचल, अवध, पश्चिमी यूपी, आदि) की जानकारी।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.interactiveMap.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  interactiveMap: { ...homepage.interactiveMap, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.interactiveMap.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  interactiveMap: { ...homepage.interactiveMap, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          10. WHY CHOOSE WORKFORCE (8 CARDS)
          ======================================================= */}
      {activeSubTab === "why" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">10. वर्कफोर्स क्यों चुनें (8 Advantage Cards)</h4>
            <p className="text-xs text-slate-400">हेडिंग, सबटाइटल और आठों रणनीतिक लाभ कार्ड्स।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.whyChooseUs.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  whyChooseUs: { ...homepage.whyChooseUs, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.whyChooseUs.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  whyChooseUs: { ...homepage.whyChooseUs, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {homepage.whyChooseUs.cards.map((card, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 space-y-2">
                <span className="text-[11px] font-mono text-accent-gold block">कार्ड #{idx + 1}</span>
                <input
                  type="text"
                  value={card.title}
                  placeholder="कार्ड शीर्षक"
                  onChange={(e) => {
                    const updated = [...homepage.whyChooseUs.cards];
                    updated[idx] = { ...updated[idx], title: e.target.value };
                    setHomepage({ ...homepage, whyChooseUs: { ...homepage.whyChooseUs, cards: updated } });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={card.desc}
                  placeholder="विवरण..."
                  onChange={(e) => {
                    const updated = [...homepage.whyChooseUs.cards];
                    updated[idx] = { ...updated[idx], desc: e.target.value };
                    setHomepage({ ...homepage, whyChooseUs: { ...homepage.whyChooseUs, cards: updated } });
                  }}
                  className="w-full p-2.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          11. 1000+ TEAM SECTION
          ======================================================= */}
      {activeSubTab === "team" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">11. 1000+ प्रोफेशनल्स टीम (Team Section)</h4>
            <p className="text-xs text-slate-400">टीम की क्षमता, विशेषज्ञता और 4 प्रमुख संगठनात्मक विंग्स।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.teamSection.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  teamSection: { ...homepage.teamSection, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.teamSection.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  teamSection: { ...homepage.teamSection, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">प्रूफ बैज (1000+ Team)</label>
              <input
                type="text"
                value={homepage.teamSection.proofBadge}
                onChange={(e) => setHomepage({
                  ...homepage,
                  teamSection: { ...homepage.teamSection, proofBadge: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-accent-gold font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {homepage.teamSection.categories.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent-gold">विंग #{idx + 1}</span>
                  <input
                    type="text"
                    value={cat.size}
                    placeholder="टीम आकार (उदा: 120+ विशेषज्ञ)"
                    onChange={(e) => {
                      const updated = [...homepage.teamSection.categories];
                      updated[idx] = { ...updated[idx], size: e.target.value };
                      setHomepage({ ...homepage, teamSection: { ...homepage.teamSection, categories: updated } });
                    }}
                    className="text-[11px] px-2 py-1 rounded bg-navy-900 border border-navy-700 text-emerald-400 font-mono"
                  />
                </div>
                <input
                  type="text"
                  value={cat.title}
                  placeholder="विंग का नाम"
                  onChange={(e) => {
                    const updated = [...homepage.teamSection.categories];
                    updated[idx] = { ...updated[idx], title: e.target.value };
                    setHomepage({ ...homepage, teamSection: { ...homepage.teamSection, categories: updated } });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={cat.desc}
                  placeholder="विवरण..."
                  onChange={(e) => {
                    const updated = [...homepage.teamSection.categories];
                    updated[idx] = { ...updated[idx], desc: e.target.value };
                    setHomepage({ ...homepage, teamSection: { ...homepage.teamSection, categories: updated } });
                  }}
                  className="w-full p-2.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          12. TECH STACK INFRASTRUCTURE
          ======================================================= */}
      {activeSubTab === "tech" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">12. तकनीकी अवसंरचना (Technology Stack)</h4>
            <p className="text-xs text-slate-400">तकनीकी प्लेटफॉर्म, क्लाउड सिस्टम और मोबाइल ऐप्स का विवरण।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.techSection.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  techSection: { ...homepage.techSection, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.techSection.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  techSection: { ...homepage.techSection, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">अनुपालन अस्वीकरण (ECI Disclaimer)</label>
            <input
              type="text"
              value={homepage.techSection.disclaimer}
              onChange={(e) => setHomepage({
                ...homepage,
                techSection: { ...homepage.techSection, disclaimer: e.target.value }
              })}
              className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-xs text-slate-400"
            />
          </div>
        </div>
      )}

      {/* =======================================================
          13. SOLUTION SHOWCASE (6 CONCEPTS)
          ======================================================= */}
      {activeSubTab === "solutions" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">13. चुनावी सॉल्यूशंस (Solution Showcase)</h4>
            <p className="text-xs text-slate-400">उम्मीदवारों के लिए 6 अवधारणात्मक समाधान पैकेज।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.solutionShowcase.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  solutionShowcase: { ...homepage.solutionShowcase, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.solutionShowcase.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  solutionShowcase: { ...homepage.solutionShowcase, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          14. STATUTORY & ETHICAL COMPLIANCE
          ======================================================= */}
      {activeSubTab === "compliance" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-6">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">14. विधिक एवं नैतिक अनुपालन (Compliance Section)</h4>
            <p className="text-xs text-slate-400">ECI आचार संहिता, TRAI/DLT और DPDP Act 2023 अनुपालन विवरणी।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य हेडिंग</label>
              <input
                type="text"
                value={homepage.compliance.heading}
                onChange={(e) => setHomepage({
                  ...homepage,
                  compliance: { ...homepage.compliance, heading: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सबटाइटल</label>
              <input
                type="text"
                value={homepage.compliance.sub}
                onChange={(e) => setHomepage({
                  ...homepage,
                  compliance: { ...homepage.compliance, sub: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">मुख्य विवरण</label>
            <textarea
              rows={2}
              value={homepage.compliance.desc}
              onChange={(e) => setHomepage({
                ...homepage,
                compliance: { ...homepage.compliance, desc: e.target.value }
              })}
              className="w-full p-3 rounded-xl bg-navy-950 border border-navy-700 text-xs text-white"
            />
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-slate-300 block">4 अनुपालन बुलेट पॉइंट्स</label>
            {homepage.compliance.points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 px-2 py-1 rounded bg-navy-950 border border-navy-800">#{idx + 1}</span>
                <input
                  type="text"
                  value={pt}
                  onChange={(e) => {
                    const updated = [...homepage.compliance.points];
                    updated[idx] = e.target.value;
                    setHomepage({ ...homepage, compliance: { ...homepage.compliance, points: updated } });
                  }}
                  className="w-full px-3.5 py-2 rounded-lg bg-navy-950 border border-navy-700 text-xs text-slate-200"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================
          15. FINAL CALL TO ACTION STRIP
          ======================================================= */}
      {activeSubTab === "finalCta" && (
        <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800 space-y-5">
          <div className="border-b border-navy-800 pb-3">
            <h4 className="text-base font-bold text-accent-gold font-hindi">15. फ़ाइनल कॉल-टू-एक्शन बैनर (Bottom High-Impact CTA)</h4>
            <p className="text-xs text-slate-400">फुटर से ठीक पहले का मुख्य रूपांतरण (Conversion) बैनर।</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">शीर्षक 1 (UP Assembly 2027)</label>
              <input
                type="text"
                value={homepage.finalCta.heading1}
                onChange={(e) => setHomepage({
                  ...homepage,
                  finalCta: { ...homepage.finalCta, heading1: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">शीर्षक 2 (विजयी अभियान...)</label>
              <input
                type="text"
                value={homepage.finalCta.heading2}
                onChange={(e) => setHomepage({
                  ...homepage,
                  finalCta: { ...homepage.finalCta, heading2: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-accent-gold font-bold"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">उप-विवरण</label>
            <input
              type="text"
              value={homepage.finalCta.sub}
              onChange={(e) => setHomepage({
                ...homepage,
                finalCta: { ...homepage.finalCta, sub: e.target.value }
              })}
              className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">प्राइमरी बटन टेक्स्ट</label>
              <input
                type="text"
                value={homepage.finalCta.button1}
                onChange={(e) => setHomepage({
                  ...homepage,
                  finalCta: { ...homepage.finalCta, button1: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">सेकेंडरी बटन टेक्स्ट (Call)</label>
              <input
                type="text"
                value={homepage.finalCta.button2}
                onChange={(e) => setHomepage({
                  ...homepage,
                  finalCta: { ...homepage.finalCta, button2: e.target.value }
                })}
                className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-sm text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Save Action */}
      <div className="flex items-center justify-end pt-4">
        <button
          type="button"
          disabled={saving}
          onClick={() => saveSection("homepage", homepage)}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-accent-orange/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? "सहेजा जा रहा है..." : "होमपेज के सभी परिवर्तन सुरक्षित करें"}</span>
        </button>
      </div>
    </div>
  );
}
