import React, { use, useMemo, useState } from 'react'


const products = [
  { id: 1, name: "Pizza", price: 200, category: "Food" },
  { id: 2, name: "Burger", price: 120, category: "Food" },
  { id: 3, name: "Pasta", price: 180, category: "Food" },
  { id: 4, name: "Sandwich", price: 100, category: "Food" },
  { id: 5, name: "Headphones", price: 1500, category: "Electronics" },
  { id: 6, name: "Keyboard", price: 800, category: "Electronics" },
  { id: 7, name: "T-Shirt", price: 500, category: "Clothing" },
  { id: 8, name: "Jeans", price: 1200, category: "Clothing" },
];


function SearcchabaleProduct() {
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState(500);
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("all");
    // const [count, setCount ] = useState(0)
    const [cart, setCart] = useState([])

    const filteredProducts = useMemo(()=>
      products.filter(item =>{
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
  
        const matchPrice = item.price <=maxPrice;
  
        const matchCatergory = category==="all"  || item.category === category;
        
        
        return matchPrice && matchSearch && matchCatergory;

      }).sort((a,b)=>{
        if(sort=="asc"){
          return a.price - b.price;
        }
        if(sort=="dec"){
          return b.price - a.price;
        }
        return 0;
      })
    ,[search,category,maxPrice,sort]);

    function reset(){
      setSearch("");
      setCategory("all");
      setMaxPrice(500);
      setSort("");
    };

    function addToCart(product){
      setCart(prev=>{
        const existingProduct = prev.find(item => item.id == product.id);

        if(existingProduct){
          return prev.map(item => 
            item.id==product.id?
              {...item, quantity: item.quantity+1}
              : item
          );
        }
        return [...prev, {...product, quantity: 1}];
      })
    };

    const totalPrice = cart.reduce(
      (total, item)=> total + item.price*item.quantity,0
    );


  return (
    <div><h2>SearcchabaleProduct</h2>
        <input type="text"
         placeholder='search...'
         value={search}
         onChange={e => setSearch(e.target.value)}
         />

        <input
          type="range"
          min="0"
          max="2000"
          step="10"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="slider"
        />

        <label > category: </label>
        <select
          value={category}
          onChange={e=> setCategory(e.target.value)} 
        >
          <option value="all">all</option>
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>

        <p> max price: {maxPrice}</p>
        <button onClick={()=>setSort("asc")} >ascending</button>
        <button onClick={()=>setSort("dec")} >descending</button>
        <button onClick={reset} >reset</button>
        
        {/* <button onClick={e=> setCount(count+1)}>count: {count}</button> */}
        {/* {filteredProducts.length} */}

         <ul>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} ({item.category})
                <button onClick={()=>addToCart(item)}>add to cart</button>
              </li>
            ))
          ) : (
            <p>No products found</p>
          )}
         </ul>

         <h3>Cart {cart.length}</h3>
         {cart.map(
          item=>
          (
            <p key={item.id}>{item.name} : ₹{item.price}x{item.quantity}={item.price*item.quantity}</p>
          )
         )}
         <h3>Total cart value: ₹{totalPrice}</h3>
    </div>
  )
}

export default SearcchabaleProduct




// challenge 1 — Searchable Product List
// - Create at least 8 products.
// - Add a search input.
// - Search by product name.
// - Make the search case-insensitive.
// - Display “No products found” if no matches exist.



// Challenge 2 — Product Filter & Sort

// Add to Challenge 1:
// - Category dropdown.
// - Maximum price filter.
// - Low-to-high price sorting.
// - High-to-low price sorting.
// - Reset filters button.



// Challenge 3 — Optimize with useMemo
// - Memoize your filtered and sorted product list.
// - Use the correct dependency array.
// - Explain why useMemo might help.  -> only rereder when dependency array cahnges (withot that every time)
// - Bonus: add a cart button and count.