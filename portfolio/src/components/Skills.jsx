import { useLanguage } from "../context/LanguageContext.jsx";

export default function Skills() {
  const { t } = useLanguage();
  const groups = t("skills.groups");
  const skillGroups = Array.isArray(groups) ? groups : [];

  return (
    <section className="skills-section" id="skills">
      <div className="section-shell">
        <header className="section-header">
          <p className="section-kicker">{t("skills.kicker")}</p>
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
