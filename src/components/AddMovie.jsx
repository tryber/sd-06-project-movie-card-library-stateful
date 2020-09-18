import React from 'react';

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
      genre: 'action'
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderTitleInput() {
    return (
      <input
        data-testid="title-input"
        type="text"
        id="titleInput"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
      />
    );
  }

  renderSubtitleInput() {
    return (
      <input
        data-testid="subtitle-input"
        type="text"
        id="subtitleInput"
        name="subtitle"
        value={this.state.subtitle}
        onChange={this.handleChange}
      />
    );
  }

  renderImageInput() {
    return (
      <input
        data-testid="image-input"
        type="text"
        id="imageInput"
        name="imagePath"
        value={this.state.imagePath}
        onChange={this.handleChange}
      />
    );
  }

  renderStorylineInput() {
    return (
      <input
        data-testid="storyline-input"
        type="text"
        id="storylineInput"
        name="storyline"
        value={this.state.storyline}
        onChange={this.handleChange}
      />
    );
  }

  renderRatingInput() {
    return (
      <input
        data-testid="rating-input"
        type="number"
        id="ratingInput"
        name="rating"
        value={this.state.rating}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titleInput">
          Título
          {this.renderTitleInput()}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
          Subtítulo
          {this.renderSubtitleInput()}
        </label>
        <label data-testid="image-input-label" htmlFor="imageInput">
          Imagem
          {this.renderImageInput()}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storylineInput">
          Sinopse
          {this.renderStorylineInput()}
        </label>
        <label data-testid="rating-input-label" htmlFor="ratingInput">
          Avaliação
          {this.renderRatingInput()}
        </label>
      </form>
    );
  }
}

export default AddMovie;
