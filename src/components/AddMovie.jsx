import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    });
  }

  subtitulo() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
       Subtítulo
        <input
          value={subtitle}
          name="subtitle"
          onChange={this.handle}
          data-testid="subtitle-input"
          type="text"
        />
      </label>
    );
  }

  title() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
       Título
        <input
          value={title}
          name="title"
          onChange={this.handle}
          data-testid="title-input"
          type="text"
        />
      </label>
    );
  }

  image() {
    const { image } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
        <input
          value={image}
          name="imagePath"
          onChange={this.handle}
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }

  sinopse() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          value={storyline}
          name="storyline"
          onChange={this.handle}
          data-testid="storyline-input"
          type="text"
        />
      </label>
    );
  }

  classificacao() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          value={rating}
          name="rating"
          onChange={this.handle}
          data-testid="rating-input"
          type="number"
        />
      </label>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={genre}
          onChange={this.handle}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  button() {
    return (
      <button onClick={this.handleClick} type="submit" data-testid="send-button">
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.title()}
        {this.subtitulo()}
        {this.image()}
        {this.sinopse()}
        {this.classificacao()}
        {this.genre()}
        {this.button()}
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
