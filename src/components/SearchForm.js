import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

  static propTypes = {
    searchCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      searchTerm: '',
    };

  }

  onInputChange = (event) => {
    let enteredTerm = {};
    enteredTerm[event.target.name] = event.target.value;
    this.setState(enteredTerm);

    console.log('term');
    console.log(event.target);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state);

    this.setState({
      searchTerm: '',
    });
  }

  render() {

    return(

      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name='searchTerm' value={this.state.searchTerm} onChange={this.onInputChange} placeholder="Search.." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
