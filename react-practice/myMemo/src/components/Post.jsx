import { useState } from "react";
import classes from "./Post.module.css";
import { createRoutesFromChildren } from "react-router-dom";
import Detail from "./Detail";
import Modal from "./Modal";

function Post(props) {
  const [data, setData] = useState({});

  function viewMore(event) {
    console.log(event.target);
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
    console.log(dname);
    console.log(dbody);
    setData(postdata);
  }

  return (
    <>
      <li className={classes.post} onClick={viewMore}>
        <h2 className={classes.author}>{props.name}</h2>
        <p className={classes.text}>{props.body}</p>
      </li>
        <Detail data={data} />
    </>
  );
}

export default Post;
