import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList() {
  const [isVisible, setVisible] = useState(true);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  function bodyHandler(event) {
    setBody(event.target.value);
  }

  function authorHandler(event) {
    setAuthor(event.target.value);
  }
  function hideModalHandler() {
    setVisible(false);
  }

  return (
    <>
      {isVisible ? (
        <Modal stopPosting={hideModalHandler}>
          <NewPost bodyChange={bodyHandler} authorChange={authorHandler} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author="test2" body="This is test2" />
      </ul>
    </>
  );
}

export default PostsList;
