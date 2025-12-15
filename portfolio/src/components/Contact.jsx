import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3pcud2", // remplace par ton Service ID
        "template_b3kogel", // remplace par ton Template ID
        form.current,
        "UG_DTS4em1PX_zcer" // remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>
          Vous avez une question, un projet à nous confier ou souhaitez prendre rendez-vous ?  
          Envoyez-nous un message, nous vous répondrons dans les plus brefs délais.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Nom complet</label>
          <input type="text" name="from_name" required placeholder="exemple, Macrom malemba" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="from_email" required placeholder="exemple@email.com" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="6" required placeholder="Votre message..."></textarea>
        </div>

        <button type="submit" className="send-btn">Envoyer</button>

        {status === "success" && <p className="success">Message envoyé avec succès !</p>}
        {status === "error" && <p className="error">❌ Une erreur est survenue. Vous devez peut-etre vous connecter a internet.</p>}
      </form>
    </section>
  );
};

export default Contact;
