import React from 'react';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={title}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            name="imagePath"
            data-testid="image-input"
            value={imagePath}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <input
            name="storyline"
            data-testid="storyline-input"
            value={storyline}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={rating}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={genre}
            onChange={this.handleChanges}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="button"
          onClick={this.handleClick}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
