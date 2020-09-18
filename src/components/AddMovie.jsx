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
  }
  render() {
    return (
      <form
        data-testid="add-movie-form"
      >
        <label data-testid="title-input-label" htmlFor="title-id">Título</label>
        <input 
          type="text"
          data-testid="title-input"
          value={this.state.title}
          id="title-id"
        />

        <label data-testid="subtitle-input-label" htmlFor="subtitle-id">Subtítulo</label>
        <input 
          type="text"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          id="subtitle-id"
        />

        <label data-testid="image-input-label" htmlFor="image-id">Imagem</label>
        <input 
          type="text"
          data-testid="image-input"
          value={this.state.imagePath}
          id="image-id"
        />

        <label data-testid="storyline-input-label" htmlFor="storyline-id">Sinopse</label>
        <textarea
          data-testid="storyline-input"
          value={this.state.storyline}
          id="storyline-id"
        />

        <label data-testid="rating-input-label" htmlFor="rating-id">Avaliação</label>
        <input 
          type="number"
          data-testid="rating-input"
          value={this.state.rating}
          id="rating-id"
        />

        <label data-testid="genre-input-label" htmlFor="genre-id">Gênero</label>
        <select data-testid="genre-input" value={this.state.genre}>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
