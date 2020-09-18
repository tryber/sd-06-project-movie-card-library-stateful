import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selects from './select';
import Inputs from './inputs';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

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
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick(callback) {
    callback(this.state);

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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const hand = this.handleChange;
    return (
      <form data-testid="add-movie-form">
        <Inputs title={'title'} text={'Título'} value={title} change={hand} />
        <Inputs title={'subtitle'} text={'Subtítulo'} value={subtitle} change={hand} />
        <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
        <input data-testid="image-input" name="imagePath" value={imagePath} onChange={hand} />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        <textarea
          data-testid="storyline-input" name="storyline" value={storyline} onChange={hand}
        />
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
        <input
          data-testid="rating-input" type="number" name="rating" value={rating} onChange={hand}
        />
        <Selects
          labTitle={'Gênero'} selectName={'genre'} selectValue={genre} change={hand}
          optValue={['action', 'comedy', 'thriller']} optTitle={['Ação', 'Comédia', 'Suspense']}
        />
        <button
          data-testid="send-button" onClick={() => { this.handleClick(onClick); }} >Adicionar filme
        </button>
      </form>
    )}
}

AddMovie.propTypes = { onClick: PropTypes.func };
AddMovie.defaultProps = { onClick: 'Callback' };

export default AddMovie;
