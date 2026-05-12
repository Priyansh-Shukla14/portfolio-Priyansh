import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay animate-fadeIn"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        className="animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "hsl(0 0% 11%)",
          border: "1px solid hsl(0 0% 20%)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "780px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 40px 80px hsl(0 0% 0% / 0.6)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "28px 32px 24px",
            borderBottom: "1px solid hsl(0 0% 16%)",
            position: "sticky",
            top: 0,
            background: "hsl(0 0% 11%)",
            zIndex: 10,
            borderRadius: "20px 20px 0 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: project.color || "hsl(45 93% 58%)",
                    boxShadow: `0 0 12px ${project.color || "hsl(45 93% 58%)"}80`,
                  }}
                />
                <span style={{ fontSize: "0.75rem", color: "hsl(0 0% 50%)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {project.subtitle}
                </span>
              </div>
              <h2 style={{ fontSize: "1.7rem", fontWeight: "800", margin: 0, letterSpacing: "-0.02em" }}>
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "hsl(0 0% 16%)",
                border: "1px solid hsl(0 0% 22%)",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "hsl(0 0% 60%)",
                fontSize: "1rem",
                flexShrink: 0,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(0 0% 20%)"; e.currentTarget.style.color = "hsl(45 93% 58%)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "hsl(0 0% 16%)"; e.currentTarget.style.color = "hsl(0 0% 60%)"; }}
            >
              ✕
            </button>
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
            {project.techStack.map((t) => (
              <span key={t} className="tag-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px 32px" }}>
          {/* Description */}
          <Section title="About the Project">
            <p style={{ color: "hsl(0 0% 65%)", lineHeight: "1.75", margin: 0 }}>
              {project.fullDescription}
            </p>
          </Section>

          {/* Problem */}
          <Section title="Problem Statement">
            <div
              style={{
                background: "hsl(0 0% 13%)",
                border: "1px solid hsl(0 0% 20%)",
                borderLeft: "3px solid hsl(45 93% 58%)",
                borderRadius: "8px",
                padding: "16px 18px",
              }}
            >
              <p style={{ color: "hsl(0 0% 65%)", lineHeight: "1.75", margin: 0 }}>
                {project.problemStatement}
              </p>
            </div>
          </Section>

          {/* Tools and Techniques side by side */}
          <div data-modal-grid style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: "700", color: "hsl(45 93% 58%)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
                Tools &amp; Technologies
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tools.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "hsl(0 0% 15%)",
                      border: "1px solid hsl(0 0% 22%)",
                      color: "hsl(45 100% 90%)",
                      fontSize: "0.72rem",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontWeight: "500",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: "700", color: "hsl(45 93% 58%)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>
                Techniques &amp; Concepts
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.techniques.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "hsl(0 0% 15%)",
                      border: "1px solid hsl(0 0% 22%)",
                      color: "hsl(0 0% 70%)",
                      fontSize: "0.72rem",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontWeight: "500",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features */}
          <Section title="Key Features">
            <div data-modal-grid style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {project.keyFeatures.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    padding: "10px 14px",
                    background: "hsl(0 0% 13%)",
                    border: "1px solid hsl(0 0% 19%)",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ color: "hsl(45 93% 58%)", fontSize: "0.85rem", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <span style={{ color: "hsl(0 0% 70%)", fontSize: "0.82rem", lineHeight: "1.4" }}>{f}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Challenges */}
          {project.challenges && (
            <Section title="Challenges Faced">
              <p style={{ color: "hsl(0 0% 65%)", lineHeight: "1.75", margin: 0 }}>
                {project.challenges}
              </p>
            </Section>
          )}

          {/* CTA Buttons */}
          <div className="modal-cta" style={{ display: "flex", gap: "12px", marginTop: "28px", paddingTop: "24px", borderTop: "1px solid hsl(0 0% 16%)" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View on GitHub
            </a>

          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            [data-modal-grid] { grid-template-columns: 1fr !important; }
            .modal-cta { flex-direction: column !important; }
          }
        `}</style>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h4
        style={{
          fontSize: "0.8rem",
          fontWeight: "700",
          color: "hsl(45 93% 58%)",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          marginBottom: "12px",
        }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}
