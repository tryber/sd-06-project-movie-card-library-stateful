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
          <input type="text" name="" id="title-input" data-testid="title-input" />

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
          <input type="text" name="" id="subtitle-input" data-testid="subtitle-input" />

          <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
          <input type="text" name="" id="image-input" data-testid="image-input" />

          <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
          <input type="text" name="" id="storyline-input" data-testid="storyline-input" />

          <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
          <input type="text" name="" id="rating-input" data-testid="rating-input" />
        </form>
      </div>
    );
  }
}

export default AddMovie;
