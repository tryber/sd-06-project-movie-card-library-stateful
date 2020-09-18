import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
    this.button = this.button.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.title = this.title.bind(this);
    this.subtitle = this.subtitle.bind(this);
    this.imagePath = this.imagePath.bind(this);
    this.storyline = this.storyline.bind(this);
    this.rating = this.rating.bind(this);
    this.genre = this.genre.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  button() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={() => {
          onClick(this.state);
          this.reset();
        }}
      >
        Adicionar filme
      </button>
    );
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  title() {
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

  subtitle() {
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

  imagePath() {
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

  storyline() {
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

  rating() {
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

  genre() {
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
          {this.title()}
          {this.subtitle()}
          {this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          {this.button()}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
