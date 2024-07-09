import React, { useState, useEffect } from 'react';
import "./DynamicStyle.module.css"

const DynamicSytle = () => {
    const [name, setName] = useState("");
    const [inputValid, setInputValid] = useState(false);


    useEffect(() => {
        if(name.length < 3){
            setInputValid(false);
        }
        else{
            setInputValid(true);
        }
    }, [name])

    const handleChange = (e) => {
        setName(e.target.value);
        
    }
  return (
    <div>
        <input
         type='text'
         value={name}
         onChange={handleChange}
        //  style={{backgroundColor: inputValid ? "green" : "red"}}
        className={`${inputValid ? "valid" : "invalid"}`}
        />
    </div>
  )
}

export default DynamicSytle