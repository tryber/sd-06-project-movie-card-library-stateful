import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onAddTitle = ({ target }) => this.setState({ title: target.value });
  onAddSubtitle = ({ target }) => this.setState({ subtitle: target.value });
  onAddImage = ({ target }) => this.setState({ imagePath: target.value });
  onAddStoryline = ({ target }) => this.setState({ storyline: target.value });
  onAddRating = ({ target }) => this.setState({ rating: target.value });
  onAddGenre = ({ target }) => this.setState({ genre: target.value });

  render() {
    return (
      <div className="add-movie-container">
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título:
            <input type="text" data-testid="title-input" value={this.state.title} onChange={this.onAddTitle} />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo:
            <input type="text" data-testid="subtitle-input" value={this.state.subtitle} onChange={this.onAddSubtitle} />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input">
            Imagem:
            <input type="text" data-testid="image-input" value={this.state.imagePath} onChange={this.onAddImage} />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            Sinopse:
            <textarea data-testid="storyline-input" value={this.state.storyline} onChange={this.onAddStoryline} />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação:
            <input type="number" data-testid="rating-input" value={this.state.rating} onChange={this.onAddRating} min="0" max="5" />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero:
            <select data-testid="genre-input" onChange={this.onAddGenre}>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button type="button" data-testid="send-button">Add Movie</button>
      </div>
    );
  }
}

export default AddMovie;
