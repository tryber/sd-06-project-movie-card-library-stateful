import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
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
    this.setState({ [name]: target.value });
  }

  rendererTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
      Título
        <input
          data-testid="title-input"
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        />
      </label>
    );
  }

  rendererSubTitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={this.state.subtitle}
          onChange={this.onChange}
        />
      </label>
    );
  }

  rendererimageInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
      Imagem
        <input
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
          onChange={this.onChange}
        />
      </label>
    );
  }

  rendererStoryLineInput() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
      Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          value={this.state.storyline}
          onChange={this.onChange}
        />
      </label>
    );
  }

  rendererRatingInput() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
          onChange={this.onChange}
        />
      </label>
    );
  }

  rendererGenreInput() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
      Gênero
        <select
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.onChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  rendererButton() {
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
        {this.rendererTitleInput()}
        {this.rendererSubTitleInput()}
        {this.rendererimageInput()}
        {this.rendererStoryLineInput()}
        {this.rendererRatingInput()}
        {this.rendererGenreInput()}
        {this.rendererButton()}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
