import React from 'react';
import PropTypes from 'prop-types';

class SelectAddMovie extends React.Component {
  render() {
    const { genre, handlerChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select data-testid="genre-input" selected value={genre} onChange={handlerChange}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>

    );
  }
}

SelectAddMovie.propTypes = {
  genre: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default SelectAddMovie;
