import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import ServiceDetailLayout from "@/components/shared/ServiceDetailLayout";
import { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Workforce Infotech",
    };
  }

  return {
    title: `${service.titleHi} (${service.titleEn}) | Workforce Infotech UP 2027`,
    description: `${service.heroSubHi} - ${service.shortDescHi}`,
    keywords: [
      service.titleEn,
      service.titleHi,
      "UP Election 2027",
      "Workforce Infotech",
      "Election Campaign Management",
      service.tagEn
    ]
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailLayout service={service} />;
}
