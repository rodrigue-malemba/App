import React from "react";

const Contact = () => {
  return (
    <section className="contact" style={styles.section}>
      <h2>Contactez-moi</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <p>Ou via LinkedIn / GitHub</p>
    </section>
  );
};

const styles = {
  section: { padding: "6rem 2rem", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "2rem auto" },
};

export default Contact;
