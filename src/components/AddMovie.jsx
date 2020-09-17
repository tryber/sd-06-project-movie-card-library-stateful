import React from 'react';
import PropTypes from 'prop-types';
import AddInput from './AddInput';

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
  }

  handleTextInput({target}) {
    this.setState({[target.id]: target.value});
  }

  callbackHandler() {
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
          <AddInput id="title" label="Título" inputType="text" testid="title-input" callback={this.handleTextInput} value={this.state.title} />
          <AddMovieInput id="subtitle" label="Subtítulo" inputType="text" testid="subtitle-input" callback={this.handleTextInput} value={this.state.subtitle} />
          <AddInput id="imagePath" label="Imagem" inputType="text" testid="image-input" callback={this.handleTextInput} value={this.state.imagePath} />
        </fieldset>
        <fieldset>
          <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
            <textarea id="storyline" value={this.state.storyline} data-testid="storyline-input" onChange={this.handleTextInput} />
          </label>
        </fieldset>
        <fieldset>
          <AddInput id="rating" label="Avaliação" inputType="number" testid="rating-input" callback={this.handleTextInput} value={this.state.rating} />
          <label data-testid="genre-input-label" htmlFor="genre">Gênero</label>
            <select id="genre" value={this.state.genre} onChange={this.handleTextInput} data-testid="genre-input">
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
        </fieldset>
        <button type="button" data-testid="send-button" onClick={this.callbackHandler}>Adicionar filme</button>
      </form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
