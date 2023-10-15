import { NavLink, Link } from "react-router-dom";

import classes from "./Header.module.css";
import logo from "../../assets/Logo.jpg";

const MainNavigation = () => {
  return (
    <header>
      <nav className="container flex">
        <Link to="/" className={classes.logo}>
          <img src={logo} />
        </Link>
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orderonline"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              order Online
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              logIn
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
