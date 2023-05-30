import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Postlist.module.css";
import Modal from "./Modal";
import Detail from "./Detail";

function PostList(props) {
  
  const [posts, setPost] = useState([]);

  function addPostHandler(data) {
    setPost([data, ...posts]);
  }

  return (
    <>
      {props.onPosting ? (
        <Modal onClose={props.onStopPost}>
          <NewPost onCancel={props.onStopPost} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((data) => (
            <Post key={data.body.length} name={data.name} body={data.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
				<div style={{textAlign: 'center', color: 'white'}}>
					<h1>There are no posts yet.</h1>
					<p>Leave your message here!</p>
				</div>
			)}

      <Detail />
    </>
  );
}

export default PostList;
