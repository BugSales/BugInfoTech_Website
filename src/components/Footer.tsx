"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#04060c",
        borderTop: "1px solid var(--border-light)",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
      }}
      className="section-padding"
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Info Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="15" y="15" width="70" height="70" rx="16" fill="url(#logo-grad-footer)" />
                <circle cx="50" cy="50" r="22" fill="#04060c" />
                <circle cx="50" cy="50" r="10" fill="#06b6d4" />
                <path d="M50 20 V38" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                <path d="M28 50 H38" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                <path d="M62 50 H72" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                <path d="M35 35 L44 44" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                <path d="M65 35 L56 44" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                <defs>
                  <linearGradient id="logo-grad-footer" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-family-title)",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  color: "var(--text-white)",
                }}
              >
                BUG <span style={{ color: "var(--primary)" }}>INFOTECH</span>
              </span>
            </a>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Premium digital solutions built for your business. We design and develop websites, application software, and secure network infrastructure.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              {/* Social icons placeholders */}
              {["LinkedIn", "Twitter", "Facebook"].map((network) => (
                <span
                  key={network}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    padding: "0.3rem 0.6rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  className="social-hover"
                >
                  {network}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Services Column */}
          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-white)", fontWeight: 600 }}>
              Primary Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              {[
                "Website Design & Dev",
                "Web Application Dev",
                "Mobile App Development",
                "Custom Software Solutions",
                "Ecommerce Platforms",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" style={{ color: "var(--text-secondary)" }} className="footer-link-hover">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Services Column */}
          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-white)", fontWeight: 600 }}>
              Other Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              {[
                "Cloud Solutions",
                "IT Networking",
                "Cybersecurity Auditing",
                "Digital Marketing",
                "Maintenance & Support",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" style={{ color: "var(--text-secondary)" }} className="footer-link-hover">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-white)", fontWeight: 600 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              {[
                { label: "Home", href: "#home" },
                { label: "Our Portfolio", href: "#portfolio" },
                { label: "B2B Packages", href: "#packages" },
                { label: "About Us", href: "#about" },
                { label: "Contact Details", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={{ color: "var(--text-secondary)" }} className="footer-link-hover">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            gap: "1rem",
          }}
          className="footer-bottom"
        >
          <span>
            &copy; {currentYear} Bug Infotech. All Rights Reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ cursor: "pointer" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer" }}>Terms of Service</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link-hover:hover {
          color: var(--primary) !important;
          padding-left: 3px;
        }
        .social-hover:hover {
          color: var(--primary) !important;
          border-color: var(--primary) !important;
          background-color: rgba(6, 182, 212, 0.05) !important;
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
