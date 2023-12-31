import { useDispatch } from "react-redux";
import { logInAction } from "../../Store/LogInState";
import classes from "./LogIn.module.css";
import useInput from "../../Hooks/use-input";
import Modal from "../UI/Card/Modal";
import Input from "../UI/Input/Input";

const LogIn = () => {
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

  const disableBtn =
    enterdFirstNameIsValid && enterdEmailIsValid && enterdPasswordIsValid;

  const submitLogHandler = (e) => {
    e.preventDefault();
    dispatch(logInAction.logIn());
    dispatch(logInAction.togelLogCard());
  };

  return (
    <Modal onClose={() => dispatch(logInAction.togelLogCard())} id="formCard">
      <form className={classes["log-form"]} onSubmit={submitLogHandler}>
        <Input
          label="Name"
          hasError={firstNameInputHasError}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
          input={{
            id: "firstName",
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
            id: "email",
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
            name: "Password",
            autoComplete: "off",
            type: "Password",
            placeholder: "*****",
            value: enterdPassword,
          }}
        />
        <div className={classes.subBtn}>
          <button className="button" disabled={!disableBtn}>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LogIn;
