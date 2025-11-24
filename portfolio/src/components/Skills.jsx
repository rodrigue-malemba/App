import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaGithub } from "react-icons/fa";
const skills = [
  { name: "React", level: 85, icon: <FaReact /> },
  { name: "JavaScript", level: 90, icon: <FaJs /> },
  { name: "HTML5", level: 95, icon: <FaHtml5 /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
  { name: "Git", level: 80, icon: <FaGitAlt /> },
  { name: "GitHub", level: 80, icon: <FaGithub /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs /> },
];

export default function Skills() {
  return (
    <>
    <h2>Skills</h2>
    <p>Dans mon travail de développeur frontend, j’utilise un ensemble d’outils et de technologies modernes pour créer des interfaces rapides, intuitives et performantes. Ma maîtrise de React, JavaScript, HTML5 et CSS3 me permet de concevoir des applications web dynamiques et élégantes.
J’intègre également au quotidien Git et GitHub pour assurer une gestion propre et structurée du code, ainsi que Node.js, qui me permet de développer des fonctionnalités côté serveur et d’optimiser mes workflows.</p>
    <div className="skills-container">
      {skills.map((skill) => (
        <div className="circle-skill" key={skill.name}>
          <div
            className="progress-circle neon glass"
            style={{ "--value": skill.level }}
          >
            <div className="icon">{skill.icon}</div>
            <div className="tooltip"> {skill.level}%</div>
          </div>
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
    </>
  );
}
