import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <li className={classes.card}>
      <div>
        <img src={props.img} loading="lazy" />
      </div>
      <div className={classes.head}>
        <h2>{props.title}</h2>
        <p className={classes.price}>${props.price}</p>
      </div>
      <p className={classes.description}>{props.description}</p>
    </li>
  );
};

export default Card;
