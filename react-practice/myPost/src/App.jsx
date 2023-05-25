// import { useState } from 'react'
import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <>
      <MainHeader />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
