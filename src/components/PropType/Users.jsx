// @ts-nocheck
import React, { useState } from 'react'
import User from './User'

const Users = () => {
    const [userName, setUserName] = useState("rk zahid hassan dipu");
    const [userId, setUserId] = useState();
    const [user, setUsers] = useState({
        id: 12535555,
        name: "anisul islam",
    });
  return (
    <>
        <User userName={userName} userId={userId}  user={user} />
    </>
  )
}

export default Users