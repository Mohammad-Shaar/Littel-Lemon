import useFetch from "../../../../Hooks/use-fetch";
import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./MealsSec.module.css";

const MealsSec = () => {
  const { meals, isLodding, hasError } = useFetch(
    "http://localhost:3000/menu?category=meals"
  );

  const mealsList =
    meals.length !== 0
      ? meals.map((meal) => (
          <MenuCards
            key={meal.id}
            title={meal.title}
            price={meal.price}
            img={meal.img}
            desc={meal.desc}
            id={meal.id}
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
    content = <p className={classes.loading}>Lodding...</p>;
  }
  if (hasError) {
    content = <p className={classes["p-center"]}>{hasError}</p>;
  }

  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>meals:</h1>
        <ul className={`grid ${classes.grid}`}>{mealsList}</ul>
        {content}
      </div>
    </section>
  );
};

export default MealsSec;
