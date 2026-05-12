import { useState } from "react";
import { projects } from "../data/portfolioData.js";
import ProjectModal from "./ProjectModal.jsx";

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="card-hover"
      onClick={onClick}
      style={{
        background: "hsl(220 14% 11%)",
        border: "1px solid hsl(220 14% 18%)",
        borderRadius: "16px",
        padding: "28px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Color accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: project.color || "hsl(45 93% 58%)",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: "600",
              color: project.color || "hsl(45 93% 58%)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "6px",
            }}
          >
            {project.subtitle}
          </span>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: "1.2",
            }}
          >
            {project.title}
          </h3>
        </div>

        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: `${project.color || "hsl(45 93% 58%)"}18`,
            border: `1px solid ${project.color || "hsl(45 93% 58%)"}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          <svg width="15" height="15" fill="none" stroke={project.color || "hsl(45 93% 58%)"} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          color: "hsl(220 10% 58%)",
          fontSize: "0.875rem",
          lineHeight: "1.65",
          marginBottom: "20px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.shortDesc}
      </p>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
        {project.techStack.slice(0, 4).map((t) => (
          <span key={t} className="tag-badge">{t}</span>
        ))}
        {project.techStack.length > 4 && (
          <span className="tag-badge">+{project.techStack.length - 4}</span>
        )}
      </div>

      {/* CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: project.color || "hsl(45 93% 58%)",
          fontSize: "0.82rem",
          fontWeight: "600",
        }}
      >
        Click to explore
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag">Projects</div>
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>


      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          #projects {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
