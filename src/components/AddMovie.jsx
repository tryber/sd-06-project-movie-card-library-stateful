import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
    this.bttn = this.bttn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  bttn(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.reset();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  title() {
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title"
      >
        Título:
        <input
          data-testid="title-input"
          id="title"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  subtitle() {
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle"
      >
        Subtítulo:
        <input
          data-testid="subtitle-input"
          id="subtitle"
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  imagePath() {
    return (
      <label
        data-testid="image-input-label"
        htmlFor="imagePath"
      >
        Imagem:
        <input
          data-testid="image-input"
          id="imagePath"
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  storyline() {
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline"
      >
        Sinopse
        <input
          data-testid="storyline-input"
          id="storyline"
          name="storyline"
          type="text"
          value={this.state.storyline}
          onChange={this.handleChange}
        />
        </label>
    );
  }

  rating() {
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating"
      >
        Avaliação
        <input
          data-testid="rating-input"
          id="rating"
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  genre() {
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre"
      >
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  button() {
    return (
      <div>
        <button
          data-testid="send-button"
          onClick={this.bttn}
        >
        Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.title()}
        {this.subtitle()}
        {this.imagePath()}
        {this.storyline()}
        {this.rating()}
        {this.genre()}
        {this.button()}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
