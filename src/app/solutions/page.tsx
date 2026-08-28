"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import IndustryCard from "@/components/IndustryCard";
import { solutionsData } from "@/data/solutionsData";

export default function SolutionsPage() {
  // Simple intersection observer to trigger scroll reveal animations
  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const solutions = Object.values(solutionsData);

  // Map slug to industry iconType
  const getIconType = (slug: string): "healthcare" | "education" | "smb" | "startup" | "retail" => {
    switch (slug) {
      case "healthcare":
        return "healthcare";
      case "education":
        return "education";
      case "small-business":
        return "smb";
      case "startups":
        return "startup";
      case "retail":
        return "retail";
      default:
        return "smb";
    }
  };

  return (
    <>
      <Navbar />

      <main style={{ position: "relative", overflow: "hidden" }}>
        {/* Decorative Radial Background */}
        <div className="gradient-bg-radial" />
        <div className="gradient-bg-radial-bottom" />

        {/* HERO SECTION */}
        <section
          style={{
            paddingTop: "170px",
            paddingBottom: "80px",
            textAlign: "center",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div className="container">
            <div className="animate-slide-up" style={{ maxWidth: "800px", margin: "0 auto" }}>
              <span className="badge badge-secondary" style={{ marginBottom: "1.5rem" }}>
                Target Sectors
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                Solutions Built Around Your Industry
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We translate industry-specific challenges, operations logic, and compliance rules into secure, high-performance digital tools. Explore our target business sectors.
              </p>
            </div>
          </div>
        </section>

        {/* SECTORS GRID */}
        <section style={{ paddingBottom: "7rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <SectionHeading
              title="Select Your Business Sector"
              description="Click on your industry to learn about common operational bottlenecks, proposed digital solutions, relevant B2B services, and example case studies."
              centered={true}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2rem",
                marginBottom: "5rem",
              }}
            >
              {solutions.map((sol) => (
                <a
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                  className="industry-link-hover"
                >
                  <IndustryCard
                    title={sol.title}
                    iconType={getIconType(sol.slug)}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* B2B CONVERSION SECTION */}
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
                Need a Custom Industry Flow?
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
                Every B2B company operates on distinct business logic. Connect with us to outline your workflow parameters, database layers, and compliance needs.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn btn-primary">
                  Start Your Project
                </a>
                <a href="/#contact" className="btn btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .industry-link-hover :global(.glass-card) {
          transition: all var(--transition-normal);
        }
        .industry-link-hover:hover :global(.glass-card) {
          border-color: var(--primary) !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(6, 182, 212, 0.15) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
}
