import classes from "./CommintSection.module.css";
import PeopleCommint from "./PeopleCommint";
import Carousel from "../../../UI/Carousel/Carousel";

const CommintSection = () => {
  return (
    <section className={classes["com-sec"]}>
      <div className="container">
        <h1>What people say about us!</h1>
        <PeopleCommint />
        <Carousel />
      </div>
    </section>
  );
};

export default CommintSection;
