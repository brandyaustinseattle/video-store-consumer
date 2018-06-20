import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToLibraryForm from './AddToLibraryForm';


class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    image_url: PropTypes.string.isRequired
  }

  render() {
    return(
      <table>

      <tbody>
        <tr>
          <th>{this.props.title}</th>
        </tr>

          <tr>
            <td>
              <img src={this.props.image_url} alt={this.props.title}></img>
            </td>
          </tr>

        <tr>
          <th>Release:  </th>
          <td>{this.props.release_date}</td>
        </tr>

        <tr>
          <th>Overview:  </th>
          <td>{this.props.overview}</td>
        </tr>

      </tbody>
      <AddToLibraryForm title={this.props.title} overview={this.props.overview} release_date={this.props.release_date} image_url={this.props.image_url}/>
      </table>

    )

  }

}

export default Movie;
