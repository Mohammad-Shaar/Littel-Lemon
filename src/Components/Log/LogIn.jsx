import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import classes from "./LogIn.module.css";
import Modal from "../UI/Card/Modal";
import SignUp from "./SignUp";
import LogInForm from "./logInForm";

const LogIn = () => {
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(false);

  const backHandler = () => {
    setSignup(false);
  };

  return (
    <Modal onClose={() => dispatch(logInAction.togelLogCard())} id="formCard">
      {!signup && <LogInForm />}
      {signup && <SignUp onClickBack={backHandler} />}
      {!signup && (
        <p className={classes.sinupMsg}>
          You don&apos;t have an account?{" "}
          <span className={classes.sinup} onClick={() => setSignup(true)}>
            sinup
          </span>
        </p>
      )}
    </Modal>
  );
};

export default LogIn;
