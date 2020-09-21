import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormImage extends Component {
  render() {
    const { imagePath, callback } = this.props;
    return (
      <label htmlFor="label-image" data-testid="image-input-label">
        Imagem
        <input
          id="label-image"
          className="formItems"
          type="text"
          value={imagePath}
          name="imagePath"
          data-testid="image-input"
          onChange={callback}
        />
      </label>
    );
  }
}

export default FormImage;

FormImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
