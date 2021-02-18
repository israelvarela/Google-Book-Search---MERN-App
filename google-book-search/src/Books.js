import React, { Component, useState } from 'react';
import Search from './Search';
import request from 'superagent';


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
            })
        }

    // const [books, searchField] = useState(0);
    
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }

    // handleSearch ={() => searchField(e.target.value)}
    render() {
  return (
    <div>
      <Search searchBook={this.searchBook} handleSearch={this.handleSearch}/>
    </div>
  );
}
}

export default Books;
