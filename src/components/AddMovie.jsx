// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
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

  title() {
    return (
      <input
        data-testid="title-input" type="text" value={this.state.title}
        onChange={this.handleChange} name="title"
      />
    );
  }

  subtitle() {
    return (
      <input
        data-testid="subtitle-input" type="text" value={this.state.subtitle}
        onChange={this.handleChange} name="subtitle"
      />
    );
  }

  image() {
    return (
      <input
        data-testid="image-input" type="text" value={this.state.imagePath}
        onChange={this.handleChange} name="imagePath"
      />
    );
  }

  story() {
    return (
      <textarea
        data-testid="storyline-input" value={this.state.storyline}
        onChange={this.handleChange} name="storyline"
      />
    );
  }

  rating() {
    return (
      <input
        data-testid="rating-input" type="number" value={this.state.rating}
        onChange={this.handleChange} name="rating"
      />
    );
  }

  genre() {
    return (
      <select name="genre" data-testid="genre-input" onChange={this.handleChange}>
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }

  saveButton() {
    return (
      <button data-testid="send-button" onClick={this.handleClick} type="submit">
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">Título</label>
        {this.title()}
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
        {this.subtitle()}
        <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
        {this.image()}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        {this.story()}
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
        {this.rating()}
        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
        {this.genre()}
        {this.saveButton()}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
