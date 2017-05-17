import React from 'react';
import PropTypes from 'prop-types';

import RouterLink  from '../router/Link';
import Content  from './Content';

const Category = (props) => {
    const { category } = props;
    return ( 
         <RouterLink to={`/books/${category.categoryid}/${category.name}`}>  
            <button className="list-group-item">  
                <Content content={category.name} />
            </button> 
         </RouterLink>
    );   
}

Category.propTypes = {
    category: PropTypes.object.isRequired 
}

export { Category };