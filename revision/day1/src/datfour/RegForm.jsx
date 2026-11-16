
import { useState } from "react";

function RegForm() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function validate(form) {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      errors.email = "Enter a valid email";
    }

    if (form.password.length < 8) {
      errors.password = "Use at least 8 characters";
    }

    if (form.confirmPassword !== form.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(details);
    setErrors(validationErrors);
    setSuccess("");

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Registration successful!");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Registration Form</h2>

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

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={details.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={details.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={details.confirmPassword}
          onChange={handleChange}
        />
        <p>{errors.confirmPassword}</p>

        <button type="submit">Register</button>
      </form>

      {success && <p>{success}</p>}
    </div>
  );
}

export default RegForm;






// Challenge 2 — Registration form

// Create a registration form with these fields:
// - Full name
// - Email
// - Password
// - Confirm password
// Requirements:
// 1. All inputs must be controlled.
// 2. Prevent the browser's default form submission.
// 3. Validate all fields on submission.
// 4. Show an error below each invalid field.
// 5. Ensure the password has at least eight characters.
// 6. Ensure both passwords match.
// 7. Display a success message only when all checks pass.
// Don't worry about connecting a backend yet. This is a frontend exercise.