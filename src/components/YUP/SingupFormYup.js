// @ts-nocheck
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'; // Import Yup for validation

const SignupYup = () => {
    
    // Formik hook for managing form state and submission
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        // Validation schema using Yup
        validationSchema: yup.object({
            name: yup.string().min(3, "Name must have at least 3 characters").required("Name is required"),
            email: yup.string().email("Invalid email format").required("Email is required"),
            password: yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm(); // Corrected resetting form values
        }
    });

    // Error rendering logic for each field
    const renderNameError = formik.touched.name && formik.errors.name && (
        <span style={{ color: "red" }}>{formik.errors.name}</span>
    );

    const renderEmailError = formik.touched.email && formik.errors.email && (
        <span style={{ color: "red" }}>{formik.errors.email}</span>
    );

    const renderPasswordError = formik.touched.password && formik.errors.password && (
        <span style={{ color: "red" }}>{formik.errors.password}</span>
    );

    // Form JSX
    const FormYup = (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Handle onBlur to trigger validation
                /><br />
                {renderNameError}
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Handle onBlur to trigger validation
                /><br />
                {renderEmailError}
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Handle onBlur to trigger validation
                /><br />
                {renderPasswordError}
            </div>
            <button type='submit'>Submit</button>
        </form>
    );

    return (
        <div>
            <h1>Formik & Yup</h1>
            {FormYup}
        </div>
    );
};

export default SignupYup;
