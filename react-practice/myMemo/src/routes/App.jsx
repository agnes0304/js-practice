import { useState } from "react";

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


// 전부 주석처리함 -> PostList 로직 변경할 것. 