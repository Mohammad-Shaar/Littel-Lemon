import classes from "./ConfirmingMessage.module.css";
import Modal from "../../../UI/Card/Modal";

const ConfirmingMessage = ({ isSubmiting, hasError, onClose }) => {
  let content = "Your reservation has been confirmed, we are waiting for you.";

  if (isSubmiting) {
    content = "loading...";
  }
  if (hasError) {
    content = hasError;
  }

  return (
    <Modal id="confirmMes" onClose={onClose}>
      <p className={`${classes.message} ${isSubmiting ? "loading" : ""}`}>
        {content}
      </p>
      <button
        className={`button button--alt ${classes.btn}`}
        onClick={onClose}
        disabled={isSubmiting}
      >
        Close
      </button>
    </Modal>
  );
};

export default ConfirmingMessage;
