import React, { useCallback, useState } from 'react'
import Memo from './Memo';

const Parent = () => {
    const [count, setCouont] = useState(0);
    const [toggle, setToggle] = useState(false);
    console.log("app rendering");

    const handleIncrementMessage = useCallback(() => {
        setCouont(count + 1)
    }, [count])
  return (
    <div>
        {toggle? "On" : "Off"}
        <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCouont((count) => count +1)}}>Increment</button>
        <Memo numberOfMessage={count} onHandleIncrement={handleIncrementMessage} />
        {/* <Memo /> */}


    </div>
  )
}

export default Parent