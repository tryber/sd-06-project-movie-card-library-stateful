import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  changeTitle(target) {
    this.setState({ title: target.value });
  }
  render() {
    const onClick = this.props.onClick;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">Título</label>
        <input
          type="text"
          id="titulo"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.changeTitle}
        />
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          id="subtitulo"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.changeTitle}
        />
        <label htmlFor="imagem" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          id="imagem"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.changeTitle}
        />
        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <input
          type="textarea"
          id="sinopse"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.changeTitle}
        />
        <label htmlFor="aval" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          id="aval"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.changeTitle}
        />
        <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
        <select id="genero" value={this.state.genre} data-testid="genre-input" onChange={this.changeTitle}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.defaultProps = { onClick: {} };
AddMovie.propTypes = { onClick: PropTypes.func };
