import React from 'react';
import PropTypes from 'prop-types';
import AddInput from './AddInput';
import AddSelect from './AddSelect';
import AddTxt from './AddTextarea';

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

    this.hdInput = this.hdInput.bind(this);
    this.cbkHandler = this.cbkHandler.bind(this);
  }

  hdInput({ target }) {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddInput id="title" label="Título" inputType="text"
          callback={this.hdInput} value={title} />
        <AddInput id="subtitle" label="Subtítulo" inputType="text"
          callback={this.hdInput} value={subtitle} />
        <AddInput id="imagePath" label="Imagem" inputType="text"
          callback={this.hdInput} value={imagePath} />
        <AddTxt id="storyline" label="Sinopse" callback={this.hdInput} value={storyline} />
        <AddInput
          id="rating" label="Avaliação" inputType="number"
          callback={this.hdInput} value={rating} />
        <AddSelect
          id="genre" value={genre} callback={this.hdInput} label="Gênero" optionId="genre-option"
          options={[ ['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense'], ]}
        />
        <button type="button" data-testid="send-button" onClick={this.cbkHandler}>
          Adicionar filme</button>
      </form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
