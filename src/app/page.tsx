"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import ProjectCard from "@/components/ProjectCard";
import IndustryCard from "@/components/IndustryCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
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

  return (
    <>
      <Navbar />

      {/* Main Container with Radial Gradient Highlights */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="gradient-bg-radial" />
        <div className="gradient-bg-radial-bottom" />

        {/* HERO SECTION */}
        <section
          id="home"
          style={{
            paddingTop: "160px",
            paddingBottom: "80px",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div className="container">
            <div
              className="hero-layout"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                alignItems: "center",
                gap: "4rem",
              }}
            >
              {/* Hero Text */}
              <div className="animate-slide-up" style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className="badge badge-primary"
                  style={{
                    width: "fit-content",
                    marginBottom: "1.5rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  One Technology Partner. Multiple Needs.
                </span>
                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 900,
                    lineHeight: 1.15,
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Technology Solutions <br />
                  <span className="gradient-text">Built for Your Business.</span>
                </h1>
                <p
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: "1.65",
                    color: "var(--text-secondary)",
                    marginBottom: "2.5rem",
                    maxWidth: "580px",
                  }}
                >
                  At Bug Infotech, we build custom websites, web applications, mobile app software, and enterprise solutions designed to accelerate growth, automate workflows, and protect your digital assets.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                  <a href="#contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                    Discuss Your Requirement
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a href="/services" className="btn btn-secondary" style={{ padding: "1rem 2rem" }}>
                    Explore Our Services
                  </a>
                </div>
              </div>

              {/* Hero SVG/CSS Mockup Graphic */}
              <div
                className="hero-graphic animate-fade-in"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Glowing Circle behind graphic */}
                <div
                  style={{
                    position: "absolute",
                    width: "350px",
                    height: "350px",
                    background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />

                {/* Structured Mockup SVG */}
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 500 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    maxWidth: "500px",
                    position: "relative",
                    zIndex: 2,
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                  }}
                >
                  {/* Dashboard Screen */}
                  <rect x="20" y="30" width="380" height="280" rx="12" fill="#0f172a" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  <rect x="20" y="30" width="380" height="32" rx="0" fill="#1e293b" />
                  {/* Browser Dots */}
                  <circle cx="40" cy="46" r="4" fill="#ef4444" />
                  <circle cx="52" cy="46" r="4" fill="#eab308" />
                  <circle cx="64" cy="46" r="4" fill="#22c55e" />
                  <rect x="85" y="40" width="160" height="12" rx="4" fill="#0f172a" />
                  {/* Dashboard Content */}
                  <rect x="40" y="80" width="100" height="50" rx="6" fill="#1e293b" />
                  <rect x="150" y="80" width="100" height="50" rx="6" fill="#1e293b" />
                  <rect x="260" y="80" width="120" height="50" rx="6" fill="#1e293b" />
                  {/* Graph */}
                  <rect x="40" y="145" width="340" height="145" rx="6" fill="#1e293b" />
                  <path d="M60 250 L110 200 L160 220 L210 170 L260 200 L310 160 L360 190" stroke="url(#hero-graph-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Overlapping Mobile App Mockup */}
                  <g transform="translate(350, 140)">
                    <rect width="120" height="210" rx="16" fill="#070a13" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="3" />
                    <rect x="35" y="6" width="50" height="8" rx="4" fill="#1e293b" />
                    {/* Circle Image Mockup */}
                    <circle cx="60" cy="65" r="28" fill="url(#mobile-img-grad)" />
                    {/* Lines */}
                    <rect x="25" y="110" width="70" height="8" rx="2" fill="#1e293b" />
                    <rect x="25" y="124" width="70" height="8" rx="2" fill="#1e293b" />
                    <rect x="25" y="138" width="50" height="8" rx="2" fill="#06b6d4" />
                    <rect x="25" y="170" width="70" height="22" rx="4" fill="#3b82f6" />
                  </g>

                  {/* SVG Definitions */}
                  <defs>
                    <linearGradient id="hero-graph-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#06b6d4" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="mobile-img-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#06b6d4" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST VALUE STRIP */}
        <TrustStrip />

        {/* WHAT WE BUILD SECTION (PRIMARY SERVICES) */}
        <section id="services" className="section-padding">
          <div className="container">
            <SectionHeading
              badge="Our Core Capabilities"
              title="What We Build for Businesses"
              description="We specialize in engineering robust, secure, and modern B2B digital applications designed for operations and conversions."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2rem",
              }}
            >
              <ServiceCard
                title="Website Development"
                description="Custom responsive corporate websites, high-converting landing pages, and interactive portal platforms optimized for search engines."
                linkHref="/services/website-development"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                }
              />

              <ServiceCard
                title="Application Development"
                description="High-performance, feature-rich web applications and native iOS/Android mobile applications designed for operational efficiency."
                linkHref="/services/application-development"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                }
              />

              <ServiceCard
                title="Software Development"
                description="Custom CRM/ERP platforms, business tools, legacy system modernization, and secure integrations tailored to business rules."
                linkHref="/services/software-development"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                }
              />

              <ServiceCard
                title="Ecommerce Solutions"
                description="Secure digital storefronts, shopping carts, visual checkout structures, payment gateway connections, and dashboard panels."
                linkHref="/services/ecommerce"
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* SOLUTIONS THAT FIT YOUR BUSINESS (B2B PACKAGES) */}
        <section id="packages" className="section-padding" style={{ backgroundColor: "rgba(15, 21, 36, 0.15)" }}>
          <div className="container">
            <SectionHeading
              badge="Pricing Options"
              title="B2B Solutions That Fit Your Business"
              description="Choose a structured baseline package. Note that final scope agreements and pricing proposals are custom-fitted to your needs."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2.5rem",
              }}
            >
              <PackageCard
                name="Starter Setup"
                price="$2,500"
                description="Ideal for startups and small businesses needing a modern, professional online corporate profile."
                features={[
                  "5 Responsive Pages layout",
                  "Contact / Inquiry Form setup",
                  "SEO Baseline setup",
                  "Speed & Security Optimization",
                  "Standard Admin Panel",
                  "1 Month Support"
                ]}
              />

              <PackageCard
                name="Business Solution"
                price="$7,500"
                description="Comprehensive web applications and customized software structures designed for growing brands."
                recommended={true}
                features={[
                  "Fully Custom Design Mockup",
                  "10+ Responsive Pages / Panels",
                  "API Integration support",
                  "CMS / Admin Database dashboard",
                  "Advanced User Flow & Logic",
                  "3 Months Premium Support"
                ]}
              />

              <PackageCard
                name="Custom Enterprise"
                description="Tailored digital platforms built from the ground up for high-scale, secure transaction environments."
                features={[
                  "Unlimited Pages & Layouts",
                  "Custom Database Architecture",
                  "Enterprise Systems Integrations",
                  "Dedicated Dev Team",
                  "Advanced Security Audit",
                  "Ongoing Maintenance SLA"
                ]}
              />
            </div>
          </div>
        </section>

        {/* OUR WORK SECTION (PORTFOLIO PLACEHOLDERS) */}
        <section id="portfolio" className="section-padding">
          <div className="container">
            <SectionHeading
              badge="Our Work"
              title="Recent Digital Solutions"
              description="Explore structured placeholders of digital interfaces we design and develop. Case study content will be added during project progress."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
              }}
            >
              <ProjectCard
                title="B2B Dashboard Application"
                category="Web Application"
                description="A secure web application mockup showing data widgets, chart lines, sidebar navigation, and client profile listings."
                mockupType="dashboard"
              />

              <ProjectCard
                title="Modern Storefront Platform"
                category="Ecommerce Solution"
                description="A high-speed e-commerce portal layout featuring product grid elements, responsive headers, search panels, and cart details."
                mockupType="storefront"
              />

              <ProjectCard
                title="Client Portal Mobile App"
                category="Mobile Application"
                description="An iOS and Android client-facing mobile application mockup presenting profile lists, settings options, and clean navigation."
                mockupType="mobile"
              />
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS SECTION */}
        <section id="industries" className="section-padding" style={{ backgroundColor: "rgba(15, 21, 36, 0.15)" }}>
          <div className="container">
            <SectionHeading
              badge="Target Sectors"
              title="Solutions Tailored by Industry"
              description="We design and adapt technology structures matching regulatory, security, and operation requirements of different business sectors."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <a href="/solutions/healthcare" style={{ display: "block" }}>
                <IndustryCard title="Healthcare Tech" iconType="healthcare" />
              </a>
              <a href="/solutions/education" style={{ display: "block" }}>
                <IndustryCard title="Education Portals" iconType="education" />
              </a>
              <a href="/solutions/small-business" style={{ display: "block" }}>
                <IndustryCard title="SMB Modernization" iconType="smb" />
              </a>
              <a href="/solutions/startups" style={{ display: "block" }}>
                <IndustryCard title="Startup Launch" iconType="startup" />
              </a>
              <a href="/solutions/retail" style={{ display: "block" }}>
                <IndustryCard title="Retail & Ecommerce" iconType="retail" />
              </a>
            </div>
          </div>
        </section>

        {/* SECONDARY SERVICES SECTION */}
        <section id="secondary-services" className="section-padding">
          <div className="container">
            <SectionHeading
              badge="Complete Solutions"
              title="One Technology Partner for Multiple Business Needs"
              description="Beyond design and coding, we keep business operations running smoothly with reliable, secondary infrastructure support services."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  title: "Cloud Services",
                  desc: "AWS/Azure environment setup, secure server migrations, and scalable hosting deployment.",
                  href: "/services/cloud-services",
                },
                {
                  title: "IT Network Solutions",
                  desc: "Enterprise networking, routing setups, remote database architecture, and office configurations.",
                  href: "/services/it-infrastructure",
                },
                {
                  title: "Cybersecurity Audits",
                  desc: "Penetration tests, firewalls configuration, SSL management, and data protection structures.",
                  href: "/services/cybersecurity",
                },
                {
                  title: "Digital Marketing",
                  desc: "B2B search engine optimization, email campaigns setups, and conversion tracking configurations.",
                  href: "/services/digital-marketing",
                },
                {
                  title: "Maintenance & Support",
                  desc: "Ongoing bug fixes, monthly system audits, backup operations, and emergency dev support.",
                  href: "/services/it-support",
                },
              ].map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="glass-card scroll-reveal"
                  style={{
                    padding: "1.75rem 1.5rem",
                    borderLeft: "3px solid var(--secondary)",
                    backgroundColor: "rgba(15, 21, 36, 0.4)",
                    display: "block",
                  }}
                >
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 700, color: "var(--text-white)" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {service.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BUG INFOTECH SECTION */}
        <section id="about" className="section-padding" style={{ backgroundColor: "rgba(15, 21, 36, 0.15)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                alignItems: "center",
                gap: "4rem",
              }}
              className="why-layout"
            >
              {/* Content text */}
              <div className="scroll-reveal">
                <span className="badge badge-secondary" style={{ marginBottom: "1rem" }}>
                  Why Partner With Us
                </span>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
                  Your Strategic Technology Partner
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "2rem" }}>
                  Bug Infotech is built on the principle that B2B relationships require consistent delivery, engineering-led execution, and unified accountability. We represent a single location for design, coding, and networking support.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    {
                      title: "Business-Focused Solutions",
                      text: "We align coding structures with business rules, transaction logs, and key conversion statistics.",
                    },
                    {
                      title: "Customized Product Delivery",
                      text: "No template shortcuts. We write custom, proprietary structures tailored to scale your brand.",
                    },
                    {
                      title: "Reliable End-to-End Support",
                      text: "From staging plans and designs to production launch and monthly cybersecurity updates.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: "1rem" }}>
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(6, 182, 212, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--primary)",
                          flexShrink: 0,
                          marginTop: "3px",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.25rem" }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Card grid showcasing stats/badges preview */}
              <div
                className="scroll-reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem 1.5rem",
                    textAlign: "center",
                    borderBottom: "3px solid var(--primary)",
                  }}
                >
                  <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "var(--primary)" }}>Custom</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Software Architecture</div>
                </div>
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem 1.5rem",
                    textAlign: "center",
                    borderBottom: "3px solid var(--secondary)",
                  }}
                >
                  <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "var(--secondary)" }}>End-to-End</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>Support & Auditing</div>
                </div>
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem 1.5rem",
                    textAlign: "center",
                    borderBottom: "3px solid var(--primary)",
                    gridColumn: "span 2",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--text-white)" }}>One Tech Partner</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>For Multiple Business Needs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS SECTION */}
        <section id="process" className="section-padding">
          <div className="container">
            <SectionHeading
              badge="How We Work"
              title="Our Delivery Process"
              description="A systematic, milestones-driven workflow engineered to deliver high-quality code structures on-time."
            />

            <ProcessTimeline />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="section-padding" style={{ backgroundColor: "rgba(15, 21, 36, 0.15)" }}>
          <div className="container">
            <SectionHeading
              badge="Client Reviews"
              title="What Our Clients Say"
              description="These review listings represent verified B2B placeholders based on client projects. Client names are withheld for privacy agreements."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              <TestimonialCard
                rating={5}
                quote="Bug Infotech engineered our custom inventory database dashboard. They managed DNS routing and API linkages with absolute precision, delivering right on our business milestones schedule."
                authorName="Healthcare Client Director"
                role="Operations Supervisor"
                companyName="Medical Group"
              />

              <TestimonialCard
                rating={5}
                quote="We migrated our retail shop site to their storefront codebase. Page loads speed improved instantly and conversion tracking setups work seamlessly across our advertising integrations."
                authorName="Retail Portal Owner"
                role="Marketing Manager"
                companyName="Ecommerce Client"
              />

              <TestimonialCard
                rating={5}
                quote="Having one partner that designs screens, codes application APIs, and configures secure cloud networking saves us countless hours. Absolute technical expertise across their team."
                authorName="SaaS Founder Partner"
                role="Chief Technology Officer"
                companyName="Logistics Startup"
              />
            </div>
          </div>
        </section>

        {/* FINAL CONTACT CTA SECTION */}
        <CTASection />
      </div>

      <Footer />

      {/* Hero Layout CSS Adjustments */}
      <style jsx global>{`
        .hero-layout {
          grid-template-columns: 1.2fr 0.8fr;
        }

        .why-layout {
          grid-template-columns: 1.1fr 0.9fr;
        }

        @media (max-width: 992px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-layout div {
            align-items: center !important;
            margin-right: auto;
            margin-left: auto;
          }
          .why-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
