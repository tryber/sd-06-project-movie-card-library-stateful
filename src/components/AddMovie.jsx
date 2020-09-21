import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.newState = this.newState.bind(this);
    this.newRating = this.newRating.bind(this);
    this.returnState = this.returnState.bind(this);
    this.newFavorite = this.newFavorite.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
      bookmarked: false,
    };
  }

  newState({ target }, stateKey) { // target = alteredValue
    this.setState({ [stateKey]: target.value });
  }

  newRating({ target }, stateKey) {
    this.setState({ [stateKey]: Number(target.value) });
  }

  newFavorite({ target }, stateKey) {
    if (target.value) {
      this.setState({ [stateKey]: true });
    } else {
      this.setState({ [stateKey]: false });
    }
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
      bookmarked: true,
    });
  }

  // if necessário para setar o estado, senão só retornaria o estado.
  returnState(event, myFunctReset) {
    const newState = this.state;
    if (event && myFunctReset) {
      this.setState(newState);
    }
    return newState;
  }

  renderTitle() {
    const { title } = this.state;
    return (
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
    );
  }

  renderSubTitle() {
    const { subtitle } = this.state;
    return (
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
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
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
    );
  }

  renderStoryline() {
    const { storyline } = this.state;
    return (
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
    );
  }

  renderRate() {
    const { rating } = this.state;
    return (
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
    );
  }

  renderGenero() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
        <select data-testid="genre-input" value={genre} id="genre" onChange={(alteredValue) => this.newState(alteredValue, 'genre')}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderFavorite() {
    const { bookmarked } = this.state;
    return (
      <label htmlFor="favorite" data-testid="bookmarked-input-label">
      Favorito
        <input
          type="checkbox"
          id="favorite"
          value={bookmarked}
          data-testid="bookmarked-input"
          onChange={(event) => this.newFavorite(event, 'bookmarked')}
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubTitle()}
        {this.renderImage()}
        {this.renderStoryline()}
        {this.renderRate()}
        {this.renderGenero()}
        {this.renderFavorite()}
        <button
          type="button"
          data-testid="send-button"
          onClick={(newState) => onClick(this.returnState(newState, this.reset()))}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
