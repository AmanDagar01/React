import React from 'react'

const products = [
    { id: 1, name: "Keyboard", price: 1200 },
    { id: 2, name: "Mouse", price: 600 },
    { id: 3, name: "Monitor", price: 8500 }
  ];


function ListRender() {
    const listItems = products.map(product => (
        <li key={product.id}>{product.name}:{product.price}</li>
    ));
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default ListRender



// Render all three products using .map().
// Each product should show its name and price. Give every rendered item a unique key based on its id.