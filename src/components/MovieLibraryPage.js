import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RentalForm from './RentalForm';

class MovieLibraryPage extends Component {

  static propTypes = {
    movieTitle: PropTypes.string,
    customerId: PropTypes.string,
    customerName: PropTypes.string,
    selectedMovHandler: PropTypes.func,
    selectedCustHandler: PropTypes.func
  }

  render() {
    return(
      <div>
        <h1>MOV LIBRARY PAGE</h1>
        <RentalForm selectedMovHandler={this.props.selectedMovHandler} selectedCustHandler={this.props.selectedCustHandler} movieTitle={this.movieTitle} customerId={this.customerId} customerName={this.customerName} movieTitle={this.state.movieTitle} customerId={this.state.customerId} customerName={this.state.customerName} hideCustomers={true} hideMovies={false} />
      </div>
    )
  }
}


export default MovieLibraryPage;
