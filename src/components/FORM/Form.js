import React, { useState } from 'react';
import './form.module.css';

const Form = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        
        
        let userInfo = {
            name,
            email,
            password

        }
        console.log(userInfo)
        e.preventDefault();
    }



  return (
    <div>
        <h1>Registration</h1>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name : </label>
                <input type='text' name='name' value={name} id='name' onChange={handleNameChange} required />
            </div>

            <div>
                <label htmlFor='email'>Email : </label>
                <input type='email' name='email' value={email} id='email' onChange={handleEmailChange} required />
            </div>

            <div>
                <label htmlFor='password'>password : </label>
                <input type='password' name='password' value={password} id='password' onChange={handlePasswordChange} required />
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Form