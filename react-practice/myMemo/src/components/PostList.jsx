import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./Postlist.module.css";

function PostList(props) {
  const posts = useLoaderData();

  return (
    <>
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((data) => (
            <Post key={data.body.length} author={data.author} body={data.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>There are no posts yet.</h1>
          <p>Leave your message here!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
