import { Link } from "react-router-dom";
import classes from "./HeroSection.module.css";
import img from "../../../../assets/hero-img.jpg";

const HeroSection = () => {
  return (
    <section className={classes["hero-section"]}>
      <div className={`container flex ${classes.hero}`}>
        <div className={classes.text}>
          <h1>little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twest.
          </p>
          <Link to="reservations" className="link">
            Reserve a Table
          </Link>
        </div>
        <div className={classes["hero-img"]}>
          <img src={img} />
        </div>
      </div>
      <div className={classes.layer}></div>
    </section>
  );
};

export default HeroSection;
