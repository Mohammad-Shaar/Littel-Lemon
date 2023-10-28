import MenuCards from "../../../UI/MenuCards/MenuCards";
import classes from "./MealsSec.module.css";
import meal1 from "../../../../assets/meal1.jpg";
import meal2 from "../../../../assets/meal2.jfif";
import meal3 from "../../../../assets/meal3.jfif";
import meal4 from "../../../../assets/meal4.jfif";
import meal5 from "../../../../assets/meal5.jfif";

const OURMEALS = [
  {
    id: "m1",
    title: "Caesar salad",
    price: 9.99,
    img: meal1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "m2",
    title: "Crisp",
    price: 6.99,
    img: meal2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "m3",
    title: "chicken",
    price: 8.5,
    img: meal3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "m4",
    title: "Fajita",
    price: 12.5,
    img: meal4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
  {
    id: "m5",
    title: "rice",
    price: 11,
    img: meal5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde reprehenderit rem.",
  },
];

const MealsSec = () => {
  return (
    <section className={classes.meals}>
      <div className="container">
        <h1>meals:</h1>
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
