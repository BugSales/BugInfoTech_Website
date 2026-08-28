import React from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  mockupType: "dashboard" | "storefront" | "mobile";
}

export default function ProjectCard({
  title,
  category,
  description,
  mockupType,
}: ProjectCardProps) {
  // Render CSS/SVG mockups inside the card wrapper
  const renderMockup = () => {
    switch (mockupType) {
      case "dashboard":
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="8" fill="#0f172a" />
            {/* Header bar */}
            <rect x="0" y="0" width="400" height="28" rx="0" fill="#1e293b" />
            <circle cx="15" cy="14" r="4" fill="#ef4444" />
            <circle cx="27" cy="14" r="4" fill="#eab308" />
            <circle cx="39" cy="14" r="4" fill="#22c55e" />
            <rect x="60" y="8" width="120" height="12" rx="4" fill="#334155" />
            {/* Sidebar */}
            <rect x="0" y="28" width="64" height="212" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            <rect x="10" y="42" width="44" height="8" rx="2" fill="#334155" />
            <rect x="10" y="62" width="44" height="8" rx="2" fill="#1e293b" />
            <rect x="10" y="82" width="44" height="8" rx="2" fill="#1e293b" />
            {/* Main content grid */}
            <rect x="80" y="44" width="140" height="70" rx="6" fill="#1e293b" />
            <rect x="232" y="44" width="148" height="70" rx="6" fill="#1e293b" />
            {/* Dashboard widgets */}
            <rect x="92" y="56" width="60" height="8" rx="2" fill="#06b6d4" />
            <rect x="92" y="72" width="100" height="14" rx="2" fill="#ffffff" fillOpacity="0.8" />
            <rect x="244" y="56" width="60" height="8" rx="2" fill="#3b82f6" />
            <rect x="244" y="72" width="100" height="14" rx="2" fill="#ffffff" fillOpacity="0.8" />
            {/* Chart illustration */}
            <rect x="80" y="128" width="300" height="96" rx="6" fill="#1e293b" />
            <path d="M96 200 L140 160 L180 180 L230 144 L280 170 L330 140 L364 165" stroke="url(#chart-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="chart-grad" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#06b6d4" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "storefront":
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="8" fill="#0f172a" />
            {/* Header bar */}
            <rect x="0" y="0" width="400" height="32" rx="0" fill="#1e293b" />
            <circle cx="15" cy="16" r="4" fill="#ef4444" />
            <circle cx="27" cy="16" r="4" fill="#eab308" />
            <circle cx="39" cy="16" r="4" fill="#22c55e" />
            {/* Logo placeholder */}
            <rect x="60" y="10" width="50" height="12" rx="3" fill="#06b6d4" />
            {/* Search bar */}
            <rect x="130" y="8" width="140" height="16" rx="8" fill="#0f172a" />
            {/* Cart icon */}
            <circle cx="360" cy="16" r="6" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
            {/* Banner hero */}
            <rect x="16" y="46" width="368" height="60" rx="6" fill="url(#banner-grad)" />
            <rect x="32" y="60" width="160" height="10" rx="3" fill="#ffffff" />
            <rect x="32" y="78" width="100" height="8" rx="2" fill="#ffffff" fillOpacity="0.6" />
            {/* Product Grid */}
            <rect x="16" y="120" width="112" height="104" rx="6" fill="#1e293b" />
            <rect x="28" y="130" width="88" height="52" rx="4" fill="#0f172a" fillOpacity="0.5" />
            <rect x="28" y="192" width="60" height="8" rx="2" fill="#ffffff" fillOpacity="0.8" />
            <rect x="28" y="206" width="40" height="8" rx="2" fill="#06b6d4" />

            <rect x="144" y="120" width="112" height="104" rx="6" fill="#1e293b" />
            <rect x="156" y="130" width="88" height="52" rx="4" fill="#0f172a" fillOpacity="0.5" />
            <rect x="156" y="192" width="60" height="8" rx="2" fill="#ffffff" fillOpacity="0.8" />
            <rect x="156" y="206" width="40" height="8" rx="2" fill="#06b6d4" />

            <rect x="272" y="120" width="112" height="104" rx="6" fill="#1e293b" />
            <rect x="284" y="130" width="88" height="52" rx="4" fill="#0f172a" fillOpacity="0.5" />
            <rect x="284" y="192" width="60" height="8" rx="2" fill="#ffffff" fillOpacity="0.8" />
            <rect x="284" y="206" width="40" height="8" rx="2" fill="#06b6d4" />

            <defs>
              <linearGradient id="banner-grad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e3a8a" />
                <stop offset="1" stopColor="#0f766e" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "mobile":
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" rx="8" fill="#0f172a" />
            {/* Phone outline container */}
            <g transform="translate(140, 10)">
              <rect width="120" height="220" rx="16" fill="#070a13" stroke="#334155" strokeWidth="3" />
              {/* Speaker & camera notch */}
              <rect x="35" y="6" width="50" height="8" rx="4" fill="#1e293b" />
              {/* Status bar */}
              <circle cx="16" cy="24" r="3" fill="#334155" />
              <rect x="88" y="22" width="16" height="5" rx="1" fill="#334155" />
              {/* Profile Card */}
              <rect x="10" y="36" width="100" height="60" rx="8" fill="#1e293b" />
              <circle cx="30" cy="66" r="16" fill="#06b6d4" />
              <rect x="52" y="56" width="48" height="8" rx="2" fill="#ffffff" />
              <rect x="52" y="70" width="34" height="6" rx="2" fill="#3b82f6" />
              {/* Options */}
              <rect x="10" y="106" width="100" height="24" rx="6" fill="#1e293b" />
              <rect x="20" y="114" width="60" height="8" rx="2" fill="#ffffff" fillOpacity="0.6" />
              <rect x="10" y="136" width="100" height="24" rx="6" fill="#1e293b" />
              <rect x="20" y="144" width="60" height="8" rx="2" fill="#ffffff" fillOpacity="0.6" />
              {/* Bottom Nav bar */}
              <rect x="10" y="180" width="100" height="30" rx="8" fill="#1e293b" />
              <circle cx="30" cy="195" r="6" fill="#06b6d4" />
              <circle cx="60" cy="195" r="6" fill="#334155" />
              <circle cx="90" cy="195" r="6" fill="#334155" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="glass-card scroll-reveal"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        borderRadius: "var(--radius-md)",
      }}
    >
      {/* Mockup Display Banner */}
      <div
        style={{
          width: "100%",
          height: "220px",
          backgroundColor: "#070a13",
          borderBottom: "1px solid var(--border-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          overflow: "hidden",
        }}
      >
        <div style={{ width: "100%", height: "100%", maxWidth: "340px" }}>
          {renderMockup()}
        </div>
      </div>

      {/* Info Section */}
      <div style={{ padding: "2rem" }}>
        <span
          className="badge badge-primary"
          style={{
            marginBottom: "0.85rem",
            fontSize: "0.75rem",
          }}
        >
          {category}
        </span>
        <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", fontWeight: 700 }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          {description}
        </p>
        <span
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--primary)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            cursor: "pointer",
          }}
          className="case-study-hover"
        >
          Case Study Placeholder
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </span>
      </div>

      <style jsx>{`
        .case-study-hover:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
