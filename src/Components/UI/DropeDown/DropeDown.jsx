import { useDispatch } from "react-redux";
import { dropeStateAction } from "../../../Store/dropeDownState";
import classes from "./DropeDown.module.css";

const DropeDown = (props) => {
  const dispatch = useDispatch();

  const dropeHandler = (title) => {
    switch (title) {
      case "diner":
        dispatch(dropeStateAction.dinerState());
        break;
      case "time":
        dispatch(dropeStateAction.timeState());
        break;
      case "occasion":
        dispatch(dropeStateAction.occasionState());
        break;
    }
  };

  return (
    <button
      onClick={() => dropeHandler(props.title)}
      className={`flex ${classes.drope}`}
    >
      {props.children}
    </button>
  );
};

export default DropeDown;
