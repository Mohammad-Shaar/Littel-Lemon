import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const logState = useSelector((state) => state.logInState.isLogIn);

  const logHandler = () => {
    dispatch(logInAction.togelLogCard());
  };
  return (
    <ul
      className={`${classes["header-nav"]} ${
        props.hideNav ? classes.hide : ""
      }`}
    >
      <li onClick={props.onClick}>
        <NavLink
          to="/Littel-Lemon/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          home
        </NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink
          to="/Littel-Lemon/menu"
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
      <li onClick={props.onClick}>
        <button className={classes.log} onClick={logHandler}>
          {logState ? "LogOut" : "LogIn"}
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
