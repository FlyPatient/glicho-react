import React from 'react'; 
import PropTypes from 'prop-types';
import { Category } from './Category'

const Categories = (props) => {
    return (
        <div className="categories"> 
            <div className="list-group"> 
                  { props.categories.map(category => <Category key={category.categoryid} category={category} />) }
            </div>
        </div> 
    );
}; 

Categories.propTypes =  {
    categories: PropTypes.array
}

export { Categories };

