import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          value={this.props.imagePath}
          type="text"
          data-testid="image-input"
          onChange={this.props.handleInputs}
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default InputImage;
