import { Outlet } from "react-router-dom";
import classes from "./MenuItems.module.css";
import useFetch from "../../../../Hooks/use-fetch";
import MenuCards from "../../../UI/MenuCards/MenuCards";

const MealsSec = ({ items }) => {
  const { meals, isLodding, hasError } = useFetch(
    `/menuitems?category=${items}`
  );

  const mealsList =
    meals.length !== 0
      ? meals.map((meal) => (
          <MenuCards
            key={meal._id}
            title={meal.title}
            price={meal.price}
            img={meal.img}
            desc={meal.desc}
            id={meal._id}
          />
        ))
      : !isLodding &&
        !hasError && (
          <p className={classes["p-center"]}>
            Sorry, No meals avilable right now
          </p>
        );

  let content;
  if (isLodding) {
    content = <p className={`loading`}>Lodding...</p>;
  }
  if (hasError) {
    content = <p className={classes["p-center"]}>{hasError}</p>;
  }

  return (
    <>
      <Outlet />
      <section className={classes.meals}>
        <div className="container">
          <h1>{items}:</h1>
          {!content && <ul className={`grid ${classes.grid}`}>{mealsList}</ul>}
          {content}
        </div>
      </section>
    </>
  );
};

export default MealsSec;
