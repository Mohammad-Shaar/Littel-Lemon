import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const location = useLocation();
  const logState = useSelector((state) => state.logInState.isLogIn);

  let loginRoute = location.pathname;
  let logoutRoute = location.pathname;
  // console.log(loginRoute);

  if (!loginRoute.endsWith("login")) {
    loginRoute += loginRoute.endsWith("/") ? "login" : "/login";
  }

  if (!logoutRoute.endsWith("logout")) {
    logoutRoute += logoutRoute.endsWith("/") ? "logout" : "/logout";
  }

  return (
    <ul
      className={`${classes["header-nav"]} ${
        props.hideNav ? classes.hide : ""
      }`}
    >
      <li onClick={props.onClick}>
        <NavLink
          to="/Littel-Lemon"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          home
        </NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink
          to="/Littel-Lemon/menuitems"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          menu
        </NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink
          to="/Littel-Lemon/reservations"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          reservations
        </NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink
          to="/Littel-Lemon/about"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          about
        </NavLink>
      </li>
      {!logState && (
        <li onClick={props.onClick}>
          <NavLink
            to={loginRoute}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            LogIn
          </NavLink>
        </li>
      )}
      {logState && (
        <li onClick={props.onClick}>
          <NavLink
            to={logoutRoute}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            LogOut
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavBar;
