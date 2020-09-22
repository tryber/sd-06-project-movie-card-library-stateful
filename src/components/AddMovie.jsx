import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.sendMovie = this.sendMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleAreaChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendMovie(currentState, onClick) {
    onClick(currentState);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
            name="title"
            value={this.state.title}
            onChange={this.handleAreaChange}
          />
        </label>

        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input-label"
            data-testid="subtitle-input"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleAreaChange}
          />
        </label>

        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input
            type="img"
            id="image-input-label"
            htmlFor="image-input"
            data-testid="image-input"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleAreaChange}
          />
        </label>

        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            id="storyline-input-label"
            htmlFor="storyline-input"
            data-testid="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleAreaChange}
          />
        </label>

        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input-label"
            htmlFor="rating-input"
            data-testid="rating-input"
            name="rating"
            value={this.state.rating}
            onChange={this.handleAreaChange}
          />
        </label>

        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select
            id="genre-input-label"
            name="genre"
            htmlFor="genre-input"
            data-testid="genre-input"
            value={this.state.genre}
            onChange={this.handleAreaChange}
          >
            <option htmlFor="genre-option" data-testid="genre-option" value="action">
              Ação
            </option>
            <option htmlFor="genre-option" data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option htmlFor="genre-option" data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>

        <button
          type="button"
          onClick={() => this.sendMovie(this.state, onClick)}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
