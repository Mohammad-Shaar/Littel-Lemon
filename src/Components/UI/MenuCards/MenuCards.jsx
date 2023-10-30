import classes from "./MenuCards.module.css";

const MenuCards = (props) => {
  return (
    <div className={classes["menu-card"]}>
      <img src={props.img} className={classes.img} loading="lazy" />
      <div className={classes.title}>
        <div className="flex">
          <h2>{props.title}</h2>
          <p className={classes.price}>${props.price.toFixed(2)}</p>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default MenuCards;
