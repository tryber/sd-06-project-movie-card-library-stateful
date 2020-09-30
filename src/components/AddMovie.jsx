import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'rating') {
      return this.setState({ [name]: Number(value) });
    }
    return this.setState({ [name]: value });
  }

  newState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  handleButton() {
    this.props.onClick(this.state);
    this.newState();
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          name="title"
          value={this.state.title}
          type="text"
          onChange={this.handleChange}
          data-testid="title-input"
        />

        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
          data-testid="subtitle-input"
        />

        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.handleChange}
          data-testid="image-input"
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          name="storyline"
          value={this.state.storyline}
          onChange={this.handleChange}
          data-testid="storyline-input"
        />

        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >
          Avaliação
        </label>
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}
          data-testid="rating-input"
        />

        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >Gênero</label>
        <select
          name="genre"
          htmlFor="genre-input"
          value={this.state.genre}
          onChange={this.handleChange}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button
          onClick={this.handleButton}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }

}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
