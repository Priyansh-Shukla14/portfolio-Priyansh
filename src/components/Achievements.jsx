import { achievements } from "../data/portfolioData.js";

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag">Achievements</div>
        </div>

        <div
          className="achievements-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {achievements.map((ach, i) => (
            <div
              key={ach.title}
              className="card-hover"
              style={{
                background: "hsl(0 0% 11%)",
                border: "1px solid hsl(0 0% 18%)",
                borderRadius: "14px",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background number */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "16px",
                  fontSize: "5rem",
                  fontWeight: "900",
                  color: "hsl(45 93% 58% / 0.04)",
                  lineHeight: "1",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ marginBottom: "14px" }}>
                <span style={{ fontSize: "2rem" }}>{ach.icon}</span>
              </div>

              <div
                style={{
                  display: "inline-block",
                  background: "hsl(45 93% 58% / 0.1)",
                  border: "1px solid hsl(45 93% 58% / 0.2)",
                  color: "hsl(45 93% 58%)",
                  fontSize: "0.7rem",
                  padding: "2px 10px",
                  borderRadius: "100px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {ach.year}
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "800",
                  margin: "0 0 10px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.01em",
                }}
              >
                {ach.title}
              </h3>

              <p
                style={{
                  color: "hsl(0 0% 58%)",
                  fontSize: "0.83rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
          #achievements {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
