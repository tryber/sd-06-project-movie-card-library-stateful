import React from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends React.Component {
  render() {
    const { rating, handlerChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input-number">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={rating}
          onChange={handlerChange}
          id="input-number"
        />
      </label>
    );
  }
}

RatingAddMovie.propTypes = {
  rating: PropTypes.number.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default RatingAddMovie;
