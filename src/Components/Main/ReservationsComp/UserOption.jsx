import { useState } from "react";
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

const occasionList = ["Birthday", "Engagement", "Anniversary"];

const UserOption = () => {
  const [hideValues, setHideValues] = useState({});

  const hideDropeHandler = (hide) => {
    setHideValues(hide);
  };

  return (
    <div className={`grid ${classes["grid-mob"]}`}>
      <div className={classes["drop-holder"]}>
        <h2>occasion</h2>
        <DropeDown title="occasion" onHide={hideDropeHandler}>
          <FaGlassCheers />
          <p>Occasion</p>
          <FaAngleDown />
        </DropeDown>
        {!hideValues.hideOccasion && <DropeList occasions={occasionList} />}
      </div>
      <div className={classes["drop-holder"]}>
        <h2>number of diners</h2>
        <DropeDown title="diner" onHide={hideDropeHandler}>
          <FaUser />
          <p>No.of Diners</p>
          <FaAngleDown />
        </DropeDown>
        {!hideValues.hideDiner && (
          <DropeList title="Diners" minOption="1" maxOption="10" />
        )}
      </div>
      <div className={classes["drop-holder"]}>
        <h2>date</h2>
        <DropeDown title="date" onHide={hideDropeHandler}>
          <FaRegCalendarAlt />
          <p>Select Date</p>
          <FaAngleDown />
        </DropeDown>
      </div>
      <div className={classes["drop-holder"]}>
        <h2>time</h2>
        <DropeDown title="time" onHide={hideDropeHandler}>
          <FaRegClock />
          <p>Select Time</p>
          <FaAngleDown />
        </DropeDown>
        {!hideValues.hideTime && (
          <DropeList title="pm" minOption="4" maxOption="11" />
        )}
      </div>
    </div>
  );
};

export default UserOption;
