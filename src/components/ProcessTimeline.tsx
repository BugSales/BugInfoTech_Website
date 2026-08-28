import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function ProcessTimeline() {
  const steps: ProcessStep[] = [
    { number: "01", title: "Discuss", description: "Deep-dive conversation to collect exact business rules and solution needs." },
    { number: "02", title: "Plan", description: "Design specifications, user flows, architecture layout, and timeline agreements." },
    { number: "03", title: "Design", description: "Creative branding, interactive screen mockups, and client approval cycle." },
    { number: "04", title: "Build", description: "High-performance coding, API integrations, and robust database setups." },
    { number: "05", title: "Launch", description: "Rigorous quality check, final staging audits, DNS routing, and production release." },
    { number: "06", title: "Support", description: "Proactive server maintenance, cybersecurity updates, and continuous optimization." },
  ];

  return (
    <div style={{ position: "relative", zIndex: 5 }}>
      {/* Horizontal timeline connector for desktop */}
      <div
        className="timeline-line"
        style={{
          position: "absolute",
          top: "40px",
          left: "5%",
          right: "5%",
          height: "2px",
          background: "linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, var(--primary) 50%, rgba(59, 130, 246, 0.1) 100%)",
          zIndex: 1,
          display: "none",
        }}
      />

      <div
        className="timeline-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="scroll-reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Step Bubble */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "2px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontFamily: "var(--font-family-title)",
                fontWeight: 800,
                color: "var(--primary)",
                boxShadow: "var(--shadow-card)",
                marginBottom: "1.25rem",
                position: "relative",
                zIndex: 3,
                transition: "all var(--transition-normal)",
              }}
              className="step-bubble-hover"
            >
              {step.number}
            </div>

            {/* Step Info */}
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.5rem" }}>
              {step.title}
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", maxWidth: "250px", lineHeight: "1.5" }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .step-bubble-hover:hover {
          border-color: var(--primary) !important;
          color: var(--text-white) !important;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.3) !important;
          transform: scale(1.05);
        }

        @media (min-width: 992px) {
          .timeline-line {
            display: block !important;
          }
          .timeline-grid {
            grid-templateColumns: repeat(6, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
