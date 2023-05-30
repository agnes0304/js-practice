import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        {props.children}
      </div>
    </>
  );
}

export default Modal;
