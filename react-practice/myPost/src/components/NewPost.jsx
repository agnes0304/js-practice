import classes from './NewPost.module.css';

function NewPost() {
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
        ></textarea>
      </p>
      <p>
        <label htmlFor="name" required>
          Name
        </label>
        <input type="text" id="name" placeholder="Leave your name here"></input>
      </p>
    </form>
  );
}

export default NewPost;
