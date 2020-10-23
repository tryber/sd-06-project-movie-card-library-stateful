import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // genre: 'action',
      imagePath: '',
      rating: 0,
      storyline: '',
      subtitle: '',
      title: '',
    };
    this.onChangeEvent = this.onChangeEvent.bind(this);
  }

  onChangeEvent({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title } = this.state;
    const { imagePath } = this.state;
    const { storyline } = this.state;
    const { rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            name="title"
            onChange={this.onChangeEvent}
            type="text"
            value={title}
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            onChange={this.onChangeEvent}
            type="text"
            value={subtitle}
          />
        </label>

        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            onChange={this.onChangeEvent}
            type="text"
            value={imagePath}
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <input
            data-testid="storyline-input"
            name="storyline"
            onChange={this.onChangeEvent}
            type="text"
            value={storyline}
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            onChange={this.onChangeEvent}
            type="number"
            value={rating}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
