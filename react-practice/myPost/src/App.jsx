// import { useState } from 'react'
import './App.css'
import NewPost from './components/NewPost'
import PostsList from './components/PostsList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NewPost />
      <PostsList />
    </>
  )
}

export default App
