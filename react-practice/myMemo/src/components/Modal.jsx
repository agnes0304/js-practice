import classes from './Modal.module.css'

function Modal(props) {
    return<>
        <div open className={classes.modal}>{props.children}</div>
        <div className={classes.backdrop} onClick={hideModal}></div>
    </>
}

export default Modal