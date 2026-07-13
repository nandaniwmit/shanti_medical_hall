/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BUSINESS_INFO, FAQS } from "../data";

interface SEOProps {
  currentTab: string;
}

export default function SEO({ currentTab }: SEOProps) {
  useEffect(() => {
    // 1. Dynamic Meta Titles & Descriptions
    const formattedTab = currentTab.charAt(0).toUpperCase() + currentTab.slice(1);
    const pageTitle = `Shanti Medical Hall | ${formattedTab} | Trusted Pharmacy in Tekari, Gaya, Bihar`;
    document.title = pageTitle;

    const descriptions: Record<string, string> = {
      home: "Welcome to Shanti Medical Hall, Tekari. We provide 100% genuine medicines, medical equipment, healthcare, baby care and surgical supplies at affordable prices.",
      about: "Learn about Shanti Medical Hall's 25-year legacy of health, our strict quality standards, mission, values, and our commitment to Tekari, Bihar.",
      services: "Explore our pharmacy services in Tekari: prescription drugs, general OTC, baby care, diabetic monitors, cold-chain vaccination storage and support.",
      gallery: "Browse photos of Shanti Medical Hall's premium, organized medicine shelves, storefront, healthcare monitors, and baby products.",
      contact: "Get in touch with Shanti Medical Hall. View our exact address, phone number (09835686452), Google Map location, and business hours in Tekari."
    };

    const descText = descriptions[currentTab] || descriptions.home;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", descText);

    // Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "Shanti Medical Hall, pharmacy in Tekari, medical store in Gaya, chemist Gaya Bihar, buy medicines Tekari, authentic medicines Bihar, home delivery medicines, baby care products Tekari, surgical goods Gaya, healthcare store Bihar, 09835686452"
    );

    // Dynamic OG Meta Tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(isProperty ? "property" : "name", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // OpenGraph
    updateMetaTag("og:title", pageTitle);
    updateMetaTag("og:description", descText);
    updateMetaTag("og:type", "website");
    updateMetaTag("og:url", window.location.href);
    updateMetaTag("og:image", "https://picsum.photos/seed/shanti-og/1200/630");
    updateMetaTag("og:site_name", BUSINESS_INFO.name);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image", false);
    updateMetaTag("twitter:title", pageTitle, false);
    updateMetaTag("twitter:description", descText, false);
    updateMetaTag("twitter:image", "https://picsum.photos/seed/shanti-og/1200/630", false);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + (currentTab === "home" ? "" : `#${currentTab}`));

    // 2. JSON-LD Schemas Creation
    // Clean old schemas first
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo]');
    existingScripts.forEach((script) => script.remove());

    // Schema 1: LocalBusiness & Pharmacy
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": `${window.location.origin}/#pharmacy`,
      "name": BUSINESS_INFO.name,
      "image": [
        "https://picsum.photos/seed/shanti-storefront/800/600",
        "https://picsum.photos/seed/shanti-hero/1200/675"
      ],
      "telephony": BUSINESS_INFO.phone,
      "telephone": BUSINESS_INFO.phoneFormatted,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Belhariya Road, Bela - Tekari Rd, Tekari",
        "addressLocality": "Gaya",
        "addressRegion": "Bihar",
        "postalCode": "824236",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.9311,
        "longitude": 84.8322
      },
      "url": window.location.origin,
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        `https://wa.me/${BUSINESS_INFO.whatsapp}`
      ]
    };

    // Schema 2: FAQ Schema (only for FAQ/Home page)
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Schema 3: Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${window.location.origin}/#home`
        },
        ...(currentTab !== "home"
          ? [
              {
                "@type": "ListItem",
                "position": 2,
                "name": formattedTab,
                "item": `${window.location.origin}/#${currentTab}`
              }
            ]
          : [])
      ]
    };

    // Append JSON-LD Script Tags
    const appendSchema = (schemaObj: Record<string, unknown>, name: string) => {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo", name);
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    appendSchema(pharmacySchema, "pharmacy");
    appendSchema(breadcrumbSchema, "breadcrumbs");
    if (currentTab === "home") {
      appendSchema(faqSchema, "faqs");
    }

  }, [currentTab]);

  return null;
}
