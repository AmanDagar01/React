import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router"
import { CartContext, ThemeContext } from '../context/CartContext'
function Navbar() {
  const {isthemeDrak, setInvertedTheme} = useContext(ThemeContext);
  const {cart} = useContext(CartContext);
  return (
    <div>Navbar : 
        <br />
        <nav>
            <Link to="/products">products </Link>
            <Link to="/cart">cart : {cart.length}</Link>

        </nav>
        <button onClick={()=>setInvertedTheme(!isthemeDrak)}>{isthemeDrak?'dark':'light'}</button>
    </div>
  )
}

export default Navbar


// notification of cart