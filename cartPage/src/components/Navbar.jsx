import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Navbar({ setCurrentPage, currentPage }) {
  const { cart } = useContext(CartContext)
  
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className='bg-slate-500 p-4 flex justify-between items-center' >
        <button 
          onClick={() => setCurrentPage('home')}
          className={`px-4 py-2 rounded ${currentPage === 'home' ? 'bg-slate-700 text-white' : 'hover:bg-slate-600'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('cart')}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 relative'
        >
          Cart ({cartCount})
        </button>
    </div>
  )
}

export default Navbar