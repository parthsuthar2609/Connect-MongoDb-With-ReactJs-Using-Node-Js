import { useState } from 'react'
import './App.css'
import Forms from './Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Forms></Forms>
    </>
  )
}

export default App
