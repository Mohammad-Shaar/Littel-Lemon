import { useSelector } from "react-redux";
import classes from "./UserOption.module.css";
import { FaUser, FaGlassCheers, FaRegClock, FaAngleDown } from "react-icons/fa";
import DropeDown from "../../../UI/DropeDown/DropeDown";
import DropeDownDatePicker from "../../../UI/DropeDown/DropeDownDatePicker";
import DropeList from "./DropeList";

const occasionList = ["Birthday", "Engagement", "Anniversary"];

const UserOption = () => {
  const hide = useSelector((state) => state.dropeState);
  const optionValue = useSelector((state) => state.reservation.option);
  const optionClickedForCheckedClasse = useSelector(
    (state) => state.reservation.clickedOption
  );

  return (
    <div className={`grid ${classes["grid-mob"]}`}>
      <div className={classes["drop-holder"]}>
        <h2>occasion</h2>
        <DropeDown
          title="occasion"
          checked={optionClickedForCheckedClasse.clickedOccasion}
        >
          <FaGlassCheers />
          <p>{optionValue.occasion}</p>
          <FaAngleDown />
        </DropeDown>
        {!hide.hideOccasion && <DropeList occasions={occasionList} />}
      </div>
      <div className={classes["drop-holder"]}>
        <h2>number of diners</h2>
        <DropeDown
          title="diner"
          checked={optionClickedForCheckedClasse.clickedDiners}
        >
          <FaUser />
          <p>{optionValue.diners}</p>
          <FaAngleDown />
        </DropeDown>
        {!hide.hideDiner && (
          <DropeList title="Diners" minOption="1" maxOption="10" />
        )}
      </div>
      <div className={classes["drop-holder"]}>
        <h2>date</h2>
        <DropeDownDatePicker
          title="date"
          checked={optionClickedForCheckedClasse.clickedDate}
        />
      </div>
      <div className={classes["drop-holder"]}>
        <h2>time</h2>
        <DropeDown
          title="time"
          checked={optionClickedForCheckedClasse.clickedTime}
        >
          <FaRegClock />
          <p>{optionValue.time}</p>
          <FaAngleDown />
        </DropeDown>
        {!hide.hideTime && (
          <DropeList title="pm" minOption="5" maxOption="10" />
        )}
      </div>
    </div>
  );
};

export default UserOption;
