import React, { Components} from 'react';
// import PropTypes from 'prop-types'

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    inventory: PropTypes.number.isRequired

  }

  render() {
    return(
      <section>

      <div>
      {this.props.title}
      </div>

      <div>
      {this.props.overview}
      </div>

      <div>
      {this.props.release_date}
      </div>

      <div>
      {this.props.inventory}
      </div>

      </section>

    )

  }

}

export default Movie;
