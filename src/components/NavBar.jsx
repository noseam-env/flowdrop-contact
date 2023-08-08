import { useState } from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

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
          <span></span>
          <span></span>
          <span></span>
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

// import "../styles/NavBar.css";
// import { NavLink } from "react-router-dom";
// import Logo from "../assets/Logo.png";

// export default function NavBar() {
//   return (
//     <div className="NavBar">
//       <div className="NavLogo">
//         <img className="navLogo" src={Logo} alt="not found" />
//       </div>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/code">Code</NavLink>
//         </li>
//         <li>
//           <NavLink to="/donate">Donate</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }
