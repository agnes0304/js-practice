import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
// 백드롭 클릭 시 프로그램적으로 닫는 방법을 만들어주기 위함

function Modal(props) {
  const nav = useNavigate(); 
  
  function closeHandler() {
    nav('..');
    // 한단계 위로 올라가는 것을 원하면 ('..')이렇게 가정해줄 수 있다. 상대경로로

  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
