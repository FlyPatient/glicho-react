import React from 'react';
import PropTypes from 'prop-types';
import Content from '../category/Content';

const Book = (props) => {
    const { book } = props;
    return ( 
            <a className="list-group-item">  
               <h4 className="list-group-item-heading">  { book.name } </h4>
               <Content content={book.author} />
               <p className="list-group-item"> Price:  { book.price } </p>
               <p className="list-group-item"> Condition: { book.description } </p>
            </a> 
    );   
}

Book.propTypes = {
    book: PropTypes.object.isRequired 
}

export { Book };