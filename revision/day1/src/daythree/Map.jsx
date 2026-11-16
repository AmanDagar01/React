import React from 'react'
import Search from './Search';

const products = [
    { id: 1, name: "Keyboard", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 600, inStock: false },
    { id: 3, name: "Monitor", price: 8500, inStock: true },
    { id: 4, name: "Headphones", price: 1800, inStock: false }
  ];

function Map() {
    const produ = products.filter(prod => prod.inStock==true)
    const items = produ.map(product => (<li key={product.id}> {product.name} : {product.price}</li>))
  return (
    <div>
        <Search/>
        {/* <ul>{items}</ul> */}

        
    </div>
  )
}

export default Map




// 1. Render every product using .map().
// 2. Show its name and price.
// 3. Display In Stock or Out of Stock using conditional rendering.
// 4. Use the product ID as the key.
// 5. Display Available products: 2 above the list, calculated from the array rather than hardcoded.
// Bonus: Display only products that are in stock using .filter() before .map().