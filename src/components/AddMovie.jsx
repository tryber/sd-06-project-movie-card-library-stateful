import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: '',
    };
  }

  render() {
    const { onClick, callback } = this.props;

    return (
      <div>
        <form>
          <label data-testid="title-input-label" htmlFor="">Título</label>
          <input data-testid="title-input" value={this.state.title} type="text" />
          <label data-testid="subtitle-input-label" htmlFor="">Subtítulo</label>
          <input data-testid="subtitle-input" value={this.state.subtitle} type="text" />
          <label data-testid="image-input-label" htmlFor="">Imagem</label>
          <input data-testid="image-input" value={this.state.imagePath} type="text" />
          <label data-testid="storyline-input-label" htmlFor="">Sinopse</label>
          <textarea data-testid="storyline-input" value={this.state.storyline} />
          <label data-testid="rating-input-label" htmlFor="">Avaliação</label>
          <input data-testid="rating-input" value={this.state.rating} type="number" />
          <label data-testid="genre-input-label" htmlFor="">Gênero</label>
          <select data-testid="genre-input" value={this.state.genre}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.string,
}

export default AddMovie;
