import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            <p>Título</p>
            <input id="title" data-testid="title-input" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <div>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">
              <p>Subtítulo</p>
              <input id="subtitle" data-testid="subtitle-input" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="img" data-testid="image-input-label">
              <p>Imagem</p>
              <input id="img" data-testid="image-input" name="imagePath" value={this.state.imagePath} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="storyline" data-testid="storyline-input-label">
              <p>Sinopse</p>
              <textarea id="storyline" data-testid="storyline-input" name="storyline" value={this.state.storyline} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="rating" data-testid="rating-input-label">
              <p>Avaliação</p>
              <input type="number" id="rating" step="0.1" data-testid="rating-input" name="rating" value={this.state.rating} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="select" data-testid="genre-input-label">
              <p>Gênero</p>
              <select id="rating" data-testid="genre-input" name="genre" value={this.state.genre} onChange={this.handleChange}>
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
              </select>
            </label>
          </div>
          <button type="submit" data-testid="send-button" onClick={onClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: propTypes.func.isRequired };

export default AddMovie;
