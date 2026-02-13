import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Projects({ title, subtitle }) {
  const { t } = useLanguage();
  const projects = t("projects.items");
  const items = Array.isArray(projects) ? projects : [];
  const [activeTab, setActiveTab] = useState(items[0]?.id ?? "tab1");
  const activeProject = items.find((project) => project.id === activeTab) ?? items[0];
  const resolvedTitle = title || t("projects.title");
  const resolvedSubtitle = subtitle || t("projects.subtitle");

  return (
    <section className="projects-section" id="projects">
      <div className="section-shell">
        <header className="section-header">
          <p className="section-kicker">{t("projects.kicker")}</p>
          <h2 className="section-title">{resolvedTitle}</h2>
          <p className="section-subtitle">{resolvedSubtitle}</p>
        </header>

        <div
          className="project-tabs"
          role="tablist"
          aria-label="Categories de projets"
        >
          {items.map((project) => (
            <button
              key={project.id}
              id={`project-tab-${project.id}`}
              className={`project-tab ${
                activeTab === project.id ? "is-active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === project.id}
              aria-controls="project-panel"
              onClick={() => setActiveTab(project.id)}
            >
              <span className="project-tab-label">{project.label}</span>
              <span className="project-tab-title">{project.tabTitle}</span>
            </button>
          ))}
        </div>

        <div
          className="project-panel"
          id="project-panel"
          role="tabpanel"
          aria-labelledby={activeProject ? `project-tab-${activeProject.id}` : undefined}
        >
          {activeProject && (
            <article className="project-card">
              <div className="project-media">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  loading="lazy"
                />
                <span className="project-chip">{activeProject.badge}</span>
              </div>
              <div className="project-body">
                <p className="project-eyebrow">{activeProject.label}</p>
                <h3 className="project-name">{activeProject.title}</h3>
                <p className="project-description">{activeProject.description}</p>
                <div className="project-tags">
                  {activeProject.stack.map((item) => (
                    <span className="project-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    className="project-link"
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("projects.action")}
                  </a>
                  <span className="project-link-note">
                    {t("projects.note")}
                  </span>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
