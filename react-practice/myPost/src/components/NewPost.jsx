import classes from "./NewPost.module.css";

import { useState } from "react";

function NewPost() {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  function bodyHandler(event) {
    setBody(event.target.value);
  }

  function authorHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: body,
      author: author,
    };
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body" required>
          Message
        </label>
        <textarea
          name="body"
          id="body"
          rows={3}
          placeholder="Leave your message here"
          onChange={bodyHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name" required>
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Leave your name here"
          onChange={authorHandler}
        ></input>
      </p>
      <p className={classes.actions}>
        <button type="button">Cancel</button>
        <button onClick={submitHandler}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
