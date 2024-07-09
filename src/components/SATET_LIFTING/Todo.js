// @ts-nocheck
import React from 'react';
import NewTodo from './Todo/NewTodo';
import NewTodo0 from './Todo/newTodo0';
const Todo = () => {

    const handleNewTodo = (newTodo) => {
        console.log(newTodo);
    }



  return (
    <div>
        <NewTodo0 onHandleNewTodo={handleNewTodo}/>
        <NewTodo title="learn react js" />
    </div>
  )
}

export default Todo