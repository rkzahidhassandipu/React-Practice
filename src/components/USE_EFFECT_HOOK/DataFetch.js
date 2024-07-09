// @ts-nocheck
import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                if(!res.ok){
                    throw Error("fecthing is not successful")
                }
                    return res.json();
            })
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
                setError(null)
            })
            .catch((error)=>{
                setError(error.message);
                setIsLoading(false);
            })
        }, 2000);
    }, []);

    let todosElement =  null;

    if(todos){
        todosElement = todos.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>
        });
    }
    
    
    const loadingMessage = <p>Loading todos...</p>



  return (
    <div>
        <h1>Todos</h1>
        {error && <p>{error}</p>}
        {isLoading && loadingMessage}
        {!isLoading && todosElement}
    </div>
  )
}

export default DataFetch