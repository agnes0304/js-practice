import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './routes/App'
import './index.css'
import NewPost from './routes/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <App />},
    { path: '/newpost', element: <NewPost />},
    // { path: '/detail', element: <Detail />},
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
