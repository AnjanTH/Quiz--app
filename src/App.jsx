import { useState } from 'react'
import { Quiz } from './components/Quiz'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Quiz></Quiz>
    </div>
    </>
  )
}

export default App;
