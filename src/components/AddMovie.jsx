// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value })
  }
  render() {
    const { onClick } = this.props
    return (
      <form
        data-testid="add-movie-form"
      >
        <label data-testid="title-input-label" htmlFor="title-id">Título</label>
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={this.state.title}
          id="title-id"
          onChange={this.onFieldChange}
        />

        <label data-testid="subtitle-input-label" htmlFor="subtitle-id">Subtítulo</label>
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          id="subtitle-id"
          onChange={this.onFieldChange}
        />

        <label data-testid="image-input-label" htmlFor="image-id">Imagem</label>
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={this.state.imagePath}
          id="image-id"
          onChange={this.onFieldChange}
        />

        <label data-testid="storyline-input-label" htmlFor="storyline-id">Sinopse</label>
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={this.state.storyline}
          id="storyline-id"
          onChange={this.onFieldChange}
        />

        <label data-testid="rating-input-label" htmlFor="rating-id">Avaliação</label>
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={this.state.rating}
          id="rating-id"
          onChange={this.onFieldChange}
        />

        <label data-testid="genre-input-label" htmlFor="genre-id">Gênero</label>
        <select
        data-testid="genre-input"
        value={this.state.genre}
        name="genre"
        onChange={this.onFieldChange}>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button onClick={onClick} data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
