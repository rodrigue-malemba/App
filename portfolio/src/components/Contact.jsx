import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../context/LanguageContext.jsx";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState("");

  const cards = t("contact.cards");
  const contactCards = Array.isArray(cards) ? cards : [];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3pcud2",
        "template_b3kogel",
        form.current,
        "UG_DTS4em1PX_zcer"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-shell">
        <header className="section-header">
          <p className="section-kicker">{t("contact.kicker")}</p>
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
        </header>

        <div className="contact-grid">
          <div className="contact-cards">
            {contactCards.map((card) => {
              const isExternal = card.href?.startsWith("http");
              return (
                <div className="contact-card" key={card.label}>
                  <span>{card.label}</span>
                  {card.href ? (
                    <a
                      className="contact-link"
                      href={card.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <strong>{card.value}</strong>
                  )}
                </div>
              );
            })}
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-field">
              <label htmlFor="from_name">{t("contact.form.nameLabel")}</label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                placeholder={t("contact.form.namePlaceholder")}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="from_email">{t("contact.form.emailLabel")}</label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                placeholder={t("contact.form.emailPlaceholder")}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">{t("contact.form.messageLabel")}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder={t("contact.form.messagePlaceholder")}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {t("contact.form.submit")}
            </button>

            <div className="form-status" aria-live="polite">
              {status === "success" && (
                <p className="success">{t("contact.form.success")}</p>
              )}
              {status === "error" && (
                <p className="error">{t("contact.form.error")}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
