import React, { useState } from 'react'

function CardM({product}) {
    const[count, setCount] = useState(0)
    console.log(count);
    const add = () => {
        setCount(count+1)
    }
    const sub = () => {
        if(count<1){
            console.log("cont't be further subtract");
        }
        else{
            setCount(count-1)
        }
    }


  return (
    <div className='p-4 border rounded w-56'>
        <div>
            <img className='w-40 h-40 object-cover' src={product.thumbnail} alt={product.title} />
        </div>

        <div className='mt-2'>
            <p>Name: {product.title}</p>
            <p>Price: INR{product.price}</p>
        </div>
        <div className='flex flex-wrap item-centre gap-2 mt-2'>
            <button className='px-2 border' onClick={sub}>-</button>
            <p>{count}</p>
            <button className='p-2 border' onClick={add}>+</button>
            
        </div>
    </div>
  )
}

export default CardM