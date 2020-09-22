import React from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.AddMovie = this.AddMovie.bind(this);
    this.objTextarea = this.objTextarea.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleChange({ target }) {
    const key = target.id;
    const value = target.value;
    this.setState({ [key]: value });
  }
  AddMovie(onClick) {
    onClick(this.state);
    this.setState();
  }
  objTextarea() {
    return {
      id: "storyline",
      ty: "text",
      te: "storyline-input",
      on: this.handleChange,
      va: this.state.storyline,
    };
  }
  render() {
    const { onClick } = this.props;
    const textareaCodeClimatBug = {
      id: "storyline",
      ty: "text",
      te: "storyline-input",
      on: this.handleChange,
      va: this.state.storyline,
    };
    const { id, ty, te, on, va} = textareaCodeClimatBug;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              id="title"
              type="text"
              data-testid="title-input"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle"
              type="text"
              data-testid="subtitle-input"
              onChange={this.handleChange}
              value={this.state.subtitle}
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              id="imagePath"
              type="text"
              data-testid="image-input"
              onChange={this.handleChange}
              value={this.state.imagePath}
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea id={id} type={ty} data-testid={te} onChange={on} value={va}>              
            </textarea>
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              id="rating"
              type="number"
              data-testid="rating-input"
              onChange={this.handleChange}
              value={this.state.rating}
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre"
              data-testid="genre-input"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
        <button
          data-testid="send-button"
          onClick={() => this.AddMovie(onClick)}
        >Adicionar filme</button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
