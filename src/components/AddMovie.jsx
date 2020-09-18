import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.renderButton = this.renderButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClickButton() {
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

  renderInputLabelTitle() {
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input-label">
        Título:
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleOnChange}
          data-testid="title-input"
          id="title-input-label"
        />
        </label>
      </div>
    );
  }

  renderInputLabelSublitle() {
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
        Subtítulo:
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleOnChange}
          data-testid="subtitle-input"
          id="subtitle-input-label"
        />
        </label>
      </div>
    );
  }

  renderInputLabelImagePath() {
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input-label">
        Imagem:
        <input
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.handleOnChange}
          data-testid="image-input"
          id="image-input-label"
        />
        </label>
      </div>
    );
  }

  renderInputLabelStoryline() {
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
        Sinopse:
        <textarea
          name="storyline"
          value={this.state.storyline}
          onChange={this.handleOnChange}
          data-testid="storyline-input"
          id="storyline-input-label"
        />
        </label>
      </div>
    );
  }

  renderInputLabelRating() {
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">
        Avaliação:
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.handleOnChange}
          data-testid="rating-input"
          id="rating-input-label"
        />
        </label>
      </div>
    );
  }

  renderGenreOption() {
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
        Gênero:
        <select
          name="genre"
          value={this.state.genre}
          onChange={this.handleOnChange}
          data-testid="genre-input"
          id="genre-input-label"
        >
          <option value="action" data-testid="genre-option"> Ação </option>
          <option value="comedy" data-testid="genre-option"> Comédia </option>
          <option value="thriller" data-testid="genre-option"> Suspense </option>
        </select>
        </label>
      </div>
    );
  }

  renderButton() {
    return (
      <div>
        <button data-testid="send-button" onClick={this.handleClickButton}>
        Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">

        {this.renderInputLabelTitle()}
        {this.renderInputLabelSublitle()}
        {this.renderInputLabelImagePath()}
        {this.renderInputLabelStoryline()}
        {this.renderInputLabelRating()}
        {this.renderGenreOption()}
        {this.renderButton()}

      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;
export default AddMovie;
