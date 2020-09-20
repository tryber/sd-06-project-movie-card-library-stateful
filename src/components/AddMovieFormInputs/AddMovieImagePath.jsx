import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImagePath extends Component {
  render() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          // placeholder="Type Movie Image Path"
          id="imagePath"
          data-testid="image-input"
          onChange={this.props.handleOnChange}
          value={this.props.imagePath}
        />
      </label>
    );
  }
}

AddMovieImagePath.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddMovieImagePath;
