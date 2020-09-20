import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="input" data-testid="title-input-label">Título
            <input
              id="input"
              data-testid="title-input"
              type="text"
              name="title"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
            <input
              id="subtitle"
              data-testid="subtitle-input"
              type="text"
              name="subtitle"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">Imagem
            <input
              id="imagePath"
              data-testid="image-input"
              type="text"
              name="imagePath"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
            <input
              id="storyline"
              data-testid="storyline-input"
              type="text"
              name="storyline"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação
            <input
              id="rating"
              data-testid="rating-input"
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">Gênero
            <select
              id="genre"
              data-testid="genre-input"
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
