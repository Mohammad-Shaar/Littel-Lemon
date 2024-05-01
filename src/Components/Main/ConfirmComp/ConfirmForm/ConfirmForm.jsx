import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reservationAction } from "../../../../Store/reservation";
import { FaExclamationTriangle } from "react-icons/fa";
import usePostData from "../../../../Hooks/use-PostData";
import useInput from "../../../../Hooks/use-input";
import Input from "../../../UI/Input/Input";
import ConfirmingMessage from "../ConfirmingMessage/ConfirmingMessage";
import classes from "./ConfirmForm.module.css";
import UserReserveOption from "./UserReserveOption";

const ConfirmForm = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [showConfirmingCard, setShowConfirmingCard] = useState(false);
  const specialRequestsRef = useRef("");
  const dispatch = useDispatch();

  const optionValid = useSelector((state) => state.reservation.allNotValid);
  const seating = useSelector((state) => state.confirming.seating);
  const options = useSelector((state) => state.reservation.option);

  dispatch(reservationAction.notValidToSend());

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
  } = useInput((value) => parseInt(value) == value && value.trim() !== "");

  const { donePosting, isSubmiting, hasError, submitData } = usePostData(
    "http://localhost:3000/reservations"
  );

  useEffect(() => {
    if (donePosting) {
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetPhoneInput();
      specialRequestsRef.current.value = "";
    }
  }, [donePosting]);

  const closeCardHandler = () => {
    setShowConfirmingCard(false);
  };

  const allInputsValid =
    enterdFirstNameIsValid &&
    enterdLastNameIsValid &&
    enterdEmailIsValid &&
    enterdPhoneIsValid;

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowWarning(false);
    if (allInputsValid && optionValid) {
      setShowConfirmingCard(true);

      await submitData(() => ({
        firstName: enterdFirstName,
        lastName: enterdLastName,
        email: enterdEmail,
        phoneNumber: enterdPhone,
        options: {
          ...options,
          seating: seating,
          specialRequests: specialRequestsRef.current.value,
        },
      }));
    } else {
      setShowWarning(true);
    }
  };

  return (
    <>
      {showConfirmingCard && (
        <ConfirmingMessage
          isSubmiting={isSubmiting}
          hasError={hasError}
          onClose={closeCardHandler}
        />
      )}
      <form
        id="confirm-reservation"
        onSubmit={submitHandler}
        className={`grid ${classes["grid-mob"]}`}
      >
        <Input
          label="First Name"
          hasError={firstNameInputHasError}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
          input={{
            id: "firstName",
            name: "firstName",
            autoComplete: "given-name",
            type: "text",
            max: "20",
            placeholder: "First name",
            value: enterdFirstName,
          }}
        />
        <Input
          label="Last Name"
          hasError={lastNameInputHasError}
          onBlur={lastNameBlurHandler}
          onChange={lastNameChangeHandler}
          input={{
            id: "lastName",
            name: "lastName",
            autoComplete: "family-name",
            type: "text",
            max: "20",
            placeholder: "Last name",
            value: enterdLastName,
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
          label="Phone Number"
          hasError={phoneInputHasError}
          onBlur={phoneBlurHandler}
          onChange={phoneChangeHandler}
          input={{
            id: "phoneNumber",
            name: "phoneNumber",
            autoComplete: "off",
            type: "text",
            placeholder: "Phone number",
            value: enterdPhone,
          }}
        />
        <UserReserveOption />
        <div>
          <label htmlFor="note" className={classes.label}>
            Special Requests
          </label>
          <textarea
            ref={specialRequestsRef}
            id="note"
            className={classes.textarea}
            placeholder="type here.."
            name="note"
          ></textarea>
        </div>
        {showWarning && (
          <p className={`grid-col-span-2 flex ${classes.warning}`}>
            <FaExclamationTriangle />
            {!allInputsValid && !optionValid
              ? `You must choose All your reservation first`
              : `All required fields must be valid`}
          </p>
        )}
      </form>
    </>
  );
};

export default ConfirmForm;
