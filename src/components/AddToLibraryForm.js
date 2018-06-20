import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class AddToLibraryForm extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  constructor(props) {
    super();

    this.state = {
      title: props.title,
      overview: props.overview,
      release_date: props.release_date,
      image_url: props.image_url,
    };

  }



  // onInputChange = (event) => {
  //   let enteredTerm = {};
  //   enteredTerm[event.target.name] = event.target.value;
  //   this.setState(enteredTerm);
  //
  //   console.log('term');
  //   console.log(event.target);
  // }

  onFormSubmit = (event) => {
    let URL = `http://localhost:3000/movies`
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
      <form onSubmit={this.onFormSubmit}>
        <input type="hidden" name='title' value={this.state.title} />
        <input type="hidden" name='overview' value={this.state.overview} />
        <input type="hidden" name='release_date' value={this.state.release_date} />
        <input type="hidden" name='image_url' value={this.state.image_url} />

        <button type="submit">{this.state.title}</button>
      </form>
    )
  }
}

export default AddToLibraryForm;
