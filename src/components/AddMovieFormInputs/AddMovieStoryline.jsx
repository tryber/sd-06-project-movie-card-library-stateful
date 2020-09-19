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
          // placeholder="Type Movie storyline"
          id="storyline"
          data-testid="storyline-input"
          onChange={this.props.handleOnChange}
          value={this.props.storyline}
        />
      </label>
    );
  }
}

export default AddMovieStoryline;
