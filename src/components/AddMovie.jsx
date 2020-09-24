
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    // this.addMovie = this.addMovie.bind(this);
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
    this.setState({ [name]: e.target.value }, () => console.log('state', this.state));
  }

  teste() {
    const { onClick } = this.props;
    onClick(this.state); // desgraça de uma callback
    console.log('console log addmovie');
  }

  render() {
    return (
      <div>
        <form>
          <label data-testid="title-input-label">
            Título
            <input value={this.props.title} type="text" name="title" data-testid="title-input" onChange={(e) => this.handleChange('title', e)} />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input name="subtitle" value={this.state.subtitle} type="text" onChange={(e) => this.handleChange('subtitle', e)} data-testid="subtitle-input" />
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input name="imagePath" value={this.state.imagePath} type="text" onChange={(e) => this.handleChange('imagePath', e)} data-testid="image-input" />
          </label>


          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea data-testid="storyline-input" name="storyline" value={this.state.storyline} type="text" onChange={(e) => this.handleChange('storyline', e)} />
          <label data-testid="rating-input-label">Avaliação</label>
          <input name="rating" data-testid="rating-input" value={this.state.rating} type="number" onChange={(e) => this.handleChange('rating', e)} />
          <label data-testid="genre-input-label">Gênero</label>
          <select name="genre" data-testid="select-input" value={this.state.genre} onChange={(e) => this.handleChange('genre', e)}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

          <button type="button" data-testid="send-button" onClick={() => this.teste()}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
