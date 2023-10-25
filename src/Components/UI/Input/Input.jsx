import classes from "./Input.module.css";

const Input = (props) => {
  let errorMassege;

  switch (props.input.id) {
    case "firstName":
      errorMassege = `First name shouldn't be embty`;
      break;
    case "lastName":
      errorMassege = `Last Name shouldn't be embty`;
      break;
    case "email":
      errorMassege = `Email should contain '@'`;
      break;
    case "password":
      errorMassege = `should be (4 to 8) character`;
      break;
    case "phoneNumber":
      errorMassege = `Phone Number is not valid`;
      break;
  }

  return (
    <div className={classes.inputContainer}>
      <label htmlFor={props.input.id}>*{props.label}</label>
      <input
        {...props.input}
        className={props.hasError ? classes.invalid : ""}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.hasError && <p className={classes.errorMassege}>{errorMassege}</p>}
    </div>
  );
};

export default Input;
