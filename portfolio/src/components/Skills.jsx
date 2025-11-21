import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Figma"];
  
  return (
    <section id="skills" style={styles.section}>
      <h2>Compétences</h2>
      <div style={styles.skills}>
        {skills.map((skill, index) => (
          <span key={index} style={styles.skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "6rem 2rem", textAlign: "center" },
  skills: { display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" },
  skill: {
    backgroundColor: "#00bcd4",
    color: "#121212",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default Skills;
