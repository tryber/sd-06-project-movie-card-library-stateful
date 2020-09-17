import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.newState = this.newState.bind(this);
    this.newRating = this.newRating.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  newState({ target }, stateKey) { // target = alteredValue
    this.setState({ [stateKey]: target.value });
  }

  newRating({ target }, stateKey) {
    this.setState({ [stateKey]: Number(target.value) });
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

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
        Título
          <input
            type="text"
            value={title}
            id="title"
            data-testid="title-input"
            onChange={(alteredValue) => this.newState(alteredValue, 'title')}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
          <input
            type="text"
            value={subtitle}
            id="subtitle"
            data-testid="subtitle-input"
            onChange={(alteredValue) => this.newState(alteredValue, 'subtitle')}
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
          <input
            type="text"
            value={imagePath}
            id="imagePath"
            data-testid="image-input"
            onChange={(alteredValue) => this.newState(alteredValue, 'imagePath')}
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
          <textarea
            value={storyline}
            id="storyline"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={(alteredValue) => this.newState(alteredValue, 'storyline')}
          />
        </label>
        <label htmlFor="rate" data-testid="rating-input-label">
        Avaliação
          <input
            type="number"
            id="rate"
            value={rating}
            data-testid="rating-input"
            onChange={(alteredValue) => this.newRating(alteredValue, 'rating')}
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
          <select data-testid="genre-input" value={genre} id="genre" onChange={(alteredValue) => this.newState(alteredValue, 'genre')}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={() => onClick(this.reset())}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
