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
    event.preventDefault();
    console.log('in onFormSubmit');
    console.log(event.target);

    let movieTitle = this.state.movieTitle;
    let customerId = this.state.customerId;

    let date = new Date();
    date.setDate(date.getDate() + 7);

    const RENTAL_URL = `http://localhost:3000/rentals/${movieTitle}/check-out`

    axios.post(RENTAL_URL, {
      title: movieTitle,
      customer_id: customerId,
      due_date: date
    })
    .then((response) => {

      console.log(response);
    })
    .catch((error) => {

     // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render(){

    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="movieTitle">Title:   </label>
          <input readOnly type="text" name='movieTitle' value={this.state.movieTitle} />

          <label htmlFor="customerName">Name:   </label>
          <input readOnly type="text" name='customerName' value={this.state.customerName} />
          <input type="submit" value="rent" />

        {!this.state.hideCustomers && <Customers rentalCallback={this.selectedCustomer} />}

        {!this.state.hideMovies && <MovieLibrary rentalCallback={this.selectedMovie} />}

        </form>
      </div>
    )
  }
}

export default RentalForm;
