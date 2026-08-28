import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkHref?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  linkHref = "#contact",
}: ServiceCardProps) {
  return (
    <div
      className="glass-card scroll-reveal"
      style={{
        padding: "2.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effect behind icon */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80px",
          height: "80px",
          background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Icon Area */}
      <div
        style={{
          width: "54px",
          height: "54px",
          borderRadius: "var(--radius-sm)",
          background: "rgba(6, 182, 212, 0.06)",
          border: "1px solid rgba(6, 182, 212, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary)",
          marginBottom: "1.5rem",
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 style={{ fontSize: "1.35rem", marginBottom: "0.85rem", fontWeight: 700 }}>
        {title}
      </h3>
      
      <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "2rem", flexGrow: 1, lineHeight: "1.6" }}>
        {description}
      </p>

      {/* CTA arrow */}
      <a
        href={linkHref}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "var(--primary)",
          width: "fit-content",
        }}
        className="learn-more-link"
      >
        Learn More
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "transform var(--transition-fast)" }}
          className="arrow-svg"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>

      <style jsx>{`
        .learn-more-link:hover .arrow-svg {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
