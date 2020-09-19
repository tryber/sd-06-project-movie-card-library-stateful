import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label htmlFor="title-id" data-testid="title-input-label">Título</label>
            <input
              id="title-id"
              data-testid="title-input"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="subtitle-id" data-testid="subtitle-input-label">
              Subtítulo
              <input
                id="subtitle-id"
                data-testid="subtitle-input"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="image-id" data-testid="image-input-label">
              Imagem
              <input
                id="image-id"
                data-testid="image-input"
                name="imagePath"
                value={this.state.imagePath}
                onChange={this.handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="textarea-id" data-testid="storyline-input-label">
              Sinopse
              <textarea
                id="textarea-id"
                data-testid="storyline-input"
                name="storyline"
                value={this.state.storyline}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-id" data-testid="rating-input-label">
              Avaliação
              <input
                id="rating-id"
                data-testid="rating-input"
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
                type="number"
              />
            </label>
          </div>
          <div>
            <label htmlFor="select-id" data-testid="genre-input-label">
              Gênero
              <select
                id="select-id"
                name="genre"
                data-testid="genre-input"
                value={this.state.genre}
                onChange={this.handleChange}
              >
                <option data-testid="genre-option" value="action">
                  Ação
                </option>
                <option data-testid="genre-option" value="comedy">
                  Comédia
                </option>
                <option data-testid="genre-option" value="thriller">
                  Suspense
                </option>
              </select>
            </label>
            <ButtonAddMovie resetState={this.resetState} />
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
