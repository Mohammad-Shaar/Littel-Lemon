import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/logInState";
import classes from "./SignUp.module.css";
import useInput from "../../Hooks/use-input";
import Input from "../UI/Input/Input";

const SignUp = ({ onClickBack }) => {
  const dispatch = useDispatch();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasError, setHasError] = useState(null);

  const {
    enterdInput: enterdFirstName,
    inputIsInValid: firstNameInputHasError,
    inputIsValid: enterdFirstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
  } = useInput((value) => value.trim() !== "");

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
    enterdFirstNameIsValid &&
    enterdEmailIsValid &&
    enterdPasswordIsValid &&
    !isSubmiting;

  const submitSinUpHandler = async (e) => {
    e.preventDefault();

    try {
      setHasError(null);
      setIsSubmiting(true);
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify({
          firstName: enterdFirstName,
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
      setHasError(err.message || "Something went wrong!");
    }
    setIsSubmiting(false);
  };
  return (
    <>
      {hasError && <p className={classes.errorMassege}>{hasError}</p>}
      <form className={classes["sin-form"]} onSubmit={submitSinUpHandler}>
        <Input
          label="Name"
          hasError={firstNameInputHasError}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
          input={{
            id: "userFirstName",
            name: "firstName",
            autoComplete: "name",
            type: "text",
            max: "20",
            placeholder: "First name",
            value: enterdFirstName,
          }}
        />
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
          <button
            className="button button--alt"
            type="button"
            onClick={onClickBack}
          >
            Back
          </button>
          <button className="button" disabled={!disableBtn}>
            {isSubmiting && !hasError ? "Signing..." : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;