import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título:
            <input data-testid="title-input" id="title" name="title" type="text" 
              value={this.state.title} onChange={this.handleChange} />
          </label>    
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo:
            <input data-testid="subtitle-input" id="subtitle" name="subtitle" type="text"
              value={this.state.subtitle} onChange={this.handleChange} />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem:
            <input data-testid="imagePath-input" id="imagePath" name="imagePath" type="text"
              value={this.state.imagePath} onChange={this.handleChange} />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <input data-testid="storyline-input" id="storyline" name="storyline" type="text"
              value={this.state.storyline} onChange={this.handleChange} />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input data-testid="rating-input" id="rating" name="rating" type="number"
              value={this.state.rating} onChange={this.handleChange} />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
            <select data-testid="genre-input-label" id="genre" name="genre"
              value={this.state.genre} onChange={this.handleChange}>
            <option data-testid="genre-option" value="action" selected>Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button" type="button" 
            onClick={() => { 
              onClick(this.state);
              this.reset();
            }}/>

        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
