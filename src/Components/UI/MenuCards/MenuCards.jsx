import { Link } from "react-router-dom";
import classes from "./MenuCards.module.css";

const MenuCards = (props) => {
  return (
    <li className={classes["menu-card"]}>
      <img src={props.img} className={classes.img} loading="lazy" />
      <div className={classes.title}>
        <div className="flex">
          <h2>{props.title}</h2>
          <p className={classes.price}>${props.price.toFixed(2)}</p>
        </div>
        <p className={classes.desc}>{props.desc}</p>
        <Link to={`${props.id}`} className={`link ${classes.details}`}>
          View Details
        </Link>
      </div>
    </li>
  );
};

export default MenuCards;
