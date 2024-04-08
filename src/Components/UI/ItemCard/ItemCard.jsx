import { useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderdItemsAction } from "../../../Store/orderdItems";
import useFetch from "../../../Hooks/use-fetch";
import Modal from "../Card/Modal";
import classes from "./ItemCard.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.amount < 9 ? { ...state, amount: state.amount + 1 } : state;
    case "decrement":
      return state.amount > 1 ? { ...state, amount: state.amount - 1 } : state;
    default:
      return state;
  }
};

const ItemCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { meals, isLodding, hasError } = useFetch(
    `http://localhost:3000/menu?id=${id}`
  );
  const [state, dispatchFn] = useReducer(reducer, { amount: 1 });

  let content;
  if (isLodding) {
    content = <p>Loading...</p>;
  } else if (hasError) {
    content = <p>{hasError}</p>;
  }

  const mealDetails =
    meals.length !== 0
      ? meals[0]
      : !isLodding && !hasError && <p>Sorry, no meals available right now</p>;

  let mealPrice;
  let totalPrice;
  if (mealDetails?.price) {
    mealPrice = mealDetails.price.toFixed(2);
    totalPrice = (mealPrice * state.amount).toFixed(2);
  }

  const orderHandler = () => {
    dispatch(
      orderdItemsAction.addItems({
        id: mealDetails.id,
        title: mealDetails.title,
        price: Number(mealPrice),
        amount: state.amount,
        amountPrice: Number(totalPrice),
      })
    );
  };

  return (
    <Modal>
      {content || (
        <>
          <img
            src={mealDetails.img}
            className={classes.img}
            alt={mealDetails.title}
          />
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
        <Link to=".." className="link button--alt">
          Cancel
        </Link>
        {!content && (
          <Link to=".." className="link" onClick={orderHandler}>
            Add to cart
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default ItemCard;
