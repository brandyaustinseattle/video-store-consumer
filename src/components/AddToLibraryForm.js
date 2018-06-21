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

  onFormSubmit = (event) => {
    let URL = `http://localhost:3000/movies?title=${this.state.title}&overview=${this.state.overview}&release_date=${this.state.release_date}&image_url=${this.state.image_url}`
    event.preventDefault();
    axios.post(URL)
    .then((response)=> {
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

        <button type="submit">Add {this.state.title} to Library</button>
      </form>
    )
  }
}

export default AddToLibraryForm;
