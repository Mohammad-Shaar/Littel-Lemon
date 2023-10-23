import classes from "./ConfirmingMessage.module.css";
import Modal from "../../../UI/Card/Modal";

const ConfirmingMessage = (props) => {
  return (
    <Modal id="confirmMes" onClose={props.onClose}>
      <p className={classes.message}>
        Your reservation has been confirmed, we are waiting for you.
      </p>
      <button className="button" onClick={props.onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ConfirmingMessage;
