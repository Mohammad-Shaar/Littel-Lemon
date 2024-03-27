import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderdCardAction } from "../../../Store/orderdCardState";
import Modal from "../../UI/Card/Modal";
import CardItem from "./CardItem";
import styles from "./Card.module.css";

const Card = () => {
  const dispatch = useDispatch();

  const closeModuleHandler = () => {
    dispatch(orderdCardAction.togelOrderdCard());
  };

  const orderdItems = useSelector((state) => state.orderdItems.item);
  const totalPrice = useSelector((state) => state.orderdItems.totalPrice);

  return (
    <Modal onClose={closeModuleHandler} id="orderCard">
      <>
        <ul className={styles["cart-items"]}>
          {orderdItems.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ul>
        <div className={styles.total}>
          <span>Total </span>
          <span>${totalPrice}</span>
        </div>
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={closeModuleHandler}
          >
            Close
          </button>
        </div>
      </>
    </Modal>
  );
};

export default Card;
