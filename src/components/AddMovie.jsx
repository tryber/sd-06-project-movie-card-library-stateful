
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
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

  handleChange(name, e) {
    this.setState({ [name]: e.target.value });
  }

  callBack() {
    const { onClick } = this.props;
    onClick(this.state);
    console.log(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });// desgraça de uma callback
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form id="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input value={this.state.title} type="text" id="title-input" name="title" data-testid="title-input" onChange={(e) => this.handleChange('title', e)} />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
            Subtítulo
            <input name="subtitle" id="subtitle-input" value={this.state.subtitle} type="text" onChange={(e) => this.handleChange('subtitle', e)} data-testid="subtitle-input" />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input-label">
            Imagem
            <input name="imagePath" id="image-input" value={this.state.imagePath} type="text" onChange={(e) => this.handleChange('imagePath', e)} data-testid="image-input" />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
            Sinopse
            <textarea data-testid="storyline-input" id="storyline-input" name="storyline" value={this.state.storyline} type="text" onChange={(e) => this.handleChange('storyline', e)} />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input-label">
            Avaliação
            <input name="rating" id="rating-input" data-testid="rating-input" value={this.state.rating} type="number" onChange={(e) => this.handleChange('rating', e)} />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input-label">
            Gênero
            <select name="genre" id="select-input" data-testid="select-input" value={this.state.genre} onChange={(e) => this.handleChange('genre', e)}>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>

          <button
            type="button"
            data-testid="send-button"
            onClick={() => this.callBack(this.state, onClick)}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
