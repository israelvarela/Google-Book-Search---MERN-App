import React from 'react';
import App from './App';

const Search = (props) => {
    return(
       <div className="search">
          <form onSubmit={props.searchBook} action="">
              <input onChange={props.handleSearch} type="text"/>
              <button type="submit">
                Search 
              </button>
          </form>
       </div>
    );
}

export default Search;
