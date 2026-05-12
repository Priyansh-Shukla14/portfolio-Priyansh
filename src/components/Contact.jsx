import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // EmailJS initialized with credentials
    emailjs.init("ilaEh9aD2wJxiwB8n");
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const templateParams = {
      to_email: "priyanshshukla715i@gmail.com",
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "service_8h42y6i",
        "template_obrkbf8",
        templateParams
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setError("Failed to send message. Please try again or email directly.");
          console.error("EmailJS error:", error);
        }
      );
  };

  const contactLinks = [
    {
      icon: (
        <svg height="20" viewBox="0 0 16 16" width="20" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
      label: "GitHub",
      value: "@Priyansh-Shukla14",
      href: "https://github.com/Priyansh-Shukla14",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Priyansh Shukla",
      href: "https://www.linkedin.com/in/priyansh-shukla-642b66286/",
    },
    {
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "priyanshshukla715i@gmail.com",
      href: "mailto:priyanshshukla715i@gmail.com",
    },
  ];

  const inputStyle = {
    width: "100%",
    background: "hsl(0 0% 13%)",
    border: "1px solid hsl(0 0% 22%)",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "hsl(45 100% 96%)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "hsl(0 0% 9%)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-tag">Contact</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: "800",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: "hsl(0 0% 55%)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7" }}>
            Open to internship opportunities, collaborations, and interesting conversations. Drop me a message!
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px", alignItems: "start" }}>
          {/* Left: Info */}
          <div>
            <div
              style={{
                background: "hsl(0 0% 11%)",
                border: "1px solid hsl(0 0% 18%)",
                borderRadius: "16px",
                padding: "32px",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>Get In Touch</h3>
              <p style={{ color: "hsl(0 0% 55%)", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "28px" }}>
                I'm currently open to new opportunities. Whether you have a project idea, internship offer, or just want to connect — I'd love to hear from you!
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 16px",
                      background: "hsl(0 0% 13%)",
                      border: "1px solid hsl(0 0% 20%)",
                      borderRadius: "10px",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      color: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "hsl(45 93% 58% / 0.4)";
                      e.currentTarget.style.background = "hsl(0 0% 15%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "hsl(0 0% 20%)";
                      e.currentTarget.style.background = "hsl(0 0% 13%)";
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        background: "hsl(45 93% 58% / 0.1)",
                        border: "1px solid hsl(45 93% 58% / 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "hsl(45 93% 58%)",
                        flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "hsl(0 0% 45%)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                        {link.label}
                      </div>
                      <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "hsl(45 100% 92%)" }}>{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>


          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "hsl(0 0% 11%)",
              border: "1px solid hsl(0 0% 18%)",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ color: "hsl(0 0% 55%)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-primary"
                  style={{ marginTop: "24px" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "24px" }}>Send a Message</h3>

                {error && (
                  <div style={{
                    background: "hsl(0 84% 60% / 0.1)",
                    border: "1px solid hsl(0 84% 60% / 0.3)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    marginBottom: "16px",
                    color: "hsl(0 84% 60%)",
                    fontSize: "0.9rem",
                  }}>
                    {error}
                  </div>
                )}

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "hsl(0 0% 55%)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(45 93% 58% / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 22%)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "hsl(0 0% 55%)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(45 93% 58% / 0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 22%)")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "hsl(0 0% 55%)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Subject *
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(45 93% 58% / 0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 22%)")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "hsl(0 0% 55%)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(45 93% 58% / 0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 22%)")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.75 : 1 }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span style={{ width: "16px", height: "16px", border: "2px solid hsl(0 0% 8% / 0.4)", borderTopColor: "hsl(0 0% 8%)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          #contact {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: 500px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
