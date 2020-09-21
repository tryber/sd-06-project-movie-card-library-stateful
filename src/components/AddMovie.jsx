// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.sendButton = this.sendButton.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;

    this.setState({ [name]: target.value });
  }

  sendButton() {
    const { onClick } = this.props;

    onClick(this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">

          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              data-testid="title-input"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              data-testid="subtitle-input"
              onChange={this.handleChange}
              value={this.state.subtitle}
            />
          </label>

          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              data-testid="image-input"
              onChange={this.handleChange}
              value={this.state.imagePath}
            />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              cols="30"
              rows="5"
              name="storyLine"
              onChange={this.handleChange}
              value={this.state.storyLine}
            />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              data-testid="rating-input"
              onChange={this.handleChange}
              value={this.state.rating}
            />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              name="genre"
              onChange={this.handleChange}
              value={this.state.genre}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>

          <button
            type="submit"
            data-testid="send-button"
            onClick={this.sendButton}
          >
            Adicionar filme
          </button>

        </form>
      </div>
    );
  }
}

export default AddMovie;
