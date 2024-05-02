import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LogIn.module.css";
import Modal from "../UI/Card/Modal";
import SignUp from "./SignUp";
import LogInForm from "./logInForm";

const LogIn = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);

  const backHandler = () => {
    setSignup(false);
  };

  return (
    <Modal onClose={() => navigate("..")} id="formCard">
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
