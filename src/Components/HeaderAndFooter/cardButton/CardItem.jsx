// import classes from "./CardItem.module.css";

const CardItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;

  // const listClasses = `${classes["cart-item"]} ${
  //   props.disabelBtn ? classes["cart-item-block"] : ""
  // }`;
  return (
    <li>
      {/* <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>−</button>
        <button>+</button>
      </div> */}
    </li>
  );
};

export default CardItem;
