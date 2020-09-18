import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">

        <label data-testid="title-input-label" htmlFor="input-text-title">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={title}
            onChange={this.handlerChange}
            id="input-text-title"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="input-text-subtitle">
        Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.handlerChange}
            id="input-text-subtitle"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="input-text-image">
        Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={imagePath}
            onChange={this.handlerChange}
            id="input-text-image"
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="input-textarea">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={storyline}
            onChange={this.handlerChange}
            id="input-textarea"
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="input-number">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={rating}
            onChange={this.handlerChange}
            id="input-number"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
