import { useReducer, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meals, isLodding, hasError } = useFetch(`/menuitems/${id}`);
  const [state, dispatchFn] = useReducer(reducer, { amount: 1 });
  const [warningMassege, setWarningMassege] = useState(undefined);
  const logIn = useSelector((state) => state.logInState.isLogIn);

  let content;
  if (isLodding) {
    content = <p>Loading...</p>;
  } else if (hasError) {
    content = <p>{hasError}</p>;
  }

  const mealDetails =
    meals.length !== 0
      ? meals
      : !isLodding && !hasError && <p>Sorry, the meal is not available!</p>;

  let mealPrice;
  let totalPrice;
  if (mealDetails?.price) {
    mealPrice = mealDetails.price.toFixed(2);
    totalPrice = (mealPrice * state.amount).toFixed(2);
  }

  const orderHandler = () => {
    if (!logIn) {
      setWarningMassege(
        <p className={classes.errorMassege}>You should login first!</p>
      );
      return;
    }
    dispatch(
      orderdItemsAction.addItems({
        id: mealDetails._id,
        title: mealDetails.title,
        price: Number(mealPrice),
        amount: state.amount,
        amountPrice: Number(totalPrice),
      })
    );
    navigate("..");
  };

  return (
    <Modal onClose={() => navigate("..")}>
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
          <Link className="link" onClick={orderHandler}>
            Add to cart
          </Link>
        )}
        {warningMassege}
      </div>
    </Modal>
  );
};

export default ItemCard;
