import React, { Component } from 'react';
import '../App.css';

class Labels extends Component {
  render() {
    return (
      <div className="labels">
        <label data-testid="title-input-label" htmlFor="title">
        Título
        </label><br />
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
        </label><br />
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
        </label><br />
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
        </label><br /><br />
        <label data-testid="rating-input-label" htmlFor="aval">
          Avaliação
        </label><br />
        <label data-testid="genre-input-label" htmlFor="select">
          Gênero
        </label>
      </div>
    );
  }
}

export default Labels;
