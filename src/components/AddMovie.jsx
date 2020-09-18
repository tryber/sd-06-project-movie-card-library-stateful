import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.resetPropsValue = this.resetPropsValue.bind(this);
    this.inputChange = this.inputChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetPropsValue(event) {
    event.preventDefault();

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
      <fieldset data-testid="add-movie-form">
        <Title inputChange={this.inputChange} title={this.state.title} />
        <Subtitle inputChange={this.inputChange} subtitle={this.state.subtitle} />
        <Image inputChange={this.inputChange} imagePath={this.state.imagePath} />
        <Storyline inputChange={this.inputChange} storyline={this.state.storyline} />
        <Rating inputChange={this.inputChange} rating={this.state.rating} />
        <Select inputChange={this.inputChange} genre={this.state.genre} />
        <Button resetPropsValue={this.resetPropsValue} />
      </fieldset>
    );
  }
}

function Title(props) {
  return (
    <div>
      <label htmlFor="title" data-testid="title-input-label">Título</label>
      <input
        name="title" id="title" type="text" data-testid="title-input"
        onChange={props.inputChange} value={props.title}
      />
    </div>
  );
}

function Subtitle(props) {
  return (
    <div>
      <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
      <input
        name="subtitle" id="subtitle" type="text" data-testid="subtitle-input"
        onChange={props.inputChange} value={props.subtitle}
      />
    </div>
  );
}

function Image(props) {
  return (
    <div>
      <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
      <input
        name="imagePath" id="imagePath" type="text" data-testid="image-input"
        onChange={props.inputChange} value={props.imagePath}
      />
    </div>
  );
}

function Storyline(props) {
  return (
    <div>
      <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
      <input
        name="storyline" id="storyline" type="text" data-testid="storyline-input"
        onChange={props.inputChange} value={props.storyline}
      />
    </div>
  );
}

function Rating(props) {
  return (
    <div>
      <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
      <input
        name="rating" id="rating" type="number" data-testid="rating-input" defaultValue={0}
        onChange={props.inputChange} value={props.rating}
      />
    </div>
  );
}

function Select(props) {
  return (
    <div>
      <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
      <select
        name="genre" id="genre" data-testid="genre-input"
        onChange={props.inputChange} value={props.genre}
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </div>
  );
}

function Button(props) {
  return (
    <button data-testid="send-button" type="button" onClick={props.resetPropsValue}>
      Adicionar filme
    </button>
  );
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

Title.propTypes = {
  inputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Subtitle.propTypes = {
  inputChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Image.propTypes = {
  inputChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

Storyline.propTypes = {
  inputChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

Rating.propTypes = {
  inputChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

Select.propTypes = {
  inputChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

Button.propTypes = { resetPropsValue: PropTypes.func.isRequired };

export default AddMovie;
