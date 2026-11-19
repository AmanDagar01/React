import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {
    const {user, setUser} = useContext(UserContext);
  return (
    <div>Profile: {user}
    <br />
        <input type="text"
          value={user}
          onChange={(e)=>setUser(e.target.value)}
        />
    </div>
  )
}

export default Profile