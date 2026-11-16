import React, { useState } from 'react'

function LiveName() {
    const [Name, setName] = useState("");

  return (
    <div>LiveName
        <input type="text"
        placeholder='Enter the Name'
        value={Name} 
        onChange={e => setName(e.target.value)}/>

        <div>Welcome back {Name}!</div>
        <button onClick={()=>setName("")}>clear</button>
    </div>
  )
}

export default LiveName



// Challenge 1 — Live name form

// Easy

// Build a form that has:
// - A text input for a user's name.
// - A controlled input using useState.
// - A live greeting that updates as the user types.
// - A Clear button that empties the input.
// Rule: Don't use direct DOM manipulation to read or update the input.