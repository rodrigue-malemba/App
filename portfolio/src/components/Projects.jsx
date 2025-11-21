
const Projects = () => {
  const projects = [
    {
      title: "Portfolio perso",
      desc: "Mon portfolio frontend réalisé en React et CSS pur.",
      tech: "React, CSS, Vite",
      link: "#",
    },
    {
      title: "App Todo",
      desc: "Une application de gestion de tâches avec animations.",
      tech: "React, CSS, LocalStorage",
      link: "#",
    },
    {
      title: "Site e-commerce",
      desc: "Prototype de boutique en ligne responsive.",
      tech: "React, CSS Grid, Flexbox",
      link: "#",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2>Mes projets</h2>
      <div style={styles.projects}>
        {projects.map((proj, index) => (
          <div key={index} style={styles.card}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <p><strong>Technologies :</strong> {proj.tech}</p>
            <a href={proj.link}><button>Voir</button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "6rem 2rem", maxWidth: "1000px", margin: "0 auto" },
  projects: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "2rem",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    textAlign: "center",
  },
};

export default Projects;
