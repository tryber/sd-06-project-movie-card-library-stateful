import React from 'react';
import PropTypes from 'prop-types';

class ImageAddMovie extends React.Component {
  render() {
    const { imagePath, handlerChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="input-text-image">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={imagePath}
          onChange={handlerChange}
          id="input-text-image"
        />
      </label>
    );
  }
}

ImageAddMovie.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default ImageAddMovie;
