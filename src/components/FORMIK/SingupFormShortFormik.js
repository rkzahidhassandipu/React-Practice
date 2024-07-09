import React, { useState } from 'react';

import { useFormik } from 'formik';

const SingupFormShortFormik = () => {


    
    const formik = useFormik({
        initialValues: {
            name : "",
            email : "",
            password : ""
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values : ""})
        }
    })




  return (
   <div>
    <h1>Formik</h1>
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />
        </div>
        <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
        </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
        </div>
        <button type='submit'>Submit</button>
    </form>
   </div>
  )
}

export default SingupFormShortFormik