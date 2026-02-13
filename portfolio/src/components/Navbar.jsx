import { useLanguage } from "../context/LanguageContext.jsx";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.work") },
    { href: "#skills", label: t("nav.stack") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <nav className="navbar">
      <div className="nav-shell">
        <div className="nav-brand">
          <a className="nav-logo" href="#home">
            Rodrigue Malemba
          </a>
          <span className="nav-title">{t("nav.title")}</span>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn ${language === "fr" ? "active" : ""}`}
              aria-pressed={language === "fr"}
              onClick={() => setLanguage("fr")}
            >
              FR
            </button>
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>

          <a className="nav-cta" href="#contact">
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
