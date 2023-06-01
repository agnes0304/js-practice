import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost(props) {
  const [enteredName, setName] = useState("");
  const [enteredBody, setBody] = useState("");

  function onNameHandler(event) {
    setName(event.target.value);
  }

  function onBodyHandler(event) {
    setBody(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const data ={
      name: enteredName,
      body: enteredBody,
    }
    props.onAddPost(data);
    props.onCancel();
  }

  return (

      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Leave your name</label>
          <input id="name" type="text" placeholder='Name' onChange={onNameHandler} />
        </p>
        <p>
          <label htmlFor="body">Leave your memo</label>
          <textarea required id="body" rows={3} placeholder="Memo" onChange={onBodyHandler} />
        </p>
        <p className={classes.actions}>
          <button>Write</button>
          <button type="button" onClick={props.onCancel}>Cancel</button>
        </p>
      </form>

  );
}

export default NewPost;
