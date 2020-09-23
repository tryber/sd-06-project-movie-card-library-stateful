import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {

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

    this.changeRating = this.changeRating.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeRating(event) {
    // console.log(event.target.value);
    this.setState({ rating: event.target.value });
  }

  changeGenre(event) {
    // console.log(event.target.value);
    this.setState({ genre: event.target.value });
  }

  handleChange(event) {
    const name = event.target.id.split('-')[1];
    console.log(name);

    this.setState({ [name]: event.target.value, });
  }

  addNewMovie(event) {
    event.preventDefault();

    // console.log(this.state)

    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="movie-title" data-testid="title-input-label">Título</label>
          <input
            type="text" id="movie-title" data-testid="title-input"
            defaultValue="" onChange={this.handleChange}
          />

          <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            type="text" id="movie-subtitle" data-testid="subtitle-input"
            defaultValue="" onChange={this.handleChange}
          />

          <label htmlFor="movie-image" data-testid="image-input-label">Imagem</label>
          <input
            type="text" id="movie-image" data-testid="image-input"
            onChange={this.handleChange}
          />

          <label htmlFor="movie-story" data-testid="storyline-input-label">Sinopse</label>
          <input
            type="textarea" id="movie-story" data-testid="storyline-input"
            onChange={this.handleChange}
          />

          <label htmlFor="movie-rating" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number" id="movie-rating" data-testid="rating-input"
            defaultValue="0" onChange={this.changeRating} min="0" max="5"
          />

          <label htmlFor="movie-genre" data-testid="genre-input-label">Gênero</label>
          <select
            id="movie-genre" data-testid="genre-input"
            onChange={this.changeGenre} defaultValue="action"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>

          <button data-testid="send-button" onClick={this.addNewMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
