// @ts-nocheck
import React, { useEffect, useState } from 'react'

const UseEffectExmple = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("useEffect");
    }, [count]);
  return (
    <div>
        {console.log("randering")}
        <h1>Use Effect</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>{setCount((count => count + 1))}}>+</button>
        <button onClick={()=>{setIsLoading(!isLoading)}}>isLoading</button>
    </div>
  )
}

export default UseEffectExmple