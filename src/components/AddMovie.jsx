// import { render } from 'enzyme';
// implement AddMovie component here
import React from 'react';
// import SearchBar from './SearchBar';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.eventHandler = this.eventHandler.bind(this);

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

  render() {
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.eventHandler}
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.eventHandler}
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image" data-testid="title-input-label">
          Imagem
          <input
            id="image"
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
            data-testid="storyline-input-label"
          />
        </label>
        <label htmlFor="avaliacao" data-testid="rating-input-label">
          Avaliação
          <textarea
            id="avaliacao"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.eventHandler}
            data-testid="rating-input-label"
          />
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select id="genero" value="genre" data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button onClick={this.eventHandler} data-testid="send-button">Adicionar filme</button>

        </label>
      </form>
    );
  }

}

export default AddMovie;

