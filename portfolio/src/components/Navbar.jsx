import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Navbar = () => {

  return (
    <>
    <nav className="navbar">
      <h2 className="logo" alt="logo">Rodrigue</h2>
      <ul className="nav-links">
        <li><NavLink to="/" className={({isActive}) =>(isActive ? "active" : "home")} >Home</NavLink></li>
        <li><NavLink to="/Skills" className={({isActive}) => (isActive ? "active" : "skills")}>Skills</NavLink></li>
        <li><NavLink to="/Projects" className={({isActive}) => (isActive ? "active" : "project")}>Projects</NavLink></li>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/icons/reseaux-sociaux.png"/></a></li>
        <li><a href="https://instagram.com" target="blank" rel="noopener noreferrer"><img src="/icons/instagram.png"/></a></li>
        <li><a href="https://www.linkedin.com/in/rodrigue-malemba-98637b175/" target="blank" rel="noopener noreferrer"><img src="/icons/sociale.png"/></a></li>
        <li><a href="https://github.com/rodrigue-malemba" target="blank" rel="noopener noreferrer"><img src="/icons/github.png"/></a></li>
        <li id="contact"><NavLink to="/Contact" className={({isActive}) => (isActive ? "active" : "contact")} >Let's Connect</NavLink></li>
      </ul>
    </nav>
    </>
  );
};


export default Navbar;
