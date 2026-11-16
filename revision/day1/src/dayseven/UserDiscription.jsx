
import React, { useEffect, useState } from 'react';

function UserDirectory() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch the server");
        }

        const data = await res.json();
        setUser(data);

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

    fetchUser();

    return () => controller.abort();
  }, [retry]);

  if (loading) return <p>Loading users...</p>;

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => setRetry(prev => prev + 1)}>
          Retry
        </button>
      </div>
    );
  }

  const serachData = users.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>User Directory</h2>

      <p>Users fetched: {users.length}</p>

      <input type="text" 
      placeholder='search user'
      value={search}
      onChange={e=>setSearch(e.target.value)}
      />
      <button onClick={()=>setSearch("")}>reset</button>

      <ul>
        {search.length===0?serachData.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}
            <br />
            <strong>Email:</strong> {user.email}
            <br />
            <strong>City:</strong> {user.address.city}
            <br /><br />
          </li>
        )):(serachData.length!=0)?serachData.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}
              <br />
              <strong>Email:</strong> {user.email}
              <br />
              <strong>City:</strong> {user.address.city}
              <br /><br />
            </li>
          )):<p>No users found</p>}

        {/* {serachData.length} */}
      </ul>
    </div>
  );
}

export default UserDirectory;





// Fetch users from https://jsonplaceholder.typicode.com/users.
// - Display each user's name, email, and city.
// - Show loading and error states.
// - Use .map() and a unique key.
// - Add a Retry button for errors.


// Challenge 3 — Search Users

// Extend Challenge 1 with a search input.
// - Filter users by name as the user types.
// - Show a “No users found” message when there are no matches.
// - Add a Clear button.
// - Bonus: explain when the filtered list should be derived from state rather than stored in separate state.