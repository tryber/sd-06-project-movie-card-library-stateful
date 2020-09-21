import PropTypes from 'prop-types';
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

  onClick({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onChange}
          />
        </label>
        <br />
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            onChange={this.onChange}
          />
        </label>
        <br />
        <label data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            onChange={this.onChange}
          />
        </label>
        <br />
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.onChange}
          />
        </label>
        <br />
        <label data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={this.state.rating}
            onChange={this.onChange}
          />
        </label>
        <br />
        <label data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.onChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
