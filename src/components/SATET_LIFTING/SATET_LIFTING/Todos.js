// @ts-nocheck
import React from 'react'
import TodoH from './TodoH'

const Todos = (props) => {
    console.log(props.todos)
  return (
    <div>
        {props.todos.map((todo, index) => (
            <TodoH key={index} todo={todo}/>
        ))}
    </div>
  )
}

export default Todos