import { useState, useEffect } from "react";

import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./Postlist.module.css";
import Modal from "./Modal";


function PostList(props) {
  const [posts, setPost] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost/:3000")
  //     .then((res) => res.json())
  //     // .then((data) => console.log(data))
  //     .then((data) => setPosts(data.posts))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(()=>{
  // 	async function fetchPosts() {
  // 		setIsFetching(true);
  // 		const response = await fetch('http://localhost/:5173');
  // 		const resData = await response.json();
  // 		setPosts(resData.posts);
  // 		setIsFetching(false);
  // 	}
  // 	fetchPosts();
  // }, []);

  function addPostHandler(data) {
    // fetch('http://localhost:3000/newpost', {
    // 	method: 'POST',
    // 	body: JSON.stringify(postData),
    // 	headers: {
    // 		'Content-Type': 'application/json'
    // 	}
    // })
    setPost([data, ...posts]);
  }

  return (
    <>
      {props.onPosting ? (
        <Modal onClose={props.onStopPost}>
          <NewPost onCancel={props.onStopPost} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {/* {!isFetching && posts.length > 0 && ( */}
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((data) => (
            <Post key={data.body.length} name={data.name} body={data.body} />
          ))}
        </ul>
      )}

      {/* {!isFetching && posts.length === 0 && ( */}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>There are no posts yet.</h1>
          <p>Leave your message here!</p>
        </div>
      )}

      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts Now...</p>
        </div>
      )} */}

      {/* <Detail /> */}
    </>
  );
}

export default PostList;
