import React from 'react';
import propTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          <p>Avaliação</p>
          <input
            type="number"
            id="rating"
            step="0.1"
            data-testid="rating-input"
            name="rating"
            value={rating}
            onChange={handleChange}
            max="5"
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = { rating: propTypes.number.isRequired };
RatingInput.propTypes = { handleChange: propTypes.func.isRequired };

export default RatingInput;
