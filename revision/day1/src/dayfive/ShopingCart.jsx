
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function ShopingCart() {
  const products = [
    { id: 1, name: 'Pizza', price: 200 },
    { id: 2, name: 'Burger', price: 120 },
    { id: 3, name: 'Pasta', price: 180 }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => {
      const existingProduct = prev.find(
        item => item.id === product.id
      );

      if (existingProduct) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      <ProductList
        products={products}
        onAdd={addToCart}
      />

      <Cart
        cart={cart}
        itemCount={itemCount}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default ShopingCart;




// Challenge 2 — Shopping Cart
// Build an App with two child components: ProductList and Cart.
// - Products: Pizza (₹200), Burger (₹120), Pasta (₹180).
// - Each product has an Add to Cart button.
// - Show the cart item count and total price.
// - Keep cart state in App.
// - Pass data and callback functions through props.
// Bonus: prevent duplicate cart entries by increasing the existing product's quantity.