import React from "react";

interface IndustryCardProps {
  title: string;
  iconType: "healthcare" | "education" | "smb" | "startup" | "retail";
}

export default function IndustryCard({ title, iconType }: IndustryCardProps) {
  const getIcon = () => {
    switch (iconType) {
      case "healthcare":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        );
      case "education":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
        );
      case "smb":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case "startup":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18 5l-3-3z"></path>
            <path d="m12 9 6 6"></path>
            <path d="M9 15h.01"></path>
            <path d="M15 9h.01"></path>
          </svg>
        );
      case "retail":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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
        padding: "2rem 1.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        borderRadius: "var(--radius-md)",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(59, 130, 246, 0.06)",
          border: "1px solid rgba(59, 130, 246, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--secondary)",
        }}
      >
        {getIcon()}
      </div>
      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-white)" }}>
        {title}
      </h3>
    </div>
  );
}
