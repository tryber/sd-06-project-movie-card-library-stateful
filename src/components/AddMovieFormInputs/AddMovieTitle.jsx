import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          // placeholder="Type Movie Title"
          id="title"
          data-testid="title-input"
          onChange={this.props.handleOnChange}
          value={this.props.title}
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,  
};

export default AddMovieTitle;
