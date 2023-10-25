import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  let classForCard = styles.modal;

  switch (props.id) {
    case "confirmMes":
      classForCard = classForCard + ` ${styles["confirm-mes"]}`;
      break;
    case "formCard":
      classForCard = classForCard + ` ${styles["modal-form"]}`;
      break;
  }

  return (
    <div className={classForCard}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay id={props.id}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
