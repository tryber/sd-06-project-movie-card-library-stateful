import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovieStoryline extends Component {
  render() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          name="storyline"
          placeholder="Type Movie storyline"
          id="storyline"
          data-testid="storyline-input"
          // onChange=""
        />
      </label>
    );
  }
}

export default AddMovieStoryline;