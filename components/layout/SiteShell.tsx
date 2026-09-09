"use client";

import React from "react";
import { usePathname } from "next/navigation";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100">
        {children}
      </div>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
      <FloatingContact />
    </>
  );
}
