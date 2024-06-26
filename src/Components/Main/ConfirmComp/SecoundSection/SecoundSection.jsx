import classes from "./SecoundSection.module.css";
import reserv1 from "../../../../assets/reserv1.jpg";
import reserv2 from "../../../../assets/reserv2.jpg";
import reserv3 from "../../../../assets/reserv3.jpg";

const SecoundSection = () => {
  return (
    <section className={classes.secound}>
      <div className="container">
        <div className={classes["center-link"]}>
          <button className="button" form="confirm-reservation">
            Confirm Reservation
          </button>
        </div>
        <div className={classes.imgs}>
          <div>
            <img src={reserv1} loading="lazy" />
          </div>
          <div>
            <img src={reserv2} loading="lazy" />
          </div>
          <div className={classes.therd}>
            <img src={reserv3} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecoundSection;
