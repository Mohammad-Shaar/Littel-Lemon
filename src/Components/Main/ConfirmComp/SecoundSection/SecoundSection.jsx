import classes from "./SecoundSection.module.css";
import reserv1 from "../../../../assets/reserv1.jpg";
import reserv2 from "../../../../assets/hero-img.jpg";
// import reserv1 from "../../../../assets/reserv1.jpg";

const SecoundSection = () => {
  return (
    <section className={classes.secound}>
      <div className="container">
        <div className={classes.imgs}>
          <div>
            <img src={reserv1} />
          </div>
          <div>
            <img src={reserv2} />
          </div>
          <div className={classes.therd}>
            <img src={reserv2} />
          </div>
        </div>
        <div className={classes["center-link"]}>
          <button className="button">Confirm Reservation</button>
        </div>
      </div>
    </section>
  );
};

export default SecoundSection;
