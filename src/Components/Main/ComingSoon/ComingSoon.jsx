import classes from "./ComingSoon.module.css";
import { FaFaceGrinBeam } from "react-icons/fa6";

const ComingSoon = () => {
  return (
    <section>
      <div className="container">
        <div className={classes.soon}>
          <FaFaceGrinBeam />
          <p>Coming Soon...</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
