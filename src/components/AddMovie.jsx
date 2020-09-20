import React from 'react';
import PropTypes from 'prop-types';

import Input from './formComponents/Input';
import TextArea from './formComponents/Textarea';
import GenreSelect from './formComponents/GenreSelect';

import '../styles/addMovie.css';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInput({ target }) {
    const { name, value, type } = target;

    if (type === 'number') {
      if (Number(value) < 0 || Number(value) > 5) {
        this.setState({ [name]: 0 });
      } else {
        this.setState({ [name]: Number(value) });
      }
      return;
    }

    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const movie = this.state;

    onClick(movie);

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
    const { title, rating, genre, subtitle, imagePath, storyline } = this.state;

    return (
      <form className="add-movie" data-testid="add-movie-form">
        <h3>Adicione mais filmes</h3>
        <div className="input-group">
          <Input ctl={this.handleInput} state={title} text="Título" name="title" />
          <Input ctl={this.handleInput} state={subtitle} text="Subtítulo" name="subtitle" />
        </div>
        <div className="input-group">

          <Input
            ctl={this.handleInput}
            state={imagePath}
            text="Imagem"
            name="imagePath"
            testDesc="image"
          />
          <GenreSelect ctl={this.handleInput} state={genre} text="Gênero" name="genre" />

        </div>

        <TextArea ctl={this.handleInput} state={storyline} text="Sinopse" name="storyline" />

        <Input ctl={this.handleInput} state={rating} text="Avaliação" name="rating" type="number" />

        <button type="submit" data-testid="send-button" onClick={this.handleClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
