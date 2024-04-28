import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import classes from "./logInForm.module.css";
import useInput from "../../Hooks/use-input";
import Input from "../UI/Input/Input";

const LogInForm = () => {
  const dispatch = useDispatch();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasError, setHasError] = useState(null);

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

  const disableBtn =
    enterdEmailIsValid && enterdPasswordIsValid && !isSubmiting;

  const submitLogHandler = async (e) => {
    e.preventDefault();

    try {
      setHasError(null);
      setIsSubmiting(true);
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          email: enterdEmail,
          password: enterdPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message);
      }

      localStorage.setItem("isLogged", "1");
      setIsSubmiting(false);
      dispatch(logInAction.logIn());
      dispatch(logInAction.togelLogCard());
    } catch (err) {
      setHasError(err.message || "something went wrong!");
    }
    setIsSubmiting(false);
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
