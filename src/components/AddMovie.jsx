import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleCLick = this.handleCLick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleCLick() {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="movie-title" data-testid="title-input-label">
            Título
            <input
              id="movie-title"
              data-testid="title-input"
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="movie-subtitle"
              data-testid="subtitle-input"
              name="subtitle"
              type="text"
              value={subtitle}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="movie-image" data-testid="image-input-label">
            Imagem
            <input
              id="movie-image"
              data-testid="image-input"
              name="imagePath"
              type="text"
              value={imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="movie-storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="movie-storyline"
              data-testid="storyline-input"
              name="storyline"
              value={storyline}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="movie-rating" data-testid="rating-input-label">
            Avaliação
            <input
              id="movie-rating"
              data-testid="rating-input"
              name="rating"
              type="number"
              value={rating}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="movie-genre" data-testid="genre-input-label">
            Gênero
            <select id="movie-genre" data-testid="genre-input" name="genre" value={genre} onChange={this.handleChange}>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={this.handleCLick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: propTypes.func.isRequired };

export default AddMovie;
