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

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    },
    );
    return this.props.onClick();
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="form" data-testid="title-input-label"> Título
            <input
              data-testid="title-input" type="text" name="title"
              value={this.state.title} onChange={this.handleChange}
            />
          </label>
          <label htmlFor="form" data-testid="subtitle-input-label"> Subtítulo
            <input
              data-testid="subtitle-input" type="text"
              name="subtitle" value={this.state.subtitle} onChange={this.handleChange}
            />
          </label>
          <label htmlFor="form" data-testid="image-input-label"> Imagem
            <input
              type="text" data-testid="image-input" name="imagePath"
              value={this.state.imagePath} onChange={this.handleChange}
            />
          </label>
          <label htmlFor="form" data-testid="storyline-input-label"> Sinopse
            <textarea
              data-testid="storyline-input" name="storyline"
              value={this.state.storyline} onChange={this.handleChange}
            />
          </label>
          <label htmlFor="form" data-testid="rating-input-label"> Avaliação
            <input
              data-testid="rating-input" type="number"
              name="rating" value={this.state.rating} onChange={this.handleChange}
            />
          </label>
          <label htmlFor="form" data-testid="genre-input-label"> Gênero
            <select
              data-testid="genre-input" type="select" value={this.state.genre}
              name="genre" onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
