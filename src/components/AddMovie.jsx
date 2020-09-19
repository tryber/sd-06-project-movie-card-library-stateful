import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {

  constructor() {
    super();

    const { onClick } = this.props;

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
  }

  changeRating(event) {
    this.setState({ rating: event.target.value });
    console.log(this);
  }

  changeGenre(event) {
    this.setState({ genre: event.target.value });
    console.log(event);
  }

  addNewMovie(event) {
    event.preventDefault();

    // sets states
    const titleInput = document.getElementById('movie-title');
    const subtitleInput = document.getElementById('movie-subtitle');
    const imageInput = document.getElementById('movie-image');
    const storylineInput = document.getElementById('movie-story');
    const ratingInput = document.getElementById('movie-rating');
    const genreInput = document.getElementById('movie-genre');

    onClick(this.state);

    titleInput.value = '';
    subtitleInput.value = '';
    imageInput.value = '';
    storylineInput.value = '';
    ratingInput.value = 0;
    genreInput.value = 'action';
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="movie-title" data-testid="title-input-label">Título</label>
          <input type="text" id="movie-title" data-testid="title-input" defaultValue="" />

          <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input type="text" id="movie-subtitle" data-testid="subtitle-input" defaultValue="" />

          <label htmlFor="movie-image" data-testid="image-input-label">Imagem</label>
          <input type="text" id="movie-image" data-testid="image-input" />

          <label htmlFor="movie-story" data-testid="storyline-input-label">Sinopse</label>
          <input type="textarea" id="movie-story" data-testid="storyline-input" />

          <label htmlFor="movie-rating" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number" id="movie-rating" data-testid="rating-input"
            defaultValue="0" onChange={this.changeRating}
          />

          <label htmlFor="movie-genre" data-testid="genre-input-label">Gênero</label>
          <select id="movie-genre" data-testid="genre-input" onChange={this.changeGenre}>
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>

          <button data-testid="send-button" onClick={this.addNewMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.PropTypes = { onClick: PropTypes.func };

export default AddMovie;
