import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

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

  submit(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          type="text"
          data-testid="title-input"
          name="title"
          value={title}
          onChange={this.handleChange}
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
          id="subtitle"
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagepath" data-testid="image-input-label">
        Imagem
        <input
          id="imagepath"
          data-testid="image-input"
          name="imagePath"
          value={imagePath}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderSinopse() {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="sinopse"
          data-testid="storyline-input"
          name="storyline"
          value={storyline}
          onChange={this.handleChange}
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
          id="rating"
          type="number"
          data-testid="rating-input"
          name="rating"
          value={rating}
          onChange={this.handleChange}
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
          id="genre"
          data-testid="genre-input"
          name="genre"
          value={genre}
          onChange={this.handleChange}
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImage()}
        {this.renderSinopse()}
        {this.renderRating()}
        {this.renderGenre()}
        <button data-testid="send-button" onClick={this.props.submit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default AddMovie;
