// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeNumber = this.handleChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
    // this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  newMovie(event) {
  // newMovie() {
    event.preventDefault();
    // const { onClick } = this.props;
    // onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    // return this.props.onClick(this.state);
  }

  render() {
    return (
      <div>
        <section>
          <form data-testid="add-movie-form">
            <label htmlFor="title-input" data-testid="title-input-label"> Título </label>
            <input
              id="title-input"
              name="title"
              data-testid="title-input"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="subtitle-input" data-testid="subtitle-input-label"> Subtítulo </label>
            <input
              id="subtitle-input"
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
            <label htmlFor="image-input" data-testid="image-input-label"> Imagem </label>
            <input
              id="image-input"
              name="imagePath"
              data-testid="image-input"
              type="text"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
            <label htmlFor="storyline-input" data-testid="storyline-input-label"> Sinopse </label>
            <textarea
              id="storyline-input"
              name="storyline"
              data-testid="storyline-input"
              // maxLength="200"
              // rows="1"
              value={this.state.storyline}
              onChange={this.handleChange}
            />
            <label htmlFor="rating-input" data-testid="rating-input-label"> Avaliação </label>
            <input
              id="rating-input"
              name="rating"
              data-testid="rating-input"
              type="number"
              value={this.state.rating}
              onChange={this.handleChange}
            />
            <label htmlFor="genre-option" data-testid="genre-input-label" > Gênero </label>
            <select
              id="genre-option"
              data-testid="genre-input"
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action"> Ação </option>
              <option data-testid="genre-option" value="comedy"> Comédia </option>
              <option data-testid="genre-option" value="thriller"> Suspense </option>
            </select>
          </form>
          <button type="submit" onClick={this.newMovie}> Adicionar filme </button>
        </section>
      </div>
    );
  }
}
// onClick={this.newMovie}
// function setDefaultProps() {
//   return { onClick: this.onClick.bind(this) };
// }

// AddMovie.propTypes = { onClick: PropTypes.func };
// AddMovie.defaultProps = { onClick: setDefaultProps };

export default AddMovie;
