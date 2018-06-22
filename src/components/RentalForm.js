import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customers from './Customers';
import MovieLibrary from './MovieLibrary';

class RentalForm extends Component {

  static propTypes = {
    movieTitle: PropTypes.string,
    customerId: PropTypes.string,
    customerName: PropTypes.string,
    hideCustomers: PropTypes.bool,
    hideMovies: PropTypes.bool,
    selectedMovHandler: PropTypes.func,
    selectedCustHandler: PropTypes.func
  }

  constructor(props) {
    super();

    this.state = {
      movieTitle: props.movieTitle,
      customerId: props.customerId,
      customerName: props.customerName,
      hideCustomers: props.hideCustomers,
      hideMovies: props.hideMovies
    };

  }

  selectedCustomer = (customerInfo) => {
    this.props.selectedCustHandler(customerInfo);
  }

  selectedMovie = (movieTitle) => {
    this.props.selectedMovHandler(movieTitle);
  }

  onFormSubmit = (event) => {
    console.log('in onFormSubmit')
    console.log(event);
    console.log(event.target);
  }

  render(){

    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="movieTitle">Title:   </label>
          <input readOnly type="text" name='movieTitle' value={this.state.movieTitle} />

          <label htmlFor="customerName">Name:   </label>
          <input readOnly type="text" name='customerName' value={this.state.customerName} />
          <button type="submit">rent</button>
        </form>

        {!this.state.hideCustomers && <Customers rentalCallback={this.selectedCustomer} />}

        {!this.state.hideMovies && <MovieLibrary rentalCallback={this.selectedMovie} />}
      </div>
    )
  }
}

export default RentalForm;
