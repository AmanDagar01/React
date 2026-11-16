import React, { useState } from 'react'

function Eatly() {
  const [details, setDetails] = useState({
    name: '',
    address: '',
    payMethod: '',
    tAndC: false
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setDetails(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!details.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!details.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!details.payMethod) {
      newErrors.payMethod = 'Select a payment method';
    }

    if (!details.tAndC) {
      newErrors.tAndC = 'Please accept the terms';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setOrderPlaced(true);
    }
  }

  if (orderPlaced) {
    return (
      <div>
        <h2>Order Confirmed!</h2>
        <p>Thank you, {details.name}!</p>
        <p>Payment Method: {details.payMethod}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Eatly Checkout</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={details.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <label>Full Address</label>
        <input
          name="address"
          type="text"
          placeholder="Enter your address"
          value={details.address}
          onChange={handleChange}
        />
        <p>{errors.address}</p>

        <label>Payment Method</label>
        <select
          name="payMethod"
          value={details.payMethod}
          onChange={handleChange}
        >
          <option value="">Select payment method</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>
        <p>{errors.payMethod}</p>

        <label>
          <input
            type="checkbox"
            name="tAndC"
            checked={details.tAndC}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>
        <p>{errors.tAndC}</p>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}


export default Eatly









// Challenge 3 — Eatly checkout form

// Build a checkout form with:
// - Customer name
// - Delivery address
// - A payment method select menu (Cash on Delivery, Card, UPI)
// - A checkbox for accepting the terms
// - A Place Order button
// The order should submit only when all required fields are filled and the terms checkbox is selected.
// On successful submission, show an order confirmation containing the customer's name and selected payment method.
// Bonus: Store the form fields in one object state and update each field using the spread operator.






