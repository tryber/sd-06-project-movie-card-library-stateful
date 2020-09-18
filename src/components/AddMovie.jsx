import React, { Component } from 'react';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input data-testid="subtitle-input" />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input data-testid="image-input" />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <textarea data-testid="rating-input" type="number" value={rating} onChange={this.handleChange} />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          <select>
            <textarea data-testid="genre-input" />
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
