import classes from "./PostsList.module.css";
import Post from "./Post";
function PostsList() {
  return (
    <>
      <ul className={classes.posts}>
        <Post author="test1" body="This is test1" />
        <Post author="test2" body="This is test2" />
      </ul>
    </>
  );
}

export default PostsList;
