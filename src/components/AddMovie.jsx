import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: '',
    };
  }

  onClick() {
    this.console.log('oi');
  }

  render() {
    const { onClick /* callback */ } = this.props;

    return (
      <div>
        <form>
          <label data-testid="title-input-label" htmlFor="title">Título</label>
          <input data-testid="title-input" value={this.state.title} type="text" />
          <label data-testid="subtitle-input-label" htmlFor="subtitle">Subtítulo</label>
          <input data-testid="subtitle-input" value={this.state.subtitle} type="text" />
          <label data-testid="image-input-label" htmlFor="image">Imagem</label>
          <input data-testid="image-input" value={this.state.imagePath} type="text" />
          <label data-testid="storyline-input-label" htmlFor="sinopse">Sinopse</label>
          <textarea data-testid="storyline-input" value={this.state.storyline} />
          <label data-testid="rating-input-label" htmlFor="avaliator">Avaliação</label>
          <input data-testid="rating-input" value={this.state.rating} type="number" />
          <label data-testid="genre-input-label" htmlFor="gender">Gênero</label>
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

AddMovie.defaultProps = {
  onClick: '',
  callback: '',
};

AddMovie.propTypes = { onClick: PropTypes.string };

export default AddMovie;
