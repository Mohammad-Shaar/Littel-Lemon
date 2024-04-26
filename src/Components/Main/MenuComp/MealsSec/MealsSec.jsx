import { useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/use-fetch";
import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./MealsSec.module.css";
import ItemCard from "../../../UI/ItemCard/ItemCard";

const MealsSec = () => {
  const { id } = useParams();
  const { meals, isLodding, hasError } = useFetch(
    "http://localhost:3000/menuitems?category=meals"
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
      {id && <ItemCard />}
      <section className={classes.meals}>
        <div className="container">
          <h1>meals:</h1>
          <ul className={`grid ${classes.grid}`}>{mealsList}</ul>
          {content}
        </div>
      </section>
    </>
  );
};

export default MealsSec;
