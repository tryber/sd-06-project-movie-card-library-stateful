import React from 'react';

class AddMovie extends React.Component {
  constructor () {
    super()
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    }
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título
          <input data-testid="title-input" type="text" value={this.state.title} />
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input data-testid="subtitle-input" type="text" value={this.state.subtitle} />
        </label>
        <label data-testid="image-input-label">Imagem
          <input data-testid="image-input" type="text" value={this.state.imagePath} />
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <input data-testid="storyline-input" type="textarea" value={this.state.storyline} />
        </label>
        <label data-testid="rating-input-label">Avaliação
          <input data-testid="rating-input" type="number" value={this.state.rating} />
        </label>
        <label htmlFor="select-options" data-testid="genre-input-label">Gênero
          <select data-testid="genre-input" id="select-options" value={this.state.genre} >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
