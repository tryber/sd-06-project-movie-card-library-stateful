import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.setState = {
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

  handleChange(event) {
    const { name, value } = event.target;
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
    const { onClick } = this.props;
    const { title, subtitle, rating, imagePath, storyline, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Titulo
            <input
              data-testid="title-input"
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="img" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              id="img"
              value={imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              data-testid="storyline-input"
              type="text"
              id="storyline"
              value={storyline}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="rating">
            Avaliação
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            <select
              data-testid="genre-input"
              id="genre"
              value={genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={this.handleClick}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
