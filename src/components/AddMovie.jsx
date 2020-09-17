import React from 'react';
import PropTypes from 'prop-types';
import AddInput from './AddInput';
import AddSelect from './AddSelect';

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

    this.handleTextInput = this.handleTextInput.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  handleTextInput({ target }) {
    this.setState({ [target.id]: target.value });
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
          <AddInput
            id="title" label="Título" inputType="text" testid="title-input"
            callback={this.handleTextInput} value={this.state.title}
          />
          <AddInput
            id="subtitle" label="Subtítulo" inputType="text" testid="subtitle-input"
            callback={this.handleTextInput} value={this.state.subtitle}
          />
          <AddInput
            id="imagePath" label="Imagem" inputType="text" testid="image-input"
            callback={this.handleTextInput} value={this.state.imagePath}
          />
        </fieldset>
        <fieldset>
          <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
            <textarea
              id="storyline" value={this.state.storyline} data-testid="storyline-input"
              onChange={this.handleTextInput}
            />
          </label>
        </fieldset>
        <fieldset>
          <AddInput
            id="rating" label="Avaliação" inputType="number" testid="rating-input"
            callback={this.handleTextInput} value={this.state.rating}
          />
          <AddSelect
            id="genre" value={this.state.genre} callback={this.handleTextInput}
            label="Gênero" testid="genre-input" optionId="genre-option" options={[
              ['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense'],
            ]}
          />
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
