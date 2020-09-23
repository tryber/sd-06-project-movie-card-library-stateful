import React, { Component } from 'react';
import propTypes from 'prop-types';

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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick } = this.props;
    event.preventDefault();
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
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">Título</label>

          <input
            type="text"
            data-testid="title-input"
            onChange={this.setState.title}
          />

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>

          <input
            type="text"
            subtitle={this.state.subtitle}
            onChange={this.setState.subtitle}
            data-testid="subtitle-input"
          />

          <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>

          <input
            type="text"
            data-testid="image-input"
            imagePath={this.state.imagePath}
            onChange={this.setState.imagePath}
          />

          <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>

          <input
            type="textarea"
            data-testid="storyline-input"
            storyline={this.state.storyline}
            onChange={this.setState.storyline}
          />

          <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>

          <input
            type="number"
            rating={this.state.rating}
            data-testid="rating-input"
            onChange={this.setState.rating}
          />

          <select
            data-testid="genre-input"
            genre={this.state.genre}
            onChange={this.setState.genre}
          >
            <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>

          <button
            data-testid="send-button"
            onClick={this.handleClick}
            type="submit"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: propTypes.func.isRequired };
export default AddMovie;
