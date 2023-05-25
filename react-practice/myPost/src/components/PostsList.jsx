import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from './NewPost'

function PostsList() {
  return (
    <>
    <NewPost />
      <ul className={classes.posts}>
        <Post author="test1" body="This is test1" />
        <Post author="test2" body="This is test2" />
      </ul>
    </>
  );
}

export default PostsList;
