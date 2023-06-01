import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function App() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
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