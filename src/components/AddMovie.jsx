import React from 'react';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: "",
      rating: 0,
      imagePath: '',
      genre: '',
    };
  }
}

  handle({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
        Título
          <input
            value={this.title}
            name="title"
            onChange={this.handleChange}
            data-testid="title-input"
            type="text"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
          <input
            value={this.subtitle}
            name="subtitle"
            onChange={this.handleChange}
            data-testid="subtitle-input"
            type="text"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
          <input
            value={this.image}
            name="imagePath"
            onChange={this.handleChange}
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
         Sinopse
          <input
            value={this.storyline}
            name="storyline"
            onChange={this.handleChange}
            data-testid="storyline-input"
            type="text"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
         Avaliação
          <input
            value={this.rating}
            name="rating"
            onChange={this.handleChange}
            data-testid="rating-input"
            type="text"
          />
        </label>
      </form>
    );
  }

exports default AddMovie;
