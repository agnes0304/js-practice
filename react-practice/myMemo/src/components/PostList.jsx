import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Postlist.module.css";
import Modal from "./Modal";

function PostList(props) {
  const [enteredName, setName] = useState("");
  const [enteredBody, setBody] = useState("");

  function onNameHandler(event) {
    setName(event.target.value);
  }

  function onBodyHandler(event) {
    setBody(event.target.value);
  }

  return (
    <>
      { props.onPosting ? (
        <Modal onClose={props.onStopPost}>
          <NewPost nameHandler={onNameHandler} bodyHandler={onBodyHandler} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post name={enteredName} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
