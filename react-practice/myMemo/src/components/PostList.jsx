import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './Postlist.module.css'

function PostList() {
  const [ enteredName, setName ] = useState('');
  const [ enteredBody, setBody ] = useState('');

  function onNameHandler(event) {
    setName(event.target.value);
  }

  function onBodyHandler(event) {
    setBody(event.target.value);
  }

  return (
    <>
      <NewPost nameHandler={onNameHandler} bodyHandler={onBodyHandler} />
      <ul className={classes.posts}>
        <Post name={enteredName} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
