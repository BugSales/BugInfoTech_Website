"use client";

import React, { useState } from "react";
import { ServiceFAQ } from "@/data/servicesData";

interface FaqAccordionProps {
  faqs: ServiceFAQ[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="glass-card"
          style={{
            padding: "1.25rem 1.5rem",
            cursor: "pointer",
            transition: "all var(--transition-fast)",
          }}
          onClick={() => toggleFaq(idx)}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)" }}>
              {faq.question}
            </h4>
            <span style={{ color: "var(--primary)", fontSize: "1.25rem", userSelect: "none" }}>
              {activeFaq === idx ? "−" : "+"}
            </span>
          </div>
          {activeFaq === idx && (
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.92rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                animation: "fadeIn 0.3s ease forwards",
              }}
            >
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
