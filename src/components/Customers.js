import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';
import PropTypes from 'prop-types';

class Customers extends Component {

  static propTypes = {
    rentalCallback: PropTypes.func,
  }

  constructor() {
    super();

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    const CUSTOMERS_URL = 'http://localhost:3000/customers'

    axios.get(CUSTOMERS_URL)
    .then((response) => {

      this.setState({customers: response.data});
    })
    .catch((error) => {

      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  rentalCallback = (customerInfo) => {
    this.props.rentalCallback(customerInfo);
  }

  render() {

    const customers =  this.state.customers.map((customer, index) => {

      return(
        <section>
          < Customer key={index}
            customerId={customer.id}
            name={customer.name}
            phone={customer.phone}
            checkedOut={customer.movies_checked_out_count}
            rentMovie={this.rentalCallback}
            />
        </section>
      )
    });

    return(
      <section>
        {customers}
      </section>
    )
  }
}

export default Customers;
