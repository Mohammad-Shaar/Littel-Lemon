import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt, FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { dropeStateAction } from "../../../Store/dropeDownState";
import { reservationAction } from "../../../Store/reservation";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DropeDown.module.css";

function DateButton(props) {
  const { checked } = props;
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const hide = useSelector((state) => state.dropeState);
  const dateValue = useSelector((state) => state.reservation.option);

  const clickHandler = () => {
    dispatch(dropeStateAction.dateState());
  };

  // Get today's date
  const today = new Date();

  // Get the date two months from now
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(today.getMonth() + 2);

  return (
    <div>
      <button
        onClick={clickHandler}
        className={`flex ${classes.drope} ${checked ? classes.checked : ""}`}
      >
        <FaRegCalendarAlt />
        <p>
          {selectedDate ? selectedDate.toLocaleDateString() : dateValue.date}
        </p>
        <FaAngleDown />
      </button>
      {!hide.hideDate && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            dispatch(reservationAction.changeDate(date.toLocaleDateString()));
            dispatch(dropeStateAction.dateState());
          }}
          minDate={today}
          maxDate={twoMonthsFromNow}
          inline
        />
      )}
    </div>
  );
}

export default DateButton;
