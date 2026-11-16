import React from 'react'



function ProductList({ products, onAdd }) {
    return (
      <div>
        <h3>Products</h3>
  
        {products.map(product => (
          <div key={product.id}>
            <span>
              {product.name} - ₹{product.price}
            </span>
  
            <button onClick={() => onAdd(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  