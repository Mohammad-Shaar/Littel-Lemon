import classes from "./ReservationsSection.module.css";
import Seating from "../Options/Seating";
import UserOption from "../Options/UserOption";

const ReservationsSection = () => {
  return (
    <section className={classes["reservation-sec"]}>
      <div className="container">
        <h1 className={classes.title}>reservations</h1>
        <Seating />
        <UserOption />
      </div>
    </section>
  );
};

export default ReservationsSection;
