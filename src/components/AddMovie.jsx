import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }

  handleClick(callback) {
    callback(this.state);

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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const cFunc = this.handleChange;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">Título</label>
        <input data-testid="title-input" name="title" value={title} onChange={cFunc} />
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
        <input data-testid="subtitle-input" name="subtitle" value={subtitle} onChange={cFunc} />
        <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
        <input data-testid="image-input" name="imagePath" value={imagePath} onChange={cFunc} />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        <textarea data-testid="storyline-input" name="storyline" value={storyline} onChange={cFunc} />
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
        <input data-testid="rating-input" type="number" name="rating" value={rating} onChange={cFunc} />
        <label data-testid="genre-input-label" htmlFor="genre-input" >Gênero</label>
        <select data-testid="genre-input" name="genre" value={genre} onChange={cFunc} >
          <option data-testid="genre-option" value="action" >Ação</option>
          <option data-testid="genre-option" value="comedy" >Comédia</option>
          <option data-testid="genre-option" value="thriller" >Suspense</option>
        </select>
        <button data-testid="send-button" onClick={() => {this.handleClick(onClick)}} >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}

AddMovie.defaultProps = {
  onClick: 'Callback',
}

export default AddMovie;
