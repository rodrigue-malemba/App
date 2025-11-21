import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2>À propos de moi</h2>
      <p>
        Passionné par le développement frontend, je crée des interfaces web modernes, performantes et accessibles. 
        J’aime transformer les designs en expériences utilisateur fluides.
      </p>
      <h3>Stack principale :</h3>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React</li>
        <li>Git / GitHub</li>
        <li>Figma pour le design</li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: "6rem 2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
};

export default About;
