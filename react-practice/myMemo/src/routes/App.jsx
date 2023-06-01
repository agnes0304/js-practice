import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function App() {
  const [isView, setView] = useState(false);

  // function hideModal() {
  //   setView(false);
  // }

  // function showModal() {
  //   setView(true);
  // }

  return (
    <>
      <Outlet />
      <main>
        <PostList
        // onStopPost={hideModal}
        // // onCreatePost={showModal}
        // onPosting={isView}
        />
      </main>
    </>
  );
}

export default App;

export async function loader() {
  const res = await fetch("http://localhost/:8080/posts");
  const resData = await res.json();
  return resData.posts;
}
// 전부 주석처리함 -> PostList 로직 변경할 것.
