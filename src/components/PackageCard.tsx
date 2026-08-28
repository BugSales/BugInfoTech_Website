import React from "react";

interface PackageCardProps {
  name: string;
  price?: string;
  subText?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText?: string;
}

export default function PackageCard({
  name,
  price,
  subText = "Starting from",
  description,
  features,
  recommended = false,
  ctaText = "Discuss Requirement",
}: PackageCardProps) {
  return (
    <div
      className="glass-card scroll-reveal"
      style={{
        padding: "3rem 2.25rem",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        border: recommended ? "2px solid var(--primary)" : "1px solid var(--border-light)",
        backgroundColor: recommended ? "rgba(15, 21, 36, 0.8)" : "rgba(15, 21, 36, 0.5)",
        boxShadow: recommended
          ? "0 20px 40px -10px rgba(0,0,0,0.8), 0 0 25px rgba(6, 182, 212, 0.15)"
          : "var(--shadow-card)",
      }}
    >
      {/* Recommended Ribbon */}
      {recommended && (
        <span
          className="badge badge-primary"
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 4px 12px rgba(6, 182, 212, 0.25)",
            padding: "0.4rem 1rem",
            fontSize: "0.75rem",
          }}
        >
          Most Popular / Recommended
        </span>
      )}

      {/* Package Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-white)", marginBottom: "0.5rem" }}>
          {name}
        </h3>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>

      {/* Pricing Segment */}
      <div style={{ marginBottom: "2.5rem" }}>
        {price ? (
          <div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {subText}
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text-white)" }}>
                {price}
              </span>
              <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                / project starting
              </span>
            </div>
          </div>
        ) : (
          <div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Tailored Proposal
            </span>
            <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "var(--text-white)", lineHeight: 1.2 }}>
              Custom Quote
            </div>
          </div>
        )}
        <span
          style={{
            display: "inline-block",
            fontSize: "0.78rem",
            color: "var(--primary)",
            marginTop: "0.5rem",
            fontWeight: 500,
          }}
        >
          * Final pricing depends on project scope and requirements.
        </span>
      </div>

      {/* Feature List */}
      <div style={{ flexGrow: 1, marginBottom: "2.5rem" }}>
        <h4 style={{ fontSize: "0.95rem", color: "var(--text-white)", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          What's Included:
        </h4>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {features.map((feature) => (
            <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }}
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className={`btn ${recommended ? "btn-primary" : "btn-secondary"}`}
        style={{ width: "100%", padding: "0.9rem" }}
      >
        {ctaText}
      </a>
    </div>
  );
}
