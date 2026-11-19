import { useContext, useState } from 'react'
import './App.css'
import UserContectProvider from './context/UserContectProvider'
import Profile from './coponents/Profile'
import { UserContext } from './context/UserContext';

function App() {
  

  return (
    
    <>
      <UserContectProvider>
        <Profile/>
        
      </UserContectProvider>
    </>
  )
}

export default App




// Challenge 1 — User Context

// Create a UserContext that stores the user's name.
// - Provide the value from App.
// - Consume it inside a Profile component.
// - Display a greeting.
// - Avoid prop drilling.

// make it first via propdrilling the use context API



// prop drilling

// function App() {
//   const user = "Aman";

//   return <Navbar user={user} />;
// }

// function Navbar({ user }) {
//   return <Profile user={user} />;
// }

// function Profile({ user }) {
//   return <h1>Hello, {user}</h1>;
// }