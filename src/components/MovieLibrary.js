import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';

class MovieLibrary extends Component {

  constructor() {
    super();

    this.state = {
      movies: [],

    };
  }

  componentDidMount() {
     const MOVIE_URL = 'http://localhost:3000/movies'

    axios.get(MOVIE_URL)
    .then((response) => {

      this.setState({movies: response.data});
    })
    .catch((error) => {

      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render() {

    const movies =  this.state.movies.map((movie, index) => {

      return(
        <section>
          < Movie key={index}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            image_url={movie.image_url} />
        </section>
      )
    });

    return(
      <section>
        {movies}
      </section>
    )

  }

}

export default MovieLibrary;
