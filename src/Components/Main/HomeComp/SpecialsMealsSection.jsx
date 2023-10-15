import classes from "./SpecialsMealsSection.module.css";
import Button from "../../UI/Button/Button";
import MealsCard from "./MealsCard";

const SpecialsMealsSection = () => {
  return (
    <section className={classes["specilal-meal-section"]}>
      <div className="container">
        <div className={`flex ${classes.heading}`}>
          <h1>this week specials!</h1>
          <Button>Online Menu</Button>
        </div>
        <MealsCard />
      </div>
    </section>
  );
};

export default SpecialsMealsSection;
