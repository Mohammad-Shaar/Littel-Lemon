import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./DrinkSec.module.css";
import drink1 from "../../../../assets/drink1.jpg";
import drink2 from "../../../../assets/drink2.jpg";
import drink3 from "../../../../assets/drink3.jpg";
import drink4 from "../../../../assets/drink4.jpg";
import drink5 from "../../../../assets/drink5.jpg";

const OURMEALS = [
  {
    id: "dr1",
    title: "Raspberry syrup",
    price: 4.99,
    img: drink1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "dr2",
    title: "Lemonade",
    price: 3.5,
    img: drink2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "dr3",
    title: "Coconut syrup",
    price: 4.5,
    img: drink3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "dr4",
    title: "Coffee",
    price: 4,
    img: drink4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "dr5",
    title: "Iced coffee",
    price: 5.99,
    img: drink5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
];

const MealsSec = () => {
  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>Drinks:</h1>
        <div className={`grid ${classes.grid}`}>
          {OURMEALS.map((meal) => (
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
