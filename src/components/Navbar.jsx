import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid hsl(220 14% 16%)" : "1px solid transparent",
      }}
      className={scrolled ? "nav-blur" : ""}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        <a
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, "", "/");
            window.dispatchEvent(new Event("popstate"));
            setMenuOpen(false);
          }}
        >
          <span style={{ fontWeight: "800", fontSize: "1.2rem", color: "hsl(45 100% 96%)", letterSpacing: "-0.02em" }}>
            Priyansh <span style={{ color: "hsl(45 93% 58%)" }}>Shukla</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                // If hosted on GitHub pages under a subdirectory, window.location.pathname handles the base, but pushState needs to preserve it if necessary. 
                // However, since vercel is the deploy target, absolute paths like `/about` are fine.
                window.history.pushState({}, "", link.href);
                window.dispatchEvent(new Event("popstate"));
              }}
              style={{
                color: "hsl(220 10% 70%)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "hsl(45 93% 58%)";
                e.target.style.background = "hsl(45 93% 58% / 0.08)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "hsl(220 10% 70%)";
                e.target.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid hsl(220 14% 20%)",
            borderRadius: "6px",
            padding: "6px 10px",
            cursor: "pointer",
            color: "hsl(45 93% 58%)",
            fontSize: "1.2rem",
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "hsl(220 14% 10%)",
            borderBottom: "1px solid hsl(220 14% 16%)",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", link.href);
                window.dispatchEvent(new Event("popstate"));
                setMenuOpen(false);
              }}
              style={{
                color: "hsl(220 10% 70%)",
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "0.95rem",
                fontWeight: "500",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
