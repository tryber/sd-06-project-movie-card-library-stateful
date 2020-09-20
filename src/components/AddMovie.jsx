import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.GetGenreElement = this.GetGenreElement.bind(this);
    this.GetRatingElement = this.GetRatingElement.bind(this);
    this.GetStorylineElement = this.GetStorylineElement.bind(this);
    this.GetImageElement = this.GetImageElement.bind(this);
    this.GetSubtitleElement = this.GetSubtitleElement.bind(this);
    this.GetTitleElement = this.GetTitleElement.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeState({ target }) {
    const { name, value } = target;
    /* target.type === 'checkbox'
      ? this.setState({ [name]: target.checked })
      : this.setState({ [name]: value }); */
    this.setState(target.type === 'checkbox'
      ? { [name]: target.checked }
      : { [name]: value });
  }

  GetTitleElement() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">Título
        <input
          id="title-input"
          data-testid="title-input"
          type="text"
          name="title"
          value={title}
          onChange={this.changeState}
        />
      </label>
    );
  }

  GetSubtitleElement() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          onChange={this.changeState}
        />
      </label>
    );
  }

  GetImageElement() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">Imagem
        <input
          id="imagePath"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.changeState}
        />
      </label>
    );
  }

  GetGenreElement() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-dropdown">
        Gênero
        <select
          id="genre-dropdown"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.changeState}
        >
          <option data-testid="genre-option" value="">Todos</option>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  GetStorylineElement() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
        <input
          id="storyline"
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={this.state.storyline}
          onChange={this.changeState}
        />
      </label>
    );
  }

  GetRatingElement() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">Avaliação
        <input
          id="rating"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={this.changeState}
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <this.GetTitleElement /> <br />
        <this.GetSubtitleElement /> <br />
        <this.GetImageElement /> <br />
        <this.GetStorylineElement /> <br />
        <this.GetRatingElement /> <br />
        <this.GetGenreElement />
        <button
          data-testid="send-button"
          onClick={onClick}
        >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
  /* subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}; */

export default AddMovie;
