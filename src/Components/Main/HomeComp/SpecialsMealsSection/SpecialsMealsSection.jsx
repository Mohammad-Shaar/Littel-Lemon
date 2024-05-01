import { Link } from "react-router-dom";
import classes from "./SpecialsMealsSection.module.css";
import MealsCard from "./MealsCard";

const SpecialsMealsSection = () => {
  return (
    <section className={classes["specilal-meal-section"]}>
      <div className="container">
        <div className={classes.heading}>
          <h1>this week specials!</h1>
        </div>
        <MealsCard />
        <div className={classes["view-btn"]}>
          <Link to="menuitems" className="link">
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialsMealsSection;
