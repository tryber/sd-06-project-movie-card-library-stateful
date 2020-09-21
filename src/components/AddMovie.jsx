import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleAddMovie(event) {
    this.props.onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={this.state.title}
              name="title"
              data-testid="title-input"
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={this.state.subtitle}
              name="subtitle"
              data-testid="subtitle-input"
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              value={this.state.imagePath}
              name="imagePath"
              data-testid="image-input"
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={this.state.rating}
              name="rating"
              data-testid="rating-input"
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={this.state.genre}
              data-testid="genre-input"
              onChange={this.handleChanges}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={this.handleAddMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
