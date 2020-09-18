import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título
          <input
            type="text" data-testid="title-input" name="title"
            value={this.state.title} onChange={this.handleChange}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
          <input
            type="text" name="subtitle" data-testid="subtitle-input"
            value={this.state.subtitle} onChange={this.handleChange}
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem
          <input
            type="text" value={this.state.imagePath} data-testid="image-input"
            name="imagePath" onChange={this.handleChange}
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
          <textarea
            value={this.state.storyline} data-testid="storyline-input"
            name="storyline" onChange={this.handleChange}
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação
          <input
            type="number" value={this.state.rating} data-testid="rating-input"
            name="rating" onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">Gênero
          <select
            value={this.state.genre} data-testid="genre-input"
            name="genre" onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
