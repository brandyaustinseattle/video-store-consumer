import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';
import RentalForm from './RentalForm';
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

        <div>

        <section>
          < Customer key={index}
            customerId={customer.id}
            name={customer.name}
            phone={customer.phone}
            rentMovie={this.rentalCallback}
            />
        </section>
        </div>
      )
    });

    return(

      <div>
        {customers}
      </div>
    )
  }
}

export default Customers;
