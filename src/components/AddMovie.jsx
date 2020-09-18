import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  rendererTitleInput() {
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

  rendererSubTitleInput() {
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

  rendererimageInput() {
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

  rendererStoryLineInput() {
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

  rendererRatingInput() {
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

  rendererGenreInput() {
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
