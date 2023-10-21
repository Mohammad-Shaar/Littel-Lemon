import ConfirmForm from "../ConfirmForm/ConfirmForm";
import classes from "./FormSection.module.css";

const FormSection = () => {
  return (
    <section className={classes["form-sec"]}>
      <div className="container">
        <h1 className={classes.title}>confirm</h1>
        <ConfirmForm />
      </div>
    </section>
  );
};

export default FormSection;
