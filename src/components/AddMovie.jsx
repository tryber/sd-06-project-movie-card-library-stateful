import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.titleInput = this.titleInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    this.imageInput = this.imageInput.bind(this);
    this.storylineInput = this.storylineInput.bind(this);
    this.ratingInput = this.ratingInput.bind(this);
    this.genreInput = this.genreInput.bind(this);
    this.buttonFunc = this.buttonFunc.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target }) {
    const { name } = target;
    this.setState(({ [name]: target.value }));
  }

  titleInput() {
    return (
      <label htmlFor="title" data-testid="title-input-label">Título
        <input
          type="text"
          name="title"
          value={this.state.title}
          data-test-id="title-input"
          onChange={this.onChange}
        />
      </label>
    );
  }

  subtitleInput() {
    return (
      <label htmlFor="subtite" data-testid="subtitle-input-label">Subtítulo
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          data-test-id="subtitle-input"
          onChange={this.onChange}
        />
      </label>
    );
  }

  imageInput() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">Imagem
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          data-test-id="image-input"
          onChange={this.onChange}
        />
      </label>
    );
  }

  storylineInput() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
        <textarea
          type="text"
          name="storyline"
          value={this.state.storyline}
          data-test-id="storyline-input"
          onChange={this.onChange}
        />
      </label>
    );
  }

  ratingInput() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">Avaliação
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          data-test-id="rating-input"
          onChange={this.onChange}
        />
      </label>
    );
  }

  genreInput() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">Gênero
        <select
          value={this.state.genre}
          data-test-id="genre-input"
          name="genre"
          onChange={this.onChange}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  buttonFunc(event) {
    event.preventDefault();
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    this.props.onClick(title, subtitle, imagePath, storyline, rating, genre);
    this.setState((
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      }
      ));
  }

  render() {
    return (
      <form data-testid="title-input-label">
        {this.titleInput()}
        {this.subtitleInput()}
        {this.imageInput()}
        {this.storylineInput()}
        {this.ratingInput()}
        {this.genreInput()}
        <button
          data-testid="send-button"
          onClick={this.buttonFunc}
        >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func };

AddMovie.defaultProps = { onClick: '' };


export default AddMovie;
