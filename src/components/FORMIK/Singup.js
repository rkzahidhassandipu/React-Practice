import React, { useState } from 'react';

import { useFormik } from 'formik';

const Singup = () => {


    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password
        }
        console.log(newUser)
    }


  return (
   <div>
    <h1>Sing Up</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' name='name' value={name} onChange={handleNameChange} />
        </div>
        <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' name='email' value={email} onChange={handleEmailChange} />
        </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' value={password} onChange={handlePasswordChange} />
        </div>
        <button type='submit'>Submit</button>
    </form>
   </div>
  )
}

export default Singup