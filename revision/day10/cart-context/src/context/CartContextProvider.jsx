import React from 'react'
import { CartContext } from './CartContext'
import { useState } from 'react'

function CartContextProvider({children}) {
    const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider