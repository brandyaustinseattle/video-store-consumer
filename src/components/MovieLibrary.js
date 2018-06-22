import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
import PropTypes from 'prop-types'
import './MovieLibrary.js';
import '../App.css';

class MovieLibrary extends Component {

  static propTypes = {
    rentalCallback: PropTypes.isRequired
  }

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

  movieCallback = (movieTitle) => {
    console.log('made it to the Library');
    console.log(movieTitle);
    console.log(this.props.rentalCallback(movieTitle));

    this.props.rentalCallback(movieTitle);
  }


  render() {

    const movies =  this.state.movies.map((movie, index) => {

      return(
        <section>
          < Movie key={index}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            image_url={movie.image_url}
            inLibrary={false}
            rentMovie={this.movieCallback}/>
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
