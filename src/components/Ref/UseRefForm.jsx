// @ts-nocheck
import React, { useRef } from 'react';





const UseRefForm = () => {

  const userNameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log({userName, password})
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='form-field'>
          <label htmlFor='username'>UserName</label>
          <input type="text" id='username' ref={userNameRef} />
      </div>
      <div className='form-field'>
          <label htmlFor='password'>Password</label>
          <input type="password" id='password' ref={passwordRef} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UseRefForm