import React from 'react';

import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.eventHandler = this.eventHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);


    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  eventHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Títulos
          <input
            data-testid="title-input"
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.eventHandler}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.eventHandler}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            id="image-input"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.eventHandler}
            data-testid="image-input"
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="sinopse"
            type="text"
            name="storyline"
            value={this.state.storyline}
            onChange={this.eventHandler}
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="avaliacao" data-testid="rating-input-label">
          Avaliação
          <input
            id="avaliacao"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.eventHandler}
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select name="genre"
            id="genero"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.eventHandler}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button onClick={this.handleClick} data-testid="send-button">Adicionar filme</button>

        </label>
      </form>
    );
  }

}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;

