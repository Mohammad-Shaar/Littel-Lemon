import { NavLink } from "react-router-dom";
import classes from "./OptionMenu.module.css";

const OptionMenu = () => {
  return (
    <section className={classes["option-menu"]}>
      <div className="container flex">
        <h1>Our Menu</h1>
        <ul className="flex">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="desserts"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              desserts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="drinks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              drinks
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OptionMenu;
