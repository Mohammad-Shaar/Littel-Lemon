import classes from "./LocationSec.module.css";

const LocationSec = () => {
  return (
    <section className={classes.location}>
      <div className={`container ${classes.text}`}>
        <h1>hours & location</h1>
        <p>1600 20th St</p>
        <p>Chicago, IL 60611</p>
        <h2>open every day of week</h2>
        <p>5 PM - 10 PM</p>
      </div>
    </section>
  );
};

export default LocationSec;
