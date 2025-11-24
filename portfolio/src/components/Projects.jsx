import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects({title, subtitle}) {
  const [activeTab, setActiveTab] = useState("tab1");
  const project1 = [
    {id: 1, name: ""}
  ];
  return (
    <>
    <h2>Projects</h2>
    <div className="projects-container">
      <p>Découvrez une sélection de projets que j’ai réalisés pour mettre en pratique mes compétences techniques et ma créativité. Chaque application reflète mon souci du détail, ma maîtrise des technologies modernes
         et ma capacité à transformer une idée en une expérience web fonctionnelle, fluide et intuitive. Ces projets illustrent mon évolution en tant que développeur frontend et ma volonté constante d’apprendre, d’innover 
         et de proposer des solutions adaptées aux besoins des utilisateurs.</p>
      {/* ------- TABS ------- */}
      <div className="tabs">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}
          id="tab1"
        >
          Tab-1
        </button>

        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}
        >
          Tab-2
        </button>

        <button
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => setActiveTab("tab3")}
          id="tab3"
        >
          Tab-3
        </button>
      </div>

      {/* ------- CONTENT ------- */}
      <div className="tab-content">
        {activeTab === "tab1" && (
          <>
          <article className="project-card" tabIndex="0" style={{ backgroundImage: `url("${"/images/project1.png"}")` }}>
              <div className="project-content">
                <h3>Law firm web site</h3>
                <a href="https://lawfirmdms.netlify.app/" target="blank">
                  <button className="btn">Voir</button>
                </a>
                </div>
            </article>
          </>
        )}

        {activeTab === "tab2" && (
          <div className="project-card" style={{backgroundImage: `url(${"/images/project2.png"})`, backgroundSize: "cover"}}>
            <div className="project-content">
            <h3>E-commerce web site</h3>
            <p>Une application de vente en ligne</p>
            <p><strong>Technologies :</strong> React, CSS, LocalStorage</p>
            <a href="https://macrom.netlify.app/" target="blank">
              <button className="btn">Voir</button>
            </a>
            </div>
          </div>
        )}

        {activeTab === "tab3" && (
          <div className="project-card" style={{backgroundImage: `url(${"/images/project3.png"})`, backgroundSize: "cover"}}>
            <div className="project-content">
            <h3>Personnel portfolio</h3>
            <a href="https://portfoliorodrigue.netlify.app/" target="blank"><button className="btn">voir</button></a>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
