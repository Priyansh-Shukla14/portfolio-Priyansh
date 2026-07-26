import { experiences, professionalExperiences } from "../data/portfolioData.js";

const getInitials = (orgName) => {
  if (orgName.includes("JATAYU")) return "PJ";
  if (orgName.includes("Rotaract")) return "RC";
  return orgName.substring(0, 2).toUpperCase();
};

export default function Experience() {
  return (
    <section id="experience" className="leadership-section">
      <div className="leadership-container">

        {/* Professional Experience Header */}
        <div className="leadership-header">
          <div className="leadership-icon">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <h2 className="leadership-title">
            Professional Experience
            <div className="leadership-title-line"></div>
          </h2>
        </div>

        {/* Professional Experience Timeline */}
        <div className="leadership-timeline" style={{ marginBottom: "80px" }}>
          <div className="timeline-main-line"></div>
          {professionalExperiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-org-header">
                <div className="timeline-node-logo">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.org} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "10px", padding: "4px", backgroundColor: "#fff" }} />
                  ) : (
                    getInitials(exp.org)
                  )}
                </div>
                <h3 className="timeline-org-title">{exp.org}</h3>
              </div>
              <div className="timeline-role-container">
                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className="timeline-role">
                    <div className="role-title-wrapper">
                      <div className="role-dot"></div>
                      <h4 className="role-title">{role.title}</h4>
                    </div>
                    <div className="role-period">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {role.period}
                    </div>
                    <div className="role-events">
                      {role.events && role.events.map((ev, i) => (
                        <div key={i} className="role-event-item">
                          <span style={{ color: "hsl(45 100% 95%)", fontWeight: "600" }}>{ev.name}: </span>
                          <span style={{ color: "hsl(0 0% 60%)" }}>{ev.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Roles Header */}
        <div className="leadership-header">
          <div className="leadership-icon">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h2 className="leadership-title">
            Leadership Roles
            <div className="leadership-title-line"></div>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="leadership-timeline">
          {/* Main Vertical Line */}
          <div className="timeline-main-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Org Logo & Title */}
              <div className="timeline-org-header">
                {/* Timeline Node Logo */}
                <div className="timeline-node-logo">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.org} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "10px", padding: "4px", backgroundColor: "#fff" }} />
                  ) : (
                    getInitials(exp.org)
                  )}
                </div>
                
                <h3 className="timeline-org-title">
                  {exp.org}
                </h3>
              </div>

              {/* Roles / Events */}
              <div className="timeline-role-container">
                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className="timeline-role">
                    {/* Role Title */}
                    <div className="role-title-wrapper">
                      <div className="role-dot"></div>
                      <h4 className="role-title">
                        {role.title}
                      </h4>
                    </div>
                    
                    {/* Period */}
                    <div className="role-period">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      {role.period}
                    </div>

                    {/* Descriptions (Events) */}
                    <div className="role-events">
                      {role.events && role.events.map((ev, i) => (
                        <div key={i} className="role-event-item">
                           <span style={{ color: "hsl(45 100% 95%)", fontWeight: "600" }}>{ev.name}: </span>
                           <span style={{ color: "hsl(0 0% 60%)" }}>{ev.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .leadership-section {
          padding: 100px 24px;
          background: hsl(0 0% 9%);
          font-family: 'Inter', sans-serif;
        }
        .leadership-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .leadership-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 60px;
        }
        .leadership-icon {
          background: hsl(45 93% 58% / 0.12);
          border: 1px solid hsl(45 93% 58% / 0.25);
          padding: 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(45 93% 58%);
        }
        .leadership-title {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          display: flex;
          align-items: center;
        }
        .leadership-title-line {
          margin-left: 20px;
          height: 1px;
          width: 100px;
          background: linear-gradient(90deg, hsl(45 93% 58%), transparent);
        }
        .leadership-timeline {
          position: relative;
          padding-left: 60px;
        }
        .timeline-main-line {
          position: absolute;
          left: 24px;
          top: 24px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, hsl(45 93% 58%) 0%, hsl(45 93% 58% / 0.5) 80%, transparent 100%);
        }
        .timeline-item {
          margin-bottom: 60px;
          position: relative;
        }
        .timeline-org-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 20px;
        }
        .timeline-node-logo {
          position: absolute;
          left: -60px;
          background: hsl(0 0% 11%);
          border: 2px solid hsl(45 93% 58%);
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(45 93% 58%);
          font-weight: bold;
          font-size: 1.2rem;
          z-index: 2;
          box-shadow: 0 0 0 6px hsl(0 0% 9%);
        }
        .timeline-org-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .timeline-role-container {
          padding-left: 10px;
          margin-top: 24px;
        }
        .timeline-role {
          position: relative;
          margin-bottom: 30px;
        }
        .role-title-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .role-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(45 93% 58%);
          box-shadow: 0 0 8px hsl(45 93% 58% / 0.6);
        }
        .role-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: hsl(45 93% 58%);
          margin: 0;
        }
        .role-period {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 16px;
          padding-left: 16px;
          font-family: monospace;
        }
        .role-events {
          padding-left: 16px;
        }
        .role-event-item {
          margin-bottom: 12px;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        @media (max-width: 600px) {
          .leadership-section {
            padding: 60px 20px;
          }
          .leadership-title {
            font-size: 1.5rem;
          }
          .leadership-timeline {
            padding-left: 50px;
          }
          .timeline-main-line {
            left: 19px;
          }
          .timeline-node-logo {
            left: -50px;
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          .timeline-org-header {
            gap: 16px;
          }
          .timeline-org-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
