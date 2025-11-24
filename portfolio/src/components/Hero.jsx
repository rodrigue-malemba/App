import { useEffect } from "react";
import { Link } from "react-router-dom";

//<img src="https://cdn-icons-png.flaticon.com/512/892/892498.png" alt="down-arrow" className="down-arrow"/>

const Hero = () => {
    useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <h2 className="intro">Welcome to my Portfolio</h2>
          <h2>Hi, I'm rodrigue MALEMBA</h2>
          <h2 className="dev">Frontend Developper.</h2>
          <p>Je suis Développeur web frontend passionné, <p>spécialisé dans la création d'applications web performantes et intuitives.</p> Curieux d'apprendre des nouvelles technologies</p>
          <Link to="/Contact" className="connect">Let's Connect</Link>
        </div>
        <div className="rm-image">
          <img src="https://avatars.githubusercontent.com/u/141469507?v=4" width="200px"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
