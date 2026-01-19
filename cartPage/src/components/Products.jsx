import React, { useEffect, useState } from 'react'
import CardM from './CardM';

function Products() {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products?page=1&limit=10")
        .then((res)=>res.json())
        .then((data)=>setproducts(data.products));
    }, [])
  return (
    <div className='flex flex-wrap gap-4'>
        {products.map((product) => (
        <CardM key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products