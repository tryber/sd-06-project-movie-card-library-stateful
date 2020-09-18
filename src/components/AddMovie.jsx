// implement AddMovie component here
import React, { Component } from 'react';

const titleInput = { onChange: 'AddMovie.setState(title)' };
const subTitleInput = { onChange: 'AddMovie.setState(subtitle)' };
const imageInput = { onChange: 'AddMovie.setState(imagePath)' };
const storylineInput = { onChange: 'AddMovie.setState(storyline)' };
const ratingInput = {
  type: 'number',
  onChange: 'AddMovie.setState(rating)',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <div className="add-movie">
        <section className="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">Título</label>
          <input data-testid="title-input" {...titleInput} />
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
          <input data-testid="subtitle-input" {...subTitleInput} />
          <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
          <input data-testid="image-input" {...imageInput} />
          <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinópse</label>
          <textarea data-testid="storyline-input" {...storylineInput} />
          <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
          <input data-testid="rating-input" {...ratingInput} />
          <label data-testid="genre-input-label" htmlFor="genre-option">Gênero</label>
          <select data-testid="genre-option">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button data-testid="send-button">Adicionar filme</button>
        </section>
      </div>
    );
  }
}

export default AddMovie;
