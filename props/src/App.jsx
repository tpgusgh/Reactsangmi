import { useState } from "react"

function App() {
  
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}번 클릭했음</h2>
      <button onClick={()=> setCount(count+1)}>증가</button>
      <button onClick={()=> setCount(count-1)}>감소</button>
      <button onClick={()=> setCount(count-count)}>리셋</button>
    </div>
  )
}

export default App
