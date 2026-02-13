import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  fr: {
    nav: {
      title: "Frontend Developer",
      about: "A propos",
      work: "Projets",
      stack: "Stack",
      contact: "Contact",
      cta: "Discutons",
    },
    hero: {
      kicker: "Frontend Developer - E-commerce",
      title: "Rodrigue Malemba",
      lead:
        "Je concois des interfaces web rapides, elegantes et orientees conversion. J'aide les marques a vendre mieux grace a des experiences claires et performantes.",
      primaryCta: "Voir les projets",
      secondaryCta: "Prendre contact",
      highlights: ["E-commerce", "Conversion", "Performance", "Design Systems"],
      card: {
        name: "Rodrigue Malemba",
        role: "Frontend Developer",
        meta: {
          location: "Localisation",
          focus: "Focus",
          availability: "Disponibilite",
        },
        values: {
          location: "Kinshasa - Remote",
          focus: "E-commerce & UX",
          availability: "Freelance - Temps plein",
        },
        tags: ["React", "Vite", "SEO", "Analytics"],
      },
    },
    about: {
      kicker: "A propos",
      title: "Frontend specialise e-commerce, oriente produit et conversion.",
      subtitle:
        "Je concois des interfaces qui vont droit au but : claires, rapides et fiables. Mon objectif est simple : reduire les frictions et maximiser la valeur business.",
      cards: [
        {
          title: "Mindset conversion",
          description:
            "Parcours d'achat optimises, hierarchie visuelle claire et CTA bien places pour transformer le trafic en ventes.",
        },
        {
          title: "Performance & qualite",
          description:
            "Pages rapides, responsive et accessibles. J'accorde une attention particuliere au SEO et a la stabilite visuelle.",
        },
        {
          title: "Design collaboration",
          description:
            "Integration fidele, design systems et animations legeres pour une experience premium et coherente.",
        },
      ],
    },
    projects: {
      kicker: "Portfolio",
      title: "Projets e-commerce",
      subtitle:
        "Une selection de projets e-commerce qui mettent l'accent sur la conversion, la performance et l'experience client.",
      action: "Voir le projet",
      note: "Ouvre dans un nouvel onglet",
      items: [
        {
          id: "tab1",
          label: "Boutique",
          tabTitle: "Landing premium",
          title: "Brand store - oriente conversion",
          description:
            "Landing page premium, message clair et CTA rapides pour transformer le trafic en clients.",
          stack: ["UI/UX", "SEO", "Conversion"],
          link: "https://lawfirmdms.netlify.app/",
          image: "/images/project1.png",
          badge: "E-commerce",
        },
        {
          id: "tab2",
          label: "Shop UX",
          tabTitle: "Checkout fluide",
          title: "E-commerce - checkout rapide",
          description:
            "Parcours d'achat simplifie, mise en avant des produits et micro-interactions orientees conversion.",
          stack: ["React", "Performance", "Analytics"],
          link: "https://macrom.netlify.app/",
          image: "/images/project2.png",
          badge: "Boutique",
        },
        {
          id: "tab3",
          label: "Lancement",
          tabTitle: "Lancement DTC",
          title: "Page de lancement - DTC",
          description:
            "Storytelling visuel, USP clairs et sections produits pour booster la demande et la confiance.",
          stack: ["React", "Motion", "Branding"],
          link: "https://portfoliorodrigue.netlify.app/",
          image: "/images/project3.png",
          badge: "Launch",
        },
      ],
    },
    skills: {
      kicker: "Skills & Stack",
      title: "Stack moderne, orientee produit.",
      subtitle:
        "Une selection d'outils et de competences que j'utilise pour livrer des experiences e-commerce performantes.",
      groups: [
        {
          title: "Frontend core",
          description:
            "Fondations solides pour des interfaces rapides et maintenables.",
          items: [
            "React",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Vite",
          ],
        },
        {
          title: "E-commerce focus",
          description: "Optimisation des parcours d'achat et des pages produit.",
          items: [
            "Product listing",
            "Checkout UX",
            "Cart flows",
            "SEO",
            "Analytics",
          ],
        },
        {
          title: "UI/UX & Design",
          description: "Experiences premium, accessibles et coherentes.",
          items: ["Figma", "Design systems", "Accessibility", "Motion", "Branding"],
        },
        {
          title: "Tooling",
          description: "Workflow fiable et collaboration fluide.",
          items: ["Git/GitHub", "API integration", "Testing basics", "CI/CD", "Notion"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Discutons de votre projet e-commerce.",
      subtitle:
        "Vous avez une idee, un besoin ou un objectif de conversion a ameliorer ? Envoyez-moi un message et je vous reponds rapidement.",
      cards: [
        {
          label: "Email",
          value: "rmalemba28@gmail.com",
          href: "mailto:rmalemba28@gmail.com",
        },
        {
          label: "Localisation",
          value: "Kinshasa - Remote",
        },
        {
          label: "Disponibilite",
          value: "Freelance - Temps plein",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/rodrigue-malemba",
          href: "https://www.linkedin.com/in/rodrigue-malemba-98637b175/",
        },
        {
          label: "GitHub",
          value: "github.com/rodrigue-malemba",
          href: "https://github.com/rodrigue-malemba",
        },
      ],
      form: {
        nameLabel: "Nom complet",
        namePlaceholder: "ex: Marie Dupont",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        messageLabel: "Message",
        messagePlaceholder: "Parlez-moi de votre projet...",
        submit: "Envoyer le message",
        success: "Message envoye avec succes.",
        error: "Une erreur est survenue. Verifiez votre connexion.",
      },
    },
    footer: {
      title: "Rodrigue Malemba",
      subtitle: "Frontend Developer - E-commerce",
      copy: "Tous droits reserves.",
    },
  },
  en: {
    nav: {
      title: "Frontend Developer",
      about: "About",
      work: "Work",
      stack: "Stack",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      kicker: "Frontend Developer - E-commerce",
      title: "Rodrigue Malemba",
      lead:
        "I design fast, elegant, conversion-focused web interfaces. I help brands sell more through clear, high-performing experiences.",
      primaryCta: "View projects",
      secondaryCta: "Let's connect",
      highlights: ["E-commerce", "Conversion", "Performance", "Design Systems"],
      card: {
        name: "Rodrigue Malemba",
        role: "Frontend Developer",
        meta: {
          location: "Location",
          focus: "Focus",
          availability: "Availability",
        },
        values: {
          location: "Kinshasa - Remote",
          focus: "E-commerce & UX",
          availability: "Freelance - Full-time",
        },
        tags: ["React", "Vite", "SEO", "Analytics"],
      },
    },
    about: {
      kicker: "About",
      title: "E-commerce focused frontend developer, product-driven and conversion-minded.",
      subtitle:
        "I build interfaces that go straight to the point: clear, fast and reliable. My goal is simple: reduce friction and maximize business value.",
      cards: [
        {
          title: "Conversion mindset",
          description:
            "Optimized purchase flows, clear visual hierarchy and strong CTAs that turn traffic into sales.",
        },
        {
          title: "Performance & quality",
          description:
            "Fast, responsive and accessible pages with strong attention to SEO and visual stability.",
        },
        {
          title: "Design collaboration",
          description:
            "Pixel-accurate builds, design systems and subtle motion for a premium, consistent experience.",
        },
      ],
    },
    projects: {
      kicker: "Portfolio",
      title: "Selected work",
      subtitle:
        "A selection of e-commerce projects focused on conversion, performance and customer experience.",
      action: "View project",
      note: "Opens in a new tab",
      items: [
        {
          id: "tab1",
          label: "Brand Store",
          tabTitle: "Premium landing",
          title: "Brand store - conversion-first",
          description:
            "Premium landing page, clear messaging and fast CTAs to turn traffic into customers.",
          stack: ["UI/UX", "SEO", "Conversion"],
          link: "https://lawfirmdms.netlify.app/",
          image: "/images/project1.png",
          badge: "E-commerce",
        },
        {
          id: "tab2",
          label: "Shop Experience",
          tabTitle: "Smooth checkout",
          title: "E-commerce - smooth checkout",
          description:
            "Simplified purchase flow, product focus and micro-interactions built for conversion.",
          stack: ["React", "Performance", "Analytics"],
          link: "https://macrom.netlify.app/",
          image: "/images/project2.png",
          badge: "Store",
        },
        {
          id: "tab3",
          label: "Product Launch",
          tabTitle: "DTC launch",
          title: "Launch page - DTC",
          description:
            "Visual storytelling, clear USPs and product sections to boost demand and trust.",
          stack: ["React", "Motion", "Branding"],
          link: "https://portfoliorodrigue.netlify.app/",
          image: "/images/project3.png",
          badge: "Launch",
        },
      ],
    },
    skills: {
      kicker: "Skills & Stack",
      title: "Modern stack, product-focused.",
      subtitle:
        "A selection of tools and skills I use to deliver high-performing e-commerce experiences.",
      groups: [
        {
          title: "Frontend core",
          description: "Strong foundations for fast, maintainable interfaces.",
          items: [
            "React",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Vite",
          ],
        },
        {
          title: "E-commerce focus",
          description: "Optimizing purchase flows and product pages.",
          items: [
            "Product listing",
            "Checkout UX",
            "Cart flows",
            "SEO",
            "Analytics",
          ],
        },
        {
          title: "UI/UX & Design",
          description: "Premium, accessible and consistent experiences.",
          items: ["Figma", "Design systems", "Accessibility", "Motion", "Branding"],
        },
        {
          title: "Tooling",
          description: "Reliable workflow and smooth collaboration.",
          items: ["Git/GitHub", "API integration", "Testing basics", "CI/CD", "Notion"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's discuss your e-commerce project.",
      subtitle:
        "Have an idea, a need or a conversion target to improve? Send me a message and I'll reply quickly.",
      cards: [
        {
          label: "Email",
          value: "rmalemba28@gmail.com",
          href: "mailto:rmalemba28@gmail.com",
        },
        {
          label: "Location",
          value: "Kinshasa - Remote",
        },
        {
          label: "Availability",
          value: "Freelance - Full-time",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/rodrigue-malemba",
          href: "https://www.linkedin.com/in/rodrigue-malemba-98637b175/",
        },
        {
          label: "GitHub",
          value: "github.com/rodrigue-malemba",
          href: "https://github.com/rodrigue-malemba",
        },
      ],
      form: {
        nameLabel: "Full name",
        namePlaceholder: "e.g. Marie Dupont",
        emailLabel: "Email",
        emailPlaceholder: "you@company.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send message",
        success: "Message sent successfully.",
        error: "Something went wrong. Please check your connection.",
      },
    },
    footer: {
      title: "Rodrigue Malemba",
      subtitle: "Frontend Developer - E-commerce",
      copy: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext({
  language: "fr",
  setLanguage: () => {},
  t: (key) => key,
});

const getValue = (data, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), data);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations.fr;
    const t = (path) => {
      const resolved = getValue(dictionary, path);
      return resolved ?? path;
    };

    return { language, setLanguage, t };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
