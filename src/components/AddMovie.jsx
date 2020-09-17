import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    //  this.handleClick = this.handleClick.bind(this);

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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form htmlFor="this-form" data-testid="add-movie-form">
        <label htmlFor="this-form" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </label>
        <label htmlFor="this-form" data-testid="subtitle-input-label">
        Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={this.handleChange}
            value={this.state.subtitle}
            type="text"
            name="subtitle"
          />
        </label>
        <label htmlFor="this-form" data-testid="image-input-label">
        Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            onChange={this.handleChange}
            value={this.state.imagePath}
          />
        </label>
        <label htmlFor="this-form" data-testid="storyline-input-label">Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="this-form" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            onChange={this.handleChange}
            value={this.state.rating}
            type="number"
            name="rating"
          />
        </label>
        <label htmlFor="this-form" data-testid="genre-input-label">
          Gênero
          <select
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleChange}
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button"onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
