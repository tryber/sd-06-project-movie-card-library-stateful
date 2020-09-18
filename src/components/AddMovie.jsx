import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.button = this.button.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Title = this.Title.bind(this);
    this.Subtitle = this.Subtitle.bind(this);
    this.ImagePath = this.ImagePath.bind(this);
    this.Storyline = this.Storyline.bind(this);
    this.Rating = this.Rating.bind(this);
    this.Genre = this.Genre.bind(this);
    this.state = initialState;
  }

  button() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  Title() {
    return (
      <div>
        <label
          data-testid="title-input-label"
          htmlFor="title"
        >
          Título:
          <input
            data-testid="title-input"
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.button}
          />
        </label>
      </div>
    );
  }

  Subtitle() {
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle"
        >
          Subtítulo:
          <input
            data-testid="subtitle-input"
            id="subtitle"
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            onChange={this.button}
          />
        </label>
      </div>
    );
  }

  ImagePath() {
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="imagePath"
        >
          Imagem:
          <input
            data-testid="imagePath-input"
            id="imagePath"
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            onChange={this.button}
          />
        </label>
      </div>
    );
  }

  Storyline() {
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="storyline"
        >
          Sinopse
          <input
            data-testid="storyline-input"
            id="storyline"
            name="storyline"
            type="text"
            value={this.state.storyline}
            onChange={this.button}
          />
        </label>
      </div>
    );
  }

  Rating() {
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="rating"
        >
          Avaliação
          <input
            data-testid="rating-input"
            id="rating"
            name="rating"
            type="number"
            value={this.state.rating}
            onChange={this.button}
          />
        </label>
      </div>
    );
  }

  Genre() {
    return (
      <div>
        <label
          data-testid="genre-input-label"
          htmlFor="genre"
        >
          Gênero
          <select
            data-testid="genre-input-label"
            id="genre"
            name="genre"
            value={this.state.genre}
            onChange={this.button}
          >
            <option data-testid="genre-option" value="action" selected>Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.Title()}
          {this.Subtitle()}
          {this.ImagePath()}
          {this.Storyline()}
          {this.Rating()}
          {this.Genre()}
          <button
            data-testid="send-button"
            onClick={this.button}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propType = { onClick: PropTypes.func.isRequired };

export default AddMovie;
