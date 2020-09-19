import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovieButton extends Component {
  render() {
    return (
      <button
        // type="submit"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieButton;
