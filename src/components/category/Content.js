import PropTypes from 'prop-types';
import React from 'react';

const Content = props => {
    const { content } = props;
    return (
        <p className="content">  
            { content }
        </p>
    )
} 

Content.propTypes = {
    content: PropTypes.string
};

export default Content;