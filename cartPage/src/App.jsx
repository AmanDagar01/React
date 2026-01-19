import { useState } from 'react'
import './App.css'
import CardM from './components/CardM'
import Products from './components/products'

function App() {
  return (
    <>
      <div className='p-4 bg-red-400 flex flex-wrap'>
        Buy Medicin
      </div>
      <h4 className='p-4 '>List of medicins</h4>
      <div>
        <Products/>
      </div>

    </>
  )
}

export default App
