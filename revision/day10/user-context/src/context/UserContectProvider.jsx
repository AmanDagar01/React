import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserContectProvider({children}) {
    const [user,setUser] = useState("Aman")
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContectProvider