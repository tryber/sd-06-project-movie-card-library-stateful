import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
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
    const value = target.value;
    this.setState({ [name]: value });
  }

  resetState() {
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
    // const { onClick, resetState } = this.props
    return (
      <form data-testid="add-movie-form" >
        <label htmlFor="title-input" data-testid="title-input-label">Título</label>
        <input
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
          data-testid="title-input"
          type="text"
        />
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          value={this.state.subtitle}
          name="subtitle"
          onChange={this.handleChange}
          data-testid="subtitle-input"
        />
        <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
        <input
          value={this.state.imagePath}
          name="imagePath"
          data-testid="image-input"
          onChange={this.handleChange}
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          name="storyline"
          value={this.state.storyline}
          onChange={this.handleChange}
          data-testid="storyline-input"
        />
        <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
        <input
          value={this.state.rating}
          onChange={this.handleChange}
          name="rating"
          data-testid="rating-input"
          type="number"
        />
        <label htmlFor="genre-input" data-testid="genre-input-label">Gênero</label>
        <select
          name="genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={this.resetState} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
