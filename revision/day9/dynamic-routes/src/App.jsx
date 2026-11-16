import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Route, Routes, Link} from "react-router"
import Products from '../../react-router/src/pages/Products'
import Food from './products/Food'
import FoodCard from './products/FoodCard'
import OnlyForLogin from './products/OnlyForLogin'
import Login from './products/Login'

function App() {

  return (
    <>
      <nav>
        <Link to="/products">products</Link>
        <br />
        <br />
        <Link to={"/onlyforlogin"}>onlylogin</Link>

      </nav>

      <Routes>
        
        <Route path='/products' element={<Food/>} />
        <Route path='/products/:id' element={<FoodCard/>}/>
        <Route path='/onlyforlogin' element={<OnlyForLogin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App


// Challenge 2 — Eatly Product Details

// Create a product listing with:
// - Pizza — ₹200
// - Burger — ₹120
// - Pasta — ₹180
// Clicking a product should navigate to /products/:id.

// On the details page, use useParams() to read the ID and show the matching product details.







// Challenge 3 — Protected Route (Bonus)

// Create a dashboard page that is only accessible when isLoggedIn is true.

// If the user is not logged in, redirect them to /login using Navigate.





