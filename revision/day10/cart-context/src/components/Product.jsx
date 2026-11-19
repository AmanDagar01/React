import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Product() {
  const products = [
    { id: 1, name: 'Pizza', price: 200 },
    { id: 2, name: 'Burger', price: 120 },
    { id: 3, name: 'Pasta', price: 180 }
  ];

  const {cart, setCart} = useContext(CartContext)

  function addtocart(product){
    setCart(prev=>{
      const existingProduct = prev.find(item => item.id==product.id);

      if(existingProduct){
        return prev.map(item=>
          item.id==product.id?
          {...item, quantity: item.quantity+1}:item
        );
      }
      return [...prev, {...product, quantity: 1}];
    })
  }

  return (
    <div>Products: 
      {products.map(item=> <li key={item.id}>
        {item.name} : {item.price}
        <button onClick={()=>addtocart(item)}>add to cart</button>
      </li>)}

      {cart.length}
    </div>
  )
}

export default Product