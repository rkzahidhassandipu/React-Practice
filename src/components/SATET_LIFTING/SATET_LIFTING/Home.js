// @ts-nocheck
import React, { useState } from 'react';
import Todos from './Todos';
import NewTodos from './NewTodos';

const dummyTodos = ["todo1", "todo2"]

const Home = () => {

    const [todos, setTodos] = useState(dummyTodos);

    const handleNewTodo = (newTodo) => {
        setTodos([... todos, newTodo])
    }

  return (
    <div>
        <NewTodos onTodo={handleNewTodo}/>
        <Todos todos={todos} />
    </div>
  )
}

export default Home