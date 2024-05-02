import { Link, useLocation } from "react-router-dom";
import styles from "./orderdCard.module.css";
import CardIcon from "./CardIcon";

const OrderdCard = () => {
  const location = useLocation();
  let orderdRoute = location.pathname;

  if (!orderdRoute.endsWith("login")) {
    orderdRoute += orderdRoute.endsWith("/") ? "orders" : "/orders";
  }

  return (
    <Link to={orderdRoute} className={styles.button}>
      <span className={styles["icon"]}>
        <CardIcon />
      </span>
      <span>
        <span className={styles.word}>Your</span>Card
      </span>
    </Link>
  );
};

export default OrderdCard;
