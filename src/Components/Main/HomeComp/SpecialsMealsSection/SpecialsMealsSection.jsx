import { Link } from "react-router-dom";
import classes from "./SpecialsMealsSection.module.css";
import MealsCard from "./MealsCard";

const SpecialsMealsSection = () => {
  return (
    <section className={classes["specilal-meal-section"]}>
      <div className="container">
        <div className={`flex ${classes.heading}`}>
          <h1>this week specials!</h1>
          <Link to="/orderonline" className="link">
            Online Menu
          </Link>
        </div>
        <MealsCard />
      </div>
    </section>
  );
};

export default SpecialsMealsSection;
