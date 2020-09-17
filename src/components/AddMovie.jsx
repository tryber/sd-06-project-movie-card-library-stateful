import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título
          <input
              data-testid="title-input"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="subtitle-input-label">Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="image-input-label">Imagem
            <input
              data-testid="image-input"
              type="text"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="storyline-input-label">Sinopse
            <textarea
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="rating-input-label">Avaliação
            <input
              data-testid="rating-input"
              type="number"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="genre-input-label">Gênero
            <select data-testid="genre-input" value={this.state.genre} onChange={this.handleChange} />
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </label>
          <button data-testid="send-button" onClick={this.resetMovies} >Adicionar filme</button>
        </form>
      </div>
    )
  }
}

export default AddMovie;
