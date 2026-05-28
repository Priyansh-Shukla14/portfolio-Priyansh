import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";


export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderSection = () => {
    // We check using .endsWith just in case the app is hosted in a subdirectory like /portfolio/
    if (currentPath.endsWith("/about")) return <About />;
    if (currentPath.endsWith("/skills")) return <Skills />;
    if (currentPath.endsWith("/projects")) return <Projects />;
    if (currentPath.endsWith("/experience")) return <Experience />;
    if (currentPath.endsWith("/achievements")) return <Achievements />;

    return <Hero />;
  };

  return (
    <div style={{ minHeight: "100vh", background: "hsl(0 0% 8%)", color: "hsl(45 100% 96%)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, marginTop: "68px", position: "relative" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ width: "100%", height: "100%" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}
