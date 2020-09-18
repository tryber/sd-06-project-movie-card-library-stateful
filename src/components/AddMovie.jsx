import React from 'react';
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
    onClick();
    this.setState(this.baseState);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label data-testid="title-input-label">Título</label>
            <input
              data-testid="title-input"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label data-testid="subtitle-input-label">
              Subtítulo
              <input
                data-testid="subtitle-input"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label data-testid="image-input-label">
              Imagem
              <input
                data-testid="image-input"
                name="imagePath"
                value={this.state.imagePath}
                onChange={this.handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label data-testid="storyline-input-label">
              Sinopse
              <textarea
                data-testid="storyline-input"
                name="storyline"
                value={this.state.storyline}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label data-testid="rating-input-label">
              Avaliação
              <input
                data-testid="rating-input"
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
                type="number"
              />
            </label>
          </div>
          <div>
            <label data-testid="genre-input-label">
              Gênero
              <select
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

export default AddMovie;
