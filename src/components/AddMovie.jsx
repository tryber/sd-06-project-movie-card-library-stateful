import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handle = this.handle.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
  }

  handle({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick({ target }) {
    const { onClick } = this.props;
    this.setState = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    onClick();
  }

  subtitulo() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
       Subtítulo
        <input
          value={this.subtitle}
          name="subtitle"
          onChange={this.handle}
          data-testid="subtitle-input"
          type="text"
        />
      </label>
    );
  }

  image() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
        <input
          value={this.image}
          name="imagePath"
          onChange={this.handle}
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }

  sinopse() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          value={this.storyline}
          name="storyline"
          onChange={this.handle}
          data-testid="storyline-input"
          type="text"
        />
      </label>
    );
  }

  classificacao() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          value={this.rating}
          name="rating"
          onChange={this.handle}
          data-testid="rating-input"
          type="text"
        />
      </label>
    );
  }

  genre() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={this.genre}
          onChange={this.handle}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  button() {
    return (
      <button type="button" data-testid="send-button" onClick={this.handleClick}>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.title()}
        {this.subtitulo()}
        {this.image()}
        {this.sinopse()}
        {this.classificacao()}
        {this.genre()}
        {this.button()}
      </form>
    );
  }
}


AddMovie.protoTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
