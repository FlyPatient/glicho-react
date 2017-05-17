import React, { Component } from 'react';
import Loader from 'react-loaders';
import { Button } from 'react-bootstrap';

import { SearchBox } from '../components/category/SearchBox';
import { Categories } from '../components/category/Categories';
import { fetchCategories } from '../shared/http';

class Home extends Component {
     constructor(props) {
        super(props); 

        this.state = {
            categories : [],
            filteredCategories: [],
            content: "",
            loaded: false,
        };

        this.handleSearchText = this.handleSearchText.bind(this);
    }

    componentDidMount() {
        this.fetchCategories();
    }

    handleSearchText(content) {
        if(!content) {
             this.setState({filteredCategories: [], content,});
            return;
        }

        const filteredCategories = this.state.categories.filter(c => {
            return c.name.toLowerCase().includes(content.toLowerCase());
        }); 

        this.setState({filteredCategories, content,});
    }
    
    fetchCategories() {
        fetchCategories().then(obj => {
                if(obj && obj.status == "OK") {
                    const loaded = true, categories = obj.data.rows;
                    this.setState({
                        categories, loaded,
                    }); 
                }
            }); 
    }

    render() {
        return (
            <div className="home">  
                <div className="row">  
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                            <SearchBox handleSearchText={this.handleSearchText} />
                            {
                                this.state.loaded ? <Categories categories={this.state.filteredCategories.length != 0 || this.state.content ? this.state.filteredCategories : this.state.categories} />
                                    :
                                <div className="loader"> 
                                    Loading...
                                </div> 
                            }                           
                    </div>
                </div>
            </div>
        );
    }
}

export { Home }