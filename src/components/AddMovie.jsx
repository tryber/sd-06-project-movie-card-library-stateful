import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super()

    // this.newTitle = this.newTitle.bind(this)
    // this.newSubTitle = this.newSubTitle.bind(this)


    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form>
          <label data-testid="title-input-label">
            Título
          <input
              type="text" value={this.state.title} data-testid="title-input" onChange={onClick}
            />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
          <input
              type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={onClick}
            />
          </label>
          <label data-testid="image-input-label">
            Imagem
          <input
              type="text" value={this.state.imagePath} data-testid="image-input" onChange={onClick}
            />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
          <textarea
              value={this.state.storyline} data-testid="storyline-input-label" onChange={onClick}
            />
          </label>
          <label data-testid="rating-input-label">
            Avaliação
        <input
              type="number" value={this.state.rating} data-testid="rating-input" onChange={onClick}
            />
          </label>
          <label data-testid="genre-input-label">
            Gênero
        <select value={this.state.genre} data-testid="genre-input" onChange={onClick}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={onClick}></button>
        </form>
      </div>

    );
  }
}
