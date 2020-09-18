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
    this.atualiza = this.atualiza.bind(this);
    this.buttonTroca = this.buttonTroca.bind(this);
  }

  /*
  atualiza(event) {
      const { name, value } = event.target;
      this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
    }

    buttonTroca(event) {
      event.preventDefault();
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
  */
  rendererTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
      Título
        <input
          data-testid="title-input"
          type="text"
          value={this.state.title}
          onChange={this.atualiza}
        />
      </label>
    );
  }

  rendererSubTitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={this.state.subtitle}
          onChange={this.atualiza}
        />
      </label>
    );
  }

  rendererimageInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
      Imagem
        <input
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
          onChange={this.atualiza}
        />
      </label>
    );
  }

  rendererStoryLineInput() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
      Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          value={this.state.storyline}
          onChange={this.atualiza}
        />
      </label>
    );
  }

  rendererRatingInput() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
          onChange={this.atualiza}
        />
      </label>
    );
  }

  rendererGenreInput() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
      Gênero
        <select
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.atualiza}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.rendererTitleInput()}
        {this.rendererSubTitleInput()}
        {this.rendererimageInput()}
        {this.rendererStoryLineInput()}
        {this.rendererRatingInput()}
        {this.rendererGenreInput()}
      </form>
    );
  }
}

export default AddMovie;
