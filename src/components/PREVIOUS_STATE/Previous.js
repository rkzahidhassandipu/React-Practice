import React, {useState} from 'react';

const Previous = () => {
    const [first, setfirst] = useState(0);


const handleIncrement = () =>{
    setfirst(first => first + 1);
    setfirst(first => first + 1);
    setfirst(first => first + 1);
}



    
  return (
    <div>
        <h1>Count : {first}</h1>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Previous