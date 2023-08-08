import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavLogo">
        <img className="navLogo" src={Logo} alt="not found" />
      </div>
      <ul>
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
      </ul>
    </div>
  );
}
