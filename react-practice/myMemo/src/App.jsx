import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./components/PostList";
import Header from "./components/Header";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";

function App() {

  const [isView, setView] = useState(true);

  function hideModal() {
    setView(false);
  }

  function showModal() {
    setView(true);
  }

  return (
    <>
      <Header onStopPost={hideModal} onCreatePost={showModal} onPosting={isView} />
      <PostList />
    </>
  );
}

export default App;
