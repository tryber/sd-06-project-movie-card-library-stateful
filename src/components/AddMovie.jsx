import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  newMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <input
        type="text"
        name="title"
        value={title}
        onChange={this.handleChange}
        data-testid="title-input"
      />
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <input
        type="text"
        name="imagePath"
        value={imagePath}
        onChange={this.handleChange}
        data-testid="image-input"
      />
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <input
        type="text"
        name="subtitle"
        value={subtitle}
        onChange={this.handleChange}
        data-testid="subtitle-input"
      />
    );
  }

  inputStoryline() {
    const { storyline } = this.state;
    return (
      <textarea
        type="text"
        name="storyline"
        value={storyline}
        onChange={this.handleChange}
        data-testid="storyline-input"
      />
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <input
        type="number"
        name="rating"
        value={rating}
        onChange={this.handleChange}
        data-testid="rating-input"
      />
    );
  }

  selectGenre() {
    const { genre } = this.state;
    return (
      <select name="genre" value={genre} onChange={this.handleChange} data-testid="genre-input">
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título{this.inputTitle()}
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo{this.inputSubtitle()}
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem{this.inputImage()}
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse{this.inputStoryline()}
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação{this.inputRating()}
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero{this.selectGenre()}
          </label>
          <button onClick={this.newMovie} data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
