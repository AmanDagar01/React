import React, { useState } from 'react'

const products = [
    { id: 1, name: "Keyboard", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 600, inStock: false },
    { id: 3, name: "Monitor", price: 8500, inStock: true },
    { id: 4, name: "Headphones", price: 1800, inStock: false }
  ];


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const filteredData = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!inStockOnly || item.inStock))

  return (
    <div>
        <input type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        />

        <label>
            <input
            type="checkbox"
            checked={inStockOnly}
            onChange={e => setInStockOnly(e.target.checked)}
            />
            Show only in-stock products
        </label>

        {filteredData.length === 0 ? (
            <p>No products found</p>
        ) : (
            <ul>
            {filteredData.map(item => (
                <li key={item.id}>
                {item.name} : ₹{item.price} —{' '}
                {item.inStock ? 'In Stock' : 'Out of Stock'}
                </li>
            ))}
            </ul>
        )}

        Available products: {filteredData.length}
    </div>
  )
}

export default Search




// Challenge 3 — Search and filter

// Medium

// Extend Challenge 2 into a tiny product explorer.
// Add:
// - A search input that filters products by name. -- done
// - A checkbox or button to show only in-stock products.
// - A message saying No products found when no products match.
// - A count showing how many products are currently displayed. -- done
// Use useState for the search text and the in-stock filter. Derive the displayed products from those values instead of creating extra state for the filtered array.
// This challenge combines Day 2's state management with today's rendering concepts.