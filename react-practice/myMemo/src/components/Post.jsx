import classes from "./Post.module.css";

function Post(props) {
  return (

      <li className={classes.post}>
        <h2 className={classes.author}>{props.name}</h2>
        <div className={classes.text}>{props.body}</div>
      </li>

  );
}

export default Post;
