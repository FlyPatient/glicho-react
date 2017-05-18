import React from 'react';
import PropTypes from 'prop-types';
import Filter from  'bad-words';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const filter = new Filter();

class BookForm extends React.Component {
    constructor(props) {
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            selectedCategory: 0,
            selectedCategoryName : "",
            title: "",
            author: "",
            price: "",
            condition: ""
        }

        this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSelectedCategory(val) {
        this.setState({
            selectedCategory: val.value,
            selectedCategoryName: val.label
        });
    }

    handleTextChange(e) {
        const prop = e.target.getAttribute("data-name");
        var newObject = {};
        newObject[prop] = e.target.value;
        this.setState(newObject);
    }

    handleSubmit(event) {
        event.preventDefault();

        if(!this.props.handleSubmit) return;

        const sendBook = this.state;
        this.props.handleSubmit(sendBook);

        this.setState({
            selectedCategory: 0,
            selectedCategoryName: "",
            title: "",
            author: "",
            price: "",
            condition: ""
        });
    }

    render() {
        return (
            <form className="add-book" onSubmit={this.handleSubmit}>  
                  
                 <div className="form-group">
                    <label htmlFor="inputCategory">Category *</label>
                    <Select name="inputCategory" value={this.state.selectedCategory} options={this.props.categories} onChange={this.handleSelectedCategory} required /> 
                </div>  

                <div className="form-group">
                    <label htmlFor="inputTitle">Title *</label>
                    <input data-name="title" value={this.state.title} type="text" className="form-control" id="inputTitle" placeholder="your book's title?" onChange={this.handleTextChange} required/>
                </div>

               <div className="form-group">
                    <label htmlFor="inputAuthor">Author *</label>
                    <input data-name="author" value={this.state.author} type="text" className="form-control" id="inputAuthor" placeholder="the author's name?" onChange={this.handleTextChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputPrice">Price</label>
                    <input data-name="price" value={this.state.price} type="text" className="form-control" id="inputPrice" placeholder="how much are you willing to sell this book?" onChange={this.handleTextChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="inputCondition">Condition</label>
                    <input data-name="condition" value={this.state.condition} type="text" className="form-control" id="inputCondition" placeholder="describe the condition of your book..." onChange={this.handleTextChange} />
                </div>

                 <div className="form-group">
                    <input type="submit"  className="btn btn-default" placeholder="Post" />                
                </div>
            </form> 
        );
    }
}

BookForm.propTypes = {
    categories: PropTypes.array.isRequired
};

export { BookForm }; 