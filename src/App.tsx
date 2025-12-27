import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div
        className="card bg-green-500 text-3xl"
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </div>
    </div>
  )
}

export default App
