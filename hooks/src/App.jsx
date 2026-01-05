import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const add = () => {
    setCount(counter+1)
  }
  const sub = () => {
    setCount(counter-1)
  }

  return (

    <>
      <h2>click button</h2>
      <h3>value: {counter}</h3>
      <button onClick={add}>click to add</button>
      <button onClick={sub}>click to sub</button>

    </>
  )
}

export default App
