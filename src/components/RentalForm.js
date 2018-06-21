import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customers from './Customers';

class RentalForm extends Component {

  static propTypes = {
    movieTitle: PropTypes.string,
    customerId: PropTypes.number,
    customerName: PropTypes.string
  }

  constructor(props) {
    super();

    this.state = {
      movieTitle: props.movieTitle,
      customerId: props.customerId,
      customerName: props.customerName
    };

  }

  selectedCustomer = (customerInfo) => {
    let customerId = customerInfo.id;
    let customerName = customerInfo.name;

    this.setState({
      customerId: customerId,
      customerName: customerName
    });
  }

  selectedMovie = (movie) => {
    this.setState({
      movieTitle: movie.title,
    });

  }

  onFormSubmit = (event) => {
    let URL = `http://localhost:3000/movies?title=${this.state.title}&overview=${this.state.overview}&release_date=${this.state.release_date}&image_url=${this.state.image_url}`
    event.preventDefault();
    axios.post(URL)
    .then((response)=> {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      // this.props.updateStatusCallback(error.message, 'error');

    });
  }

  render(){

    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input readOnly type="text" name='movieTitle' value={this.state.movieTitle} />
          <input readOnly type="text" name='customerName' value={this.state.customerName} />
          <button type="submit">rent</button>
        </form>

        <Customers rentalCallback={this.selectedCustomer} />
      </div>
    )
  }
}

export default RentalForm;
