import React, { Component } from 'react';

class SearchForm extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      searchResults: [],

    };

  }

  render() {

    return(

      <div>
        <form>
          <input type="text" placeholder="Search.." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
