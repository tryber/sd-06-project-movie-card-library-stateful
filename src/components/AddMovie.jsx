import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleFormInputsChange = this.handleFormInputsChange.bind(this);
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    };
  }

  handleFormInputsChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleAddMovieClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    });
  }

  showTitleInput() {
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleFormInputsChange}
          data-testid="title-input"/>
      </div>
    );
  }

  showSubtitleInput() {
    return (
      <div>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={this.state.subtitle}
          onChange={this.handleFormInputsChange}
          data-testid="subtitle-input"
        />
      </div>
    );
  }

  showImageInput() {
    return (
      <div>
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={this.state.imagePath}
          onChange={this.handleFormInputsChange}
          data-testid="image-input"
        />
      </div>
    );
  }

  showStorylineInput() {
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={this.state.storyline}
          onChange={this.handleFormInputsChange}
          data-testid="storyline-input">
        </textarea>
      </div>
    );
  }

  showRatingInput() {
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={this.state.rating}
          onChange={this.handleFormInputsChange}
          data-testid="rating-input"
        />
      </div>
    );
  }

  showSelectGenreInput() {
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          name="genre"
          id="genre"
          value={this.state.genre}
          onChange={this.handleFormInputsChange}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    );
  }

  showAddMovieButton() {
    return (
      <button data-testid="send-button" onClick={this.handleAddMovieClick}>Adicionar filme</button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.showTitleInput()}
        {this.showSubtitleInput()}
        {this.showImageInput()}
        {this.showStorylineInput()}
        {this.showRatingInput()}
        {this.showSelectGenreInput()}
        {this.showAddMovieButton()}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
