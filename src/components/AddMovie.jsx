import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.inputStateChange = this.inputStateChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.saveMovie = this.saveMovie.bind(this);


    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputStateChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  saveMovie(currentState, onClick) {
    onClick(currentState);
    this.resetState();
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        <form action="" data-testid="add-movie-form">

          <label htmlFor="title-input" data-testid="title-input-label">
            Título
          </label>
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            value={title}
            onChange={this.inputStateChange}
          />

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.inputStateChange}
          />

          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
          </label>
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            value={imagePath}
            onChange={this.inputStateChange}
          />

          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
          </label>
          <input
            type="text"
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={storyLine}
            onChange={this.inputStateChange}
          />

          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            value={rating}
            onChange={this.inputStateChange}
          />

          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            value={genre}
            onChange={this.inputStateChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

          <button
            type="button"
            data-testid="send-button"
            onClick={() => this.saveMovie(this.state, onClick)}>Adicionar filme
          </button>

        </form>
      </div>
    );
  }
}

export default AddMovie;
