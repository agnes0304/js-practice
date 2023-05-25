import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";

function PostsList() {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  function bodyHandler(event) {
    setBody(event.target.value);
  }

  function authorHandler(event) {
    setAuthor(event.target.value);
  }
  return (
    <>
      <NewPost bodyChange={bodyHandler} authorChange={authorHandler} />
      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author="test2" body="This is test2" />
      </ul>
    </>
  );
}

export default PostsList;
