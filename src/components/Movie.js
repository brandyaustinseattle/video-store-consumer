import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    inventory: PropTypes.number.isRequired

  }

  render() {
    return(
      <table>

        <tr>
          <th>Title:  </th>
          <td>{this.props.title}</td>
          </tr>

        <tr>
          <th>Release:  </th>
          <td>{this.props.release_date}</td>
        </tr>

        <tr>
          <th>Inventory:  </th>
          <td>{this.props.inventory}</td>
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
