// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  resetState() {
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }
  render() {
    return (
      <div className="add-movie">
        <form className="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">Título</label>
          <input data-testid="title-input" value={this.state.title} onChange={this.handleChange} />
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
          <input 
            data-testid="subtitle-input" value={this.state.subtitle} onChange={this.handleChange}
          />
          <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
          <input
            data-testid="image-input" value={this.state.imagePath} onChange={this.handleChange}
          />
          <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinópse</label>
          <textarea data-testid="storyline-input" value={this.state.storyline} onChange={this.handleChange} />
          <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
          <input
            data-testid="rating-input" value={this.state.rating} onChange={this.handleChange}
          />
          <label data-testid="genre-input-label" htmlFor="genre-option">Gênero</label>
          <select data-testid="genre-option">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button data-testid="send-button" onClick={this.addMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

function getDefaultProps() {
  return { onClick: this.onClick.bind(this) };
}

AddMovie.propTypes = { onClick: PropTypes.func };
AddMovie.defaultProps = { onClick: getDefaultProps };

export default AddMovie;
