import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchBooks } from '../shared/http';
import { Books } from '../components/book/Books';
import { PageHeader } from '../components/title/PageHeader';

class BookBox extends Component {
    constructor(props) {
        super(props);

        this.state = {books: [], loaded: false};
    }; 

    componentDidMount() {
        fetchBooks(this.props.params.categoryId)
        .then(obj => {
              if(obj && obj.status == "OK") {
                    const loaded = true, books = obj.data.rows;
                    this.setState({ books, loaded, }); 
                }
            });
    }

    render() {
        return (
            this.state.books &&
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3"> 
                            <PageHeader title={this.props.params.name} /> 

                            {!this.state.loaded ? <div> Loading... </div> : null}

                            {
                                this.state.loaded && this.state.books.length > 0 ? <Books books={this.state.books} />  : null
                            }

                            {
                                this.state.loaded && this.state.books.length == 0 ? 
                                    <div>
                                        No books have been posted in this category.
                                    </div> 
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
        );
    }
}

BookBox.propTypes = {
        params: PropTypes.shape({categoryId: PropTypes.string, name: PropTypes.string})
    } 

export  { BookBox };

