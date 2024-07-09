import React, { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(true);


  return (
    <div>
        <div style={{margin: "1em", backgroundColor: "pink", padding: "1rem"}}>
       {
        toggle && (
            <p>
            You can use TypeScript's interface merging behavior to extend the schema types if needed. Type extensions should go in an "ambient" type definition file such as your globals.d.ts. Remember to actually extend the yup type in your application code!You can use TypeScript's interface merging behavior to extend the schema types if needed. Type extensions should go in an "ambient" type definition file such as your globals.d.ts. Remember to actually extend the yup type in your application code!
            </p>
        )
       }
        <div style={{textAlign: "center"}}>
            <button onClick={() => setToggle(true)}>Show</button>
            <button onClick={() => setToggle(false)}>Hide</button>
        </div>
    </div>


    <div style={{margin: "1em", backgroundColor: "pink", padding: "1rem"}}>
       {
        toggle && (
            <p>
            You can use TypeScript's interface merging behavior to extend the schema types if needed. Type extensions should go in an "ambient" type definition file such as your globals.d.ts. Remember to actually extend the yup type in your application code!You can use TypeScript's interface merging behavior to extend the schema types if needed. Type extensions should go in an "ambient" type definition file such as your globals.d.ts. Remember to actually extend the yup type in your application code!
            </p>
        )
       }
        <div style={{textAlign: "center"}}>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
        </div>0
    </div>
    </div>
  )
}

export default Toggle