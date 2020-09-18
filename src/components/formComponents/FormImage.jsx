import React, { Component } from 'react';

class FormImage extends Component {
  render() {
    const { imagePath, callback } = this.props;
    return (
      <label data-testid="image-input-label">
        Imagem
        <input type="text" value={imagePath} name="imagePath" data-testid="image-input" onChange={callback}/>
      </label>
    )
  }
}

export default FormImage;