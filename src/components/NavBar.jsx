import { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as BurgerIcon } from "../assets/burger.svg";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="NavBar">
      <div className="NavBar__inner">
        <Logo className="NavLogoSvg" />
        <button className="BurgerMenu" onClick={toggleMenu}>
          <BurgerIcon />
        </button>

        <ul className={showMenu ? "NavLinks show" : "NavLinks"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/code">Code</NavLink>
          </li>
          <li>
            <NavLink to="/donate">Donate</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <button className="closeBtn" onClick={toggleMenu}>
              X
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
