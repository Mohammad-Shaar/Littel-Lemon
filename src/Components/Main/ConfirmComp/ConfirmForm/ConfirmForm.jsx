import useInput from "../../../../Hooks/use-input";
import Input from "../../../UI/Input/Input";
import classes from "./ConfirmForm.module.css";

const ConfirmForm = () => {
  const {
    enterdInput: enterdFirstName,
    inputIsInValid: firstNameInputHasError,
    inputIsValid: enterdFirstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enterdInput: enterdLastName,
    inputIsInValid: lastNameInputHasError,
    inputIsValid: enterdLastNameIsValid,
    inputBlurHandler: lastNameBlurHandler,
    inputChangeHandler: lastNameChangeHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enterdInput: enterdEmail,
    inputIsInValid: emailInputHasError,
    inputIsValid: enterdEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    enterdInput: enterdPhone,
    inputIsInValid: phoneInputHasError,
    inputIsValid: enterdPhoneIsValid,
    inputBlurHandler: phoneBlurHandler,
    inputChangeHandler: phoneChangeHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPhoneInput();
  };

  return (
    <form onSubmit={submitHandler} className={`grid ${classes["grid-mob"]}`}>
      <Input
        label="First Name"
        hasError={firstNameInputHasError}
        isValid={enterdFirstNameIsValid}
        onBlur={firstNameBlurHandler}
        onChange={firstNameChangeHandler}
        input={{
          id: "firstName",
          name: "firstName",
          type: "text",
          max: "20",
          placeholder: "First name",
          value: enterdFirstName,
        }}
      />
      <Input
        label="Last Name"
        hasError={lastNameInputHasError}
        isValid={enterdLastNameIsValid}
        onBlur={lastNameBlurHandler}
        onChange={lastNameChangeHandler}
        input={{
          id: "lastName",
          name: "lastName",
          type: "text",
          max: "20",
          placeholder: "Last name",
          value: enterdLastName,
        }}
      />
      <Input
        label="Email"
        hasError={emailInputHasError}
        isValid={enterdEmailIsValid}
        onBlur={emailBlurHandler}
        onChange={emailChangeHandler}
        input={{
          id: "email",
          name: "email",
          type: "text",
          placeholder: "you@gmail.com",
          value: enterdEmail,
        }}
      />
      <Input
        label="Phone Number"
        hasError={phoneInputHasError}
        isValid={enterdPhoneIsValid}
        onBlur={phoneBlurHandler}
        onChange={phoneChangeHandler}
        input={{
          id: "phoneNumber",
          name: "phoneNumber",
          type: "text",
          placeholder: "Phone number",
          value: enterdPhone,
        }}
      />
      <div></div>
      <div>
        <label htmlFor="note" className={classes.label}>
          Sprcial Requests
        </label>
        <textarea id="note" className={classes.textarea} name="note"></textarea>
      </div>
    </form>
  );
};

export default ConfirmForm;
