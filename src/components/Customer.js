import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {

  static propTypes = {
    customerId: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    checkedOut: PropTypes.number,
    rentMovie: PropTypes.func
  }

  onClickHandler = (event) => {
    let customerInfo = event.target;
    this.props.rentMovie(customerInfo);
  }

  render() {

    let customerInfo = {};
    customerInfo["customerId"] = this.props.customerId;
    customerInfo["name"] = this.props.name;

    return(
      <section>
      <table>
        <div>
          {this.props.name}
        </div>

        <div>
          {this.props.phone}
        </div>

        <div>
          {this.props.checkedOut}
        </div>
        <div>
        <button id={this.props.customerId} name={this.props.name} onClick={this.onClickHandler}>add rental</button>
        </div>
      </table>
      </section>
    )
  }
}

export default Customer;
