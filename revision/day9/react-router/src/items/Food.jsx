import React from 'react'

function Food() {
    const { id } = useParams();

    return <h1>Product ID: {id}</h1>;
}

export default Food





// Challenge 2 — Eatly Product Details

// Create a product listing with:
// - Pizza — ₹200
// - Burger — ₹120
// - Pasta — ₹180
// Clicking a product should navigate to /products/:id.

// On the details page, use useParams() to read the ID and show the matching product details.