import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import usePostData from "../../Hooks/use-PostData";
import classes from "./SignUp.module.css";
import useInput from "../../Hooks/use-input";
import Input from "../UI/Input/Input";

const SignUp = ({ onClickBack }) => {
  const dispatch = useDispatch();

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

  const { donePosting, isSubmiting, hasError, submitData } = usePostData(
    "http://localhost:3000/register"
  );

  useEffect(() => {
    if (donePosting) {
      localStorage.setItem("isLogged", "1");
      dispatch(logInAction.logIn());
      dispatch(logInAction.togelLogCard());
    }
  }, [donePosting]);

  const disableBtn =
    enterdFirstNameIsValid &&
    enterdEmailIsValid &&
    enterdPasswordIsValid &&
    !isSubmiting;

  const submitSinUpHandler = async (e) => {
    e.preventDefault();

    await submitData(() => ({
      firstName: enterdFirstName,
      email: enterdEmail,
      password: enterdPassword,
    }));
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
