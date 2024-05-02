import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import { useNavigate } from "react-router-dom";
import classes from "./LogOut.module.css";
import Modal from "../UI/Card/Modal";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  const logOutHandler = () => {
    localStorage.removeItem("isLogged");
    dispatch(logInAction.logOut());
    navigate("..");
  };

  return (
    <Modal onClose={closeHandler} id="formCard">
      <p className={classes.warning}>Are you sure you want to log out?</p>
      <div className={classes.actions}>
        <button className={`button`} onClick={closeHandler}>
          No
        </button>
        <button className={`button button--alt`} onClick={logOutHandler}>
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default LogOut;
