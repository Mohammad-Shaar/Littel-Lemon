import classes from "./DropeList.module.css";
import { useDispatch } from "react-redux";
import { reservationAction } from "../../../../Store/reservation";
import { dropeStateAction } from "../../../../Store/dropeDownState";

const initialValue = {
  hideDate: true,
  hideDiner: true,
  hideTime: true,
  hideOccasion: true,
};

const DropeList = (props) => {
  const dispatch = useDispatch();

  let gridOneColum = classes["two-colum"];
  const { title } = props;
  let minOption = Number(props.minOption);
  let maxOption = Number(props.maxOption);
  const occasions = props.occasions;

  const clickHandler = (e) => {
    dispatch(reservationAction.optionValue(e.target.textContent));
    dispatch(dropeStateAction.resetState());
  };

  let fields = [];

  if (title === "Diners") {
    if (minOption === 1) {
      fields.push(`1 Diner`);
      minOption++;
    }
    for (let i = minOption; i <= maxOption; i++) {
      fields.push(`${i} ${title}`);
    }
  } else if (title === "pm") {
    for (let i = minOption; i <= maxOption; i++) {
      fields.push(`${i}:00 ${title}`);
    }
  } else {
    gridOneColum = classes["one-colum"];
    fields = occasions;
  }

  return (
    <ul className={`grid ${classes["drop-list"]} ${gridOneColum}`}>
      {fields.map((field, index) => (
        <li
          onClick={(e) => clickHandler(e)}
          className={classes.field}
          key={index}
        >
          {field}
        </li>
      ))}
    </ul>
  );
};

export default DropeList;
