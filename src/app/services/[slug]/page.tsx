import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { servicesData, ServiceDetails } from "@/data/servicesData";

interface PageProps {
  params: {
    slug: string;
  };
}

// Next.js static generation parameters to pre-compile all service routes
export async function generateStaticParams() {
  return [
    { slug: "website-development" },
    { slug: "application-development" },
    { slug: "mobile-app-development" },
    { slug: "software-development" },
    { slug: "ecommerce" },
    { slug: "cloud-services" },
    { slug: "it-infrastructure" },
    { slug: "cybersecurity" },
    { slug: "digital-marketing" },
    { slug: "it-support" },
  ];
}

// Generate unique dynamic B2B metadata for each service route
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return {};
  return {
    title: `${service.title} | Bug Infotech`,
    description: service.subtitle,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;
  const service: ServiceDetails = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main style={{ position: "relative", overflow: "hidden" }}>
        {/* Glowing Accents */}
        <div className="gradient-bg-radial" />
        <div className="gradient-bg-radial-bottom" />

        {/* HERO SECTION */}
        <section
          style={{
            paddingTop: "170px",
            paddingBottom: "60px",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div className="container">
            <div className="animate-slide-up" style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}>
              <a
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to All Services
              </a>
              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "1.25rem" }}>
                {service.title}
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {service.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE DESCRIPTION & PROBLEMS SOLVED */}
        <section style={{ paddingBottom: "5.5rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <div className="desc-layout">
              {/* Detailed Overview */}
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--text-white)" }}>
                  Operational Overview
                </h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.75", marginBottom: "2rem" }}>
                  {service.description}
                </p>
                <a href="/#contact" className="btn btn-primary">
                  Discuss Your Requirement
                </a>
              </div>

              {/* Business Problems Solved */}
              <div
                style={{
                  backgroundColor: "rgba(7, 10, 19, 0.5)",
                  padding: "2.25rem 2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.03)",
                }}
              >
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", marginBottom: "1.5rem" }}>
                  Business Challenges Resolved:
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {service.businessProblemsSolved.map((problem, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "#ef4444", flexShrink: 0, marginTop: "2px" }}>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section style={{ paddingBottom: "5.5rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <SectionHeading
              title="Key Capabilities"
              description="We deliver structured operational tools and configurations built to accelerate scale."
              centered={true}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2rem",
              }}
            >
              {service.keyCapabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className="glass-card scroll-reveal"
                  style={{
                    padding: "2rem 1.75rem",
                    borderLeft: "3px solid var(--primary)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      opacity: 0.4,
                      display: "block",
                      marginBottom: "0.75rem",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <p style={{ fontSize: "0.98rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: "1.5" }}>
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES & BENEFITS */}
        <section style={{ paddingBottom: "6rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <div className="use-case-layout">
              {/* Use Cases */}
              <div className="glass-card scroll-reveal" style={{ padding: "2.5rem 2rem" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-white)", borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
                  Common B2B Use Cases
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {service.commonUseCases.map((useCase, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--primary)", fontWeight: 700 }}>•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="glass-card scroll-reveal" style={{ padding: "2.5rem 2rem" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-white)", borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
                  Business Outcomes & Benefits
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section style={{ paddingBottom: "6rem", position: "relative", zIndex: 5 }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <SectionHeading
              title="Frequently Asked Questions"
              description="Learn more details about pricing structures, timelines, and operational transitions."
              centered={true}
            />

            <FaqAccordion faqs={service.faqs} />
          </div>
        </section>

        {/* FINAL CONVERSION BANNER */}
        <section
          style={{
            borderTop: "1px solid var(--border-light)",
            backgroundColor: "rgba(15, 21, 36, 0.15)",
            position: "relative",
            zIndex: 5,
          }}
          className="section-padding"
        >
          <div className="container" style={{ textAlign: "center" }}>
            <div className="glass-card scroll-reveal" style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "1rem" }}>
                Ready to Deploy this Solution?
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
                Connect with our systems architects. We will schedule a requirements call and map out your project details.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn btn-primary">
                  Start Your Project
                </a>
                <a href="/services" className="btn btn-secondary">
                  View Other Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />


    </>
  );
}
