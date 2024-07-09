// @ts-nocheck

import React, { useState } from 'react';

const booksData = () => [
    {id: 1, name: "Pather Panchal"},
    {id: 2, name: "Padma Dadir Majhi"},
    {id: 3, name: "Srikanta"},
]




const UseReducer = () => {
    const [books, setBooks] = useState(booksData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModalText] = useState("");
    const [bookName, setBookName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((prevState) => {
            const newBook = { id: new Date().getTime().toString(), name: bookName }
            return [... prevState, newBook]
        });
        setIsModalOpen(true);
        setModalText("Book is added");
    }

    const Modal = ({modalText}) => {
        return <p>{modalText}</p>
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

        {isModalOpen && <Modal modalText={modalText} />}
        {books.map((book) => {
            const {id,name} = book;
            return <li key={id}>{name}</li>
        })}
    </div>
  )
}

export default UseReducer;