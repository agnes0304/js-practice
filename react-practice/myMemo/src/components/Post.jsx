import classes from "./Post.module.css";

function Post() {
  return (
    <>
      <li className={classes.post}>
        <h2 className={classes.author}>test author</h2>
        <div className={classes.text}>test text.</div>
      </li>
    </>
  );
}

export default Post;
