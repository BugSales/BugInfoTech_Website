"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Packages", href: "#packages" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: isScrolled ? "70px" : "88px",
          display: "flex",
          alignItems: "center",
          backgroundColor: isScrolled ? "rgba(7, 10, 19, 0.92)" : "rgba(7, 10, 19, 0.75)",
          borderBottom: isScrolled ? "1px solid var(--border-light)" : "1px solid transparent",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "all var(--transition-normal)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))" }}
            >
              <rect x="15" y="15" width="70" height="70" rx="16" fill="url(#logo-grad)" />
              <circle cx="50" cy="50" r="22" fill="#070a13" />
              {/* Bug Details */}
              <circle cx="50" cy="50" r="10" fill="#06b6d4" />
              <path d="M50 20 V38" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
              <path d="M28 50 H38" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
              <path d="M62 50 H72" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
              <path d="M35 35 L44 44" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
              <path d="M65 35 L56 44" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-family-title)",
                  fontSize: "1.35rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--text-white)",
                  lineHeight: 1.1,
                }}
              >
                BUG <span style={{ color: "var(--primary)" }}>INFOTECH</span>
              </span>
              <span
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  marginTop: "1px",
                }}
              >
                Digital Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Hamburger Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <a
              href="#contact"
              className="btn btn-outline desktop-nav-btn"
              style={{
                display: "none",
                padding: "0.55rem 1.2rem",
                fontSize: "0.85rem",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Get a Quote
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: "flex",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-sm)",
                padding: "0.6rem",
                cursor: "pointer",
                color: "var(--text-white)",
                outline: "none",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-light)")}
              className="mobile-toggle"
            >
              {isOpen ? (
                /* Close Icon */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(7, 10, 19, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 999,
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "2rem 1.5rem",
          gap: "1.5rem",
          borderTop: "1px solid var(--border-light)",
          animation: "fadeIn 0.3s ease forwards",
          overflowY: "auto",
        }}
        className="mobile-menu"
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "1rem", padding: "0.9rem" }}
        >
          Get a Quote
        </a>
      </div>

      {/* Responsive Styles Injection */}
      <style jsx global>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-nav-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
