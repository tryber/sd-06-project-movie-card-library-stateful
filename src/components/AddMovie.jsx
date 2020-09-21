import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.newTitle = this.newTitle.bind(this);
    this.newSubTitle = this.newSubTitle.bind(this);
    this.newImage = this.newImage.bind(this);
    this.newStoryLine = this.newStoryLine.bind(this);
    this.newRating = this.newRating.bind(this);
    this.newGenre = this.newGenre.bind(this);
    this.clickButton = this.clickButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  newTitle({ target }) {
    this.setState({ title: target.value });
  }

  newSubTitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  newImage({ target }) {
    this.setState({ imagePath: target.value });
  }

  newStoryLine({ target }) {
    this.setState({ storyline: target.value });
  }

  newRating({ target }) {
    this.setState({ rating: target.value });
  }

  newGenre({ target }) {
    this.setState({ genre: target.value });
  }

  clickButton(event) {
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
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
          <input
            type="text" value={this.state.title}
            data-testid="title-input" onChange={this.newTitle}
          />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
            Subtítulo
          <input
            type="text" value={this.state.subtitle}
            data-testid="subtitle-input" onChange={this.newSubTitle}
          />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input-label">
            Imagem
          <input
            type="text" value={this.state.imagePath}
            data-testid="image-input" onChange={this.newImage}
          />
          </label>
          <label
            data-testid="storyline-input-label"
            htmlFor="storyline-input-label"
          >
            Sinopse
          <textarea
            value={this.state.storyline} data-testid="storyline-input" onChange={this.newStoryLine}
          />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input-label">
            Avaliação
          <input
            type="number" value={this.state.rating}
            data-testid="rating-input" onChange={this.newRating}
          />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input-label">
            Gênero
            <select value={this.state.genre} data-testid="genre-input" onChange={this.newGenre}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={this.clickButton}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
