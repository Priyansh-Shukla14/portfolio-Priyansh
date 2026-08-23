export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "820px",
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "80px" }} />

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: "800",
            letterSpacing: "-0.02em",
          }}
        >
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      {/* Bio text — includes everything previously in the visual box */}
      <p style={{ color: "hsl(0 0% 60%)", lineHeight: "1.85", marginBottom: "20px", fontSize: "1.05rem", textAlign: "center" }}>
        I'm <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>Priyansh Shukla</span>, a sophomore pursuing{" "}
        <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>B.E. in Information Science</span> at{" "}
        <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>RV College of Engineering, Bangalore</span>.
        I am actively learning Data Structures &amp; Algorithms and Full Stack Development,
        participating in Hackathons &amp; CTF challenges, and serving as Secretary of the{" "}
        <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>Rotaract Club of RVCE</span>.
      </p>
      <p style={{ color: "hsl(0 0% 60%)", lineHeight: "1.85", marginBottom: "44px", fontSize: "1.05rem", textAlign: "center" }}>
        I love solving real-world problems through code — from building interactive web applications
        to experimenting with AI and IoT systems. Whether it's a hackathon, a CTF challenge, or a
        community event, I'm always up for something new. Currently{" "}
        <span style={{ color: "hsl(45 93% 58%)", fontWeight: "600" }}>open to opportunities</span>.
      </p>

      {/* Info cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "40px" }} className="about-info-grid">
        {[
          { label: "Location", val: "Bangalore, India" },
          { label: "College", val: "RVCE" },
          { label: "Degree", val: "B.E. ISE" },
          { label: "Expected", val: "2028" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "hsl(0 0% 11%)",
              border: "1px solid hsl(0 0% 18%)",
              borderRadius: "10px",
              padding: "14px 18px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.72rem", color: "hsl(0 0% 45%)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
              {item.label}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "hsl(45 100% 96%)" }}>{item.val}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="/projects"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, "", "/projects");
            window.dispatchEvent(new Event("popstate"));
          }}
        >
          See My Work
        </a>
        <a
          href="https://github.com/Priyansh-Shukla14"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          GitHub Profile
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-info-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          #about {
            padding: 60px 20px !important;
          }
          .about-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
