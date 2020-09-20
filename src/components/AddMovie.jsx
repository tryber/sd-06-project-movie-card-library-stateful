// implement AddMovie component here
import React from 'react';
import propTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label"
          htmlFor="title-input">Título</label>
        <input data-testid="title-input" name="title"
          onChange={this.handleChange} value={title}
        />
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
        <input data-testid="subtitle-input" name="subtitle"
          onChange={this.handleChange} value={subtitle}
        />
        <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
        <input data-testid="image-input" name="imagePath"
          onChange={this.handleChange} value={imagePath}
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        <textarea data-testid="storyline-input" name="storyline" onChange={this.handleChange} value={storyline} />
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
        <input data-testid="rating-input" name="rating"
          type="number" onChange={this.handleChange} value={rating}
        />
        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
        <select data-testid="genre-input" name="genre" value={genre} onChange={this.handleChange}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button type="button" data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: propTypes.func.isRequired };

export default AddMovie;
