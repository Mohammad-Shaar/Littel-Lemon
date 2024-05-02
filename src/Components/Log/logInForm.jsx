import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import usePostData from "../../Hooks/use-PostData";
import classes from "./logInForm.module.css";
import useInput from "../../Hooks/use-input";
import Input from "../UI/Input/Input";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    enterdInput: enterdEmail,
    inputIsInValid: emailInputHasError,
    inputIsValid: enterdEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
  } = useInput((value) => value.trim().includes("@"));

  const {
    enterdInput: enterdPassword,
    inputIsInValid: passwordInputHasError,
    inputIsValid: enterdPasswordIsValid,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
  } = useInput((value) => value.trim().length >= 4 && value.trim().length <= 8);

  const { donePosting, isSubmiting, hasError, submitData } = usePostData(
    "http://localhost:3000/login"
  );

  useEffect(() => {
    if (donePosting) {
      localStorage.setItem("isLogged", "1");
      dispatch(logInAction.logIn());
      navigate("..");
    }
  }, [donePosting]);

  const disableBtn =
    enterdEmailIsValid && enterdPasswordIsValid && !isSubmiting;

  const submitLogHandler = async (e) => {
    e.preventDefault();

    await submitData(() => ({
      email: enterdEmail,
      password: enterdPassword,
    }));
  };
  return (
    <>
      {hasError && <p className={classes.errorMassege}>{hasError}</p>}
      <form className={classes["log-form"]} onSubmit={submitLogHandler}>
        <Input
          label="Email"
          hasError={emailInputHasError}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          input={{
            id: "userEmail",
            name: "email",
            autoComplete: "email",
            type: "text",
            placeholder: "you@gmail.com",
            value: enterdEmail,
          }}
        />
        <Input
          label="Password"
          hasError={passwordInputHasError}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          input={{
            id: "password",
            name: "password",
            autoComplete: "off",
            type: "Password",
            placeholder: "*****",
            value: enterdPassword,
          }}
        />
        <div className={classes.subBtn}>
          <button className="button" disabled={!disableBtn}>
            {isSubmiting && !hasError ? "Logging..." : "Log in"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
