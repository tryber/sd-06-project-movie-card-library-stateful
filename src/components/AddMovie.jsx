// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleChanges(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.handleChanges}
        />
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >Subtítulo</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={(this.handleChanges)}
          value={this.state.subtitle}
        />
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >Imagem</label>
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.handleChanges}
        />
        <label
          htmlFor="sinopse"
          data-testid="storyline-input-label"
        >Sinopse</label>
        <textarea
          type="text"
          id="sinopse"
          name="storyLine"
          data-testid="storyline-input"
          value={this.state.storyLine}
          onChange={this.handleChanges}
        />
        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >Avaliação</label>
        <input
          type="number"
          id="rating"
          name="rating"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.handleChanges}
        />
        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >Gênero</label>
        <select
          id="genre"
          data-testid="genre-input"
          name="genre"
          value={this.state.genre}
          onChange={this.handleChanges}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
