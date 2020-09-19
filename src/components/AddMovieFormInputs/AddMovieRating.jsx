import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Não está inicializando no teste com valor de 0!

class AddMovieRating extends Component {
  render() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          // onChange=""
        />
      </label>
    );
  }
}

export default AddMovieRating;