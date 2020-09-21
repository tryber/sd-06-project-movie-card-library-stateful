import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovieButton extends Component {
  render() {
    return (
      <button
        data-testid="send-button"
        onClick={this.handleOnSubmit}
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieButton;
