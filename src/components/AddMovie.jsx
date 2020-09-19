import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  rendererTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
      Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={title}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  rendererSubTitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  rendererimage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
      Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={imagePath}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  rendererStoryLine() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
      Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          type="text"
          value={storyline}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  rendererRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={rating}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  rendererGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
      Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={genre}
          onChange={this.handleChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={onClick}
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.rendererTitle()}
        {this.rendererSubTitle()}
        {this.rendererimage()}
        {this.rendererStoryLine()}
        {this.rendererRating()}
        {this.rendererGenre()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
