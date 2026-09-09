"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/context/ContentContext";
import { servicesData } from "@/data/servicesData";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  Shield,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Clock
} from "lucide-react";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const { settings, pages } = useContent();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    assembly: "",
    district: "",
    services: [] as string[],
    campaignRequirement: "",
    preferredTime: "किसी भी समय",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleServiceToggle = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceTitle);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceTitle) };
      } else {
        return { ...prev, services: [...prev.services, serviceTitle] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "त्रुटि: कृपया पुनः प्रयास करें।");
      }

      router.push("/thank-you");
    } catch (err: any) {
      setError(err.message || "सबमिट करने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 bg-navy-900 text-slate-100 overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 border-b border-navy-800 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
              <Link href="/" className="hover:text-accent-gold">HOME</Link>
              <span>/</span>
              <span className="text-accent-orange font-bold">CONTACT & CONSULTATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-hindi leading-tight">
              {language === "hi"
                ? (pages?.contact?.heading || "अपने चुनाव अभियान पर चर्चा करें।")
                : "Discuss Your Campaign Strategy."}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              {language === "hi"
                ? (pages?.contact?.sub || "अपने विधानसभा क्षेत्र, campaign requirements और आवश्यक सेवाओं की जानकारी साझा करें। हमारी वरिष्ठ रणनीति टीम आपकी आवश्यकता के अनुसार आगे की चर्चा करेगी।")
                : "Share your constituency focus and desired verticals. Our senior campaign directorship will arrange a private strategic consultation within 24 hours."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 lg:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-accent-orange tracking-wider uppercase">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-hindi">
                  {pages?.contact?.directDeskTitle || "आधिकारिक संपर्क सूत्र"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pages?.contact?.directDeskSub || "विधानसभा चुनाव 2027 के संदर्भ में किसी भी त्वरित परामर्श या वार रूम विजिट के लिए हमारे आधिकारिक नंबरों पर संपर्क करें।"}
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone 1 */}
                <div className="p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-sm flex items-start gap-4 hover:border-accent-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 flex items-center justify-center text-accent-orange flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">
                      {settings.phone1LabelHi || "हेल्पलाइन 1 (कॉल व व्हाट्सएप)"}
                    </span>
                    <a href={`tel:${settings.phone1 || "9621762121"}`} className="text-lg font-bold text-navy-950 dark:text-white hover:text-accent-orange font-mono block mt-0.5 transition-colors">
                      +91 {settings.phone1 || "9621762121"}
                    </a>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      {settings.phone1SubHi || "उपलब्ध 24/7 चुनावी सहायता"}
                    </span>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-sm flex items-start gap-4 hover:border-accent-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 flex items-center justify-center text-accent-gold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">
                      {settings.phone2LabelHi || "हेल्पलाइन 2"}
                    </span>
                    <a href={`tel:${settings.phone2 || "8467060042"}`} className="text-lg font-bold text-navy-950 dark:text-white hover:text-accent-orange font-mono block mt-0.5 transition-colors">
                      +91 {settings.phone2 || "8467060042"}
                    </a>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {settings.phone2SubHi || "वरिष्ठ रणनीतिकार डेस्क"}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-sm flex items-start gap-4 hover:border-accent-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 flex items-center justify-center text-sky-500 dark:text-sky-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">ईमेल संपर्क</span>
                    <a href={`mailto:${settings.email || "contact@workforceinfotech.com"}`} className="text-sm font-bold text-navy-950 dark:text-white hover:text-accent-orange block mt-0.5 transition-colors">
                      {settings.email || "contact@workforceinfotech.com"}
                    </a>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">आधिकारिक पत्राचार</span>
                  </div>
                </div>

                {/* Website */}
                <div className="p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-sm flex items-start gap-4 hover:border-accent-orange/50 transition">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 flex items-center justify-center text-emerald-500 dark:text-emerald-400 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">आधिकारिक वेबसाइट</span>
                    <a href={settings.website?.startsWith("http") ? settings.website : `https://${settings.website || "workforceinfotech.com"}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-navy-950 dark:text-white hover:text-accent-orange block mt-0.5 transition-colors">
                      {settings.website || "workforceinfotech.com"}
                    </a>
                  </div>
                </div>
              </div>

              {/* Strict Confidentiality Guarantee */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                <Shield className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <span>
                  साझा की गई सभी जानकारियां पूर्णतः गोपनीय रखी जाती हैं तथा किसी तीसरे पक्ष को कभी साझा नहीं की जाती हैं।
                </span>
              </div>
            </div>

            {/* Right Col: Comprehensive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-gradient-to-b from-navy-850 to-navy-950 border border-navy-700 p-6 sm:p-10 shadow-2xl text-left">
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white font-hindi">
                    {pages?.contact?.formTitle || t.forms.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {pages?.contact?.formSub || t.forms.sub}
                  </p>
                  {pages?.contact?.confidentiality && (
                    <div className="mt-3 p-3 rounded-xl bg-navy-900/90 border border-navy-800 text-xs text-slate-300 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{pages.contact.confidentiality}</span>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.forms.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="उदा. रणविजय सिंह"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange text-white text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.forms.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-अंकीय मोबाइल नंबर"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange text-white text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.forms.assembly}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.assembly}
                        onChange={(e) => setFormData({ ...formData, assembly: e.target.value })}
                        placeholder="उदा. 172 - अयोध्या या सदर"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange text-white text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.forms.district}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder="उदा. लखनऊ, वाराणसी, गोरखपुर..."
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange text-white text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.forms.servicesRequired} (एक या अधिक चुनें)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-44 overflow-y-auto pr-1">
                      {servicesData.map((s) => {
                        const isSelected = formData.services.includes(s.titleHi) || formData.services.includes(s.titleEn);
                        return (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => handleServiceToggle(language === "hi" ? s.titleHi : s.titleEn)}
                            className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-accent-orange/15 border-accent-orange text-accent-orange dark:text-accent-gold font-bold shadow-sm"
                                : "bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-700 dark:bg-navy-950 dark:border-navy-800 dark:text-slate-300 dark:hover:border-slate-500"
                            }`}
                          >
                            <span className="truncate block">{language === "hi" ? s.titleHi : s.titleEn}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.forms.email}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange text-white text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.forms.preferredTime}
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange text-white text-sm outline-none transition"
                      >
                        <option value="किसी भी समय">{t.forms.anyTime}</option>
                        <option value="प्रातः (9:00 AM - 12:00 PM)">{t.forms.morning}</option>
                        <option value="दोपहर (12:00 PM - 4:00 PM)">{t.forms.afternoon}</option>
                        <option value="शाम (4:00 PM - 8:00 PM)">{t.forms.evening}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.forms.campaignRequirement}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.campaignRequirement}
                      onChange={(e) => setFormData({ ...formData, campaignRequirement: e.target.value })}
                      placeholder="वर्तमान अभियान स्थिति, प्राथमिकता और अपेक्षित समय-सीमा..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.forms.message}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="कोई विशेष निर्देश या संदेश..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-700 focus:border-accent-orange text-white text-sm outline-none transition"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-xl shadow-accent-orange/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? t.forms.submitting : t.forms.submit}</span>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
