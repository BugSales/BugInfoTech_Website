import React from "react";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  role: string;
  companyName: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  authorName,
  role,
  companyName,
  rating,
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div
      className="glass-card scroll-reveal"
      style={{
        padding: "2.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Quote Symbol */}
      <span
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          fontSize: "4rem",
          lineHeight: 1,
          fontFamily: "Georgia, serif",
          color: "rgba(6, 182, 212, 0.08)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </span>

      {/* Ratings */}
      <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1.5rem", color: "var(--accent)" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={index < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: "0.98rem",
          lineHeight: "1.7",
          color: "var(--text-secondary)",
          fontStyle: "italic",
          marginBottom: "2rem",
          flexGrow: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "var(--primary)",
            flexShrink: 0,
          }}
        >
          {getInitials(authorName)}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-white)" }}>
            {authorName}
          </h4>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
            {role}, <span style={{ color: "var(--primary)" }}>{companyName}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
