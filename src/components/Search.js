import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import RentalForm from './RentalForm';
import Movie from './Movie';

class Search extends Component {

  constructor() {
    super();

    this.state = {
      searchResults: [],
    };

  }

  processSearchTerm = (search) => {
    const MOVIE_URL = 'http://localhost:3000/movies'

    let customURL = `${MOVIE_URL}?query=${search.searchTerm}`

    axios.get(customURL)
    .then((response) => {
      console.log(response);

      this.setState({searchResults: response.data});
  })
    .catch((error) => {
      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render() {

    const searchResults = this.state.searchResults.map((movie, index) => {

    return (
      < Movie key={index}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        inLibrary={true}/>
      )
    });

    return(

      <section>
        <div>
          <h1>SEARCH JS</h1>
          <RentalForm movieTitle='' customerId='' customerName='' hideCustomers={true} hideMovies={true} />
        </div>

        <div>
          <SearchForm searchCallback={this.processSearchTerm} />
          {searchResults}
        </div>
      </section>
    )
  }
}

export default Search;
