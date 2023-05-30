import Post from "./Post";
import classes from './Postlist.module.css'

function PostList() {
  return (
    <>
      <ul className={classes.posts}>
        <Post />
        <Post />
        <Post />
      </ul>
    </>
  );
}

export default PostList;
