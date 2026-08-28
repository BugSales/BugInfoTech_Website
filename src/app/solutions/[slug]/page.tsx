import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { solutionsData, SolutionDetails } from "@/data/solutionsData";

interface PageProps {
  params: {
    slug: string;
  };
}

// Pre-render industry solution subroutes statically at build time
export async function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "education" },
    { slug: "small-business" },
    { slug: "startups" },
    { slug: "retail" },
  ];
}

// Generate dynamic B2B metadata for each solution route
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const solution = solutionsData[params.slug];
  if (!solution) return {};
  return {
    title: `${solution.title} | Bug Infotech`,
    description: solution.subtitle,
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const { slug } = params;
  const solution: SolutionDetails = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main style={{ position: "relative", overflow: "hidden" }}>
        {/* Decorative Background Glows */}
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
                href="/solutions"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.5rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to All Industries
              </a>
              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "1.25rem" }}>
                {solution.title}
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {solution.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* CHALLENGES & DIGITAL SOLUTIONS */}
        <section style={{ paddingBottom: "5.5rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <div className="challenge-solution-layout">
              {/* Common Industry Challenges */}
              <div
                className="glass-card scroll-reveal"
                style={{
                  padding: "2.75rem 2.25rem",
                  borderLeft: "3px solid #ef4444",
                }}
              >
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-white)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "#ef4444" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Common Industry Challenges
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {solution.challenges.map((challenge, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <span style={{ color: "#ef4444", fontWeight: 700 }}>•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proposed Digital Solutions */}
              <div
                className="glass-card scroll-reveal"
                style={{
                  padding: "2.75rem 2.25rem",
                  borderLeft: "3px solid var(--primary)",
                }}
              >
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-white)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--primary)" }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Our Technical Approach
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {solution.digitalSolutions.map((sol, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--primary)", flexShrink: 0, marginTop: "3px" }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RELEVANT SERVICES CROSS LINKING */}
        <section style={{ paddingBottom: "5.5rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <SectionHeading
              title="Relevant Core Services"
              description="To implement these digital workflows, we deploy the following capabilities from our core development teams."
              centered={true}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                justifyContent: "center",
              }}
            >
              {solution.relevantServices.map((service, idx) => (
                <a
                  key={idx}
                  href={service.href}
                  className="glass-card scroll-reveal"
                  style={{
                    padding: "2rem 1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)" }}>
                    {service.name}
                  </span>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(6, 182, 212, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* EXAMPLE B2B USE CASE */}
        <section style={{ paddingBottom: "6.5rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <div
              className="scroll-reveal"
              style={{
                backgroundColor: "rgba(15, 21, 36, 0.5)",
                padding: "3.5rem 2.5rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span className="badge badge-secondary" style={{ marginBottom: "1.25rem" }}>
                Example Case Study
              </span>
              <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-white)", marginBottom: "1rem" }}>
                {solution.useCase.title}
              </h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.75", maxWidth: "800px" }}>
                {solution.useCase.description}
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSION PANEL */}
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
                Tailor a Solution For Your Operations
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
                Discuss your business bottlenecks with our technical architects. We will provide a structured development plan.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn btn-primary">
                  Discuss Requirements
                </a>
                <a href="/solutions" className="btn btn-secondary">
                  View Other Industries
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
