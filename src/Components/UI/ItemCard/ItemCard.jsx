import classes from "./ItemCard.module.css";
import { useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderdItemsAction } from "../../../Store/orderdItems";
import useFetch from "../../../Hooks/use-fetch";
import Modal from "../Card/Modal";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state.amount < 9) {
        return { amount: state.amount + 1 };
      }
      return state;
    case "decrement":
      if (state.amount > 1) {
        return { amount: state.amount - 1 };
      }
      return state;
    default:
      return state;
  }
};

const ItemCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { meals, isLodding, hasError } = useFetch(
    "http://localhost:3000/menu?id=" + id
  );
  const [state, dispatchFn] = useReducer(reducer, { amount: 1 });

  let content;
  if (isLodding) {
    content = <p>Lodding...</p>;
  }
  if (hasError) {
    content = <p>{hasError}</p>;
  }

  const mealDetails =
    meals.length !== 0
      ? meals[0]
      : !isLodding && !hasError && <p>Sorry, No meals avilable right now</p>;

  let mealPrice;
  let totalPrice;
  if (mealDetails.price) {
    mealPrice = mealDetails.price.toFixed(2);
    let multi = mealPrice * state.amount;
    totalPrice = multi.toFixed(2);
  }

  const orderHandler = () => {
    dispatch(
      orderdItemsAction.addItems({
        id: mealDetails.id,
        title: mealDetails.title,
        price: mealDetails.price,
        amount: state.amount,
        amountPrice: mealDetails.price * state.amount,
      })
    );
  };

  return (
    <Modal>
      {content}
      {!content && (
        <>
          <img src={mealDetails.img} className={classes.img} loading="lazy" />
          <div className={classes.title}>
            <div className="flex">
              <h2>{mealDetails.title}</h2>
              <p className={classes.price}>${mealPrice}</p>
            </div>
            <p className={classes.desc}>{mealDetails.desc}</p>
          </div>
          <div className={classes["total-price"]}>
            <p className={classes.total}>Total: ${totalPrice}</p>
            <div className={classes.actions}>
              <button onClick={() => dispatchFn({ type: "decrement" })}>
                -
              </button>
              <p className={classes["item-amount"]}>{state.amount}</p>
              <button onClick={() => dispatchFn({ type: "increment" })}>
                +
              </button>
            </div>
          </div>
        </>
      )}
      <div className={classes.btns}>
        <Link to=".." className="link">
          Cencel
        </Link>
        {!content && (
          <Link to=".." className="link" onClick={orderHandler}>
            Add to card
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default ItemCard;
