import { experiences } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 24px", background: "hsl(0 0% 9%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag">Experience</div>
        </div>

        {experiences.map((exp) => (
          <div key={exp.org} style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* Role header */}
            <div
              style={{
                background: "hsl(0 0% 11%)",
                border: "1px solid hsl(0 0% 18%)",
                borderRadius: "16px",
                padding: "28px 32px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: "hsl(45 93% 58% / 0.12)",
                    border: "1px solid hsl(45 93% 58% / 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  🌍
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "800", margin: 0, letterSpacing: "-0.01em" }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: "hsl(45 93% 58%)", fontWeight: "600", fontSize: "0.9rem", marginTop: "2px" }}>
                    {exp.org}
                  </div>
                </div>
              </div>
              <span
                style={{
                  background: "hsl(45 93% 58% / 0.1)",
                  border: "1px solid hsl(45 93% 58% / 0.2)",
                  color: "hsl(45 93% 58%)",
                  padding: "5px 14px",
                  borderRadius: "100px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                {exp.period}
              </span>
            </div>

            {/* Events timeline */}
            <div style={{ position: "relative", paddingLeft: "28px" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "11px",
                  top: "8px",
                  bottom: "8px",
                  width: "2px",
                  background: "linear-gradient(180deg, hsl(45 93% 58% / 0.6), hsl(45 93% 58% / 0.1))",
                }}
              />

              {exp.events.map((event, i) => (
                <div key={event.name} style={{ position: "relative", marginBottom: i < exp.events.length - 1 ? "20px" : 0 }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-23px",
                      top: "16px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "hsl(45 93% 58%)",
                      boxShadow: "0 0 10px hsl(45 93% 58% / 0.5)",
                    }}
                  />

                  <div
                    className="card-hover"
                    style={{
                      background: "hsl(0 0% 11%)",
                      border: "1px solid hsl(0 0% 18%)",
                      borderRadius: "12px",
                      padding: "20px 24px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        margin: "0 0 8px",
                        color: "hsl(45 100% 95%)",
                      }}
                    >
                      {event.name}
                    </h4>
                    <p style={{ color: "hsl(0 0% 60%)", fontSize: "0.875rem", lineHeight: "1.65", margin: 0 }}>
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          #experience {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
