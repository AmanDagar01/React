import React, { useState } from 'react'

function DayTwo() {
    const [count, setCout] = useState(0);

    function increment(){
        setCout(count+1);
    }

    function decremenent(){
        setCout(count-1);
    }

    function reset(){
        setCout(0);
    }

    function Display(){
        if(count==0) return <div>Zero</div>;
        else if(count>0) return <div>positive</div>;
        else return <div>negative</div>;
    }

  return (
    <div>
        {count}
        <button onClick={increment}>increment</button>
        <button onClick={decremenent}>decremenent</button>
        <button onClick={reset}>reset</button>
        <div>{Display()}</div>
        
    </div>
  )
}

export default DayTwo




// Challenge 1 — Counter app
// Easy
// Build a counter with:
// - An initial count of 0.
// - An Increase button.
// - A Decrease button.
// - A Reset button.
// - A message that says Positive, Negative, or Zero based on the count.
// Constraint: You must use useState. Do not use a regular variable to store the count.