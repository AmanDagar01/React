import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CardM({product}) {
    const[count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)
    
    const add = () => {
        setCount(count+1)
    }
    const sub = () => {
        if(count<1){
            console.log("can't be further subtract");
        }
        else{
            setCount(count-1)
        }
    }

    const handleAddToCart = () => {
        if(count > 0) {
            addToCart({...product, quantity: count})
            setCount(0)
        }
    }

  return (
    <div className='p-4 border rounded w-56'>
        <div>
            <img className='w-40 h-40 object-cover' src={product.thumbnail} alt={product.title} />
        </div>

        <div className='mt-2'>
            <p>Name: {product.title}</p>
            <p>Price: INR {product.price}</p>
        </div>
        <div className='flex flex-wrap item-centre gap-2 mt-2'>
            <button className='px-2 border' onClick={sub}>-</button>
            <p>{count}</p>
            <button className='p-2 border' onClick={add}>+</button>
        </div>
        <button 
            onClick={handleAddToCart}
            className='w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
            disabled={count === 0}
        >
            Add to Cart
        </button>
    </div>
  )
}

export default CardM