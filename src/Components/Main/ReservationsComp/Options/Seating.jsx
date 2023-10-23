import { useDispatch, useSelector } from "react-redux";
import { confirmingAction } from "../../../../Store/confirming";
import classes from "./Seating.module.css";

const Seating = () => {
  const dispatch = useDispatch();
  const chekedValue = useSelector((state) => state.confirming.seating);
  const handleOptionChange = (e) => {
    dispatch(confirmingAction.seatingState(e.target.value));
  };

  return (
    <div className={classes["seating-option"]}>
      <fieldset className="grid">
        <div className={`flex ${classes.option}`}>
          <label htmlFor="in" className={classes.label}>
            Indoor seating
          </label>
          <input
            type="radio"
            id="in"
            name="seating"
            value="Indoor seating"
            checked={chekedValue === "Indoor seating"}
            onChange={handleOptionChange}
          />
        </div>
        <div className={`flex ${classes.option}`}>
          <label htmlFor="out" className={classes.label}>
            Outdoor seating
          </label>
          <input
            type="radio"
            id="out"
            name="seating"
            value="Outdoor seating"
            checked={chekedValue === "Outdoor seating"}
            onChange={handleOptionChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Seating;
