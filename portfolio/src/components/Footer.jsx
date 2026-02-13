import { useLanguage } from "../context/LanguageContext.jsx";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-shell">
        <div>
          <p className="footer-title">{t("footer.title")}</p>
          <p className="footer-subtitle">{t("footer.subtitle")}</p>
        </div>
        <p className="footer-copy">
          (c) {new Date().getFullYear()} {t("footer.title")}. {t("footer.copy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
