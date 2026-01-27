import { useState } from 'react'
import './App.css'
import CardM from './components/CardM'
import Products from './components/products'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <CartProvider>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      {currentPage === 'home' ? (
        <>
          <div className='p-4 bg-red-400 flex flex-wrap justify-center'>
            Buy Medicin
          </div>
          <h4 className='p-4 '>List of medicins</h4>
          <div>
            <Products/>
          </div>
        </>
      ) : (
        <Cart setCurrentPage={setCurrentPage}/>
      )}
    </CartProvider>
  )
}

export default App
