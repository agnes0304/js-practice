import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./components/PostList";
import Header from "./components/Header";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Header />
        <NewPost />
      <PostList />
    </>
  );
}

export default App;
