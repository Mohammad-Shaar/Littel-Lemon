import { useReducer, useEffect } from "react";
import classes from "./DropeDown.module.css";

const initialValue = {
  hideDate: true,
  hideDiner: true,
  hideTime: true,
  hideOccasion: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "date":
      return { ...state, hideDate: !state.hideDate };
    case "diner":
      return { ...state, hideDiner: !state.hideDiner };
    case "time":
      return { ...state, hideTime: !state.hideTime };
    case "occasion":
      return { ...state, hideOccasion: !state.hideOccasion };
    default:
      return state;
  }
};

const DropeDown = (props) => {
  const [hide, dispatchHide] = useReducer(reducer, initialValue);

  const dropeHandler = (title) => {
    dispatchHide({ type: title });
  };

  useEffect(() => {
    props.onHide(hide);
  }, [hide]);

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
