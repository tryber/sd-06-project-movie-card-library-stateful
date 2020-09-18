import React from 'react';
import PropTypes from 'prop-types';

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
      storyLine: '',
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
    const { onClick: saveState } = this.props;
    const movie = this.state;

    saveState(movie);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }


  render() {
    const { title, rating, genre, subtitle, imagePath, storyLine } = this.state;

    return (
      <form className="add-movie">
        <h3>Adicione mais filmes</h3>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="" data-testid="title-input-label">Título</label>
            <input type="text" data-testid="title-input" name="title" value={title} onChange={this.handleInput} />
          </div>
          <div className="input-container">
            <label htmlFor="" data-testid="subtitle-input-label">Subtítulo</label>
            <input type="text" data-testid="subtitle-input" name="subtitle" value={subtitle} onChange={this.handleInput} />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="" data-testid="image-input-label">Imagem</label>
            <input type="text" data-testid="image-input" name="imagePath" value={imagePath} onChange={this.handleInput} />
          </div>
          <div className="input-container">
            <label htmlFor="" data-testid="genre-input-label">Gênero</label>
            <select data-testid="genre-input" name="genre" value={genre} onChange={this.handleInput}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </div>
        </div>

        <div className="textarea-container">
          <label htmlFor="" data-testid="storyline-input-label">Sinopse</label>
          <textarea type="text" data-testid="storyline-input" name="storyLine" value={storyLine} onChange={this.handleInput} />
        </div>
        <div className="input-container">
          <label htmlFor="" data-testid="rating-input-label">Avaliação</label>
          <input type="number" data-testid="rating-input" name="rating" value={rating} onChange={this.handleInput} />
        </div>

        <button type="submit" data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
