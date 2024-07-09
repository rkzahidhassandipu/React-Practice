import React, { useState } from 'react';
import './form.module.css';

const Form = () => {

    const [user, setUser] = useState({name: '', email: '', password: ''});
    const {name, email, password} = user;


    // const handleChange = (e) => {
    //     const filedName = e.target.name;
    //     if(filedName === 'name'){
    //         setUser({name: e.target.value, email, password});
    //     }
    //     if(filedName === 'email'){
    //         setUser({name, email: e.target.value, password});
    //     }
    //     if(filedName === 'password'){
    //         setUser({name, email, password: e.target.value});
    //     }
    // }
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }



    const handleSubmit = (e) => {
        
    
        console.log(user)
        e.preventDefault();
    }



  return (
    <div>
        <h1>Registration</h1>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name : </label>
                <input type='text' name='name' value={name} id='name' onChange={handleChange} required />
            </div>

            <div>
                <label htmlFor='email'>Email : </label>
                <input type='email' name='email' value={email} id='email' onChange={handleChange} required />
            </div>

            <div>
                <label htmlFor='password'>password : </label>
                <input type='password' name='password' value={password} id='password' onChange={handleChange} required />
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Form