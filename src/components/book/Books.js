import React from 'react'; 
import PropTypes from 'prop-types';
import { Book } from './Book'

const Books = (props) => {
    return (
        <div className="books"> 
            <div className="list-group"> 
                  { props.books.map(book => <Book key={book.bookid} book={book} />) }
            </div>
        </div> 
    );
}; 

Books.propTypes =  {
    books: PropTypes.array
}

export { Books };

