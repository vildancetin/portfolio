import { NavLink } from "react-router-dom";
import logo from "../assets/vil_logo.png";
import "animate.css";
import Switch from "./Switch";
const Navbar = () => {
  return (
    <nav className="pt-3 px-auto flex justify-between h-[30px]">
      <NavLink to="/">
        <img
          src={logo}
          alt=""
          className="h-8 animate__animated animate-bounce"
        />
      </NavLink>

      <ul className="flex gap-8 text-xl font-poppins justify-center uppercase font-bold mx-auto">
        <li>
          <NavLink to="/about" className="text-blue">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="text-blue">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-blue">
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch />
    </nav>
  );
};

export default Navbar;
