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
    this.cbkHandler = this.cbkHandler.bind(this);
  }

  handleTextInput({ target }) {
    this.setState({ [target.id]: target.value });
  }

  cbkHandler() {
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
          <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
            <textarea
              id="storyline" value={this.state.storyline} data-testid="storyline-input"
              onChange={this.handleTextInput}
            />
          </label>
          <AddInput
            id="rating" label="Avaliação" inputType="number" testid="rating-input"
            callback={this.handleTextInput} value={this.state.rating}
          />
          <AddSelect
            id="genre" value={this.state.genre} callback={this.handleTextInput}
            label="Gênero" testid="genre-input" optionId="genre-option"
            options={[ ['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense'], ]}
          />
        <button type="button" data-testid="send-button" onClick={this.cbkHandler}>Adicionar filme</button>
      </form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
