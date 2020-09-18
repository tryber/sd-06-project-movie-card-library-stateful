import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImagePathInput = this.renderImagePathInput.bind(this);
    this.renderStorylineInput = this.renderStorylineInput.bind(this);
    this.renderRatingInput = this.renderRatingInput.bind(this);
    this.renderGenreSelect = this.renderGenreSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickAction = this.clickAction.bind(this);

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

  renderStorylineInput() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          onChange={this.handleChange}
          type="text"
          value={this.state.storyline}
        />
      </label>
    );
  }

  renderRatingInput() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          onChange={this.handleChange}
          type="number"
          value={this.state.rating}
        />
      </label>
    );
  }

  renderGenreSelect() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select data-testid="genre-input" name="genre" onChange={this.handleChange}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  clickAction() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  renderAddMovieBtn() {
    return(
      <button data-testid="send-button" onClick={this.clickAction}>Adicionar filme</button>
    )
  }

  render() {
    return (
      <section id="add-movie-section">
        <form data-testid="add-movie-form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderRatingInput()}
          {this.renderGenreSelect()}
        </form>
        {this.renderAddMovieBtn()}
      </section>

    );
  }

}

export default AddMovie;
