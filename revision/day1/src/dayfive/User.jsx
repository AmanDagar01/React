import React, { useState } from 'react'

function User() {
    const [User, setUser] = useState({
        name: 'Aman',
        age: 22,
        city: 'faridabad'
    })

    function onChange(e) {
        const { name, value } = e.target;
    
        setUser(prev => ({
          ...prev,
          [name]: name === 'age' ? prev.age + 1 : value
        }));
      }
  return (
    <div><h2>User Info</h2>
        <p>Name: {User.name}</p>
        <p>Age: {User.age}</p>
        <p>City: {User.city}</p>

        <button name='age' onClick={onChange}>Inc age</button>
        <input type="text"
            name='city'
            value={User.city}
            onChange={onChange} 
        />
        <button
            name="city"
            onClick={() =>
            setUser(prev => ({ ...prev, city: 'Delhi' }))
            }
        >
            Change City
      </button>

    </div>
  )
}

export default User




// Create a profile component with name, age, and city stored in one object using useState.
// - Show all three values.
// - Add a button to increase age.
// - Add a button to change city.
// - Update the object using the spread operator.