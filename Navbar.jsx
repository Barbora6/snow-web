import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Skipas } from "../pages/button/Skipas";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className="navigation">
        <div className="nav-header">
          <img src={logo} alt="logo Benecko" />
          <button onClick={() => setShowMenu(!showMenu)}>
            <RxHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
        <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
          <ul>
            <li>
              <Link to="/home">
                Domů
              </Link>
            </li>
            <li>
              <Link to="/accomodation">
                Ubytování
              </Link>
            </li>
            <li>
              <Link to="/weatherApp">
                Počasí
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/cardGuest">
                Karta hosta
              </Link>
            </li>
            <li>
              <Skipas />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
