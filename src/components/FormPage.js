import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RentalForm from './RentalForm';

class CustomersPage extends Component {

  static propTypes = {
    movieTitle: PropTypes.string,
    customerId: PropTypes.string,
    customerName: PropTypes.string,
    selectedMovHandler: PropTypes.func,
    selectedCustHandler: PropTypes.func,
    hideCustomers: PropTypes.bool,
    hideMovies: PropTypes.bool
  }

  render() {
    return(
      <div>
        <h1>CUSTOMERS PAGE</h1>
        <RentalForm selectedMovHandler={this.props.selectedMovHandler} selectedCustHandler={this.props.selectedCustHandler} movieTitle={this.props.movieTitle} customerId={this.props.customerId} customerName={this.props.customerName} hideCustomers={this.props.hideCustomers} hideMovies={this.props.hideMovies} />
      </div>
    )
  }
}



export default CustomersPage;
