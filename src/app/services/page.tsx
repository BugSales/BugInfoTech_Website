"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/servicesData";

export default function ServicesPage() {
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

  const services = Object.values(servicesData);
  const primaryServices = services.filter((s) => s.isPrimary);
  const secondaryServices = services.filter((s) => !s.isPrimary);

  // Custom inline SVG icons matching each service slug
  const getIcon = (slug: string) => {
    switch (slug) {
      case "website-development":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
      case "application-development":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      case "mobile-app-development":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        );
      case "software-development":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case "ecommerce":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        );
      case "cloud-services":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        );
      case "it-infrastructure":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        );
      case "cybersecurity":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case "digital-marketing":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 6H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"></path>
            <path d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
          </svg>
        );
      case "it-support":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
      default:
        return null;
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
            paddingBottom: "70px",
            textAlign: "center",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div className="container">
            <div className="animate-slide-up" style={{ maxWidth: "800px", margin: "0 auto" }}>
              <span className="badge badge-primary" style={{ marginBottom: "1.5rem" }}>
                Our Capabilities
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                Our Technology Services
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                At Bug Infotech, we provide professional website design, web applications, mobile software, and custom business integrations built around B2B operational outcomes and security requirements.
              </p>
            </div>
          </div>
        </section>

        {/* PRIMARY DIGITAL DEVELOPMENT SERVICES */}
        <section style={{ paddingBottom: "5rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <SectionHeading
              title="Primary Digital Development"
              description="Our core services specialize in building secure, high-performance web systems and native software applications to manage operations and drive client acquisitions."
              centered={true}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
                marginBottom: "6rem",
              }}
            >
              {primaryServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.subtitle}
                  icon={getIcon(service.slug)}
                  linkHref={`/services/${service.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORTING TECHNOLOGY SERVICES */}
        <section style={{ paddingBottom: "7rem", position: "relative", zIndex: 5 }}>
          <div className="container">
            <div
              style={{
                borderTop: "1px solid var(--border-light)",
                paddingTop: "6rem",
              }}
            >
              <SectionHeading
                title="Supporting Technology Services"
                description="We keep your backend systems, networks, and channels secure, optimized, and connected."
                centered={true}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "2rem",
                }}
              >
                {secondaryServices.map((service) => (
                  <div
                    key={service.slug}
                    className="glass-card scroll-reveal"
                    style={{
                      padding: "2.25rem 1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      borderLeft: "3px solid var(--secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(59, 130, 246, 0.05)",
                        border: "1px solid rgba(59, 130, 246, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--secondary)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {getIcon(service.slug)}
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-white)" }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "1.5rem", flexGrow: 1 }}>
                      {service.subtitle}
                    </p>
                    <a
                      href={`/services/${service.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--secondary)",
                      }}
                      className="learn-more-link"
                    >
                      View Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-svg" style={{ transition: "transform var(--transition-fast)" }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL BANNER CONVERSION */}
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
                Ready to Discuss Your Project?
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
                Contact us to schedule an operational discovery meeting. Our engineering team will outline a structured project blueprint.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn btn-primary">
                  Discuss Your Requirement
                </a>
                <a href="/#contact" className="btn btn-secondary">
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .learn-more-link:hover .arrow-svg {
          transform: translateX(3px);
        }
      `}</style>
    </>
  );
}
