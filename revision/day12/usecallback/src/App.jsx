import { useMemo, useState, useCallback } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductActions from './ProductActions'

const products = [
  { id: 1, name: "iPhone 16", category: "Electronics", price: 80000 },
  { id: 2, name: "Samsung S25", category: "Electronics", price: 75000 },
  { id: 3, name: "Nike Shoes", category: "Fashion", price: 5000 },
  { id: 4, name: "Adidas T-Shirt", category: "Fashion", price: 2000 },
  { id: 5, name: "MacBook Air", category: "Electronics", price: 100000 }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All")

  const filterProducts = useMemo(()=>{

    return products.filter(item=>{
      const searchprod = item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      const filteredItems = category === "All" || item.category === category;

      return searchprod && filteredItems;
    })
  },[search, products, category]);

  // Memoize callback
  const handleReset = useCallback(() => {
    setSearch("");
    setCategory("All");
  }, []);

  return (
    
    <>
      <input type="text"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />

      <label>category</label>
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      <ProductActions onReset={handleReset} />

      {filterProducts.map(item=>
        <p key={item.id}>{item.name} : {item.price}</p>
      )}
    </>
  )
}

export default App





// Expected functionality
// - Display a list of products.
// - Search products by name.
// - Filter by category.
// - Use useMemo for filtering.
// - Add a child component that receives a callback.
// - Use useCallback for that callback.
// - Bonus: wrap the child component in React.memo.





// useMemo(() => value, [dependency]);

// useCallback(() => functionLogic, [dependency]);

// Difference between them
// useMemo	                      \  useCallback
// Caches a value                  \ 	Caches a function
// Runs a calculation when         \
// dependencies change	            \  Returns the same function while dependencies stay unchanged
// Useful for expensive calculations \	Useful for stable callback references




// React.memo optimizes child component rendering.

// useCallback optimizes function references.

// useMemo optimizes expensive calculations.

// One final detail: React.memo performs a shallow comparison of props by default. If a prop is an object, array, or function recreated on every render, React considers it changed because its reference is different.