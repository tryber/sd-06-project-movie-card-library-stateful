
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
  }

  handleChange(data) {
    const { state } = this;
    const { name } = data.target;
    state[name] = data.target.value;
    this.setState({ state });
  }

  addMovie(event) {
    event.preventDefault();
    const { movies } = this.props;
    movies.push(event);
    this.setState({ movies });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addMovie}>
          <label data-testid="title-input-label">Título</label>
          <input value={this.props.title} type="text" name="title" data-testid="title-input" onChange={this.handleChange} />
          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input name="subtitle" value={this.state.subtitle} type="text" onChange={this.handleChange} data-testid="subtitle-input" />
          <label data-testid="image-input-label">Imagem</label>
          <input name="imagePath" value={this.state.imagePath} type="text" onChange={this.handleChange} data-testid="image-input" />
          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea data-testid="storyline-input" name="storyline" value={this.state.storyline} type="text" onChange={this.handleChange} />
          <label data-testid="rating-input-label">Avaliação</label>
          <input name="rating" data-testid="rating-input" value={this.state.rating}type="number" onChange={this.handleChange} />
          <label data-testid="genre-input-label">Gênero</label>
          <select data-testid="select-input" value={this.state.genre} onChange={this.genreChanger}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button type="submit" data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.string.isRequired,
};
