import React from 'react'
import { useNavigate } from 'react-router';

const products = [
    { id: 1, name: 'Pizza', price: 200 },
    { id: 2, name: 'Burger', price: 120 },
    { id: 3, name: 'Pasta', price: 180 }
  ];

function Food() {
    const navigate = useNavigate();
  return (
    <div>Foods:
        {products.map(item=>
            <p key={item.id}>
                {item.name} : 
                <button onClick={()=>navigate(`/products/${item.id}`)}>explore</button>
            </p>
        )}
        
    </div>
  )
}

export default Food


