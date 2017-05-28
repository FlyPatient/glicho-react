import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
    constructor(props) {
        super(props); 

         this.state = {
            content: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    } 

    handleSearchChange(event) {
        const content = event.target.value;
        //make sure the component is controlled
        this.setState({content,});
        this.props.handleSearchText(content);
    }

    render() {
        return (
            <form>  
                <input
                    className="form-control input-group-lg" 
                    placeholder="Search for a book category"
                    value={this.state.content}
                    onChange={this.handleSearchChange} /> 
            </form> 
        );
    }
}

SearchBox.propTypes = {
    handleSearchText : PropTypes.func.isRequired 
};

export { SearchBox }; 

