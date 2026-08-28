import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      style={{
        maxWidth: "720px",
        margin: centered ? "0 auto 3.5rem auto" : "0 0 3rem 0",
        textAlign: centered ? "center" : "left",
      }}
      className="scroll-reveal"
    >
      {badge && (
        <span
          className="badge badge-primary"
          style={{ marginBottom: "1rem" }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          marginBottom: "1rem",
          fontWeight: 800,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "var(--text-secondary)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
