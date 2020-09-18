import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImagePathInput = this.renderImagePathInput.bind(this);
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

    return (
      this.setState({ [name]: value })
    );
  }

  renderTitleInput() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          name="title"
          onChange={this.handleChange}
          type="text"
          value={this.state.title}
        />
      </label>
    );
  }

  renderSubtitleInput() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          onChange={this.handleChange}
          type="text"
          value={this.state.subtitle}
        />
      </label>
    );
  }

  renderImagePathInput() {
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          onChange={this.handleChange}
          type="text"
          value={this.state.imagePath}
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePathInput()}
      </form>
    );
  }

}

export default AddMovie;
