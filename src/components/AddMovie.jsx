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
    
    this.baseState = this.state;
    this.handleChanges = this.handleChanges.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  resetState(event) {
    event.preventDefault();
    this.setState(this.baseState);
    const { onClick } = this.props;
    onClick();
  }

  renderSelect() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input" name="genre"
          value={this.state.genre} onChange={this.handleChanges}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderInfos() {
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input" name="title" type="text"
            value={this.state.title} onChange={this.handleChanges}
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input" name="subtitle" type="text"
            value={this.state.subtitle} onChange={this.handleChanges}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input" name="imagePath" type="text"
            value={this.state.imagePath} onChange={this.handleChanges}
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form" onChange={this.handleChange}>
        {this.renderInfos()}
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input" name="storyline"
            value={this.state.storyline} onChange={this.handleChanges}
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input" name="rating" type="number"
            value={this.state.rating} onChange={this.handleChanges}
          />
        </label>
        {this.renderSelect()}
        <button
          data-testid="send-button" type="button"
          onClick={this.resetState}
        >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
