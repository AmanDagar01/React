import './App.css'
import {Route, Routes, Link} from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'

function App() {

  return (
    <>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">contact</Link>
        <Link to="/about">about</Link>
        <a href="/about">about</a>
        <br />
        <br />
        
                

      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App






// Challenge 1 — Multi-Page React App

// Create these pages:
// - Home
// - About
// - Products
// - Contact
// Requirements:
// - Configure React Router.
// - Create a navigation bar.
// - Use Link for navigation.
// - Every route should render the correct component.