import React, { useState } from 'react'

function Login() {
    const [IsLogIn, setIsLogIn] = useState(false);

    function makeLogin(){
        setIsLogIn(!IsLogIn);
    }
  return (
    <div>
        {IsLogIn?'Please log in':'Welcome back, Aman!'}
        <button onClick={makeLogin}>{IsLogIn? 'login':'logout'}</button>
    </div>
  )
}

export default Login




// challenge 1 — Login UI

// Easy

// Create a component with a variable called isLoggedIn, initially set to false.
// - If false, display Please log in.
// - If true, display Welcome back, Aman!.
// - Use a ternary expression to choose the message.
// - For now, you can change isLoggedIn manually to test both outcomes.
// Bonus: Add a button that toggles the login status using useState.