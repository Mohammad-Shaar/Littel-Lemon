import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import logo from "../../assets/Logo.jpg";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import NavBar from "./NavBar";
import OrderdCard from "./cardButton/OrderdCard";

const MainNavigation = () => {
  const [hideNav, setHideNav] = useState(true);
  const logInCard = useSelector((state) => state.logInState.isLogIn);

  const togelNav = () => {
    setHideNav(!hideNav);
  };

  const closeNav = () => {
    setHideNav(true);
  };

  return (
    <header className={classes.header}>
      <nav className="container flex">
        <Link to="/Littel-Lemon/" className={classes.logo}>
          <img src={logo} />
        </Link>
        <NavBar hideNav={hideNav} onClick={closeNav} />
        {logInCard && <OrderdCard />}
        <div className={classes["brger-icon"]} onClick={togelNav}>
          <BurgerMenu open={hideNav} />
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
