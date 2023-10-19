import classes from "./UserOption.module.css";
import {
  FaUser,
  FaGlassCheers,
  FaRegCalendarAlt,
  FaRegClock,
  FaAngleDown,
} from "react-icons/fa";
import DropeDown from "../../UI/DropeDown/DropeDown";
import DropeList from "./DropeList";

const UserOption = () => {
  return (
    <div className="grid">
      <div className={classes["drop-holder"]}>
        <h2>date</h2>
        <DropeDown>
          <FaRegCalendarAlt />
          <p>Select Date</p>
          <FaAngleDown />
        </DropeDown>
      </div>
      <div className={classes["drop-holder"]}>
        <h2>number of diners</h2>
        <DropeDown>
          <FaUser />
          <p>No.of Diners</p>
          <FaAngleDown />
        </DropeDown>
        <DropeList title="Diners" />
      </div>
      <div className={classes["drop-holder"]}>
        <h2>occasion</h2>
        <DropeDown>
          <FaGlassCheers />
          <p>Occasion</p>
          <FaAngleDown />
        </DropeDown>
        <DropeList />
      </div>
      <div className={classes["drop-holder"]}>
        <h2>time</h2>
        <DropeDown>
          <FaRegClock />
          <p>Select Time</p>
          <FaAngleDown />
        </DropeDown>
        <DropeList title="pm" />
      </div>
    </div>
  );
};

export default UserOption;
