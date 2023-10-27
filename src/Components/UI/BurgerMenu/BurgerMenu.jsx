import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props) => {
  return (
    <button
      className={`${classes.hamburger} ${!props.open ? classes.open : ""}`}
    >
      <span className={classes["hamburger-top"]}></span>
      <span className={classes["hamburger-middle"]}></span>
      <span className={classes["hamburger-bottom"]}></span>
    </button>
  );
};

export default BurgerMenu;
