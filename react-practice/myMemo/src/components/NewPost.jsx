import classes from './NewPost.module.css'
function NewPost(props) {
  return (
    <>
      <form className={classes.form}>
        <p>
          <label htmlFor="name">Leave your name</label>
          <input id="name" type="text" placeholder='Name' onChange={props.nameHandler} />
        </p>
        <p>
          <label htmlFor="body">Leave your memo</label>
          <textarea id="body" rows={3} placeholder="Memo" onChange={props.bodyHandler} />
        </p>
        <p className={classes.actions}>
          <button type="submit">Write</button>
          <button type="button">Cancel</button>
        </p>
      </form>
    </>
  );
}

export default NewPost;
