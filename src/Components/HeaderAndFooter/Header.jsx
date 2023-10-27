import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/Logo.jpg";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import NavBar from "./NavBar";

const MainNavigation = () => {
  const [hideNav, setHideNav] = useState(true);
  console.log(hideNav);

  const togelNav = () => {
    setHideNav(!hideNav);
  };
  return (
    <header className={classes.header}>
      <nav className="container flex">
        <Link to="/" className={classes.logo}>
          <img src={logo} />
        </Link>
        <NavBar hideNav={hideNav} />
        <div className={classes["brger-icon"]} onClick={togelNav}>
          <BurgerMenu open={hideNav} />
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
