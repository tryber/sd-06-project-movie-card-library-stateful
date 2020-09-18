import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();

    // binds
    this.addTitleAndSubtitle = this.addTitleAndSubtitle.bind(this);
    this.addImageAndStorylineAndRating = this.addImageAndStorylineAndRating.bind(this);
    this.addGenre = this.addGenre.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // init state
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // update state by props names
  handleChange({ target }) {
    const { name, value } = target;
    console.log(name);

    this.setState({ [name]: value });
  }

  addTitleAndSubtitle() {
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title">Título:
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
        </label>
      </div>
    );
  }

  addImageAndStorylineAndRating() {
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image">Imagem:
        <input
          name="image"
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
          onChange={this.handleChange}
        />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          checked={this.state.storyline}
          onChange={this.handleChange}
        />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}
        />
        </label>
      </div>
    );
  }

  addGenre() {
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre">Gênero
        <select
          data-testid="genre-input"
          value={this.state.genre}
          // onChange={this.onSelectedGenreChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <this.addTitleAndSubtitle />
          <this.addImageAndStorylineAndRating />
          <this.addGenre />
          <button
            data-testid="send-button"
            type="submit"
            onClick=""
          >
          Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

