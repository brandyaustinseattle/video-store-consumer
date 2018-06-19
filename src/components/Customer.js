import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {

  static propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    checked_out: PropTypes.number
  }

  render() {

    return(
      <table>
        <div>
          {this.props.name}
        </div>

        <div>
          {this.props.phone}
        </div>

        <div>
          {this.props.checked_out}
        </div>
      </table>
    )
  }
}

export default Customer;
