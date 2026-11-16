import React, { useEffect, useState } from 'react'

function PersistentCount() {
    const [count, setCount] = useState(()=>{
        return Number(localStorage.getItem("count") || 0)
    })

    useEffect(()=>{
        localStorage.setItem("count",String(count))
    },[count]);

  return (
    <div><h2>PersistentCount</h2>
        count: {count}
        <button onClick={()=>setCount(count=>count+1)}>increment</button>
        <button onClick={()=>setCount(count=>count-1)}>decrement</button>
    </div>
  )
}

export default PersistentCount



// Challenge 2 — Persistent Counter

// Build a counter that:
// - Increments and decrements.
// - Saves its value to localStorage using useEffect.
// - Restores its value after a page reload.
// - Includes a Reset button.