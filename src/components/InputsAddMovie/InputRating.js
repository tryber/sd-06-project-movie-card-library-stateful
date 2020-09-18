import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    return (
      <label htmlFor="number" data-testid="rating-input-label">
        Avaliação
        <input
          id="number"
          type="number"
          name="rating"
          value={this.props.rating}
          data-testid="rating-input"
          onChange={this.props.handleInputs}
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default InputRating;
