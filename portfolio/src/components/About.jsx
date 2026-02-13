import { useLanguage } from "../context/LanguageContext.jsx";

const About = () => {
  const { t } = useLanguage();
  const cards = t("about.cards");
  const aboutCards = Array.isArray(cards) ? cards : [];

  return (
    <section className="about-section" id="about">
      <div className="section-shell">
        <header className="section-header">
          <p className="section-kicker">{t("about.kicker")}</p>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle">{t("about.subtitle")}</p>
        </header>

        <div className="about-grid">
          {aboutCards.map((card) => (
            <div className="about-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
