import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {

  static propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    checked_out: PropTypes.number
  }

  onClickHandler = (event) => {
    console.log('we got clicked');
    console.log(event.target);
    this.props.rentalCallback(event.target)
  }

  render() {

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
          {this.props.checked_out}
        </div>
        <div>
        <button onClick={this.onClickHandler}>add rental</button>
        </div>
      </table>  
      </section>
    )
  }
}

export default Customer;
