import React from "react";
import Logo from "../assets/img/LogoJaziel.svg";
import Navigation from "../Routes/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="center">
        <div className="logo">
          <img
            src={Logo}
            alt="logotico"
            className="app-logo"
          />
          <span className="brand">
            <strong>Ing. </strong>Sistemas Computacionales
          </span>
        </div>

        <Navigation />
        {/* <nav id="menu" className="menu">
          <ul>
            <li>
              <a href="./index.html">Inicio</a>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./formulario.html">Formulario</a>
            </li>
            <li>
              <a href="">Pagina 1</a>
            </li>
            <li>
              <a href="">Pagina 2</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
