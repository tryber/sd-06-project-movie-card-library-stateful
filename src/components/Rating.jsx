import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-cart-rating">
        <span className="rating">{this.props.rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };
export default Rating;
