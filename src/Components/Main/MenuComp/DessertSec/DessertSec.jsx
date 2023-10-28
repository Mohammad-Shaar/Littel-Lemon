import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./DessertSec.module.css";
import desert1 from "../../../../assets/desert5.jpg";
import desert2 from "../../../../assets/desert4.jpg";
import desert3 from "../../../../assets/desert2.jpg";
import desert4 from "../../../../assets/desert3.jpg";
import desert5 from "../../../../assets/desert1.jpg";

const OURMEALS = [
  {
    id: "d1",
    title: "cookies",
    price: 8.5,
    img: desert1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "d2",
    title: "cupcake",
    price: 7.99,
    img: desert2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "d3",
    title: "cheese cake",
    price: 9.5,
    img: desert3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "d4",
    title: "Chocolate cake",
    price: 10,
    img: desert4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "d5",
    title: "lemon cake",
    price: 10,
    img: desert5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
];

const MealsSec = () => {
  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>deserts:</h1>
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
