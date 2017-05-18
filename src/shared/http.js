import fetch from 'isomorphic-fetch';

const fetchCategories = () => fetch(`${process.env.ENDPOINT}getcategories`).then(res => res.json());

const fetchBooks = (id) => fetch(`${process.env.ENDPOINT}getBookByCategoryId/${id}`).then(res => res.json());

const addBook = (book) => {
    if (!book) {
        throw new Error('You must provide an object when creating a new book');
    }

    const reqOptions = {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${process.env.ENDPOINT}updateBook`, reqOptions).then(res => res.json());
};

export { fetchCategories, fetchBooks, addBook };