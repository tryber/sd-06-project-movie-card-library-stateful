import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.refreshTitle = this.refreshTitle.bind(this);
    this.refreshSubtitle = this.refreshSubtitle.bind(this);
    this.refreshImage = this.refreshImage.bind(this);
    this.refreshStoryline = this.refreshStoryline.bind(this);
    this.refreshRating = this.refreshRating.bind(this);
    this.button = this.button.bind(this);
    this.refreshGenre = this.refreshGenre.bind(this);
  }

  refreshTitle(event) {
    this.setState({title: event.target.value})
  }

  refreshSubtitle(event) {
    this.setState({subtitle: event.target.value})
  }

  refreshImage(event) {
    this.setState({imagePath: event.target.value})
  }

  refreshStoryline(event) {
    this.setState({storyline: event.target.value})
  }

  refreshRating(event) {
    this.setState({rating: event.target.value})
  }

  refreshGenre(event) {
    this.setState({genre: event.target.value})
  }

  button() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title" >
          Título
          <input type="text" name="title" value={this.state.title} data-testid="title-input" onChange={this.refreshTitle} id="title" />
        </label><br /><br />
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input id="subtitle" name="subtitle" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.refreshSubtitle} />
        </label><br /><br />
        <label data-testid="image-input-label" htmlFor="image-path">
          Imagem
          <input type="text" name="imagePath" id="image-path" value={this.state.imagePath} data-testid="image-input" onChange={this.refreshImage} />
        </label><br /><br />
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea id="storyline" name="storyline" data-testid="storyline-input" onChange={this.refreshStoryline} value={this.state.storyline} />
        </label><br /><br />
        <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
          <input type="number" id="rating" name="rating" value={this.state.rating} data-testid="rating-input" onChange={this.refreshRating} />
        </label><br /><br />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select id="genre" value={this.state.genre} data-testid="genre-input" name="genre" onChange={this.refreshGenre}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label><br /><br />
        <button data-testid="send-button" onClick={this.button}>Adicionar filme</button>
      </form>
    )
  }
}

AddMovie.propType = {
  onClick: PropTypes.func.isRequired
}

export default AddMovie;
