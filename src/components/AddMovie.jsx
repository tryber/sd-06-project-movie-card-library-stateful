import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderInputsOne() {
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse
        <input
          type="textarea"
          data-testid="storyline-input"
          name="storyline"
          value={this.state.storyline}
          onChange={this.handleChange}
        />
        </label>
      </div>
    );
  }

  renderInputs() {
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={this.state.rating}
          onChange={this.handleChange}
        />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.handleChange}
        />
        </label>
      </div>
    );
  }
  renderSelect() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}
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
        <label htmlFor="title-input" data-testid="title-input-label">Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        </label>
        {this.renderInputsOne()}
        {this.renderInputs()}
        {this.renderSelect()}
        <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
