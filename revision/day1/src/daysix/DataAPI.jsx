
import { useEffect, useState } from 'react';

function DataAPI() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await res.json();
        setUserData(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Data</h2>
      <ul>
        {userData.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataAPI;




// Challenge 3 — API Data Fetching

// Fetch users from https://jsonplaceholder.typicode.com/users inside an effect.
// Display:
// - A loading message while fetching.
// - User names after success.
// - An error message if the request fails.
// Bonus: use AbortController or another appropriate cleanup strategy.