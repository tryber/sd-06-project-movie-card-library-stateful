import React from 'react';
import propTypes from 'prop-types';

class SearchbarSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input-label" data-testid="select-input-label">
        Filtrar por gênero
        <div>
          <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>
      </label>
    );
  }
}

SearchbarSelect.propTypes = { selectedGenre: propTypes.bool.isRequired };
SearchbarSelect.propTypes = { onSelectedGenreChange: propTypes.func.isRequired };

export default SearchbarSelect;
