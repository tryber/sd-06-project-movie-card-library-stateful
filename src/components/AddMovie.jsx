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
    this.resetButton = this.resetButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderGenre() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderRating() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderStoryline() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderImagepath() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderTitle() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          name="title"
          onChange={this.handleChange}
          type="text" value={this.state.title}
          data-testid="title-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImagepath()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderGenre()}
        <button
          data-testid="send-button"
          onClick={this.resetButton}
        >Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func };
export default AddMovie;
