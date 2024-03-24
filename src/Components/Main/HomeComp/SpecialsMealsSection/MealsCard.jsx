import useFetch from "../../../../Hooks/use-fetch";
import classes from "./MealsCard.module.css";
import Card from "../../../UI/Card/Card";

const MealsCard = () => {
  const { meals, isLodding, hasError } = useFetch(
    "http://localhost:3000/specials"
  );

  const mealsList =
    meals.length !== 0
      ? meals.map((meal) => (
          <Card
            key={meal.id}
            img={meal.img}
            title={meal.title}
            price={meal.price}
            description={meal.description}
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
    <>
      <ul className={classes["meals-grid"]}>{mealsList}</ul>
      {content}
    </>
  );
};

export default MealsCard;
