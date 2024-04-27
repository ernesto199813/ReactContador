import React, { useState } from "react";

import "./Navegacion.css";

import { Link, NavLink } from "react-router-dom";

export const Navegacion = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Login">Inicio de sesion</NavLink>
        </li>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};