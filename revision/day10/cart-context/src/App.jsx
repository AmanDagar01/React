import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Product from './components/Product'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import CartContextProvider from './context/CartContextProvider'
import ThemeProvider from './context/ThemeProvider'

function App() {

  return (
   <>
      <ThemeProvider>

      <CartContextProvider>
        
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </ThemeProvider>
   </>
  )
}

export default App






// Challenge 2 — Global Cart Context

// Build a shopping cart using Context API.

// Components:
// - Navbar
// - ProductList
// - Cart
// Requirements:
// - Share cart state using CartContext.
// - Add products to cart.
// - Show cart count in Navbar.
// - Show total price in Cart.
// - Add remove-item functionality.