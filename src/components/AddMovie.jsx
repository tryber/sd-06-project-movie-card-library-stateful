import React from 'react';
import PropTypes from 'prop-types';

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
    this.change = this.change.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  change(evento) {
    const { name, value } = evento.target;
    this.setState({ [name]: value });
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="select" data-testid="genre-input-label">Gênero
        <select
          id="select" data-testid="genre-input" name="genre"
          value={genre}
          onChange={this.change}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título
          <input
            id="title" data-testid="title-input" type="text" name="title"
            value={title}
            onChange={this.change}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
          <input
            data-testid="subtitle-input" type="text" name="subtitle" id="subtitle"
            value={subtitle}
            onChange={this.change}
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem
          <input
            id="imagePath" data-testid="image-input" type="text" name="imagePath"
            value={imagePath}
            onChange={this.change}
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
          <input
            data-testid="storyline-input" type="textarea" name="storyline" id="storyline"
            onChange={this.change}
            value={storyline}
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação
          <input
            id="rating" data-testid="rating-input" type="number" name="rating"
            value={rating}
            onChange={this.change}
          />
        </label>
        {this.renderSelect()}
        <button type="submit" onClick={this.addMovie} data-testid="send-button">Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
