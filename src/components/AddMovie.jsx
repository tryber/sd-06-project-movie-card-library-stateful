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
  }

  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">

          <label htmlFor="title-input" data-testid="title-input-label">Título</label>
          <input type="text" name="title" id="title-input" data-testid="title-input" />

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
          <input type="text" name="subtitle" id="subtitle-input" data-testid="subtitle-input" />

          <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
          <input type="text" name="image" id="image-input" data-testid="image-input" />

          <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
          <input type="text" name="storyline" id="storyline-input" data-testid="storyline-input" />

          <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
          <input type="number" name="" id="rating-input" data-testid="rating-input" />

          <label htmlFor="genre-input" data-testid="genre-input-label">Gênero</label>
          <select name="genre" id="genre-input" data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default AddMovie;
