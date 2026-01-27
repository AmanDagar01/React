import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart({ setCurrentPage }) {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if(cart.length === 0) {
    return (
      <div className='p-8 text-center'>
        <p className='text-2xl font-bold mb-4'>Your cart is empty</p>
        <button 
          onClick={() => setCurrentPage('home')}
          className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>
      
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border p-3 text-left'>Product</th>
              <th className='border p-3 text-center'>Price</th>
              <th className='border p-3 text-center'>Quantity</th>
              <th className='border p-3 text-center'>Total</th>
              <th className='border p-3 text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className='border'>
                <td className='border p-3'>
                  <div className='flex items-center gap-4'>
                    <img src={item.thumbnail} alt={item.title} className='w-16 h-16 object-cover' />
                    <div>
                      <p className='font-bold'>{item.title}</p>
                      <p className='text-sm text-gray-600'>{item.description?.substring(0, 50)}...</p>
                    </div>
                  </div>
                </td>
                <td className='border p-3 text-center'>₹{item.price}</td>
                <td className='border p-3'>
                  <div className='flex justify-center items-center gap-2'>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className='px-2 py-1 border rounded hover:bg-gray-200'
                    >
                      -
                    </button>
                    <p className='w-8 text-center'>{item.quantity}</p>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className='px-2 py-1 border rounded hover:bg-gray-200'
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='border p-3 text-center font-bold'>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </td>
                <td className='border p-3 text-center'>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-8 flex justify-end'>
        <div className='bg-gray-100 p-6 rounded w-full max-w-sm'>
          <div className='flex justify-between mb-4'>
            <span>Subtotal:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className='flex justify-between mb-4'>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className='border-t pt-4 flex justify-between text-xl font-bold'>
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button className='w-full mt-6 bg-green-500 text-white py-3 rounded hover:bg-green-600 font-bold'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart