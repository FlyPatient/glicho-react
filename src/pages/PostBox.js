import React from 'react';
import { Component } from 'react';

import { PageHeader } from '../components/title/PageHeader';
import { BookForm } from '../components/book/BookForm';
import { fetchCategories, addBook } from '../shared/http';
import { navigate } from '../history/history';

class PostBox extends Component {
    constructor(props) {
        super(props);

        this.state = {categories:[], loaded: false};

        this.handleSubmit = this.handleSubmit.bind(this);
    }; 

    componentDidMount() {
        this.fetchCategories();
    } 

    fetchCategories() {
        fetchCategories().then(obj => {
                if(obj && obj.status == "OK") {
                    const categories = obj.data.rows.map(c => ({label: c.name, value: c.categoryid }));
                    const loaded = true;
                    this.setState({
                        categories, 
                        loaded,
                    }); 
                }
            }); 
    }


    handleSubmit(book) {
        addBook(book).then(obj => {
            if(obj && obj.status == "OK") {
                //simple alert message for now... 
                alert('Book added successfully!');
                navigate(`books/${book.selectedCategory}/${book.selectedCategoryName}`);
            }
        });
    }

    render() {
        return (
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3"> 
                            <PageHeader title="Add book" />  

                            {
                                this.state.loaded ? <BookForm categories={this.state.categories} handleSubmit={this.handleSubmit} />
                                :
                                <div>
                                    Loading...
                                </div>
                            }

                        </div>
                    </div>
                </div>
        );
    }
}

export  { PostBox };

