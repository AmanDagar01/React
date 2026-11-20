import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import useFetch from './customHooks/UseFetch'

function App() {
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

  if(loading) return <h2>Loading...</h2>;
  if(error) return <h2>{error}</h2>
  return (
    <>
      <h1>User list:</h1>
      {data.map(data=>
        <p key={data.id}>{data.name} : {data.email}</p>
      )}
    </>
  )
}

export default App



// Challenge 2 — Build useFetch
// Medium

// - Create useFetch.js.
// - Fetch users from JSONPlaceholder.
// - Show loading and error states.
// - Display user names and emails.



// Challenge 3 — Bonus
// Optional
// Create a useLocalStorage hook that:
// Saves a value in localStorage.
// Reads the saved value on initial render.
// Updates localStorage whenever the value changes.