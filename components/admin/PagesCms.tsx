"use client";

import React, { useState } from "react";
import { PagesContent } from "@/lib/content-schema";
import {
  Save,
  Info,
  Layers,
  Workflow,
  Cpu,
  Sparkles,
  PhoneCall,
  Plus,
  Trash2,
  CheckCircle2,
  FileText
} from "lucide-react";

interface PagesCmsProps {
  pages: PagesContent;
  setPages: React.Dispatch<React.SetStateAction<PagesContent>>;
  saveSection: (section: string, data: any) => Promise<void>;
  saving: boolean;
}

export default function PagesCms({
  pages,
  setPages,
  saveSection,
  saving
}: PagesCmsProps) {
  const [activeSubTab, setActiveSubTab] = useState<string>("about");

  const subTabs = [
    { id: "about", label: "1. हमारे बारे में (About Us)", icon: Info },
    { id: "services", label: "2. सेवाएं डायरेक्टरी (Services)", icon: Layers },
    { id: "process", label: "3. कार्यप्रणाली (Process)", icon: Workflow },
    { id: "technology", label: "4. तकनीकी अवसंरचना (Tech)", icon: Cpu },
    { id: "solutions", label: "5. सॉल्यूशंस मॉडल (Solutions)", icon: Sparkles },
    { id: "contact", label: "6. संपर्क व वार रूम (Contact)", icon: PhoneCall },
  ];

  const updateAbout = (field: string, val: any) => {
    setPages((prev) => ({
      ...prev,
      about: { ...prev.about, [field]: val }
    }));
  };

  const updateServicesPage = (field: string, val: any) => {
    setPages((prev) => ({
      ...prev,
      servicesPage: { ...prev.servicesPage, [field]: val }
    }));
  };

  const updateProcess = (field: string, val: any) => {
    setPages((prev) => ({
      ...prev,
      process: { ...prev.process, [field]: val }
    }));
  };

  const updateTechnology = (field: string, val: any) => {
    setPages((prev) => ({
      ...prev,
      technology: { ...prev.technology, [field]: val }
    }));
  };

  const updateSolutions = (field: string, val: any) => {
    setPages((prev) => ({
      ...prev,
      solutions: { ...prev.solutions, [field]: val }
    }));
  };

  const updateContact = (field: string, val: any) => {
    setPages((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: val }
    }));
  };

  return (
    <div className="space-y-6 text-left">
      {/* Top Header with Instant Save */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-navy-900 border border-navy-800">
        <div>
          <h3 className="text-xl font-bold text-white font-hindi">अन्य पेजेस संपूर्ण कंटेंट प्रबंधन (Pages CMS)</h3>
          <p className="text-xs text-slate-400">वेबसाइट के सभी आंतरिक पेजों (About, Services, Process, Tech, Solutions, Contact) के हेडिंग, पैराग्राफ, मॉड्यूल और विवरण को लाइव अपडेट करें।</p>
        </div>
        <button
          type="button"
          disabled={saving}
          onClick={() => saveSection("pages", pages)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-accent-orange/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? "सुरक्षित हो रहा है..." : "सभी पेजेस सेव करें"}</span>
        </button>
      </div>

      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-navy-800 pb-3">
        {subTabs.map((st) => {
          const Icon = st.icon;
          const isActive = activeSubTab === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setActiveSubTab(st.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-accent-orange text-white shadow-lg shadow-accent-orange/20"
                  : "bg-navy-900/60 text-slate-400 hover:text-white hover:bg-navy-800 border border-navy-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{st.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 1. ABOUT US PAGE */}
      {/* ========================================================================= */}
      {activeSubTab === "about" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <h4 className="text-lg font-bold text-white font-hindi border-b border-navy-800 pb-3">
              पेज हेडर व प्रमुख संदेश (About Hero & Ethos)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  पेज मुख्य शीर्षक (Page Title)
                </label>
                <input
                  type="text"
                  value={pages.about?.title || ""}
                  onChange={(e) => updateAbout("title", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  उप-शीर्षक (Subtitle)
                </label>
                <input
                  type="text"
                  value={pages.about?.subtitle || ""}
                  onChange={(e) => updateAbout("subtitle", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                मुख्य परिचय पैराग्राफ (Lead Paragraph)
              </label>
              <textarea
                rows={3}
                value={pages.about?.lead || ""}
                onChange={(e) => updateAbout("lead", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  मिशन (Mission Statement)
                </label>
                <textarea
                  rows={3}
                  value={pages.about?.mission || ""}
                  onChange={(e) => updateAbout("mission", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  विज़न (Vision Statement)
                </label>
                <textarea
                  rows={3}
                  value={pages.about?.vision || ""}
                  onChange={(e) => updateAbout("vision", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  मेथोडोलॉजी हेडिंग (Methodology Heading)
                </label>
                <input
                  type="text"
                  value={pages.about?.methodologyHeading || ""}
                  onChange={(e) => updateAbout("methodologyHeading", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  मेथोडोलॉजी सबहेडिंग (Methodology Subtitle)
                </label>
                <input
                  type="text"
                  value={pages.about?.methodologySub || ""}
                  onChange={(e) => updateAbout("methodologySub", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>
            </div>
          </div>

          {/* Operational Stats */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <h4 className="text-lg font-bold text-white font-hindi">
                परिचालन आंकड़े (Operational Stats)
              </h4>
              <button
                type="button"
                onClick={() => {
                  const newStats = [...(pages.about?.stats || []), { number: "100%", label: "नया आंकड़ा" }];
                  updateAbout("stats", newStats);
                }}
                className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-accent-gold text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>आंकड़ा जोड़ें</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(pages.about?.stats || []).map((st, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-850 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">STAT #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const newStats = pages.about.stats.filter((_, i) => i !== idx);
                        updateAbout("stats", newStats);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">संख्या (Number)</label>
                    <input
                      type="text"
                      value={st.number}
                      onChange={(e) => {
                        const newStats = [...pages.about.stats];
                        newStats[idx].number = e.target.value;
                        updateAbout("stats", newStats);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-accent-gold font-mono font-bold text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">विवरण (Label)</label>
                    <input
                      type="text"
                      value={st.label}
                      onChange={(e) => {
                        const newStats = [...pages.about.stats];
                        newStats[idx].label = e.target.value;
                        updateAbout("stats", newStats);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <h4 className="text-lg font-bold text-white font-hindi">
                मूल मूल्य व प्रतिबद्धताएं (Core Values & Commitments)
              </h4>
              <button
                type="button"
                onClick={() => {
                  const newVals = [...(pages.about?.values || []), { title: "नया मूल्य", desc: "विवरण यहाँ लिखें..." }];
                  updateAbout("values", newVals);
                }}
                className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-accent-gold text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>प्रतिबद्धता जोड़ें</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(pages.about?.values || []).map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-850 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">VALUE #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const newVals = pages.about.values.filter((_, i) => i !== idx);
                        updateAbout("values", newVals);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">शीर्षक (Title)</label>
                    <input
                      type="text"
                      value={val.title}
                      onChange={(e) => {
                        const newVals = [...pages.about.values];
                        newVals[idx].title = e.target.value;
                        updateAbout("values", newVals);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white font-bold text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">विवरण (Description)</label>
                    <textarea
                      rows={2}
                      value={val.desc}
                      onChange={(e) => {
                        const newVals = [...pages.about.values];
                        newVals[idx].desc = e.target.value;
                        updateAbout("values", newVals);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 text-xs outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SERVICES DIRECTORY PAGE */}
      {/* ========================================================================= */}
      {activeSubTab === "services" && (
        <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
          <h4 className="text-lg font-bold text-white font-hindi border-b border-navy-800 pb-3">
            सेवाएं डायरेक्टरी हेडर व विवरण (Services Directory Content)
          </h4>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              पेज मुख्य हेडिंग (Heading)
            </label>
            <input
              type="text"
              value={pages.servicesPage?.heading || ""}
              onChange={(e) => updateServicesPage("heading", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              उप-शीर्षक (Subheading)
            </label>
            <input
              type="text"
              value={pages.servicesPage?.sub || ""}
              onChange={(e) => updateServicesPage("sub", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              डायरेक्टरी परिचय संदेश (Directory Introduction Note)
            </label>
            <textarea
              rows={3}
              value={pages.servicesPage?.directoryIntro || ""}
              onChange={(e) => updateServicesPage("directoryIntro", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
            />
          </div>
          <p className="text-xs text-slate-400">
            * 11 व्यक्तिगत सेवाओं के शीर्षक, टैग्स और क्षमताओं को संपादित करने के लिए &quot;होमपेज CMS &gt; 5. 11 चुनावी सेवाएं&quot; टैब का उपयोग करें।
          </p>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. PROCESS / METHODOLOGY PAGE */}
      {/* ========================================================================= */}
      {activeSubTab === "process" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <h4 className="text-lg font-bold text-white font-hindi border-b border-navy-800 pb-3">
              कार्यप्रणाली हेडर (Process Page Header)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  मुख्य शीर्षक (Heading)
                </label>
                <input
                  type="text"
                  value={pages.process?.heading || ""}
                  onChange={(e) => updateProcess("heading", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  उप-शीर्षक (Subheading)
                </label>
                <input
                  type="text"
                  value={pages.process?.sub || ""}
                  onChange={(e) => updateProcess("sub", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                परिचय पैराग्राफ (Lead Paragraph)
              </label>
              <textarea
                rows={2}
                value={pages.process?.lead || ""}
                onChange={(e) => updateProcess("lead", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>
          </div>

          {/* 7 Detailed Steps with Deliverables */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <h4 className="text-lg font-bold text-white font-hindi">
                विस्तृत 7 चरण व डिलीवरेबल्स (Detailed Steps & Deliverables)
              </h4>
              <button
                type="button"
                onClick={() => {
                  const newSteps = [
                    ...(pages.process?.detailedSteps || []),
                    {
                      number: String((pages.process?.detailedSteps?.length || 0) + 1).padStart(2, "0"),
                      titleHi: "नया चरण",
                      titleEn: "New Step",
                      descHi: "चरण विवरण हिंदी",
                      descEn: "Step description in English",
                      deliverables: ["डॉक्यूमेंट 1", "रिपोर्ट 2"]
                    }
                  ];
                  updateProcess("detailedSteps", newSteps);
                }}
                className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-accent-gold text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>चरण जोड़ें</span>
              </button>
            </div>

            <div className="space-y-4">
              {(pages.process?.detailedSteps || []).map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-850 space-y-3">
                  <div className="flex items-center justify-between border-b border-navy-900 pb-2">
                    <span className="text-xs font-mono text-accent-orange font-bold">
                      PHASE {step.number}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const newSteps = pages.process.detailedSteps.filter((_, i) => i !== idx);
                        updateProcess("detailedSteps", newSteps);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">नंबर (e.g. 01)</label>
                      <input
                        type="text"
                        value={step.number}
                        onChange={(e) => {
                          const newSteps = [...pages.process.detailedSteps];
                          newSteps[idx].number = e.target.value;
                          updateProcess("detailedSteps", newSteps);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white font-mono text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">शीर्षक हिंदी</label>
                      <input
                        type="text"
                        value={step.titleHi}
                        onChange={(e) => {
                          const newSteps = [...pages.process.detailedSteps];
                          newSteps[idx].titleHi = e.target.value;
                          updateProcess("detailedSteps", newSteps);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">शीर्षक अंग्रेजी</label>
                      <input
                        type="text"
                        value={step.titleEn}
                        onChange={(e) => {
                          const newSteps = [...pages.process.detailedSteps];
                          newSteps[idx].titleEn = e.target.value;
                          updateProcess("detailedSteps", newSteps);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">विवरण हिंदी</label>
                      <textarea
                        rows={2}
                        value={step.descHi}
                        onChange={(e) => {
                          const newSteps = [...pages.process.detailedSteps];
                          newSteps[idx].descHi = e.target.value;
                          updateProcess("detailedSteps", newSteps);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">विवरण अंग्रेजी</label>
                      <textarea
                        rows={2}
                        value={step.descEn}
                        onChange={(e) => {
                          const newSteps = [...pages.process.detailedSteps];
                          newSteps[idx].descEn = e.target.value;
                          updateProcess("detailedSteps", newSteps);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">
                      डिलीवरेबल्स (कॉमा से अलग करें)
                    </label>
                    <input
                      type="text"
                      value={(step.deliverables || []).join(", ")}
                      onChange={(e) => {
                        const newSteps = [...pages.process.detailedSteps];
                        newSteps[idx].deliverables = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        updateProcess("detailedSteps", newSteps);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-200 text-xs outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. TECHNOLOGY PAGE */}
      {/* ========================================================================= */}
      {activeSubTab === "technology" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <h4 className="text-lg font-bold text-white font-hindi border-b border-navy-800 pb-3">
              तकनीकी अवसंरचना हेडर व विवरण (Tech Infrastructure Content)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  पेज मुख्य हेडिंग
                </label>
                <input
                  type="text"
                  value={pages.technology?.heading || ""}
                  onChange={(e) => updateTechnology("heading", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  उप-शीर्षक (Subheading)
                </label>
                <input
                  type="text"
                  value={pages.technology?.sub || ""}
                  onChange={(e) => updateTechnology("sub", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                कानूनी/तकनीकी अस्वीकरण (Disclaimer)
              </label>
              <textarea
                rows={2}
                value={pages.technology?.disclaimer || ""}
                onChange={(e) => updateTechnology("disclaimer", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  क्लाउड विवरण (Cloud Architecture)
                </label>
                <textarea
                  rows={3}
                  value={pages.technology?.cloudDesc || ""}
                  onChange={(e) => updateTechnology("cloudDesc", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-slate-300 text-xs focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  मोबाइल ऐप विवरण (Mobile App Architecture)
                </label>
                <textarea
                  rows={3}
                  value={pages.technology?.mobileAppDesc || ""}
                  onChange={(e) => updateTechnology("mobileAppDesc", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-slate-300 text-xs focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  सुरक्षा एवं एन्क्रिप्शन (Security Architecture)
                </label>
                <textarea
                  rows={3}
                  value={pages.technology?.securityDesc || ""}
                  onChange={(e) => updateTechnology("securityDesc", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-slate-300 text-xs focus:border-accent-orange outline-none"
                />
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <h4 className="text-lg font-bold text-white font-hindi">
                तकनीकी फीचर्स सूची (Technology Features)
              </h4>
              <button
                type="button"
                onClick={() => {
                  const newFeats = [...(pages.technology?.features || []), { title: "नया फीचर", desc: "फीचर विवरण" }];
                  updateTechnology("features", newFeats);
                }}
                className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-accent-gold text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>फीचर जोड़ें</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(pages.technology?.features || []).map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-850 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">FEATURE #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const newFeats = pages.technology.features.filter((_, i) => i !== idx);
                        updateTechnology("features", newFeats);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">फीचर नाम</label>
                    <input
                      type="text"
                      value={feat.title}
                      onChange={(e) => {
                        const newFeats = [...pages.technology.features];
                        newFeats[idx].title = e.target.value;
                        updateTechnology("features", newFeats);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white font-bold text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">विवरण</label>
                    <textarea
                      rows={2}
                      value={feat.desc}
                      onChange={(e) => {
                        const newFeats = [...pages.technology.features];
                        newFeats[idx].desc = e.target.value;
                        updateTechnology("features", newFeats);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 text-xs outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. SOLUTIONS PAGE */}
      {/* ========================================================================= */}
      {activeSubTab === "solutions" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <h4 className="text-lg font-bold text-white font-hindi border-b border-navy-800 pb-3">
              सॉल्यूशंस हेडर व मॉडल (Solutions & Case Frameworks)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  मुख्य हेडिंग
                </label>
                <input
                  type="text"
                  value={pages.solutions?.heading || ""}
                  onChange={(e) => updateSolutions("heading", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  उप-शीर्षक (Subheading)
                </label>
                <input
                  type="text"
                  value={pages.solutions?.sub || ""}
                  onChange={(e) => updateSolutions("sub", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                अस्वीकरण (Disclaimer)
              </label>
              <textarea
                rows={2}
                value={pages.solutions?.disclaimer || ""}
                onChange={(e) => updateSolutions("disclaimer", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>
          </div>

          {/* Modules List */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <h4 className="text-lg font-bold text-white font-hindi">
                अभियान समाधान मॉडल्स (Campaign Solution Modules)
              </h4>
              <button
                type="button"
                onClick={() => {
                  const newMods = [
                    ...(pages.solutions?.modules || []),
                    {
                      id: `mod-${Date.now()}`,
                      title: "नया अभियान पैकेज",
                      category: "Custom Blueprint",
                      scope: "पैकेज कार्यक्षेत्र का विवरण",
                      targetAudience: "लक्षित उम्मीदवार",
                      outcome: "अपेक्षित परिणाम"
                    }
                  ];
                  updateSolutions("modules", newMods);
                }}
                className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-accent-gold text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>मॉड्यूल जोड़ें</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(pages.solutions?.modules || []).map((mod, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-850 space-y-3">
                  <div className="flex items-center justify-between border-b border-navy-900 pb-2">
                    <span className="text-xs font-mono text-accent-orange font-bold">
                      MODULE #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const newMods = pages.solutions.modules.filter((_, i) => i !== idx);
                        updateSolutions("modules", newMods);
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">पैकेज नाम</label>
                      <input
                        type="text"
                        value={mod.title}
                        onChange={(e) => {
                          const newMods = [...pages.solutions.modules];
                          newMods[idx].title = e.target.value;
                          updateSolutions("modules", newMods);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-white font-bold text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">श्रेणी (Category)</label>
                      <input
                        type="text"
                        value={mod.category}
                        onChange={(e) => {
                          const newMods = [...pages.solutions.modules];
                          newMods[idx].category = e.target.value;
                          updateSolutions("modules", newMods);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-accent-gold font-mono text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">कार्यक्षेत्र (Scope)</label>
                    <textarea
                      rows={2}
                      value={mod.scope}
                      onChange={(e) => {
                        const newMods = [...pages.solutions.modules];
                        newMods[idx].scope = e.target.value;
                        updateSolutions("modules", newMods);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 text-xs outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">लक्षित संगठन</label>
                      <input
                        type="text"
                        value={mod.targetAudience}
                        onChange={(e) => {
                          const newMods = [...pages.solutions.modules];
                          newMods[idx].targetAudience = e.target.value;
                          updateSolutions("modules", newMods);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-200 text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">अपेक्षित परिणाम</label>
                      <input
                        type="text"
                        value={mod.outcome}
                        onChange={(e) => {
                          const newMods = [...pages.solutions.modules];
                          newMods[idx].outcome = e.target.value;
                          updateSolutions("modules", newMods);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-emerald-400 text-xs outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. CONTACT PAGE */}
      {/* ========================================================================= */}
      {activeSubTab === "contact" && (
        <div className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
          <h4 className="text-lg font-bold text-white font-hindi border-b border-navy-800 pb-3">
            संपर्क पेज हेडर, फॉर्म व वॉर रूम डेस्क (Contact Page & War Room Desk Content)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                पेज मुख्य हेडिंग (Heading)
              </label>
              <input
                type="text"
                value={pages.contact?.heading || ""}
                onChange={(e) => updateContact("heading", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                उप-शीर्षक (Subheading)
              </label>
              <input
                type="text"
                value={pages.contact?.sub || ""}
                onChange={(e) => updateContact("sub", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              डेटा गोपनीयता गारंटी संदेश (Confidentiality Assurance)
            </label>
            <textarea
              rows={2}
              value={pages.contact?.confidentiality || ""}
              onChange={(e) => updateContact("confidentiality", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                फॉर्म शीर्षक (Form Title)
              </label>
              <input
                type="text"
                value={pages.contact?.formTitle || ""}
                onChange={(e) => updateContact("formTitle", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                फॉर्म उप-शीर्षक (Form Subtitle)
              </label>
              <input
                type="text"
                value={pages.contact?.formSub || ""}
                onChange={(e) => updateContact("formSub", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                सीधे डेस्क शीर्षक (Direct Desk Title)
              </label>
              <input
                type="text"
                value={pages.contact?.directDeskTitle || ""}
                onChange={(e) => updateContact("directDeskTitle", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                सीधे डेस्क उप-शीर्षक (Direct Desk Subtitle)
              </label>
              <input
                type="text"
                value={pages.contact?.directDeskSub || ""}
                onChange={(e) => updateContact("directDeskSub", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:border-accent-orange outline-none"
              />
            </div>
          </div>
          <p className="text-xs text-slate-400">
            * हेल्पलाइन्स, व्हाट्सएप नंबर, ईमेल और पते संपादित करने के लिए &quot;फोन, व्हाट्सएप व सोशल&quot; और &quot;हेडर, लोगो व मेनू&quot; टैब का उपयोग करें।
          </p>
        </div>
      )}
    </div>
  );
}
