import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useCount } from './custom-hook/UseCount'

function App() {
  const {count, increment, decrement, reset} = useCount()

  return (
    <>
      count : 
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>

    </>
  )
}

export default App



// Create a custom hook that supports:
// - Increment
// - Decrement
// - Reset