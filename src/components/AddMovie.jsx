import React from 'react';
import PropTypes from 'prop-types';

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

  refreshState() {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }, onClick);
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          onChange={this.handleChange}
          name="title"
          value={title}
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={this.handleChange}
          name="subtitle"
          value={subtitle}
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
          data-testid="image-input"
          onChange={this.handleChange}
          name="imagePath"
          value={imagePath}
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
          data-testid="storyline-input"
          onChange={this.handleChange}
          name="storyline"
          value={storyline}
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          onChange={this.handleChange}
          name="rating"
          value={rating}
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={genre}
          onChange={this.handleChange}
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderStoryline()}
        {this.renderImage()}
        {this.renderRating()}
        {this.renderGenre()}

        <button type="button" data-testid="send-button" onClick={() => this.refreshState()}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
