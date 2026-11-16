
// Fetch products from https://fakestoreapi.com/products.
// - Display title, price, and image.
// - Add a category filter.
// - Show loading and error states.
// - Keep the original products array unchanged when filtering.

// filter  state filter     display
// set use karna h category chatne ke liye then -> check box logic



import React, { useEffect, useState } from 'react';

function EatlyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState([]);

  const cat = ["men's clothing", "jewelery"];

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "https://fakestoreapi.com/products",
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("API is not responding");
        }

        const data = await res.json();
        setProducts(data);

      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message || "Something went wrong");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  // Category filter
  const filteredData = products.filter(item =>
    category.length === 0 ||
    category.includes(item.category)
  );

  // Checkbox toggle
  function handleCategory(catName) {
    setCategory(prev =>
      prev.includes(catName)
        ? prev.filter(item => item !== catName)
        : [...prev, catName]
    );
  }

  if (loading) return <p>Loading products...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Eatly Products</h2>

      {/* Category Filter */}
      <div>
        <h3>Filter by Category</h3>

        {cat.map(item => (
          <label key={item}>
            <input
              type="checkbox"
              checked={category.includes(item)}
              onChange={() => handleCategory(item)}
            />
            {item}
          </label>
        ))}
      </div>

      {/* Products */}
      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              width="100"
              height="100"
              style={{ objectFit: "contain" }}
            />

            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EatlyProducts;
