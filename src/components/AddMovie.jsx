import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
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
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  resetState() {
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  renderTitle() {
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">Título</label>
        <input
          type="text" value={this.state.title} data-testid="title-input"
          onChange={this.handleChange} name="title" id="title-input"
        />
      </div>
    );
  }

  renderSubtitle() {
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
        <input
          type="text" value={this.state.subtitle} data-testid="subtitle-input"
          onChange={this.handleChange} id="subtitle-input" name="subtitle"
        />
      </div>
    );
  }

  renderImage() {
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
        <input
          type="text" value={this.state.imagePath} data-testid="image-input"
          onChange={this.handleChange} id="image-input" name="imagePath"
        />
      </div>
    );
  }

  renderStoryline() {
    return (
      <div className="storyline-container">
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        <textarea
          type="text" value={this.state.storyline} data-testid="storyline-input"
          onChange={this.handleChange} id="storyline-input" name="storyline" rows="3"
        />
      </div>
    );
  }

  renderRating() {
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
        <input
          type="number" value={this.state.rating} data-testid="rating-input"
          onChange={this.handleChange} id="rating-input" name="rating"
        />
      </div>
    );
  }

  renderGenre() {
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
        <select
          value={this.state.genre} data-testid="genre-input"
          onChange={this.handleChange} id="genre-input" name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    );
  }

  renderAddMovieButton() {
    return (
      <div>
        <button data-testid="send-button" onClick={this.addMovie}>Adicionar filme</button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImage()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderGenre()}
        {this.renderAddMovieButton()}
      </form>
    );
  }
}

function getDefaultProps() {
  return { onClick: this.onClick.bind(this) };
}

AddMovie.propTypes = { onClick: PropTypes.func };

AddMovie.defaultProps = { onClick: getDefaultProps };

export default AddMovie;
