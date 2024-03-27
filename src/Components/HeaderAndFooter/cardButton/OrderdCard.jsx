import { useDispatch } from "react-redux";
import { orderdCardAction } from "../../../Store/orderdCardState";
import styles from "./orderdCard.module.css";
import CardIcon from "./CardIcon";

const HeaderCardButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.button}
      onClick={() => dispatch(orderdCardAction.togelOrderdCard())}
    >
      <span className={styles["icon"]}>
        <CardIcon />
      </span>
      <span>
        <span className={styles.word}>Your</span>Card
      </span>
    </button>
  );
};

export default HeaderCardButton;
