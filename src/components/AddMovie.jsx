import React from 'react';
import propTypes from 'prop-types';
import Labels from './Labels';
import Selecionar from './SelecionarMovie.jsx'

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
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
      <form className="SearchBar" data-testid="add-movie-form">
        <div className="labels">
          <Labels />
        </div>
        <div className="inputs">
          <input className="tipoInput" data-testid="title-input" name="title"
          onChange={this.handleChange} value={title} />
          <input className="tipoInput" data-testid="subtitle-input" name="subtitle"
          onChange={this.handleChange} value={subtitle} />
          <input className="tipoInput" data-testid="image-input" name="imagePath"
          onChange={this.handleChange} value={imagePath} />
          <textarea className="tipoInput" data-testid="storyline-input" name="storyline"
          onChange={this.handleChange} value={storyline} />
          <input className="tipoInput" data-testid="rating-input" name="rating"
          type="number" onChange={this.handleChange} value={rating} />
          <Selecionar value={genre} onChange={this.handleChange} />
        </div>
        <button className="btnAdicionar" data-testid="send-button" type="submit" onClick={this.handleClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: propTypes.func.isRequired };

export default AddMovie;
