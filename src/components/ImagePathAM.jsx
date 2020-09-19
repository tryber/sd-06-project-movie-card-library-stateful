import React from 'react';
import PropTypes from 'prop-types';

class ImagePathAM extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="image-id" data-testid="image-input-label">
          Imagem
          <input
            id="image-id" data-testid="image-input" name="imagePath"
            value={value} onChange={handleChange} type="text"
          />
        </label>
      </div>
    );
  }
}

ImagePathAM.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePathAM;
