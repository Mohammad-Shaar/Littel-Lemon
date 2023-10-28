import { useSelector } from "react-redux";
import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./DrinkSec.module.css";

const MealsSec = () => {
  const ourDrinks = useSelector((state) => state.menuItems.drinks);

  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>Drinks:</h1>
        <div className={`grid ${classes.grid}`}>
          {ourDrinks.map((meal) => (
            <MenuCards
              key={meal.id}
              title={meal.title}
              price={meal.price}
              img={meal.img}
              desc={meal.desc}
              id={meal.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealsSec;
