import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';

class Customers extends Component {

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

  onClickHandler = () => {
    console.log('we got clicked');
    this.props.rentalCallback
  }

  render() {

    const customers =  this.state.customers.map((customer, index) => {

      return(
        <section>
          < Customer key={index}
            name={customer.name}
            phone={customer.phone}
            checked_out={customer.movies_checked_out_count} />
            <button onClick={this.onClickHandler}>add rental</button>
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
