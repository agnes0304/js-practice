import { useState } from "react";
import classes from "./Post.module.css";
import { createRoutesFromChildren } from "react-router-dom";
import Detail from "./Detail";
import Modal from "./Modal";

function Post(props) {
  const [data, setData] = useState({});
  const [isData, setisData] = useState(false);

  function viewMore(event) {
    let dname = event.currentTarget.querySelector(
      `.${classes.author}`
    ).textContent;
    let dbody = event.currentTarget.querySelector(
      `.${classes.text}`
    ).textContent;
    let postdata = {
      name: dname,
      body: dbody,
    };
    setisData(true);
    setData(postdata);
  }
  function closeModal(){
    setisData(false);
  }

  return (
    <>
      <li className={classes.post} onClick={viewMore}>
        <h2 className={classes.author}>{props.name}</h2>
        <p className={classes.text}>{props.body}</p>
      </li>
      { isData ? <Modal><Detail data={data} onClose={closeModal} /></Modal> : null}
    </>
  );
}

export default Post;
