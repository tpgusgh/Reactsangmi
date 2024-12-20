import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comment from './Comment'
import CommentList from './CommentList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommentList />
    </>
  )
}

export default App
