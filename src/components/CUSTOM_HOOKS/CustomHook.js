// @ts-nocheck
import React from 'react';
import useFetch from './useFetch';

const CustomHook = () => {
    const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    let todosElement = null;

    if (data) {
        todosElement = data.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
        });
    }

    const loadingMessage = <p>Loading todos...</p>;
    const errorMessage = <p>{error}</p>;

    return (
        <div>
            <h1>Todos</h1>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {!isLoading && todosElement}
        </div>
    );
};

export default CustomHook;
