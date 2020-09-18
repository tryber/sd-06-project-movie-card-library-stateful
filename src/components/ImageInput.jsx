import React from 'react';
import propTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="img" data-testid="image-input-label">
          <p>Imagem</p>
          <input
            id="img"
            data-testid="image-input"
            name="imagePath"
            value={imagePath}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = { imagePath: propTypes.string.isRequired };
ImageInput.propTypes = { handleChange: propTypes.func.isRequired };

export default ImageInput;
