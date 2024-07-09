import React, { useState } from 'react'

export default function Index2() {

    const [count, setCount] = useState(0)
    const handleIncrement = () =>{
        setCount(count + 1)
    }
  return (
    <div>
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Count : {count}</h2>
        <button onClick={handleIncrement}>Increment function</button>
    </div>
  )
}
