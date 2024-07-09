// @ts-nocheck
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const handleAddNewTodo = () => {
    toast("Added new todo this message pop-up box is very beautyful");
  }
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleAddNewTodo}>Add New Todo</button>
      <ToastContainer />
    </div>
  )
}

export default Toast