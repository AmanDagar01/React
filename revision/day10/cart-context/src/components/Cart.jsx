import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react';

function Cart() {
  const {cart, setCart} = useContext(CartContext);
  
  function addQuantity(product){
    setCart(prev=>{
      return prev.map(item=>
        item.id==product.id?
        { ...item, quantity: item.quantity + 1 }:
        item
      )
    })
  }

  function reduceQuantity(product) {
    setCart(prev =>
      prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    )
  }

  function removeItem(product) {
    setCart(prev =>
      prev.filter(item => item.id !== product.id)
    )
  }

  const total = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );


  return (
    <div>
      <h2>Cart:</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>
            {item.name} : ₹{item.price} x {item.quantity}
            = ₹{item.price * item.quantity}
          </p>

          <button onClick={() => reduceQuantity(item)}>
            -
          </button>

          {' '}{item.quantity}{' '}

          <button onClick={() => addQuantity(item)}>
            +
          </button>

          <button onClick={() => removeItem(item)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total price: ₹{total}</h3>
    </div>
  )
}


export default Cart