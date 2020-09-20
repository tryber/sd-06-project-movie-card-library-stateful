import React from 'react';
import PropTypes from 'prop-types';


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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    console.log('1', this.state);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }


  handleSubmit() {
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
      <div>
        <form data-testid="add-movie-form" onSubmit={this.handleSubmit}>
          <label data-testid="title-input-label" htmlFor="title">
Titulo
            <input
              data-testid="title-input"
              onChange={this.handleChange}
              value={title}
              name="title"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
Subtítulo
            <input
              data-testid="subtitle-input"
              value={subtitle}
              name="subtitle"
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
                    Sinopse
            <textarea
              data-testid="storyline-input"
              name="storyline"
              onChange={this.handleChange}
              value={storyline}

            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input">
                    Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              type="number"
              onChange={this.handleChange}
              value={rating}
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input">
                    Gênero
            <select
              data-testid="genre-input"
              name="genre"
              value={genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
ange
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <label data-testid="image-input-label" htmlFor="image">
Imagem
            <input
              value={imagePath}
              type="text"
              onChange={this.handleChange}
              name="image"
            />
          </label>
          <button data-testid="send-button" type="submit" onClick={this.handleSubmit}>
                    Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
