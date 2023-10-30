import classes from "./CommintCard.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CommintCard = (props) => {
  const { rating } = props;
  let stars = [];

  for (let i = 0; i < parseInt(rating); i++) {
    stars.push(<FaStar key={i} />);
  }

  if (rating % parseInt(rating) === 0.5) {
    stars.push(<FaStarHalfAlt key={rating} />);
  }

  return (
    <div className={classes["com-card"]}>
      <div>
        <img src={props.img} />
      </div>
      <h2>{props.person}</h2>
      <div className={classes.stars}>{stars.map((star) => star)}</div>
      <p>{props.com}</p>
    </div>
  );
};

export default CommintCard;
