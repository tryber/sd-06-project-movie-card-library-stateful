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
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();

    const callback = this.props.onClick;
    callback(this.state);

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
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.handleChange}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
        </label>
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.handleChange}
        />
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
        </label>
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.handleChange}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
        </label>
        <input
          type="text"
          name="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.handleChange}
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.handleChange}
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
        </label>
        <select
          type="text"
          name="genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
        <button onClick={this.handleClick} data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
