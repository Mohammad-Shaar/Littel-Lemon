import { useRef } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./ConfirmForm.module.css";

const ConfirmForm = () => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={`grid ${classes["grid-mob"]}`}>
      <Input
        ref={inputRef}
        label="First Name"
        input={{
          id: "firstName",
          name: "firstName",
          type: "text",
          max: "20",
          placeholder: "First name",
        }}
      />
      <Input
        ref={inputRef}
        label="Last Name"
        input={{
          id: "lastName",
          name: "lastName",
          type: "text",
          max: "20",
          placeholder: "Last name",
        }}
      />
      <Input
        ref={inputRef}
        label="Email"
        input={{
          id: "email",
          name: "email",
          type: "text",
          placeholder: "you@gmail.com",
        }}
      />
      <Input
        ref={inputRef}
        label="Phone Number"
        input={{
          id: "phoneNumber",
          name: "phoneNumber",
          type: "text",
          placeholder: "Phone number",
        }}
      />
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
