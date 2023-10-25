import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import classes from "./LogOut.module.css";
import Modal from "../UI/Card/Modal";

const LogOut = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(logInAction.togelLogCard());
  };

  const logOutHandler = () => {
    dispatch(logInAction.logOut());
    dispatch(logInAction.togelLogCard());
  };

  return (
    <Modal onClose={closeHandler} id="formCard">
      <p className={classes.warning}>Are you sure you want to log out?</p>
      <div className={classes.actions}>
        <button className={`button ${classes.button}`} onClick={closeHandler}>
          No
        </button>
        <button
          className={`button ${classes["button--alt"]}`}
          onClick={logOutHandler}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default LogOut;
