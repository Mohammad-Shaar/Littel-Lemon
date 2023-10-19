import classes from "./ReservationsSection.module.css";
import Seating from "./Seating";
import UserOption from "./UserOption";

const ReservationsSection = () => {
  return (
    <section className={classes["reservation-sec"]}>
      <div className="container">
        <h1 className={classes.title}>Reservations</h1>
        <Seating />
        <UserOption />
      </div>
    </section>
  );
};

export default ReservationsSection;
