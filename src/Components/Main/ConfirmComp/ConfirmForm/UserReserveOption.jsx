import { useSelector } from "react-redux";
import {
  FaUser,
  FaGlassCheers,
  FaRegClock,
  FaRegCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import classes from "./UserReserveOption.module.css";

const UserReserve = () => {
  const optionValue = useSelector((state) => state.reservation.option);
  const seatingOption = useSelector((state) => state.confirming.seating);
  const clickedReserv = useSelector(
    (state) => state.reservation.clickedOnReserv
  );
  const reservWorning = {
    occ: optionValue.occasion === "Occasion" && clickedReserv,
    diner: optionValue.diners === "No.of Diners" && clickedReserv,
    date: optionValue.date === "Select Date" && clickedReserv,
    time: optionValue.time === "Select Time" && clickedReserv,
  };

  return (
    <div className={`grid ${classes["user-reserve"]}`}>
      <div className={reservWorning.occ ? classes.worning : ""}>
        {reservWorning.occ ? <FaExclamationTriangle /> : <FaGlassCheers />}
        <p>{optionValue.occasion}</p>
      </div>
      <div className={reservWorning.diner ? classes.worning : ""}>
        {reservWorning.diner ? <FaExclamationTriangle /> : <FaUser />}
        <p>{optionValue.diners}</p>
      </div>
      <div className={reservWorning.date ? classes.worning : ""}>
        {reservWorning.date ? <FaExclamationTriangle /> : <FaRegCalendarAlt />}
        <p>{optionValue.date}</p>
      </div>
      <div className={reservWorning.time ? classes.worning : ""}>
        {reservWorning.time ? <FaExclamationTriangle /> : <FaRegClock />}
        <p>{optionValue.time}</p>
      </div>
      <div className="grid-col-span-2">
        <p className={classes["show-seating"]}>{seatingOption}</p>
      </div>
    </div>
  );
};

export default UserReserve;
