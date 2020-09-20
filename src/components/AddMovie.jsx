// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handle = this.handle.bind(this);
    this.Title = this.Title.bind(this);
    this.SubTitle = this.SubTitle.bind(this);
    this.Image = this.Image.bind(this);
    this.Storyline = this.Storyline.bind(this);
    this.Rating = this.Rating.bind(this);
    this.Genre = this.Genre.bind(this);
    this.Film = this.Film.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handle({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  Title() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text" name="title"
          value={this.state.title}
          onChange={this.handle}
        />
      </label>
    );
  }

  SubTitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text" name="subtitle"
          value={this.state.subtitle}
          onChange={this.handle}
        />
      </label>
    );
  }

  Image() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          type="text" name="imagePath"
          value={this.state.imagePath}
          onChange={this.handle}
        />
      </label>
    );
  }

  Storyline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text" name="storyline"
          value={this.state.storyline}
          onChange={this.handle}
        />
      </label>
    );
  }

  Rating() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number" name="rating"
          value={this.state.rating}
          onChange={this.handle}
        />
      </label>
    );
  }

  Genre() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={this.state.genre}
          onChange={this.handle}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  Film() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }


  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.Title()}
          {this.SubTitle()}
          {this.Image()}
          {this.Storyline()}
          {this.Rating()}
          {this.Genre()}
          <button
            type="button"
            data-testid="send-button"
            onClick={this.Film}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
