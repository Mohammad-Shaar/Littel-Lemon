import classes from "./ConfirmOrder.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderdCardAction } from "../../../Store/orderdCardState";
import Input from "../../UI/Input/Input";
import useInput from "../../../Hooks/use-input";

const ConfirmOrder = (props) => {
  const dispatch = useDispatch();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasError, setHasError] = useState(null);
  // const locationRef = useRef("");

  const {
    enterdInput: enterdFirstName,
    inputIsInValid: firstNameInputHasError,
    inputIsValid: enterdFirstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enterdInput: enterdPhoneNumber,
    inputIsInValid: phoneNumberInputHasError,
    inputIsValid: enterdPhoneNumberIsValid,
    inputBlurHandler: phoneNumberBlurHandler,
    inputChangeHandler: phoneNumberChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enterdInput: enterdLocation,
    inputIsInValid: locationInputHasError,
    inputIsValid: enterdLocationIsValid,
    inputBlurHandler: locationBlurHandler,
    inputChangeHandler: locationChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const disableBtn =
    enterdFirstNameIsValid &&
    enterdPhoneNumberIsValid &&
    enterdLocationIsValid &&
    !isSubmiting;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("done");
    try {
      setHasError(null);
      setIsSubmiting(true);
      const response = await fetch("http://localhost:3000/ordersOnline", {
        method: "POST",
        body: JSON.stringify({
          firsName: enterdFirstName,
          phoneNumber: enterdPhoneNumber,
          location: enterdLocation,
          totalPrice: props.totalPrice,
          orderdItems: props.orderdItems,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("");
      }
      setIsSubmiting(false);
      dispatch(orderdCardAction.togelOrderdCard());
    } catch (err) {
      setHasError("something went wrong!");
    }
    setIsSubmiting(false);
  };

  return (
    <>
      <form
        className={classes["log-form"]}
        id="confirm-order"
        onSubmit={submitHandler}
      >
        <Input
          label="Name"
          hasError={firstNameInputHasError}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
          input={{
            id: "userName",
            name: "firstName",
            autoComplete: "name",
            type: "text",
            max: "20",
            placeholder: "First name",
            value: enterdFirstName,
          }}
        />
        <Input
          label="Phone"
          hasError={phoneNumberInputHasError}
          onBlur={phoneNumberBlurHandler}
          onChange={phoneNumberChangeHandler}
          input={{
            id: "phoneNumber",
            name: "phoneNumber",
            autoComplete: "off",
            type: "text",
            max: "10",
            placeholder: "Phone Number",
            value: enterdPhoneNumber,
          }}
        />
        <div className={classes.textareaContainer}>
          <label htmlFor="location" className={classes.label}>
            *Your Location
          </label>
          <textarea
            id="location"
            name="location"
            value={enterdLocation}
            // ref={locationRef}
            placeholder="Type here.."
            className={`${classes.textarea} ${
              locationInputHasError ? classes.invalid : ""
            }`}
            onBlur={locationBlurHandler}
            onChange={locationChangeHandler}
          ></textarea>
          {locationInputHasError && (
            <p className={classes.errorMassege}>
              Location shouldn&apos;t be embty
            </p>
          )}
        </div>
        <div className={classes.actions}>
          {hasError && <p className={classes.errorMassege}>{hasError}</p>}
          <button
            className="button button--alt"
            type="button"
            onClick={() => props.onClickBack()}
          >
            Back
          </button>
          <button className={`button`} disabled={!disableBtn}>
            {isSubmiting && !hasError ? "Submiting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ConfirmOrder;
