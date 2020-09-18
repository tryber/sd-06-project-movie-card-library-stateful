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
  handlerChange: PropTypes.func.isRequired,
  rating: PropTypes.number,
};

RatingAddMovie.defaultProps = { rating: PropTypes.number };

export default RatingAddMovie;
