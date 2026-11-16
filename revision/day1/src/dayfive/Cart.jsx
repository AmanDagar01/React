import React from 'react'
import ProductList from './ProductList'


function Cart({ cart, itemCount, totalPrice }) {
    return (
      <div>
        <h3>Cart ({itemCount} items)</h3>
  
        {cart.map(item => (
          <p key={item.id}>
            {item.name} - ₹{item.price}
            {' × '}
            {item.quantity}
            {' = ₹'}
            {item.price * item.quantity}
          </p>
        ))}
  
        <h3>Total: ₹{totalPrice}</h3>
      </div>
    );
  }
  
  export default Cart;
  