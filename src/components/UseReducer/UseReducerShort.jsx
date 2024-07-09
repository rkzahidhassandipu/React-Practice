// @ts-nocheck

import React, { useReducer, useState } from 'react';

// Function to return initial books data
const booksData = [
    { id: 1, name: "Pather Panchali" },
    { id: 2, name: "Padma Nadir Majhi" },
    { id: 3, name: "Srikanta" },
];

// Reducer function to manage state updates
const reducer = (state, action) => {
    if (action.type === "ADD") {
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book added successfully",
        };
    }
    if (action.type === "REMOVE") {
        const filteredBooks = state.books.filter(book => book.id !== action.payload);
        return {
            ...state,
            books: filteredBooks,
            isModalOpen: true,
            modalText: "Book removed successfully",
        };
    }
    return state;
};

// Modal component
const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
};

const BooksDataShort = () => {
    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: "",
    });
    const [bookName, setBookName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        dispatch({ type: "ADD", payload: newBook });
        setBookName(""); // Clear input field after adding book
    };
    const removeBook = (id) => {
        dispatch({type: "REMOVE", payload: id})
    }
    
    return (
        <div>
            <h3>Book List</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="Enter book name"
                />
                <button type='submit'>Add Book</button>
            </form>

            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
            
            <ul>
                {bookState.books.map((book) => (
                    <li key={book.id}>{book.name}
                        <button onClick={()=>{removeBook(book.id)}}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksDataShort;
