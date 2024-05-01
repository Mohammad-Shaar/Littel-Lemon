import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderdCardAction } from "../../../Store/orderdCardState";
import usePostData from "../../../Hooks/use-PostData";
import classes from "./ConfirmOrder.module.css";
import Input from "../../UI/Input/Input";
import useInput from "../../../Hooks/use-input";

const ConfirmOrder = (props) => {
  const dispatch = useDispatch();
  const [submitingSucceed, setSubmitingSucceed] = useState(false);
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
  } = useInput((value) => parseInt(value) == value && value.trim() !== "");

  const {
    enterdInput: enterdLocation,
    inputIsInValid: locationInputHasError,
    inputIsValid: enterdLocationIsValid,
    inputBlurHandler: locationBlurHandler,
    inputChangeHandler: locationChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const { donePosting, isSubmiting, hasError, submitData } = usePostData(
    "http://localhost:3000/onlineorders"
  );

  useEffect(() => {
    if (donePosting) {
      setSubmitingSucceed(true);
    }
  }, [donePosting]);

  const disableBtn =
    enterdFirstNameIsValid &&
    enterdPhoneNumberIsValid &&
    enterdLocationIsValid &&
    !isSubmiting;

  const submitHandler = async (e) => {
    e.preventDefault();

    await submitData(() => ({
      firstName: enterdFirstName,
      phoneNumber: enterdPhoneNumber,
      location: enterdLocation,
      totalPrice: props.totalPrice,
      orderdItems: props.orderdItems,
    }));
  };

  return (
    <>
      {!submitingSucceed && (
        <>
          {hasError && <p className={classes.errorMassege}>{hasError}</p>}
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
                id: "userPhoneNumber",
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
      )}
      {submitingSucceed && (
        <>
          <p className={classes.message}>
            Your order has been confirmed, you will receive it in about 30
            minutes...
          </p>
          <div className={classes.actions}>
            <button
              className="button button--alt"
              type="button"
              onClick={() => dispatch(orderdCardAction.togelOrderdCard())}
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmOrder;
