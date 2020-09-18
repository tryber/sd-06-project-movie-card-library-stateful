import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);
    this.reset = this.reset.bind(this);
    this.add = this.add.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  add(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.reset();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title" value={title} data-testid="title-input" onChange={this.changeHandler}
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle" value={subtitle} data-testid="subtitle-input" onChange={this.changeHandler}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            name="imagePath" value={imagePath} data-testid="image-input" onChange={this.changeHandler}
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline" value={storyline} data-testid="storyline-input" onChange={this.changeHandler}
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            type="number" name="rating" value={rating} data-testid="rating-input" onChange={this.changeHandler}
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select
            name="genre" value={genre} data-testid="genre-input" onChange={this.changeHandler}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.add} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
