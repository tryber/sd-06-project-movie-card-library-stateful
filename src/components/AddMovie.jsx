import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.upateStatus = this.upateStatus.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  upateStatus({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
    console.log(target.name.value);
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.stat({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">Título
            <input
              id="title" name="title" onChange={this.upateStatus}
              value={this.state.title} type="text" data-testid="title-input"
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
            <input
              id="subtitle" name="subtitle" type="text" data-testid="subtitle-input"
              onChange={this.upateStatus} value={this.state.subtitle}
            />
          </label>
          <label htmlFor="img" data-testid="image-input-label">Imagem
            <input
              id="img" name="imagePath" type="text" data-testid="image-input"
              onChange={this.upateStatus} value={this.state.imagePath}
            />
          </label>
          <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse
            <textarea
              id="sinopse" name="storyline" data-testid="storyline-input"
              onChange={this.upateStatus} value={this.state.storyline}
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação
            <input
              id="rating" name="rating" type="number" data-testid="rating-input"
              onChange={this.upateStatus} value={this.state.rating}
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">Gênero
            <select
              id="genre" name="genre" data-testid="genre-input"
              onChange={this.upateStatus} value={this.state.genre}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
        <button data-testid="send-button" onClick={this.resetState}>Adicionar filme</button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
