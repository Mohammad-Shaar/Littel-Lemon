import { useSelector } from "react-redux";
import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./DessertSec.module.css";

const MealsSec = () => {
  const ourDesserts = useSelector((state) => state.menuItems.desserts);

  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>deserts:</h1>
        <div className={`grid ${classes.grid}`}>
          {ourDesserts.map((meal) => (
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
