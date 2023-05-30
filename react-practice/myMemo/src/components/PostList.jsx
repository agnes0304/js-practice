import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Postlist.module.css";
import Modal from "./Modal";

function PostList() {
  const [enteredName, setName] = useState("");
  const [enteredBody, setBody] = useState("");
  const [isView, setView] = useState(true);

  function onNameHandler(event) {
    setName(event.target.value);
  }

  function onBodyHandler(event) {
    setBody(event.target.value);
  }

  function hideModal() {
    setView(false);
  }

  return (
    <>
      {isView ? (
        <Modal onClose={hideModal}>
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
