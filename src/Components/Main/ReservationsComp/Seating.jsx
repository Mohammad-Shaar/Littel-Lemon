import classes from "./Seating.module.css";

const Seating = () => {
  return (
    <form className={classes.form}>
      <fieldset className="grid">
        <div className={`flex ${classes.option}`}>
          <label htmlFor="in" className={classes.label}>
            Indoor seating
          </label>
          <input
            type="radio"
            id="in"
            name="seating"
            value="indoor"
            defaultChecked
          />
        </div>
        <div className={`flex ${classes.option}`}>
          <label htmlFor="out" className={classes.label}>
            Outdoor seating
          </label>
          <input type="radio" id="out" name="seating" value="outdoor" />
        </div>
      </fieldset>
    </form>
  );
};

export default Seating;
