import { useLanguage } from "../context/LanguageContext.jsx";

const Hero = () => {
  const { t } = useLanguage();
  const highlights = t("hero.highlights");
  const heroHighlights = Array.isArray(highlights) ? highlights : [];
  const cardTags = t("hero.card.tags");
  const heroTags = Array.isArray(cardTags) ? cardTags : [];

  return (
    <section className="hero" id="home">
      <div className="hero-shell">
        <div className="hero-content">
          <p className="hero-kicker">{t("hero.kicker")}</p>
          <h1 className="hero-title">{t("hero.title")}</h1>
          <p className="hero-lead">{t("hero.lead")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              {t("hero.primaryCta")}
            </a>
            <a className="btn btn-ghost" href="#contact">
              {t("hero.secondaryCta")}
            </a>
          </div>
          <div className="hero-highlights">
            {heroHighlights.map((item) => (
              <span className="hero-highlight" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-avatar">
                <img
                  src="https://avatars.githubusercontent.com/u/141469507?v=4"
                  alt={t("hero.card.name")}
                />
              </div>
              <div>
                <p className="hero-card-name">{t("hero.card.name")}</p>
                <p className="hero-card-role">{t("hero.card.role")}</p>
              </div>
            </div>
            <div className="hero-card-info">
              <div>
                <span>{t("hero.card.meta.location")}</span>
                <strong>{t("hero.card.values.location")}</strong>
              </div>
              <div>
                <span>{t("hero.card.meta.focus")}</span>
                <strong>{t("hero.card.values.focus")}</strong>
              </div>
              <div>
                <span>{t("hero.card.meta.availability")}</span>
                <strong>{t("hero.card.values.availability")}</strong>
              </div>
            </div>
            <div className="hero-card-tags">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
