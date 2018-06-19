import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      </table>

    )

  }

}

export default Movie;
