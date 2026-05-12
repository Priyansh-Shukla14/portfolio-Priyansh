export default function Hero() {

  return (
    <section
      id="hero"
      className="hero-gradient hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >


      <div className="hero-content" style={{ maxWidth: "1000px", width: "100%", display: "flex", alignItems: "center", gap: "60px" }}>
        {/* Left: Text */}
        <div className="hero-text" style={{ flex: 1, minWidth: 0 }}>
          <div
            className="animate-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", marginBottom: "20px" }}
          >
            <span className="tag-badge" style={{ fontSize: "0.8rem", padding: "4px 14px" }}>
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1
            className="animate-fadeInUp opacity-0 stagger-1"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "12px",
              animationFillMode: "forwards",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Priyansh Shukla</span>
          </h1>

          <div
            className="animate-fadeInUp opacity-0 stagger-2"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: "600",
              marginBottom: "24px",
              animationFillMode: "forwards",
            }}
          >
            <span style={{ color: "hsl(45 93% 58%)" }}>Full Stack Developer</span>
          </div>

          <p
            className="animate-fadeInUp opacity-0 stagger-3"
            style={{
              fontSize: "1rem",
              color: "hsl(0 0% 58%)",
              lineHeight: "1.7",
              maxWidth: "500px",
              marginBottom: "36px",
              animationFillMode: "forwards",
            }}
          >
            Information Science student at RVCE, building impactful solutions at the intersection of
            <span style={{ color: "hsl(45 93% 58%)" }}> AI</span>,
            <span style={{ color: "hsl(45 93% 58%)" }}> IoT</span>, and
            <span style={{ color: "hsl(45 93% 58%)" }}> Full Stack Development</span>.
            Passionate about using technology for social good.
          </p>

          <div
            className="animate-fadeInUp opacity-0 stagger-4"
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "48px",
              animationFillMode: "forwards",
            }}
          >
            <a 
              href="/projects" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/projects");
                window.dispatchEvent(new Event("popstate"));
              }}
            >
              View Projects
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/contact");
                window.dispatchEvent(new Event("popstate"));
              }}
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/Priyansh-Shukla14"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ gap: "6px" }}
            >
              <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fadeInUp opacity-0 stagger-5"
            style={{
              display: "flex",
              gap: "clamp(20px, 4vw, 48px)",
              animationFillMode: "forwards",
            }}
          >
            {[
              { num: "4+", label: "Projects" },
              { num: "3", label: "Achievements" },
              { num: "2nd", label: "Year at RVCE" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: "800",
                    color: "hsl(45 93% 58%)",
                    lineHeight: "1",
                    marginBottom: "4px",
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: "0.75rem", color: "hsl(0 0% 55%)", fontWeight: "500" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo placeholder */}
        <div className="hero-image" style={{ flexShrink: 0 }}>
          <div
            className="hero-image-inner"
            style={{
              width: "260px",
              height: "300px",
              borderRadius: "24px",
              background: "hsl(0 0% 13%)",
              border: "2px solid hsl(45 93% 58% / 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 40px hsl(45 93% 58% / 0.08)",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/PHOTO.jpeg`}
              alt="Priyansh Shukla"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 20px 40px !important;
          }
          .hero-content {
            flex-direction: column-reverse !important;
            text-align: center;
            gap: 40px !important;
            margin-top: 20px;
          }
          .hero-text p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-text > div[style*="flex"] {
            justify-content: center;
          }
          .hero-image-inner {
            width: 220px !important;
            height: 250px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-content {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
