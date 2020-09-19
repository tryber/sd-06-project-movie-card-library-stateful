import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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
    const { id } = target;
    this.setState({ [id]: target.value });
  }
  render() {
    const onClick = this.props.onClick;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          type="text"
          id="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.handleChange}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          id="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.handleChange}
        />
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          id="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.handleChange}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <input
          type="textarea"
          id="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.handleChange}
        />
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          id="rating"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.handleChange}
        />
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          id="genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.handleChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.defaultProps = { onClick: {} };
AddMovie.propTypes = { onClick: PropTypes.func };
