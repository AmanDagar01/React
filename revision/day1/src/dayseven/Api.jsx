import React, { useEffect, useState } from 'react'

function Api() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(()=>{
        const controller = new AbortController();

        async function fetchUser() {
            try {
                setLoading(true);
                setError("");

                const res = await fetch("https://jsonplaceholder.typicode.com/users",
                    {signal: controller.signal}
                );

                if(!res.ok){
                    throw new Error("Failed to fetch users");
                }

                const data = await res.json();
                setUser(data);

            } catch (error) {
                if (err.name !== "AbortError") {
                    setError(error.message || "Something went wrong");
                }
                
            } finally{
                setLoading(false);
            }
        };
        fetchUser();
        return () => controller.abort();
    },[]);

    if(loading) return <p>Loading users....</p>;
    if(error) return <p>Error: {error}</p>



  return (
    <div>Api
        {user.map(user=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default Api



// https://jsonplaceholder.typicode.com/users