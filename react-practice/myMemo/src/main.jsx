import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App, { loader as postsloader } from "./routes/App";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: postsloader,
        children: [{ path: "/newpost", element: <NewPost />, action: newPostAction }],
      },
      // 왜 App에 넣어줬냐? /newpost로 접근하더라도 기존의 PostList는 나와야 하기 때문. PostList는 지금 App에서 렌더링 되고 있음. 
      // { path: '/detail', element: <Detail />},

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
