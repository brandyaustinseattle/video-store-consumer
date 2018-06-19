import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      searchResults: [],

    };

  }

  // componentDidMount() {
  //    const MOVIE_URL = 'http://localhost:3000/movies'
  //
  //    let customURL = `${MOVIE_URL}?query=${this.state.searchTerm}`
  //
  //   axios.get(MOVIE_URL)
  //   .then((response) => {
  //     console.log(response);
  //
  //     this.setState({searchResults: response.data});
  //   })
  //   .catch((error) => {
  //
  //     // this.props.updateStatusCallback(error.message, 'error');
  //   });
  // }

  render() {

    return(

      <div>
        <h1>Search Me!</h1>
        <SearchForm />
      </div>
    )
  }
}

export default Search;
