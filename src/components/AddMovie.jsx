import React from 'react';
import PropTypes from 'prop-types';
import AddInput from './AddInput';
import AddInpNum from './AddInputNumber';
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
    this.btnHandler = this.btnHandler.bind(this);
  }

  hdInput({ target }) {
    const id = (target.id === 'image') ? 'imagePath' : target.id;
    this.setState({ [id]: target.value });
  }

  btnHandler() {
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
    const genreOptions = [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']];
    const handler = this.hdInput;
    return (
      <form data-testid="add-movie-form" id="add-movie-form">
        <AddInput id="title" label="Título" callback={handler} value={title} />
        <AddInput id="subtitle" label="Subtítulo" callback={handler} value={subtitle} />
        <AddInput id="image" label="Imagem" callback={handler} value={imagePath} />
        <AddTxt id="storyline" label="Sinopse" callback={handler} value={storyline} />
        <AddInpNum id="rating" label="Avaliação" callback={handler} value={rating} />
        <AddSelect
          id="genre" value={genre} callback={handler} label="Gênero" optionId="genre-option"
          options={genreOptions}
        />
        <button type="button" data-testid="send-button" onClick={this.btnHandler}>
          Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
