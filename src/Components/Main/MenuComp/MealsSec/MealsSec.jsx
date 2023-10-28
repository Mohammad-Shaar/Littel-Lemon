import { useSelector } from "react-redux";
import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./MealsSec.module.css";

const MealsSec = () => {
  const ourMeals = useSelector((state) => state.menuItems.meals);
  console.log(ourMeals);
  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>meals:</h1>
        <div className={`grid ${classes.grid}`}>
          {ourMeals.map((meal) => (
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
