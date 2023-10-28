import classes from "./MealsCard.module.css";
import meal1 from "../../../../assets/meal1.jpg";
import meal2 from "../../../../assets/meal2.jpg";
import meal3 from "../../../../assets/desert1.jpg";
import Card from "../../../UI/Card/Card";

const MEALSDATA = [
  {
    id: "m1",
    img: meal1,
    title: "greek salad",
    price: 12.99,
    description: `The famous greek salad of crispy lettuce. pepers, olives and our
      Chicago style feta chees, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    id: "m2",
    img: meal2,
    title: "bruchetta",
    price: 5.99,
    description: `Our Bruschetta is made from grilled bread that has been smeared with
      garlic and seasoned with salt and olive oil.`,
  },
  {
    id: "m3",
    img: meal3,
    title: "lemon dessert",
    price: 8.99,
    description: `This comes straight from grandma's recipe book, every last ingredient
      has been sourced and is as authentic as can be imagined.`,
  },
];

const MealsCard = () => {
  return (
    <div className={classes["meals-grid"]}>
      {MEALSDATA.map((meal) => (
        <Card
          key={meal.id}
          img={meal.img}
          title={meal.title}
          price={meal.price}
          description={meal.description}
        />
      ))}
    </div>
  );
};

export default MealsCard;
