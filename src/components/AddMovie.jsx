import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state ={
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTextInput = ({ target }) => {
    this.setState({[target.id]: target.value });
  }

  callbackHandler = () => {
    this.props.onClick(this.state);
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
    return (
      <form data-testid="add-movie-form">
        <fieldset>
          <label data-testid="title-input-label">
            Título
            <input type="text" id="title" value={this.state.title} data-testid="title-input" onChange={this.handleTextInput} />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" id="subtitle" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleTextInput} />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="image-input-label">
            Imagem
            <input type="text" id="imagePath" value={this.state.imagePath} data-testid="image-input" onChange={this.handleTextInput} />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea id="storyline" value={this.state.storyline} data-testid="storyline-input" onChange={this.handleTextInput} />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="rating-input-label">
            Avaliação
            <input type="number" id="rating" value={this.state.rating} data-testid="rating-input" onChange={this.handleTextInput} />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="genre-input-label">
            Gênero
            <select id="genre" value={this.state.genre} onChange={this.handleTextInput} data-testid="genre-input">
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </fieldset>
        <button type="button" data-testid="send-button" onClick={this.callbackHandler}>
          Adicionar filme
        </button>
      </form>
    )
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
