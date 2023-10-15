import classes from "./CommintSection.module.css";
import PeopleCommint from "./PeopleCommint";

const CommintSection = () => {
  return (
    <section className={classes["com-sec"]}>
      <div className="container">
        <h1>What people say about us!</h1>
        <PeopleCommint />
      </div>
    </section>
  );
};

export default CommintSection;
