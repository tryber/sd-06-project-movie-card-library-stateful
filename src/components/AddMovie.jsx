import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
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
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSelect() {
    return (
      <select
        data-testid="genre-input" name="genre" value={this.state.genre}
        onChange={this.handleChange} className="inputTxt"
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }

  handleAddMovie() {
    this.props.onClick(this.state);
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
    return (
      <div>
        <form data-testid="add-movie-form" className="containerSearchBar">
          <label data-testid="title-input-label" htmlFor="title" className="label">Título
            <input
              data-testid="title-input" type="text" name="title" value={this.state.title}
              onChange={this.handleChange} className="inputTxt"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle" className="label">Subtítulo
            <input
              data-testid="subtitle-input" type="text" name="subtitle" value={this.state.subtitle}
              onChange={this.handleChange} className="inputTxt"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath" className="label">Imagem
            <input
              data-testid="image-input" type="text" name="imagePath" value={this.state.imagePath}
              onChange={this.handleChange} className="inputTxt"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline" className="label">Sinopse
            <textarea
              data-testid="storyline-input" type="textarea" name="storyline"
              value={this.state.storyline} onChange={this.handleChange} className="inputTxt"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating" className="label">Avaliação
            <input
              data-testid="rating-input" type="number" name="rating" value={this.state.rating}
              onChange={this.handleChange} className="inputTxt"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre" className="label">Gênero
            {this.handleSelect()}
          </label>
          <button
            type="button" data-testid="send-button" onClick={this.handleAddMovie}
            className="btnAddMovie"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
