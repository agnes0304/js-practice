import { useState } from "react";
// import "./App.css";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  const [isView, setView] = useState(false);

  function hideModal() {
    setView(false);
  }

  function showModal() {
    setView(true);
  }

  return (
    <>
      <Header onCreatePost={showModal} />
      <main>
        <PostList
          onStopPost={hideModal}
          // onCreatePost={showModal}
          onPosting={isView}
        />
      </main>
    </>
  );
}

export default App;
