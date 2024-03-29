import classes from "./CardItem.module.css";
import { useDispatch } from "react-redux";
import { orderdItemsAction } from "../../../Store/orderdItems";

const CardItem = ({ id, title, price, amount }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(orderdItemsAction.removeItem({ id }));
  };

  const addItemHandler = () => {
    dispatch(orderdItemsAction.addItem({ id }));
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <p className={classes.title}>{title}</p>
        <div className={classes.summary}>
          <p className={classes.price}>${price.toFixed(2)}</p>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CardItem;
