import fetch from 'isomorphic-fetch';

const fetchCategories = () => fetch(`${process.env.ENDPOINT}getcategories`).then(res => res.json());

const fetchBooks = (id) => fetch(`${process.env.ENDPOINT}getBookByCategoryId/${id}`).then(res => res.json());

export { fetchCategories, fetchBooks };