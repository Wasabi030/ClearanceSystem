import React from "react";
import "../app.css";

const teamMembers = [
  { name: "JIAN MRAZ ABELLO", role: "LEADER" },
  { name: "THISLANDY ROMOL", role: "DEVELOPER" },
  { name: "KARL JOSHUA RUAZOL", role: "DEVELOPER" },
  { name: "EZEQUIEL FREJAS", role: "DEVELOPER" },
  { name: "NIKHO DE CASTRO", role: "RESEARCHER" },
  { name: "STEPHANIE ALCANTARA", role: "RESEARCHER" },
];

const AboutUs = () => {
  return (
    <div className="section">
      <h2 className="section-title">ABOUT US</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="icon-placeholder">👤</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
