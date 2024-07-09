// @ts-nocheck
import React, { useState } from 'react'
import Component2 from './Component2';
import { UserContext  } from './UserContext';

const Component1 = () => {
    const [user, setUser] = useState({id: 101, name: "zahid hassan"});
    const [text, setText] = useState("zahid hassan");
  return (
    // <UserContext.Provider value={user}>
    //     <Component2 />
    // </UserContext.Provider>
    <UserContext.Provider value={{user, text}}>
        <Component2 />
    </UserContext.Provider>
  )
}

export default Component1