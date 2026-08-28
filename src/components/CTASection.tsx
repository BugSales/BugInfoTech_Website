import React from "react";

export default function CTASection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 5,
        overflow: "hidden",
      }}
      className="section-padding"
    >
      <div className="container">
        <div
          className="glass-card scroll-reveal"
          style={{
            padding: "4.5rem 2.5rem",
            borderRadius: "var(--radius-lg)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(6, 182, 212, 0.2)",
            background: "radial-gradient(circle at center, rgba(15, 21, 36, 0.95) 0%, rgba(7, 10, 19, 0.98) 100%)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(6, 182, 212, 0.08)",
          }}
        >
          {/* Decorative Back Glows */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.04) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <span
            className="badge badge-primary"
            style={{
              marginBottom: "1.5rem",
              letterSpacing: "0.1em",
            }}
          >
            Start Your Digital Transformation
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              maxWidth: "800px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            Have a Business Requirement?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
              maxWidth: "600px",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "2.5rem",
            }}
          >
            Let's discuss how we can build high-performance websites, custom business software, mobile applications, or secure network infrastructure for your operations.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              justifyContent: "center",
            }}
          >
            <a href="#contact" className="btn btn-primary" style={{ padding: "1rem 2.2rem" }}>
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: "1rem 2.2rem" }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
